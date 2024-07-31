// import React, { useState } from "react";
// import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
// import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
// import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import IconService from "@/utils/Icons";
// import Image from "next/image";
// import AddPenaltyForm from "../CommonModal";

// const Header = () => {
//   const [selectedPhone, setSelectedPhone] = useState<number | null>(null);
//   const [open, setOpen] = useState(false);

//   const handleOpen = (phone: number) => {
//     setSelectedPhone(phone);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedPhone(null);
//   };

//   return (
//     <div className="flex flex-row gap-2 justify-end items-end">
//       <BedtimeOutlinedIcon />
//       <WidgetsOutlinedIcon />
//       <CallOutlinedIcon onClick={() => handleOpen(2)} />
//       <AccountCircleOutlinedIcon />
//       <AddPenaltyForm open={open} onClose={handleClose} phone={selectedPhone} />
//       {/* <Image src={IconServi
//       ce.callIcon} alt="call" width={50} height={50}/> */}
//     </div>
//   );
// };
// export default Header;
