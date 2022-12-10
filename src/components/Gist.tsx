import React from "react";
import { GistFile } from "../interfaces";

const Gist : React.FC<{files : GistFile[], forks_url: string, url : string}> = (props) => {
  return (
    <div className="flex bg-[#343941] w-[40vw] min-h-[300px] rounded-lg ">
        <p className="text-white">{props.url}</p>
    </div>
  )
};

export default Gist;
