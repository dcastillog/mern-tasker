import React from 'react';

import HomeContainer from '../containers/Home';
import MainLayout from '../layouts/main';

const Home = (props) => {
  return (
    <MainLayout>
      <HomeContainer />
    </MainLayout>
  );
};

export default Home;
