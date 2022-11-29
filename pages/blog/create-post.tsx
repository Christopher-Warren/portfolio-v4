// pages/create.tsx

import React from "react";

import Post from "../../components/forms/Post";
import { ApiPostProps } from "../../@types/Post";

const Draft: React.FC<ApiPostProps> = (props) => {
  return <Post {...props} />;
};

export default Draft;
