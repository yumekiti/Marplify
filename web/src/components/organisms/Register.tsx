import { ChangeEvent, useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { viewSlice } from '../../features/view';
import { fetchInstance } from '../../libs/fetchInstance';

import Modal from '../templates/Modal';

const Component: FC = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>('');

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleCloseClick = () => {
    dispatch(viewSlice.actions.toggleRegisterModal());
  };

  const handleLoginClick = () => {
    if (password !== confirmPassword) {
      setMessage('パスワードが一致しません');
      return;
    }

    fetchInstance()
      .post('/api/auth/register', {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          setMessage('登録が完了しました');
        }
      })
      .catch(() => {
        setMessage('登録に失敗しました');
      });
  };

  return (
    <Modal text='登録' handleClick={handleCloseClick}>
      <div className='flex flex-col justify-center items-center gap-4 mb-12'>
        <div className='flex flex-col justify-center items-start'>
          <p className='text-headline font-bold'>ユーザー名</p>
          <input
            type='text'
            className='w-64 h-8 rounded-md border border-gray-300 px-1'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className='flex flex-col justify-center items-start'>
          <p className='text-headline font-bold'>メールアドレス</p>
          <input
            type='text'
            className='w-64 h-8 rounded-md border border-gray-300 px-1'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='flex flex-col justify-center items-start'>
          <p className='text-headline font-bold'>パスワード</p>
          <input
            type='password'
            className='w-64 h-8 rounded-md border border-gray-300 px-1'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className='flex flex-col justify-center items-start'>
          <p className='text-headline font-bold'>パスワード確認</p>
          <input
            type='password'
            className='w-64 h-8 rounded-md border border-gray-300 px-1'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <button className='w-64 h-8 rounded-md bg-icons-tertiary text-white font-bold' onClick={handleLoginClick}>
          登録
        </button>
        <p className='text-icons-tertiary text-sm mt-10 ml-4'>&nbsp;{message}</p>
      </div>
    </Modal>
  );
};

export default Component;
