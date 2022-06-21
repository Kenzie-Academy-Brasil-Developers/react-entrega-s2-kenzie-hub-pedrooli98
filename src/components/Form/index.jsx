import React from "react";
import Typography from "../../styles/typography";
import Form from "./styles";
import Input from "../Input";
import {Button,SubmitButton} from "../Button";
import {yupResolver} from '@hookform/resolvers/yup' 
import * as yup from "yup"
import { useForm } from "react-hook-form";

const FormLogin = ({loading}) =>{

  const formSchema = yup.object().shape({
    email:yup 
          .string()
          .required("Email Obrigatorio")
          .email("Email inválido"),
    password:yup
            .string()
            .min(8, "Mínimo de 8 digitos")
            .required("Campo obrigatório"),
  })
  
  const {register, handleSubmit, formState:{errors}}=useForm({
    resolver:yupResolver(formSchema)
  })

  const onSubmitFunction = (data) => console.log(data)

    return(
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <Typography font="title1"
          color="white"
        >
          Login
        </Typography>
        <Input
          label={"Email"}
          type={"text"}
          register={register}
          name="email"
          errors={errors.email?.message}
        />
        <Input
          label={"Senha"}
          type={"password"}
          register={register}
          name="password"
          errors={errors.password?.message}
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