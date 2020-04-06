import React from 'react';
import { useRouter } from 'next/router';
import { Box } from '@material-ui/core';
import Home from '../../commons/Icons/Home';

const DddComponent = ({ data }) => {
  const router = useRouter();
  return (
    <Box align="center" mt={'5%'} onClick={() => router.push('/index')}>
      <Home />
    </Box>
  );
};

DddComponent.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/users/dansotirakis/repos');
  const data = await response.json();
  return { data };
};

export default DddComponent;