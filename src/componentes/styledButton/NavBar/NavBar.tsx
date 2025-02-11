import {AppBar, MenuItem ,Toolbar, styled} from '@mui/material'

const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
   
    
      }));


    return (
      <>
        <AppBar position="absolute">
            <StyledToobar>

                <MenuItem>about</MenuItem>
                <MenuItem>skiils</MenuItem>
                <MenuItem>projects</MenuItem>
            </StyledToobar>
           
        </AppBar>
      </>
    )
  }
  
  export default NavBar