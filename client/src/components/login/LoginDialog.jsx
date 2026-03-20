import { Height, Password } from "@mui/icons-material";
import {
  Button,
  Dialog,
  TextField,
  Typography,
  Box,
  styled,
} from "@mui/material";
import { useState } from "react";

import { authenticateSignup } from "../../service/api";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  overflow: hidden;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 83%;
  width: 28%;
  padding: 45px 35px;
  & > p, & > h5 {
  color: #fff;
  font-weight: 600;
  }

  }
`;

const Wrapper = styled(Box)`
display: flex;
flex-direction: column;   
padding: 25px 35px;  
  flex: 1;
  & > div , & > button , & > p{
  margin-top: 20px;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    SubHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    SubHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  Password: "",
  phone: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const signupUser = async () => {
   let response =  await authenticateSignup(signup);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.SubHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField label="Enter Email/Mobile number" variant="standard" />
              <TextField label="Enter Password" variant="standard" />
              <Text>
                By Continuting, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>
                New To Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                label="Enter Firstname"
                name="firstname"
                onChange={(e) => onInputChange(e)}
                variant="standard"
              />
              <TextField
                label="Enter Lastname"
                name="lastname"
                onChange={(e) => onInputChange(e)}
                variant="standard"
              />
              <TextField
                label="Enter Username"
                name="username"
                onChange={(e) => onInputChange(e)}
                variant="standard"
              />
              <TextField
                label="Enter Email"
                name="email"
                onChange={(e) => onInputChange(e)}
                variant="standard"
              />
              <TextField
                label="Enter Password"
                name="password"
                onChange={(e) => onInputChange(e)}
                variant="standard"
              />
              <TextField
                label="Enter Phone"
                name="phone"
                onChange={(e) => onInputChange(e)}
                variant="standard"
              />

              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
