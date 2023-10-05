import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import Link from "next/link";
import React from "react";
import { ArticleProps } from "../types/ArticleProps";

const ArticleCard = ({ id, createdAt, content, title }: ArticleProps) => {
  return (
    <Link href="/">
      <Card className="mt-6 ml-6 w-96 transform hover:scale-105 hover:shadow-lg transition-transform duration-300">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ArticleCard;
