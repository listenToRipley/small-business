import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Icons } from '@material-ui/icons'

const DeleteBusiness  = (props) => {

  const handleDelete = (e) => {
    props.deleteBusiness(props.index)
  }

  return(
    <div>
      <IconButton
      aria-label='delete'
      aria-controls='delete-business'
      aria-haspopup='false' >
        <DeleteForeverIcon 
          keepMounted
          onClick={handleDelete}/>
      </IconButton>
    </div>
  )
}

export default DeleteBusiness