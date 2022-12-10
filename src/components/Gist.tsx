import React, { useEffect, useState } from "react";
import { GistFile, Fork } from "../interfaces";
import CodeFile from "./CodeFile";
import axios from "axios";
import UserFork from "./UserFork";

const Gist: React.FC<{ files: GistFile[]; forks_url: string; url: string }> = (
  props
) => {
  // adrianhajdin
  const [forks, setForks] = useState<Fork[]>([]);

  const getForks = async () => {
    try {
      const { data } = await axios.get(`${props.forks_url}`);
      createForks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createForks = (data: any) => {

    const forksArr: Fork[] = [];

    data.map((value: any) => {
      const fork: Fork = {
        avatar_url: value.owner.avatar_url,
        date: value.created_at,
        username: value.owner.login,
      };
      forksArr.push(fork);
    });

    // console.log('====================================');
    // console.log(forksArr);
    // console.log('====================================');

    let counter : number = 0;
    const lastCreatedForks : Fork[] = [];

    while(forksArr.length && counter < 3) {
        const fork = forksArr.pop();
        if (fork) {
            counter++;
            lastCreatedForks.push(fork);
        }
    }

    //console.log(lastCreatedForks);

    setForks(lastCreatedForks);
  };

  useEffect(() => {
    getForks();
  }, []);

  return (
    <div className="flex bg-[#343941] w-[40vw]  rounded-md flex-col ">
      <div>
        <div className="flex text-white p-4 flex-col space-y-2">
            <p>Forked by:</p>
            {forks.map((fork) => <UserFork avatar_url={fork.avatar_url} username={fork.username}/>)}
        </div>
      </div>
      <div className="flex flex-col  overflow-y-auto">
        {props.files.map((file) => (
          <CodeFile
            filename={file.filename}
            raw_url={file.raw_url}
            language={file.language}
          />
        ))}
      </div>
    </div>
  );
};

export default Gist;
