// pages/create.tsx

import React from "react";

import BlogPost from "../../components/forms/BlogPost";
import { ApiPostProps } from "../../@types/Post";

const CreatePost: React.FC<ApiPostProps> = (props) => {
  return <BlogPost {...props} />;
};

export default CreatePost;
