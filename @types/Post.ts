export type PostProps = {
  id: number;
  slug: string;
  title: string;
  author: {
    name: string;
    email: string;
  };
  content: string;
  published: boolean;
  createdAt: Date;
};
