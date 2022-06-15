import React from "react";
import Typography from "../../styles/typography";
import Theme from "../../styles/theme";
import InputTheme from "./styles";


const Input = ({label, type}) => {
  return(
    <InputTheme>
    <Typography color={Theme.greyScale.grey0}>
      {label}
    </Typography>
      <div>
        <input type={type} name="" id="" />
      </div>
    </InputTheme>
  )
}

export default Input