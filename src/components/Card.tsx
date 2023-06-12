import { FC } from 'react';

const Card: FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="https://picsum.photos/200/300" alt="ChitChat Logo" />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            ChitChat
          </div>
          <div className="text-sm text-gray-500">
            <a href="#" className="hover:underline">
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;