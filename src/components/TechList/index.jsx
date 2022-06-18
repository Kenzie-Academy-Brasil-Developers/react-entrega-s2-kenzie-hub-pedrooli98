import React from "react";
import { ContainerHome, Container } from "../../styles/container";
import Typography from "../../styles/typography";
import {Button} from "../Button/index"
import ThemeList from "./styles";
import TechCard from "./TechCard";

const TechList = ({setModalRegister, setModalUpdte}) => {

  const openRegisterModal = () =>{
    setModalRegister("flex")
  }

  const openUpdateModal = () => {
    setModalUpdte("flex")
  }


  return (
    <>
    <ContainerHome>
      <div>
        <Typography font="title3">Tecnologias</Typography>
        <Button buttonStyle="smaller" onClick={openRegisterModal}>
          <Typography font="title3">+</Typography>
        </Button>
      </div>
    </ContainerHome>

    <Container>
      <ThemeList>
          <TechCard
            tech="Next Js"
            status="Avançado"
            onClick={openUpdateModal}
          />
      </ThemeList>
    </Container>
    </>
  )
}

export default TechList