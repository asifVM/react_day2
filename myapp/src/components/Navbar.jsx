import {AppBar, Toolbar, Typography, Button} from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
          <Typography variant='h6'>myapp</Typography>
          <Link to='/Signup'>
            <Button variant='contained'>login</Button>
            </Link>
              </Toolbar>
      </AppBar>
      <br /><br /><br /><br />
    </div> 
  )
}

export default Navbar