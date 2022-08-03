import React, { useState } from 'react';
import * as authService from '../../../services/Auth/Auth.service';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, MenuItem, Menu } from '@mui/material';
import { connect } from 'react-redux';
import { getActions } from 'src/store/room/room.actions';
import { Logout, Videocam, VideocamOff } from '@mui/icons-material';

const DropdownMenu = ({ audioOnly, setAudioOnly }) => {
  const [anchorElement, setAnchorElement] = useState(null);
  const open = Boolean(anchorElement);
  return (
    <div>
      <IconButton onClick={(e) => setAnchorElement(e.currentTarget)} style={{ color: 'white' }}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorElement}
        open={open}
        onClose={() => setAnchorElement(null)}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
      >
        <MenuItem onClick={() => setAudioOnly(!audioOnly)}>
          {audioOnly ? <VideocamOff /> : <Videocam />} &nbsp; &nbsp;
          {audioOnly ? 'Audio Only On' : 'Audio Only Off'}
        </MenuItem>
        <MenuItem onClick={authService.logout}>
          <Logout /> &nbsp; Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu);
