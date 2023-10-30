"use client";
import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { getArticle } from "@/api/ArticleAPI";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { ArticleProps } from "../types/ArticleProps";
import { SiJavascript, SiAmazonaws } from "react-icons/si";
import { DiCss3, DiReact } from "react-icons/di";

export const Nav = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  const { data } = useQuery<PostgrestSingleResponse<ArticleProps[]> | null>(
    ["article"],
    getArticle
  );
  console.log(data);

  const stacks = ["Javascript", "CSS", "React", "DevOps"];

  //1. DB를 4번 호출해서 (DB에 select * from article where category = 'javascript' 에 해당하는 데이터를 불러온다.
  //2. 받은 데이터의 게시물들의 카테고리를 확인 후 ... 어떻게 매칭시키지?
  //3. 카테고리가 javascript인 것도 count 해야함...

  {
    stacks.map((stack, i) => {
      <Accordion
        open={open === i}
        icon={
          <Chip
            value="15"
            size="sm"
            variant="ghost"
            color="blue-gray"
            className="rounded-full"
          />
        }
      >
        <ListItem className="p-0" selected={open === i}>
          <AccordionHeader
            onClick={() => handleOpen(i)}
            className="border-b-0 p-3"
          >
            <ListItemPrefix>
              <SiJavascript className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" className="mr-auto font-normal">
              {stack}
            </Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List className="p-0">
            <ListItem>
              <ListItemPrefix>
                <SiJavascript strokeWidth={3} className="h-3 w-5" />
              </ListItemPrefix>
              {stack}
              <ListItemSuffix>
                <Chip
                  value="15"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              {/* List Item 안에서 map이 돌아가야함. 필요한 value title */}
              <ListItemPrefix>
                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
              </ListItemPrefix>
              게시물 이름
            </ListItem>
          </List>
        </AccordionBody>
      </Accordion>;
    });
  }

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          게시물
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <Chip
              value="15"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <SiJavascript className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Javascript
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <SiJavascript strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Javascript
                <ListItemSuffix>
                  <Chip
                    value="15"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                게시물 이름
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <Chip
              value="15"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <DiCss3 className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                CSS
              </Typography>
            </AccordionHeader>
          </ListItem>

          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          icon={
            <Chip
              value="15"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          }
        >
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <DiReact className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                React
              </Typography>
            </AccordionHeader>
          </ListItem>

          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 4}
          icon={
            <Chip
              value="15"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          }
        >
          <ListItem className="p-0" selected={open === 4}>
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <SiAmazonaws className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                DevOps
              </Typography>
            </AccordionHeader>
          </ListItem>

          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </Card>
  );
};
