import React from "react";
import HomePageImg from "../../assets/HomePageImg.svg"
import EncrypedLogo from "../../assets/EncrypedLogo.svg"
import stylesHomePageNotes from "./HomePageNotes.module.css"
const HomePageNotes = () => {
  return (
    <>
      <div className={stylesHomePageNotes.homewrapper}>
        <div className={stylesHomePageNotes.container}>
          <img src={HomePageImg} alt="Home Page Image" />
          <h1>Pocket Notes</h1>
          <p className={stylesHomePageNotes.desc}>
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>

          <p className={stylesHomePageNotes.encrypted}>
            <img src={EncrypedLogo} alt="Encrytion Logo" /> end-to-end encrypted
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePageNotes;
