export type PostProps = {
  id: number;
  createdAt: Date;
  slug: string;
  title: string;
  preview?: string;
  previewImage?: string;
  tags?: string[];
  author: {
    name: string;
    email: string;
  };
  content: string;
  published: boolean;
};

export interface ApiPostProps extends PostProps {
  error: string;
}
