import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./newItem.scss";
import SideBar from "../../components/sideBar/SideBar";
import NavBar from "../../components/navBar/NavBar";
import { useState } from "react";

const NewItem = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="newItem">
      <SideBar />
      <div className="newItemContainer">
        <NavBar />
        <div className="top">
          <h2>{title}</h2>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="imageUpload">
                  Image <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
