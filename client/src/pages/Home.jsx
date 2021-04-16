import React from 'react';

import HomeContainer from '../containers/Home';
import HomeLayout from '../layout/home';

const Home = (props) => {
  return (
    <HomeLayout>
      <HomeContainer />
    </HomeLayout>
  );
};

export default Home;
