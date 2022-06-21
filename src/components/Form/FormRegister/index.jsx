import React from "react";
import Form from "../styles";
import Typography from "../../../styles/typography";
import Input from "../../Input";
import { Button, SubmitButton } from "../../Button";
import {SelectModule} from "../../Select";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup' 
import * as yup from "yup"
import InputTheme from "../../Input/styles";



const FormSubmit = ({loading}) => {

  const formSchema = yup.object().shape({
    email:yup 
          .string()
          .required("Email Obrigatorio")
          .email("Email inválido"),
    password:yup.string().min(8, "Mínimo de 8 digitos").required("Campo obrigatório"),
    passwordConfirm:yup.string().oneOf([yup.ref("password")],"Senhas diferentes").required("Campo obrigatório"),
    name:yup.string().required("Campo obrigatório"),
    bio:yup.string().required("Campo obrigatório"),
    contact:yup.string().required("Campo obrigatório"),
    course_module:yup.string().required("Campo obrigatório")
  })

  const {register, handleSubmit, formState:{errors}}=useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmitFunction = (data) => {
    console.log(data) 
  }


  return (
    <Form onSubmit={handleSubmit(onSubmitFunction)}>
      <Typography font="title1">
          Crie sua conta
      </Typography>
      <Typography color="grey">
        Ainda não possui uma conta ?
      </Typography>
      <Input
          label={"Nome"}
          type={"text"}
          name="name"
          register={register}
          errors={errors.name?.message}
      ></Input>

      <Input
          label={"Email"}
          type={"text"}
          name="email"
          errors={errors.email?.message}
          register={register}

      />
      <Input
          label={"Senha"}
          type={"password"}
          name="password"
          errors={errors.password?.message}
          register={register}

      />
      <Input
          label={"Confirmar Senha"}
          type={"password"}
          name="passwordConfirm"
          errors={errors.passwordConfirm?.message}
          register={register}

      />
      <Input
          label={"Bio"}
          type={"text"}
          name="bio"
          errors={errors.bio?.message}
          register={register}

      />
      <Input
          label={"Contato"}
          type={"text"}
          name="contact"
          errors={errors.contact?.message}
          register={register}

      />
      <SelectModule
        label="Selecionar módulo"
        name="course_module"
        errors={errors.course_module?.message}
        register={register}

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