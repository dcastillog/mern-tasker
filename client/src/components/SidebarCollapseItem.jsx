import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link, useHistory } from 'react-router-dom';
import { FaTrashAlt, FiChevronDown, FiChevronRight, HiOutlinePlus } from 'react-icons/all';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { useSelectedFilterValue } from '../contexts';

const SidebarCollapseItem = ({ deleteButton = false, text, baseLink, items, onCreate }) => {
  const { setSelectedFilter } = useSelectedFilterValue();
  const [isExpanded, setExpand] = useState(true);
  const [openConfirm, setOpenConfirm] = useState(false);

  return (
    <div>
      <ListItem style={{ padding: '0 8px', cursor: 'pointer', userSelect: 'none' }} onClick={() => setExpand(!isExpanded)}>
        <ListItemIcon style={{ minWidth: '26px' }}>{isExpanded ? <FiChevronDown /> : <FiChevronRight />}</ListItemIcon>
        <ListItemText primary={text} style={{ padding: '10px 0', color: '#333', fontWeight: '700', fontSize: '14px' }} />
        <ListItemSecondaryAction onClick={onCreate}>
          <IconButton>
            <HiOutlinePlus />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={isExpanded} unmountOnExit>
        <List dense>
          {items.map((item) => (
            <ListItem
              style={{
                display: 'flex',
                width: '100%',
                padding: '10px',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '14px',
              }}
              key={item.id}
              button
              onKeyDown={() => {
                setSelectedFilter(item.id);
              }}
            >
              <Link
                style={{ width: '100%', textDecoration: 'none', color: 'black' }}
                to={`${baseLink}/${item.id}`}
                onClick={() => {
                  setSelectedFilter(item.id);
                }}
              >
                {item.name}
              </Link>
              {deleteButton && (
                <button
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#7a7a7a' }}
                  onClick={() => setOpenConfirm(!openConfirm)} />
              )}
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

SidebarCollapseItem.propTypes = {};

export default SidebarCollapseItem;
