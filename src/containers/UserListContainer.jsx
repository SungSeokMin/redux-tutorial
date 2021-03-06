import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserList from '../components/UserList';
import { getUsersThunk } from '../redux/modules/users';

const UserListContainer = () => {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  const getUsers = useCallback(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
};

export default UserListContainer;
