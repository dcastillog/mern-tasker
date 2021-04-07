import React from 'react';

import MainLayout from '../layout';
import UserNotLogged from '../components/UserNotLogged';
import HomeContainer from '../containers/HomeContainer';

const Home = (props) => {
  return (
    <MainLayout>
      <HomeContainer />
      {/* <UserNotLogged /> */}
    </MainLayout>
  );
};

export default Home;
