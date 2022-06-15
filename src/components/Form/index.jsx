import React from "react";
import Typography from "../../styles/typography";
import Theme from "../../styles/theme";
import Form from "./styles";
import Input from "../Input";
import Button from "../Button";

const FormLogin = () =>{
    return(
      <Form>
        <Typography type="title1" color={Theme.greyScale.grey0}>
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
        <Button>
          <Typography color={Theme.greyScale.grey0} type="headlineBold">
            Entrar
          </Typography>
        </Button>
        <Typography color={Theme.greyScale.grey1}>
        Ainda não possui uma conta ?
        </Typography>
        <Button>
          <Typography color={Theme.greyScale.grey0} type="headlineBold">
            Cadastre-se
          </Typography>
        </Button>
      </Form>
    ) 
}

export default FormLogin