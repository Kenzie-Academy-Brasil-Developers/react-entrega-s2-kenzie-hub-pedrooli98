import React from "react";
import Typography from "../../styles/typography";
import { SubmitButton, Button } from "../Button";
import Input from "../Input";
import {SelectExperience} from "../Select";
import { ModalTheme } from "./style";

export const RegisterModal = ({setRegisterModal}) => {
  const closeModal = () => {
    setRegisterModal("none")
  }

  return (
    <ModalTheme>
      <div className="modal-header">
        <Typography font="title3">Cadastrar Tecnologia</Typography>
        <Button 
          buttonStyle="smaller"
          onClick={closeModal}
        >
          <Typography>X</Typography>
        </Button>
      </div>
      <form className="modal-inputs">
      <Input
        label="name"
        type="text"
      ></Input>
      <SelectExperience
        label="Selecionar status"
      />
      <SubmitButton
        buttonStyle="big"
      ><Typography font="title3">Enviar</Typography></SubmitButton>
      </form>
    </ModalTheme>
  )
}

export const UpdateModal = ({setModalUpdte}) =>{

  const closeModal = () => {
    setModalUpdte("none")
  }

  return (
    <ModalTheme>
      <div className="modal-header">
        <Typography font="title3">Cadastrar Tecnologia</Typography>
          <Button 
            buttonStyle="smaller"
            onClick={closeModal}
          >
            <Typography>X</Typography>
          </Button>
        </div>
        <form className="modal-inputs">
        <Input
          label="name"
          type="text"
        ></Input>
        <SelectExperience
          label="Selecionar status"
        />
        <div className="modal-buttons">
          <SubmitButton buttonStyle="mid"><Typography font="title3">Salvar alterações</Typography></SubmitButton>

          <SubmitButton><Typography font="title3">Excluir</Typography></SubmitButton>

        </div>
        </form>
      </ModalTheme>
  )
}

