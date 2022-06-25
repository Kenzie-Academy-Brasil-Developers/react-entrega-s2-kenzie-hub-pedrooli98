import React, { useState  } from "react";
import Bio from "../../components/Bio";
import Header from "../../components/Header";
import {RegisterModal} from "../../components/Modals";
import { ModalBackGround } from "../../components/Modals/style";
import TechList from "../../components/TechList";
import Typography from "../../styles/typography";
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import { useEffect } from "react";


const Home = ({authenticated, setAuthenticated}) => {

  const [displayRegisterModal, setDisplayRegisterModal] = useState("none")
  const [displayUpdateModal, setDisplayUpdateModal] = useState("none")
  const [techs, setTechs] = useState([])
  const [user, setUser] = useState({})


  useEffect(()=>{
    api.get(`/users/${userId}`)
    .then((res)=>{
      setTechs(res.data.techs)
      setUser(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

    const token = localStorage.getItem("@Kenziehub:token")
    const userId = localStorage.getItem("@Kenziehub:user")

  if(!authenticated){
    return <Redirect to="/"/>
  }






  return (
    <main>
      <ModalBackGround
        display={displayRegisterModal}
      >
        <RegisterModal
          setRegisterModal={setDisplayRegisterModal}
          token={token}
        />
      </ModalBackGround>

      <ModalBackGround
        display={displayUpdateModal}
      >
        {/* <UpdateModal
          setModalUpdte={setDisplayUpdateModal}
        /> */}
      </ModalBackGround>
      <Header/>
      <Bio
        name={user.name}
        bio={user.bio}
      />
      <TechList
        setModalRegister={setDisplayRegisterModal}
        setModalUpdte={setDisplayUpdateModal}
        techs={techs}
      />
    </main>
  )
}
export default Home

//larissabritor@gmail.com