import React, { useEffect, useState, useRef } from "react";
import StyleModal from "./Modal.module.css";
import { colors } from "../../utils/contants";
import { ToastContainer, toast } from "react-toastify";
import { useModal } from "./ModalContextApi";


const Modal = (props) => {
  const [groupName, setGroupName] = useState("");
  const [selectColor, setSelectColor] = useState(null);
  const [createGroup, setCreateGroup] = useState([]);
  const [selectColorIndexes, setSelectColorIndexes] = useState(null);
  const { showModal, setShowModal } = useModal;
  const modalRef = useRef(null);

  useEffect(() => {
    const showCreatedGroups = JSON.parse(localStorage.getItem("createdGroups"));
    if (showCreatedGroups) {
      setCreateGroup(showCreatedGroups);
    }
  }, []);

  const handleColors = (idxx) => {
    setSelectColor(colors[idxx]);
    setSelectColorIndexes(idxx);
  };
  const handleChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleCreateGroup = () => {
    if (groupName && selectColor) {
      const duplicate = createGroup.some((group) => group.text === groupName);
      if (duplicate) {
        const newGroup = {
          id: createGroup.length,
          text: groupName,
          color: selectColor,
          notes: [],
        };

        const updateGroups = [...createGroup, newGroup];
        localStorage.setItem("createdGroups", JSON.stringify(updateGroups));
        props.updateGroups(updateGroups);
        setGroupName("");
        setSelectColor(null);
        setShowModal(false);
        toast.success("Group Created Successfully!!");
      } else {
        toast.error("Group Name already Exists!");
      }
    } else {
      toast.error("Please Enter Group Name and Select Color...");
    }
  };

  // If click outside the modal
  useEffect(() => {
    const handleClickOutsideModalView = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideModalView);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModalView);
    };
  }, [setShowModal]);

  return (
    <>
      <div
        className={StyleModal.modalContainer}
        id="modal"
        ref={modalRef}
        style={{ display: showModal ? "flex" : "none" }}
      >
        <div className={StyleModal.items}>
          <h1>Create New Group</h1>
          <div className={StyleModal.text}>
            <label htmlFor="group">
              Group Name{" "}
              <input
                maxLength={15}
                onChange={(e) => handleChange(e)}
                type="text"
                name="group"
                placeholder="Enter Group Name"
              />
            </label>
          </div>
          <div className={StyleModal.modalColors}>
            <h1>Choose Color</h1>
            {colors.map((color, index) => (
              <div key={index} className={StyleModal.color}>
                <p
                  style={{
                    background: `${color}`,
                    border:
                      selectColorIndexes === index ? "3px solid grey" : "none",
                  }}
                  onClick={() => handleColors(index)}
                ></p>
              </div>
            ))}
          </div>
        </div>
        <div className={StyleModal.createButton}>
          <button onClick={handleCreateGroup}>Create</button>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            closeButton={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
