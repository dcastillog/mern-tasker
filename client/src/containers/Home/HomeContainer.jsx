import React, { useState, useEffect } from 'react';
import { HiUser, HiUserGroup } from 'react-icons/hi';
import { Container, Paper, Tabs, Tab } from '@material-ui/core';
import { TaskContainer, TeamContainer } from '../';
import TabPanel from '../../components/TabPanel';

const style = {
  icon: {
    width: '30px',
    height: '30px',
  },
};

const HomeContainer = (props) => {
  const [currentTab, setCurrenTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [userTasks, setUserTasks] = useState([]);
  const [userTeam, setUserTeam] = useState([]);

  const handleChangeTab = (event, newTab) => {
    setCurrenTab(newTab);
  };

  const handleAddTask = (addTask, text) => {
    const newTask = { id: addTask.id, text, completed: false, editable: false };
    console.log(addTask, text, 'HomeContainer');
    userTasks.unshift(newTask);
    setUserTasks(userTasks);
  };

  async function fetchUserTasks() {
    setIsLoading(true);
    let tasks = await new Promise((resolve) => {
      setTimeout(resolve, 1000, [
        {
          id: 1,
          author: 'userid',
          isCompleted: false,
          text: 'First task',
        },
        {
          id: 2,
          author: 'userid',
          isCompleted: true,
          text: 'Testing',
        },
      ]);
    });
    console.log(tasks, 'Tasks');
    setUserTasks(tasks);
    setIsLoading(false);
  }

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
      <Paper elevation={8}>
        <Tabs value={currentTab} onChange={handleChangeTab} centered indicatorColor="primary" textColor="primary">
          <Tab label="My Tasks" icon={<HiUser style={style.icon} />}></Tab>
          <Tab label="My Team" icon={<HiUserGroup style={style.icon} />}></Tab>
        </Tabs>
      </Paper>
      <TabPanel value={currentTab} index={0}>
        <TaskContainer tasks={userTasks} onAddTask={handleAddTask} onSetTask={(tasks) => setUserTasks(tasks)} />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <TeamContainer team={userTeam} onSetTeam={setUserTeam} />
      </TabPanel>
    </Container>
  );
};

export default HomeContainer;
