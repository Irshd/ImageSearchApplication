import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const ImageContext = createContext();
const ImageProvider = (props) => {
  const [searchText, setSearchText] = useState("");
  const [imageData, setImageData] = useState([]);
  function addSearchText(data) {
    setSearchText(data);
  }
  useEffect(() => {
    //method key cat/mountain/ sort per_page:40 format xml/json
    const params = {
      method: "flickr.photos.search",
      api_key: "51493e6093c1103bf21713d6d752feb2",
      text: searchText,
      sort: "",
      per_page: 40,
      license: "4",
      extras: "owner_name, license",
      format: "json",
      nojsoncallback: 1,
    };

    //farm id secret server
    const parameters = new URLSearchParams(params);
    //?per_page=24&
    const url = `https://api.flickr.com/services/rest/?${parameters}`;
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);
        const arr = resp.data.photos.photo.map((imgData) => {
          return fetchFlickrImageUrl(imgData, "q");
        });
        setImageData(arr);
      })
      .catch(() => {})
      .finally(() => {});
  }, [searchText]);
  const fetchFlickrImageUrl = (photo, size) => {
    //farm66.staticflickr.com/server/id_
    let url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
    // let size = "300px";
    if (size) {
      url += `_${size}`;
    }
    url += ".jpg";
    return url;
  };
  return (
    <ImageContext.Provider value={{ imageData, addSearchText }}>
      {props.children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageProvider };
