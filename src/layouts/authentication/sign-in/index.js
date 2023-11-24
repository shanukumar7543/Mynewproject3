import { useState } from "react";

// react-router-dom components
import { Link, Navigate, Router, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Alert, Spinner } from "@material-tailwind/react";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { getLogin } from "../../../../src/apihelpers/api";
import Cookies from "js-cookie";
import { CircularProgress } from "@mui/material";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [loading, setLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const getEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  //   setIsEmailValid(getEmail);
  // }, [email]);

  // const loginHandler = async (data) => {
  //   const response = await getLogin({
  //     email:email,
  //     password:password,
  //   });
  //   console.log("You are loggedIn ")
  //   if(response){
  //   await  alert("Loggedin Sucessfully...")
  //   setEmail("")
  //   setPassword("")
  //   navigate("/dashboard")
  //   }
  //   else{
  //     alert("wrong credentials")
  //   }
  // };

  const loginHandler = async () => {
    setLoading(true);
    console.log("first");
    const response = await getLogin({
      email: email,
      password: password,
    });
    if (response.success) {
      // alert('Sucessfully logged in. Redirecting...');

      Cookies.set("accessToken", response?.data?.accessToken, { expires: 1 });
      // console.log(response.data.user,"res")
      localStorage.setItem("User",JSON.stringify(response?.data?.user));
      setLoading(false);
      navigate("/dashboard");
    } else {
      setLoading(false);
      alert("Wrong Credential");
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          {/* <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid> */}
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                label="Email"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                label="Password"
                fullWidth
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox
              onClick={() => {
                // setLoading(true)
                loginHandler();
              }}
              mt={4}
              mb={1}
            >
              <MDButton variant="gradient" color="info" fullWidth>
                {loading ? (
                  <CircularProgress style={{ width: "20px", height: "20px" }} />
                ) : (
                  "Sign In"
                )}
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                {/* Don&apos;t Reset Your Password?{" "} */}
                Reset Your Password?
                <MDTypography
                  component={Link}
                  // to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Reset Password
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
