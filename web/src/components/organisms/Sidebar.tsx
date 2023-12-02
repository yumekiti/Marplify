import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { userSlice } from '../../features/user';

import Navigation from '../molecules/Navigation';
import UserPanel from '../molecules/UserPanel';
import SidebarToggle from '../molecules/SidebarToggle';

import { fetchInstanceWithToken } from '../../libs/fetchInstance';

const Component = () => {
  const dispatch = useDispatch();

  const { sidebar } = useSelector((state: RootState) => state.view);
  const { username, email, token } = useSelector((state: RootState) => state.user);
  const isLogin = token ? true : false;

  if (token && !username && !email) {
    fetchInstanceWithToken(token)
      .get('/users/me')
      .then((res) => {
        if (res.status === 200) {
          dispatch(userSlice.actions.setUsername(res.data.username));
          dispatch(userSlice.actions.setEmail(res.data.email));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div
      className={`flex flex-col bg-cardBackground py-4 px-2 h-full border-r border-subheadline relative transition-all duration-200 ${
        sidebar ? 'w-1/6' : 'w-20'
      }`}
    >
      {isLogin && <UserPanel sidebar={sidebar} username={username} email={email} />}
      <Navigation sidebar={sidebar} isLogin={isLogin} />
      <SidebarToggle sidebar={sidebar} />
    </div>
  );
};

export default Component;
