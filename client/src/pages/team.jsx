import React, { useState } from 'react';
import { HiUser, HiUserGroup } from 'react-icons/hi';
import { Tab, Tabs } from '@material-ui/core';
import { useSelectedFilterValue, useTeamsValue } from '../contexts';
import { MainLayout } from '../layouts/main';
import TeamTaskContainer from '../containers/TeamTaskContainer';
import { TabPanel, TeamDetail } from '../components';

const styles = {
  icon: { width: '30px', height: '30px' },
};

const TeamPage = () => {
  const { selectedFilter } = useSelectedFilterValue();
  const [tab, setTab] = useState(0);

  const handleChangeTab = (event, newTab) => {
    setTab(newTab);
  };
  return (
    <MainLayout>
      <h2>{selectedFilter}</h2>
      <Tabs value={tab} onChange={handleChangeTab} centered indicatorColor="primary" textColor="primary">
        <Tab label="Tasks" icon={<HiUser style={styles.icon} />} />
        <Tab label="My team" icon={<HiUserGroup style={styles.icon} />} />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <TeamTaskContainer />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <TeamDetail />
      </TabPanel>
    </MainLayout>
  );
};

export default TeamPage;
