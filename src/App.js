import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom";

function App() {

  const [loading, setLoading] = useState(false);

  return (
    <>
      <GlobalStyle/>
      <Routes
        loading={loading}
      />
    </>
  );
}

export default App;
