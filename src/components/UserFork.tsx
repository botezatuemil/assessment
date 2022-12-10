import React from "react";

const UserFork: React.FC<{ username: string; avatar_url: string }> = (
  props
) => {
  return (
    <div >
      <div className="flex flex-row space-x-2">
        <img src={props.avatar_url} className="w-[30px] h-[30px]" />
        <p>{props.username}</p>
      </div>
    </div>
  );
};

export default UserFork;
