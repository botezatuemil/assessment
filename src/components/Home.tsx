import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import { UserGist, GistFile } from "../interfaces";
import Gist from "./Gist";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [username, setUsername] = useState<string>("");
  const [gists, setGists] = useState<UserGist[]>([]);
  const [allGists, setAllGists] = useState<UserGist[]>([]);

  const [finised, setFinished] = useState<boolean>(false);
  const [per_page, setPerPage] = useState<number>(5);

  const [valid, setValid] = useState<boolean>(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setFinished(false);
    setPerPage(5);
    setPage(1);

    getPublicGists();
    
  };

  const handleNextPage = () => {
    if (!finised) {

      const slicedGists = allGists.slice(per_page, per_page + 5);

      if (allGists.length <= per_page) {
        setFinished(true);

      } else {
        setPage((page) => page + 1);
        setPerPage((per_page) => per_page + 5);
       
      }
      if (slicedGists.length !== 0)
      setGists(slicedGists);
      
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((page) => page - 1);

      if (per_page > 5) {
        setPerPage((per_page) => per_page - 5);
        const slicedGists = allGists.slice(per_page - 10, per_page -5);
        setGists(slicedGists);
        setFinished(false);
      } 
 
    }
  };

  const getPublicGists = async () => {

    const url = `https://api.github.com/users/${username}/gists`;

    try {
      const { data } = await axios.get(`${url}`, {
       
      });
      createGists(data);
      setValid(true);
    } catch (error : any) {
      if (error.response.status === 404) {
        setValid(false);
      }
    }
  };

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const createGists = (data: any) => {
    const gistsArr: UserGist[] = [];
    data.map((value: any) => {
      const filesArr: GistFile[] = [];
      for (const key in value.files) {
        const newFile: GistFile = {
          filename: value.files[key].filename,
          language: value.files[key].language,
          raw_url: value.files[key].raw_url,
        };
        filesArr.push(newFile);
      }

      const gist: UserGist = {
        url: value.url,
        files: filesArr,
        forks_url: value.forks_url,
      };

      gistsArr.push(gist);
    });

    setAllGists(gistsArr);

    const slicedGists = gistsArr.slice(0, per_page);

    if (slicedGists.length < per_page) {
      setFinished(true);
    }
    setGists(slicedGists);
    
  };

  return (
    <div className="flex w-full h-full  flex-col items-center space-y-10 p-4">
      <form
        className="flex flex-row space-x-4 h-[70px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col place-self-end space-y-1">
          <label className="text-white">Search public gists </label>
          <input
            className="w-[30vw] rounded bg-[#343941] text-white h-[30px] px-2"
            placeholder="Enter Github username"
            onChange={onChangeHandler}
            value={username}
          />
        </div>
        <button
          type="submit"
          className="bg-[#2EA043] w-[10vw] h-[30px] text-white rounded cursor-pointer place-self-end"
        >
          Search
        </button>
      </form>

      <div className="flex flex-col space-y-12  overflow-y-auto h-[70vh]">
        {valid ? gists.map((gist) => (
          <Gist files={gist.files} forks_url={gist.forks_url} url={gist.url}  />
        )) : (
           <div className="flex w-[20vw] h-[50px] bg-red-400  border-2 border-red-500 justify-center items-center">
             <p className="text-white">Username not found!</p>
           </div>

        )}
      </div>

      <div className="flex flex-row justify-between w-[40vw]">
        <button
          className="bg-[#2EA043] w-[10vw] h-[30px] text-white rounded cursor-pointer"
          onClick={handlePreviousPage}
        >
          Previous Page
        </button>
        <p className="text-white">{page}</p>
        <button
          className="bg-[#2EA043] w-[10vw] h-[30px] text-white rounded cursor-pointer "
          onClick={handleNextPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Home;
