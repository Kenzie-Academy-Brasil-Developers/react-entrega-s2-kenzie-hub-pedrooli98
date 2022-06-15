import GlobalStyle from "./styles/global";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes/>
    </>
  );
}

export default App;


/*
  PLANEJAMENTO
    bibliotecas:
      router-dom: yarn add react-router-dom@5;
      styled components: yarn add styled-components;
      framer motion: yarn add framer-motion;

    design system:
      colors:
        primary palette:
          primary-focus: #FF577F;
          primary-focus: #FF427F;
          primary-negative: #59323F;
        grey scale plette:
          grey-0: "#F8F9FA",
          grey-1: "#868E96",
          grey-2: "#343B41",
          grey-3: "#212529",
          grey-4: "#121214",
      typography:
        Inter : font-family: 'Inter', sans-serif;
*/