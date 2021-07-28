import React from 'react'
import './emailListRow.css'
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
function EmailListRow({id,title,subject,description,time}) {
  const history =useHistory();
    return (
        <div onClick={() => history.push("/mail")} className='emailListRow'>
            <div className="emailRow__option">
                <Checkbox/>
                <IconButton>
                  <StarBorderIcon/>
                </IconButton>
                <IconButton>
                  <LabelImportantIcon/>
                </IconButton>
            </div>
            <div className="emailRow__title">
             {title}
            </div>
            <div className="emailRow__message">
               <h4>{subject}{" "}
               <span className='emailRow__description'>-
                   {" "}{description}
               </span>
               </h4>
            </div>
            <p className="emailRow__time">
              {time}
            </p>

        </div>
    )
}

export default EmailListRow
