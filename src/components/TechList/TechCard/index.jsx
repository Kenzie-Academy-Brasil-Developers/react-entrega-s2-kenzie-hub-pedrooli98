import React from "react";
import Typography from "../../../styles/typography";
import Card from "./styles";

const TechCard = ({tech, status, onClick}) =>{

  return (
    <Card
      onClick={onClick}
    >
      <Typography font="title3">{tech}</Typography>
      <Typography>{status}</Typography>
      
    </Card>
  )
}

export default TechCard