import React from 'react'
import "./sidebar.css"
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption/SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import {useDispatch} from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';

function Sidebar() {
  const dispatch= useDispatch()
    return (
      <div className="sidebar">
        <Button
          startIcon={<AddIcon fontsize="large" />}
          className="sidebar__compose"
          onClick={()=> dispatch(openSendMessage())}
        >
          Compose
        </Button>
        <SidebarOption
          Icon={InboxIcon}
          title="inbox"
          number={45}
          selected={true}
        />
        <SidebarOption Icon={StarIcon} title="Starred" number={45} />
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={45} />
        <SidebarOption
          Icon={LabelImportantIcon}
          title="Important"
          number={45}
        />
        <SidebarOption Icon={NearMeIcon} title="Sent" number={45} />
        <SidebarOption Icon={NoteIcon} title="Drafts" number={45} />
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={45} />
        <div className="sidebar__footer">
          <div className="sidebar__footerIcon">
            <IconButton>
              <PersonIcon />
            </IconButton>
            <IconButton>
              <DuoIcon />
            </IconButton>
            <IconButton>
              <PhoneIcon />
            </IconButton>
          </div>
        </div>
      </div>
    );
}

export default Sidebar
