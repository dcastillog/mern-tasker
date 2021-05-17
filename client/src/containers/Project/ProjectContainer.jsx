import React, { useState, useEffect } from 'react';
import { HiUser, HiUserGroup } from 'react-icons/hi';
import { Container, Paper, Tabs, Tab } from '@material-ui/core';
import { TaskContainer, TeamContainer } from '../';
import { withApi } from '../../hoc/withApi';
import { withUser } from '../../hoc/withUser';
import TabPanel from '../../components/TabPanel';

const style = {
  icon: {
    width: '30px',
    height: '30px',
  },
};

const ProjectContainer = ({ api, user }) => {
  const [currentTab, setCurrenTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [userTasks, setUserTasks] = useState([]);
  const [userTeam, setUserTeam] = useState([]);

  const handleChangeTab = (event, newTab) => {
    setCurrenTab(newTab);
  };

  const handleAddTask = (addedTask) => {
    setUserTasks(userTasks);
    userTasks.unshift(addedTask);
  };

  async function fetchUserTasks() {
    setIsLoading(true);
    try {
      const data = await api.get('/tasks');
      setUserTasks(data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  }

  const handleDeleteTask = async (taskId) => {
    setUserTasks(userTasks.filter((task) => task._id != taskId));
  };

  async function fetchUserTeam() {
    setIsLoading(true);
    const team = await new Promise((resolve) => {
      setTimeout(resolve, 1000, []);
    });
    console.log(team, 'Teams');
    setUserTeam(team);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchUserTeam();
    fetchUserTasks();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Wait...</h1>
      </div>
    );
  }
  return (
    <Container style={{ border: '1px solid red' }}>
      <h2>Project 1</h2>
      <Paper elevation={8}>
        <Tabs value={currentTab} onChange={handleChangeTab} centered indicatorColor="primary" textColor="primary">
          <Tab label="My Tasks" icon={<HiUser style={style.icon} />}></Tab>
          <Tab label="My Team" icon={<HiUserGroup style={style.icon} />}></Tab>
        </Tabs>
      </Paper>
      <TabPanel value={currentTab} index={0}>
        <TaskContainer
          api={api}
          user={user}
          tasks={userTasks}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          onSetTask={(tasks) => setUserTasks(tasks)}
        />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <TeamContainer team={userTeam} onSetTeam={setUserTeam} />
      </TabPanel>
    </Container>
  );
};

export default withUser(withApi(ProjectContainer));
