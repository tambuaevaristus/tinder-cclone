import { PersonPinCircleOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';

import React from "react";

export default function Header() {
  return (
    <div className="header p-4 container justify-content-between d-flex">
      <IconButton>
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <PersonPinCircleOutlined fontSize="large"  />
      </IconButton>
      <IconButton>
      <ForumIcon fontSize="large" />
      </IconButton>

    </div>
  );
}
