import React from "react";
import SelectTheme from "./style";
import Typography from "../../styles/typography";
const Select = ({label}) => {
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

export default Select

