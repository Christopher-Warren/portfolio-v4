export interface ProjectType {
  id: number;
  name: string;
  description: string;
  tech: string[];
  primaryImage: string;
  images: string[];
  imagesOrientation?: "portrait" | "landscape";
  demoURL: string;
  sourceURL: string;
  folderName: string;
}
