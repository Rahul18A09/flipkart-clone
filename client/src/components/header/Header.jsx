import React from "react";
import logo from "../../assets/logo/flip_logo.jpg";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import Search from "./Search";
import CoustomButtons from "./CoustomButtons";

const StyleHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
margin-left:12%;
line-height:0;
`

const SubHeading = styled(Typography)`
font-size: 10px;
font-style: italic;
`

const CoustomButtonWrapper = styled(Box)`
margin: 0 5% 0 auto;
`


const Header = () => {

      const subURL = "https://static-assets-web.flipkart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <StyleHeader>
      <Toolbar style={{minHeight: 55}}>
        <Component>
          <img src={logo} alt="logo" style={{width: 75}} />
          <Box>
            <SubHeading>Explore&nbsp;<Box component="span" style={{color:' #FFE500'}}>Plus +</Box>
            </SubHeading> 
            
          </Box> 
        </Component>
        <Search/>
        <CoustomButtonWrapper>
            <CoustomButtons/>
        </CoustomButtonWrapper>
      </Toolbar>
    </StyleHeader>
  );
};

export default Header; 
