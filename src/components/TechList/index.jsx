import React from "react";
import { ContainerHome, Container } from "../../styles/container";
import Typography from "../../styles/typography";
import {Button} from "../Button/index"
import ThemeList from "./styles";
import TechCard from "./TechCard";

const TechList = () => {
  return (
    <>
    <ContainerHome>
      <div>
        <Typography font="title3">Tecnologias</Typography>
        <Button buttonStyle="smaller">
          <Typography font="title3">+</Typography>
        </Button>
      </div>
    </ContainerHome>

    <Container>
      <ThemeList>
          <TechCard
            tech="Next Js"
            status="Avançado"
          />
          <TechCard
            tech="React"
            status="Avançado"
          />
          <TechCard
            tech="Node Js"
            status="Iniciante"
          />
      </ThemeList>
    </Container>
    </>
  )
}

export default TechList