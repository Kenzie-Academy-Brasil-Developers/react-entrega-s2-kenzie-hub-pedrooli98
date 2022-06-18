import React from "react";
import FormLogin from "../../components/Form";
import {Container} from "../../styles/container";
import Typography from "../../styles/typography";



const Login = ({loading}) => {
  return (
    <Container>
      <Typography font="logo" color="colorPrimary">
        Kenzie Hub
      </Typography>
      <FormLogin
        loading={loading}
      />
    </Container>
  )
}

export default Login