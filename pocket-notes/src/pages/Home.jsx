import React from "react";
import HomePageNotes from "../components/HomePageNotes/HomePageNotes";
import styleHome from "./Home.module.css"
import Notesgroups from "../components/NotesGroups/Notesgroups";

const Home = () => {
  return (
    <>
      <div className={styleHome.homewrapper}>
        <div className={styleHome.leftside}>
           <Notesgroups />
        </div>
        <div className={styleHome.rightside}>
            <HomePageNotes />
        </div>
      </div>
    </>
  );
};

export default Home;
