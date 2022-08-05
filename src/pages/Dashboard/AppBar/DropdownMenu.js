import React, { useState } from 'react';
import { IconButton, MenuItem, Menu } from '@mui/material';
import {
  Logout as LogoutIcon,
  Videocam as VideocamIcon,
  VideocamOff as VideocamOffIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import * as authService from 'src/services/auth/Auth.service';
import { connect } from 'react-redux';
import { getActions } from 'src/store/room/room.actions';

const DropdownMenu = ({ audioOnly, setAudioOnly }) => {
  const [anchorElement, setAnchorElement] = useState(null);
  const open = Boolean(anchorElement);
  return (
    <div>
      <IconButton
        style={{ color: 'white' }}
        onClick={(event) => setAnchorElement(event.currentTarget)}
      >
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
          {audioOnly ? <VideocamOffIcon /> : <VideocamIcon />} &nbsp; &nbsp;
          {audioOnly ? 'Audio Only On' : 'Audio Only Off'}
        </MenuItem>
        <MenuItem onClick={authService.logout}>
          <LogoutIcon /> &nbsp; Logout
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

// prettier-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownMenu);
