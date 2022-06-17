import React from "react";
import Typography from "../../styles/typography";
import Form from "./styles";
import Input from "../Input";
import {Button,SubmitButton} from "../Button";

const FormLogin = ({loading}) =>{
    return(
      <Form>
        <Typography font="title1"
          color="white"
        >
          Login
        </Typography>
        <Input
          label={"Email"}
          type={"text"}
        />
        <Input
          label={"Senha"}
          type={"password"}
        />
        <SubmitButton buttonStyle="big" loading={loading}>
          <Typography font="headlineBold" colors="grey">
            Entrar
          </Typography>
        </SubmitButton>
        <Typography color="grey">
        Ainda não possui uma conta?
        </Typography>
        <Button buttonStyle="big" loading={loading}>
          <Typography font="headlineBold">
            Cadastre-se
          </Typography>
        </Button>
      </Form>
    ) 
}

export default FormLogin