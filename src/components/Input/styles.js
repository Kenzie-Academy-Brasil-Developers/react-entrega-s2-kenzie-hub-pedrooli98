import styled from "styled-components";

const InputTheme = styled.div`
  width:100%;
  height:auto;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  gap:1.2rem;

  div{
    height: 40px;
    width:100%;
    background-color: #343B41;
    border: 1.2182px solid #343B41;
    display:flex;
    align-items:center;
    border-radius: 4px;
    padding: 10px 16px;
    }
  div:hover{
    border: 1.2182px solid #F8F9FA;
    transition:0.3s;
  }

    input{
      border:none;
      color:#F8F9FA;
      font-size:1rem;
      background-color:#343B41;
      width:100%;

    }
  
`
export default InputTheme