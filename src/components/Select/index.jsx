import React from "react";
import SelectTheme from "./style";
import Typography from "../../styles/typography";

export const SelectModule = ({label}) => {
  return (
    <SelectTheme>
      <Typography>
        {label}
      </Typography>
      <div>
        <select name="modulos" value=" ">
          <option value="M1">M1</option>
          <option value="M2">M2</option>
          <option value="M3">M3</option>
          <option value="M4">M4</option>
          <option value="M5">M5</option>
          <option value="M6">M6</option>
        </select>
      </div>
    </SelectTheme>
  )
}

export const SelectExperience = ({label}) => {
  return (
    <SelectTheme>
      <Typography>
        {label}
      </Typography>
      <div>
        <select name="modulos" value=" ">
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediario</option>
          <option value="avançar">Avançado</option>
        </select>
      </div>
    </SelectTheme>
  )
}


