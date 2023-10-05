import { CategoryProps } from "./InputValueProps";

export interface ArticleProps {
  id: number;
  createdAt: Date;
  title: string;
  content: string;
  catagory: CategoryProps[];
}
