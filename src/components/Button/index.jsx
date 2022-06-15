import React from "react";
import ThemeButton from "./styles";


const Button = ({children}) => {
  return(
    <ThemeButton>
      {children}
    </ThemeButton>
  )
}

export default Button