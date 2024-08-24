import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //this useloaderdata is a hook which is basically fetching the data from the github and in the main.jsx it is called in the loader , and the function is defined below which is basically calling the fetch api, this is just an optimal way to load the data in order to avoid the delays
  const data = useLoaderData();

  //   //usestate is used here for the rendering

  //   const [data, setData] = useState([]);
  //   //useEffect is used to load the component, here we want a github followers thats why we are using the yuseefect so it will load the page when aoi called and then give the followerss
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/fizasaeed")
  //       .then((responce) => responce.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="m-4 p-3 text-3xl bg-gray-600 text-center  text-white">
      Github followers :{data.followers}
      <img src={data.avatar_url} alt="Github picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const responce = await fetch("https://api.github.com/users/fizasaeed");
  return responce.json();
};
