import React from "react";
import ThemeButton from "./styles";


export const Button = ({children,onClick,loading,buttonStyle }) => {
  return(
    <>
        {loading ? (
          <ThemeButton 
            disabled={loading}
            buttonStyle={buttonStyle}
          >Carregando..
          .</ThemeButton>
          )
        :(
          <ThemeButton 
            onClick={()=>onClick()}
            buttonStyle={buttonStyle}
          >{children}</ThemeButton>  
        )}
      </>
  )
}

export const SubmitButton = ({children,loading,buttonStyle}) => {
  return(
    <>
    {loading ? (
      <ThemeButton 
      type="submit"
      disabled={loading}
      buttonStyle={buttonStyle}
      >Carregando...</ThemeButton>
      )
    :(
      <ThemeButton
      type="submit"
      buttonStyle={buttonStyle}
      >
        {children}
      </ThemeButton>  
    )}
  </>
  )
}





