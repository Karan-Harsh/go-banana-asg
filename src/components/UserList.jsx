// src/components/UserList.js
import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const UserList = ({ users }) => {
  return (
    <List>
      {users.map(user => (
        <div key={user.id}>
          <ListItem>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default UserList;
