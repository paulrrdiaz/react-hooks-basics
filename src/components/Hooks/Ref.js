import React, { useRef } from "react";
import Reward from "react-rewards";
import { FaMousePointer } from "react-icons/fa";

export default () => {
  const reward = useRef();

  return (
    <>
      <h2 className="text-3xl font-bold">React useRef</h2>
      <Reward type="confetti" ref={reward}>
        <button
          onClick={() => reward.current.rewardMe()}
          className="flex items-center justify-center bg-red-500 w-10 h-10 rounded-lg p-2 m-auto focus:outline-none"
        >
          <FaMousePointer className="text-white" />
        </button>
      </Reward>
    </>
  );
};
