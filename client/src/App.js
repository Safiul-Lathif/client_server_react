import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/post/PostList.js';
import PostCreate from './components/post/PostCreate.js';
import PostEdit from './components/post/PostEdit.js';
import UserCreate from './components/users/UserCreate.js';
import UserEdit from './components/users/UserEdit.js';
import UserList from './components/users/UserList.js';

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')} >
    <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} />
    <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} />
  </Admin>
}
export default App;
