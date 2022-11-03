export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  };
  content: string;
  published: boolean;
};
