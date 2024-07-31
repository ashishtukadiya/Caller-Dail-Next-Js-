import { Container } from "@mui/material";
import { ReactNode, useState } from "react";
import Sidebar from "../sidebar/sidebar";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddPenaltyForm from "../CommonModal";
import { Sd } from "@mui/icons-material";
import IconService from "@/utils/Icons";
import Image from "next/image";


interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const event: any = [
    {
      id: 1,
      image: IconService.profile1,
      name: "Amit Sharma",
      phone: 9123456789,
    },
    {
      id: 2,
      image: IconService.profile2,
      name: "Priya Singh",
      phone: 9234567890,
    },
    {
      id: 3,
      image: IconService.profile3,
      name: "Raj Patel",
      phone: 9345678901,
    },
    {
      id: 4,
      image: IconService.profile4,
      name: "Neha Gupta",
      phone: 9456789012,
    },
    {
      id: 5,
      image: IconService.profile4,
      name: "Arjun Reddy",
      phone: 9567890123,
    },
    {
      id: 6,
      image: IconService.profile4,
      name: "Pooja Mehta",
      phone: 9678901234,
    },
    {
      id: 7,
      image: IconService.profile4,
      name: "Vikram Das",
      phone: 9789012345,
    },
    {
      id: 8,
      image: IconService.profile4,
      name: "Anita Rao",
      phone: 9890123456,
    },
    {
      id: 9,
      image: IconService.profile4,
      name: "Ravi Kumar",
      phone: 9912345678,
    },
    {
      id: 10,
      image: IconService.profile4,
      name: "Sana Khan",
      phone: 9923456789,
    },
    {
      id: 11,
      image: IconService.profile4,
      name: "Kunal Joshi",
      phone: 9934567890,
    },
  ];

  return (
    <div style={{ height: "100vh", maxWidth: "100vw", display: "flex" }}>
      <Sidebar
        setIsAuthenticated={setIsAuthenticated}
        isOpen={isOpen}
        handleToggle={handleToggle}
      />
      <div
        className="main-section px-5 py-6"
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <div className="flex flex-row gap-2 justify-end items-end">
          <BedtimeOutlinedIcon className="cursor-pointer" />
          <WidgetsOutlinedIcon className="cursor-pointer" />
          <Image
            src={IconService.callDial}
            alt="call dial"
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={handleOpen}
            style={{ filter: "invert(45%) sepia(80%) saturate(500%) hue-rotate(210deg)" }} // Example: change color to blue

          />
          <AccountCircleOutlinedIcon className="cursor-pointer" />
          <AddPenaltyForm
            open={open}
            onClose={handleClose}
            phone={0}
            events={event}
          />
          {/* <Image src={IconServi
      ce.callIcon} alt="call" width={50} height={50}/> */}
        </div>
        <div className="mt-6" style={{ overflow: "auto", flexGrow: 1 }}> {children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
