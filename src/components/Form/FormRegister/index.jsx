import React from "react";
import Form from "../styles";
import Typography from "../../../styles/typography";
import Input from "../../Input";
import { Button, SubmitButton } from "../../Button";
import Select from "../../Select";


const FormSubmit = ({loading}) => {
  return (
    <Form>
      <Typography font="title1">
          Crie sua conta
      </Typography>
      <Typography color="grey">
        Ainda não possui uma conta ?
      </Typography>
      <Input
          label={"Nome"}
          type={"text"}
      />
      <Input
          label={"Email"}
          type={"text"}
      />
      <Input
          label={"Senha"}
          type={"password"}
      />
      <Input
          label={"Confirmar Senha"}
          type={"text"}
      />
      <Input
          label={"Bio"}
          type={"text"}
      />
      <Input
          label={"Contato"}
          type={"text"}
      />
      <Select
        label="Selecionar módulo"
      />
      <SubmitButton 
      buttonStyle="big"
      loading={loading}
      >
        <Typography font="headlineBold">
            Cadastre-se
        </Typography>
      </SubmitButton>

        
      
    </Form>
    
  )
};

export default FormSubmit;