import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import GroupIcon from '@mui/icons-material/Group';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HearingIcon from '@mui/icons-material/Hearing';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React from "react";
import MenuLink from "../menuLink/MenuLink";
import "./leftbar.css";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <MenuLink icon={<HomeIcon  />} text="Homepage" />
        <MenuLink icon={<ListIcon />} text="Lists" />
        <MenuLink icon={<ShoppingBasketIcon />} text="Products" />
        <MenuLink icon={<GroupIcon />} text="Groups" />
        <MenuLink icon={<FileCopyIcon  />} text="Pages" />
        <MenuLink icon={<PhotoSizeSelectActualIcon />} text="Photos" />
        <MenuLink icon={<MovieCreationIcon />} text="Videos" />
        <MenuLink icon={<ScheduleIcon  />} text="Schedule" />
        <MenuLink icon={<HearingIcon />} text="Wishlist" />
        <MenuLink icon={<SettingsIcon />} text="Settings" />
        <MenuLink icon={<ExitToAppIcon />} text="Logout" />
      </div>
    </div>
  );
}
