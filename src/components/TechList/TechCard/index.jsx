import React from "react";
import Typography from "../../../styles/typography";
import Card from "./styles";

const TechCard = ({tech, status}) =>{

  return (
    <Card>
      <Typography font="title3">{tech}</Typography>
      <Typography>{status}</Typography>
      
    </Card>
  )
}

export default TechCard