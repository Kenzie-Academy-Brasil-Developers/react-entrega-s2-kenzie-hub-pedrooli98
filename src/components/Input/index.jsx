import React from "react";
import Typography from "../../styles/typography";
import InputTheme from "./styles";


const Input = ({label, type}) => {
  return(
    <InputTheme>
    <Typography>
      {label}
    </Typography>
      <div>
        <input type={type} />
      </div>
    </InputTheme>
  )
}

export default Input