//this will be the functionality to removing a business 
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Icon } from '@material-ui/core';

const DeleteBusiness  = (props) => {
  const handleDelete = (e) => {
    props.deleteBusiness(props.index)
  }

  return(
    <div>
      <IconButton
      aria-lable='delete'
      aria-controls='delete-business'
      aria-haspopup='false'>
        <DeleteForeverIcon 
          keepMounted
          onClick={handleDelete}/>
      </IconButton>
    </div>
  )
}

export default DeleteBusiness