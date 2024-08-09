import {TextField ,Button} from '@mui/material'
import React from 'react'

const Signup2 = () => {
  return (
    <div>
      <TextField variable='outlined' label='name' /><br/>
      <TextField variable='outlined' label='agr' /> <br/>
      <TextField variable='outlined' label='number' /> <br/>
      <TextField variable='outlined' label='password' /> <br/>
      <Button variant='contained'>login</Button> <br/>
    </div>
  )
}

export default Signup2