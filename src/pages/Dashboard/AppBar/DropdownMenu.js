import React, { useState } from 'react';
import * as authService from '../../../services/Auth.service';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, MenuItem, Menu } from '@mui/material';

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <div>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} style={{ color: 'white' }}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
      >
        <MenuItem onClick={authService.logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
