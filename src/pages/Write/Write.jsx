import React from "react";
import Topbar from "../../components/TopBar/Topbar";
import './Write.css'

const Write = () => {
  return (
    <div className="write">
      <div style={{marginBottom: "10px"}}>
          <Topbar />
      </div>
          <img
            className="writeImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <form className="writeForm">
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
                {/* <i className="writeIcon fas fa-plus"></i> */}
              </label>
              <input id="fileInput" type="file" />
              <input
                className="writeInput"
                placeholder="Title"
                type="text"
                autoFocus={true}
              />
            </div>
            <div className="writeFormGroup">
              <textarea
                className="writeInput writeText"
                placeholder="Tell your story..."
                type="text"
                autoFocus={true}
              />
            </div>
            <button className="writeSubmit" type="submit">
              Publish
            </button>
          </form>
        </div>
  );
};

export default Write;
