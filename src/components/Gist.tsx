import React from "react";
import { GistFile  } from "../interfaces";
import CodeFile  from "./CodeFile";

const Gist: React.FC<{ files: GistFile[]; forks_url: string; url: string }> = (
  props
) => {
  // adrianhajdin
  return (
    <div className="flex bg-[#343941] w-[40vw] min-h-[300px] rounded-md flex-col ">
      <div>
        <div className="text-white">Last forked by </div>
      </div>
      <div  className="flex flex-col  overflow-y-auto">
        {props.files.map((file) => (
            <CodeFile filename={file.filename} raw_url={file.raw_url} language={file.language} />
        ))}
      </div>
    </div>
  );
};

export default Gist;
