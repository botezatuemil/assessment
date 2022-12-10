import React from "react";

const Home = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  };

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
