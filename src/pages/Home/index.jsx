import React, { useState } from "react";
import Bio from "../../components/Bio";
import Header from "../../components/Header";
import {RegisterModal} from "../../components/Modals";
import { ModalBackGround } from "../../components/Modals/style";
import TechList from "../../components/TechList";
import Typography from "../../styles/typography";


const Home = () => {
  const [displayRegisterModal, setDisplayRegisterModal] = useState("none")
  const [displayUpdateModal, setDisplayUpdateModal] = useState("none")




  return (
    <main>
      <ModalBackGround
        display={displayRegisterModal}
      >
        <RegisterModal
          setRegisterModal={setDisplayRegisterModal}
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
        name="Pedro"
        bio="poxxxa"
      />
      <TechList
        setModalRegister={setDisplayRegisterModal}
        setModalUpdte={setDisplayUpdateModal}
      />
    </main>
  )
}
export default Home