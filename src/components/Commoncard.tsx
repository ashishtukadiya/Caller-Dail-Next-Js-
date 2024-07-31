import IconService from "@/utils/Icons";
import { Card, Divider, Rating, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideoChatOutlinedIcon from "@mui/icons-material/VideoChatOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface TYPE {
  image: any;
  name: string;
  phone: any;
  onCallClick: (phone: any) => void;
}

const Commoncard = ({ image, name, phone, onCallClick }: TYPE) => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Card className="2xl:max-w-[100vw] xl:max-w-[40vw] lg:max-w-[50vw] md:max-w-[50vw] sm:max-w-[30vw] ">
        <div className="px-5 py-5">
          <div className="flex flex-row gap-3">
            <div>
              <Image src={image} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              {" "}
              <Typography>{name}</Typography>
              <Typography>{phone}</Typography>
            </div>
          </div>
          <Divider />
          <div className="flex flex-row 2xl:gap-[26px] xl:gap-[20px] lg:gap-[20px] md:gap-[20px] sm:gap-[20px]">
            <CallOutlinedIcon className="cursor-pointer" onClick={() => onCallClick(phone)} />
            <VideoChatOutlinedIcon className="cursor-pointer" />
            <MessageOutlinedIcon className="cursor-pointer" />
            <Rating
              name="single-star"
              value={value}
              max={1}
              onChange={(event, newValue: any) => {
                setValue(newValue);
              }}
            />
            <MoreVertIcon className="cursor-pointer" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Commoncard;
