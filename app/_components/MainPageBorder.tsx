import React, { ReactNode } from "react";

const MainPageBorder = ({ children }: { children: ReactNode }) => {
  return <div className="m-5">{children}</div>;
};

export default MainPageBorder;
