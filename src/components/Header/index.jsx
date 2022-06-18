import React from "react";
import { ContainerHome } from "../../styles/container";
import Typography from "../../styles/typography";
import { Button } from "../Button";

const Header = ({children}) => {
  return(
    <header>
      <ContainerHome size="header">
        <div> 
          <Typography font="logo" color="colorPrimary">KenzieHub</Typography>
            {children}
          <Button buttonStyle="small">
            <Typography font="headlineBold">Sair</Typography>
          </Button>
        </div>
      </ContainerHome>
    </header>
  )
}

export default Header