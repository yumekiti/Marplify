// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import { list } from '@keystone-6/core';
import { allowAll, denyAll } from '@keystone-6/core/access';

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-6/core/fields';

// the document field is a more complicated field, so it has it's own package
import { document } from '@keystone-6/fields-document';
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import type { Lists } from '.keystone/types';

export type Session = {
  id: string
  admin: boolean
  moderator: null | { id: string }
  contributor: null | { id: string }
}

type Has<T, K extends keyof T> = {
  [key in keyof T]: key extends K ? Exclude<T[key], null | undefined> : T[key];
}

function isAdmin<T extends Session> (session?: T): session is T & { admin: true } {
  return session?.admin === true
}
function isModerator<T extends Session> (session?: T): session is Has<T, 'moderator'> {
  return session?.moderator !== null
}
function isContributor<T extends Session> (session?: T): session is Has<T, 'contributor'> {
  return session?.contributor !== null
}

function forUsers<T> ({
  admin,
  moderator,
  contributor,
  default: _default,
}: {
  admin?: ({ session }: { session: Session & { admin: true } }) => T
  moderator?: ({ session }: { session: Has<Session, 'moderator'> }) => T
  contributor?: ({ session }: { session: Has<Session, 'contributor'> }) => T
  default: () => T
}) {
  return ({ session }: { session?: Session }): T => {
    if (!session) return _default()
    if (admin && isAdmin(session)) return admin({ session })
    if (moderator && isModerator(session)) return moderator({ session })
    if (contributor && isContributor(session)) return contributor({ session })
    return _default()
  }
}

const adminOnly = forUsers({
  admin: allowAll,
  default: denyAll,
})

const moderatorsOrAbove = forUsers({
  admin: allowAll,
  moderator: allowAll,
  default: denyAll,
})

export const lists: Lists = {
  User: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,

    // this is the fields for our User list
    fields: {
      // by adding isRequired, we enforce that every User should have a name
      //   if no name is provided, an error will be displayed
      name: text({ validation: { isRequired: true } }),

      email: text({
        validation: { isRequired: true },
        // by adding isIndexed: 'unique', we're saying that no user can have the same
        // email as another user - this may or may not be a good idea for your project
        isIndexed: 'unique',
      }),

      password: password({ validation: { isRequired: true } }),

      // we can use this field to see what Slides this User has authored
      //   more on that in the Slide list below
      slides: relationship({ ref: 'Slide.author', many: true }),

      createdAt: timestamp({
        // this sets the timestamp to Date.now() when the user is first created
        defaultValue: { kind: 'now' },
      }),
    },
  }),

  Slide: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: {
      operation: {
        query: moderatorsOrAbove,
        create: adminOnly,
        update: moderatorsOrAbove,
        delete: adminOnly,
      }
    },

    // this is the fields for our Slide list
    fields: {
      title: text({ validation: { isRequired: true } }),

      // the document field can be used for making rich editable content
      //   you can find out more at https://keystonejs.com/docs/guides/document-fields
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),

      // with this field, you can set a User as the author for a Slide
      author: relationship({
        // we could have used 'User', but then the relationship would only be 1-way
        ref: 'User.slides',

        // this is some customisations for changing how this will look in the AdminUI
        ui: {
          displayMode: 'cards',
          cardFields: ['name', 'email'],
          inlineEdit: { fields: ['name', 'email'] },
          linkToItem: true,
          inlineConnect: true,
        },

        // a Slide can only have one author
        //   this is the default, but we show it here for verbosity
        many: false,
      }),

      // with this field, you can add some Tags to Slides
      tags: relationship({
        // we could have used 'Tag', but then the relationship would only be 1-way
        ref: 'Tag.slides',

        // a Slide can have many Tags, not just one
        many: true,

        // this is some customisations for changing how this will look in the AdminUI
        ui: {
          displayMode: 'cards',
          cardFields: ['name'],
          inlineEdit: { fields: ['name'] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ['name'] },
        },
      }),
    },
  }),

  // this last list is our Tag list, it only has a name field for now
  Tag: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,

    // setting this to isHidden for the user interface prevents this list being visible in the Admin UI
    ui: {
      isHidden: true,
    },

    // this is the fields for our Tag list
    fields: {
      name: text(),
      // this can be helpful to find out all the Slides associated with a Tag
      slides: relationship({ ref: 'Slide.tags', many: true }),
    },
  }),
};
