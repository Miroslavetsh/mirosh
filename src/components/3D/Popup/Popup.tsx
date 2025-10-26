import React from "react";
import HomeInfo from "./HomeInfo";

const Popup = ({ currentStage }: { currentStage: number | null }) => {
  return (
    <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
      <HomeInfo currentStage={currentStage} />
    </div>
  );
};

export default Popup;
