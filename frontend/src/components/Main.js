import React, { useContext, useRef } from "react";
import { ImageContext } from "../image-context/imageContext";
import { Link } from "react-router-dom";
import ImageDisplay from "./imageDisplay";
const Main = () => {
  const searchData = useRef(null);

  const { addSearchText } = useContext(ImageContext);
  return (
    <div>
      <div className="header">
        <h1>React Photo Search</h1>
        <div className="bookmark">Add Bookmarks</div>
        <div>
          <input
            onChange={(e) => {
              searchData.current = e.target.value;
            }}
            placeholder="Search free high resolution images"
          />

          <Link
            to="/"
            onClick={() => {
              addSearchText(searchData.current);
            }}
          >
            <button>Search</button>
          </Link>
        </div>
        <div className="buttons">
          {/* <Link
            className="button"
            to="/mountain"
            onClick={() => {
              addSearchText("Mountain");
            }}
          >
            Mountain
          </Link> */}
          {/* <Link
            className="button"
            to="/beaches"
            onClick={() => {
              addSearchText("beaches");
            }}
          >
            Beaches
          </Link> */}
          {/* <Link
            className="button"
            to="/birds"
            onClick={() => {
              addSearchText("birds");
            }}
          >
            Birds
          </Link> */}
          {/* <Link
            className="button"
            to="/food"
            onClick={() => {
              addSearchText("food");
            }}
          >
            food
          </Link> */}
        </div>
      </div>

      <ImageDisplay />
    </div>
  );
};

export default Main;
