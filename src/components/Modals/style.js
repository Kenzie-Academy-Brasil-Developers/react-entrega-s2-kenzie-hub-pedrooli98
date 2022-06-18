import styled,{css} from "styled-components";

export const ModalBackGround = styled.div`
  height:100vh;
  width:100%;
  justify-content:center;
  align-items:center;
  background-color:rgba(18, 18, 20, 0.5);
  position:absolute;
  display:${props => props.display}
`

export const ModalTheme = styled.div`
  max-width:369px;
  min-width:296px;
  width:100%;
  background-color:#212529;
  border-radius:4px;
  padding-bottom:42px;
  display:flex;
  flex-direction:column;
  gap:1rem;

  .modal-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:50px;
    background-color:#343B41;
    padding:15px;
    border-radius: 4px 4px 0px 0px;
  }

  .modal-buttons {
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:1rem;
  }

  .modal-inputs{
    margin:0px 17px;
    display:flex;
    flex-direction:column;
    gap:1rem;
  }
`