import React from "react";
import FormLogin from "../../components/Form";
import Container from "../../styles/container";
import Typography from "../../styles/typography";
import Theme from "../../styles/theme";



const Login = () => {
  return (
    <Container>
      <Typography type="logo" color={Theme.primaryPalette.primary}>
        Kenzie Hub
      </Typography>
      <FormLogin/>
    </Container>
  )
}

export default Login