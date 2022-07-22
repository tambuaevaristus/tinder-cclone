import React from "react";
import { IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import './SwipeButtons.css'
function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <FavoriteIcon  fontSize="large" />
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
