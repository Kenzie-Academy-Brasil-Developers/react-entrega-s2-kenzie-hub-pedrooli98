import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
height:100vh;
gap:1.4rem;
margin-top: ${props => props.mt};
`
export default Container