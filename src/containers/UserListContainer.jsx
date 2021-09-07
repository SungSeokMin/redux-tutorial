import axios from 'axios';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserList from '../components/UserList';
import { getUsersStart, getUsersSuccess, getUsersFail } from '../redux/action';

const UserListContainer = () => {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  const getUsers = useCallback(async () => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get('https://api.github.com/users');
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
};

export default UserListContainer;
