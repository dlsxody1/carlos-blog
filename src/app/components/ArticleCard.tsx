import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { ArticleProps } from "../types/ArticleProps";
import Link from "next/link";

const ArticleCard = (articleInfo: { articleInfo: ArticleProps }) => {
  let content = articleInfo.articleInfo.content.replace(/<[^>]*>|&nbsp;/g, "");

  return (
    <Card className="mt-6 ml-6 w-96  transform hover:scale-105 hover:shadow-lg transition-transform duration-300">
      <Link prefetch={false} href={`/article/${articleInfo?.articleInfo?.id}`}>
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {articleInfo?.articleInfo?.title}
          </Typography>
          <div className="flex">
            {articleInfo?.articleInfo?.catagory?.map((categoryObj, i) => {
              return (
                <div className="mt-2 mb-2 p-3 bg-green-200 rounded-lg" key={i}>
                  {categoryObj.category}
                </div>
              );
            })}
          </div>
          <Typography>
            {content.length > 100 ? content.slice(0, 100) + "..." : content}
          </Typography>
        </CardBody>
      </Link>
    </Card>
  );
};

export default ArticleCard;
