import React, {useState, useEffect} from "react";
import CodeModal from "./CodeModal";


const CodeFile: React.FC<{
  filename: string;
  language: string;
  raw_url: string;
}> = (props) => {

  const [showModal, setShowModal] = useState<boolean>(false);
 
  const openCode = () => {
    setShowModal(true);
  }

  return (
    <div className="flex w-full bg-[#292c30] flex-row border-[1px] border-[#111113]  ">
      <div className="flex h-[50px] items-center px-4 w-full  ">
        {props.language !== null && (
          <div className="flex w-[100px] border-[1px] border-[#64FFDA] rounded-3xl justify-center">
            <p className="text-[#64FFDA] text-sm">{props.language}</p>
          </div>
        )}

        <div className="flex justify-end w-full">
          <p onClick={openCode} className="text-white justify-self-end cursor-pointer ">{props.filename}</p>
        </div>
      </div>
     
      {showModal && <CodeModal setShowModal={setShowModal} showModal={showModal} raw_url={props.raw_url} language={props.language} />}
    </div>
  );
};

export default CodeFile;
