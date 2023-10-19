import { CategoryProps } from "./InputValueProps";

export interface ArticleProps {
  id: string;
  created_at: Date;
  title: string;
  content: string;
  catagory: CategoryProps[];
  image_url?: string;
}
