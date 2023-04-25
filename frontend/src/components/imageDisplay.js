import React, { useContext } from "react";
import { ImageContext } from "../image-context/imageContext";

const ImageDisplay = () => {
  const { imageData } = useContext(ImageContext);
  return (
    <div>
      <section className="image-container">
        {imageData.map((imageurl, key) => {
          return (
            <article className="flickr-image wid">
              <img src={imageurl} key={key} alt="img" className="imgwid" />
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default ImageDisplay;
