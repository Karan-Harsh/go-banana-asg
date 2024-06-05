import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Pagination } from '@mui/material';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';

const ITEMS_PER_PAGE = 5; // number of items to display per page

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(lowercasedTerm) ||
      user.email.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset to first page on search
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          User List
        </Typography>
        <SearchBar onSearch={handleSearch} />
        <UserList users={currentItems} />
        <Box display="flex" justifyContent="center" mt={2}>
          <Pagination
            count={Math.ceil(filteredUsers.length / ITEMS_PER_PAGE)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
