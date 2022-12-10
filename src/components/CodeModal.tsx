import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import axios from "axios";

const CodeModal: React.FC<{
  raw_url: string;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  language: string;
}> = (props) => {
  const [code, setCode] = useState<string>();

  const fetchCode = async () => {

    try {
      const { data } = await axios.get(`${props.raw_url}`);

      if (props.language === "JSON") {
        setCode(JSON.stringify(data));
      } else {
        setCode(data);
      }
     
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    props.setShowModal(false);
  };

  useEffect(() => {
    fetchCode();
  }, []);

  return (
    <div
      className="flex fixed inset-0 0  bg-opacity-10 backdrop-blur-[2px] justify-center items-center z-50 "
      onClick={closeModal}
    >
      <div className="w-[50vw] h-[50vh] bg-[#161B22] z-20 rounded overflow-y-auto   ">
        <CopyBlock
          text={code}
          language={props.language}
          theme={dracula}
          wrapLines
        />
      </div>
    </div>
  );
};

export default CodeModal;
