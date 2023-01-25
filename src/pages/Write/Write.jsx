import "./Write.css";
import axios from "axios";
import Topbar from "../../components/TopBar/Topbar";
import { Context } from "../../context/Context";
import { useContext, useState } from "react";

const Write = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      category,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("https://techytips-backend.onrender.com/api/upload", data);
      } catch (err) {}
    }
    try {
      // works
      const res = await axios.post("https://techytips-backend.onrender.com/api/posts/", newPost);

      //TODO : Error will post but will not load directly to the post id - 
      window.location.replace("/posts/" + res.username._id); 
    } catch (err) {}
  };

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <div style={{ marginBottom: "10px" }}>
        <Topbar />
      </div>
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus" alt="add photo"></i>
          </label>
          <input
            type="text"
            placeholder="Category (Technology)"
            className="writeCategory"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
