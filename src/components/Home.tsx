import React, { useState } from "react";
import axios from "axios";
import qs from "qs";

const Home = () => {

  const [page, setPage] = useState<number>(1);
  const [username, setUsername] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    getPublicGists();
  };

  const getPublicGists = async () => {
    const url = `https://api.github.com/users/${username}/gists`;

    const options = {
      per_page: "2",
      page: page,
    };

    const queryString = qs.stringify(options);

    try {
      const { data } = await axios.get(`${url}?${queryString}`);
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (event:React.FormEvent<HTMLInputElement> ) => {
    setUsername(event.currentTarget.value);
  }

  return (
    <div className="flex w-full h-full justify-center">
      <form
        className="flex flex-row space-x-4 h-[70px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col place-self-end">
          <label className="text-white">Search public Gists </label>
          <input
            className="w-[30vw] rounded bg-[#343941] text-white h-[30px] px-2"
            placeholder="Enter Github username"
            onChange={onChangeHandler}
          />
        </div>
        <button
          type="submit"
          className="bg-[#2EA043] w-[10vw] h-[30px] text-white rounded cursor-pointer place-self-end"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
