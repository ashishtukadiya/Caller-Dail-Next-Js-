import { useState } from "react";
import { Divider, Typography } from "@mui/material";
import IconService from "../../utils/Icons";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = ({
  setIsAuthenticated,
  isOpen,
  handleToggle,
}: {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  isOpen: boolean;
  handleToggle: () => void;
}) => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    setIsAuthenticated(false);
    router.push("/auth/login/");
  };

  return (
    <div
      className={`bg-[#52489c] h-screen flex flex-col transition-width duration-300 ${
        isOpen ? "w-[240px]" : "w-[0px]"
      }`}
    >
      <div className="flex justify-center items-center p-5 mb-7">
        <Typography
          className={`${
            selectedItem === "Dashboard" ? "text-[#c77dff]" : "text-[#fff]"
          }`}
        >
          ASTPP
        </Typography>
      </div>

      <button
        onClick={handleToggle}
        className={`absolute top-4 mt-14  transition-width duration-300 ${
          isOpen === true ? "ml-[230px]" : "ml-[0px]"
        } bg-gray-300 p-1 rounded`}
      >
        {isOpen ? "←" : "→"}
      </button>
      {/* {isOpen && <Divider />} */}
      <div className="flex-1 overflow-y-auto pt-[63px] px-3 flex flex-col gap-2">
        <Link href="/" passHref>
          <div
            className={`flex flex-row gap-2 py-[14px] pl-6 cursor-pointer ${
              selectedItem === "Dashboard" ? "bg-[#1CD2AD1A]" : ""
            }`}
            onClick={() => handleItemClick("Dashboard")}
          >
            {/* <img
              src={
                selectedItem === "Dashboard"
                  ? IconService.dashboardPrimary
                  : IconService.dashboard
              }
            /> */}
            {isOpen && (
              <Typography
                variant="body3"
                className={`${
                  selectedItem === "Dashboard"
                    ? "text-[#c77dff]"
                    : "text-[#fff]"
                }`}
              >
                Dashboard
              </Typography>
            )}
          </div>
        </Link>
        <Link href="/invoice" passHref>
          <div
            className={`flex flex-row gap-2 py-[14px] pl-6 cursor-pointer ${
              selectedItem === "Invoices" ? "bg-[#1CD2AD1A]" : ""
            }`}
            onClick={() => handleItemClick("Invoices")}
          >
            {/* <img
              src={
                selectedItem === "Invoices"
                  ? IconService.invoicePrimary
                  : IconService.invoice
              }
            /> */}
            {isOpen && (
              <Typography
                variant="body3"
                className={`${
                  selectedItem === "Invoices" ? "text-[#c77dff]" : "text-[#fff]"
                }`}
              >
                Invoices
              </Typography>
            )}
          </div>
        </Link>
        <div
          className={`flex flex-row gap-2 py-[14px] pl-6 cursor-pointer ${
            selectedItem === "Proposals" ? "bg-[#1CD2AD1A]" : ""
          }`}
          onClick={() => handleItemClick("Proposals")}
        >
          {/* <img
            src={
              selectedItem === "Proposals"
                ? IconService.proposalPrimary
                : IconService.proposal
            }
          /> */}
          {isOpen && (
            <Typography
              variant="body3"
              className={`${
                selectedItem === "Proposals" ? "text-[#c77dff]" : "text-[#fff]"
              }`}
            >
              Proposals
            </Typography>
          )}
        </div>
        <div
          className={`flex flex-row gap-2 py-[14px] pl-6 cursor-pointer ${
            selectedItem === "Services" ? "bg-[#1CD2AD1A]" : ""
          }`}
          onClick={() => handleItemClick("Services")}
        >
          {/* <img
            src={
              selectedItem === "Services"
                ? IconService.servicesPrimary
                : IconService.services
            }
          /> */}
          {isOpen && (
            <Typography
              variant="body3"
              className={`${
                selectedItem === "Services" ? "text-[#c77dff]" : "text-[#fff]"
              }`}
            >
              Services
            </Typography>
          )}
        </div>
        <div
          className={`flex flex-row gap-2 py-[14px] pl-6 cursor-pointer ${
            selectedItem === "Transactions" ? "bg-[#1CD2AD1A]" : ""
          }`}
          onClick={() => handleItemClick("Transactions")}
        >
          {/* <img
            src={
              selectedItem === "Transactions"
                ? IconService.transactionPrimary
                : IconService.transation
            }
          /> */}
          {isOpen && (
            <Typography
              variant="body3"
              className={`${
                selectedItem === "Transactions"
                  ? "text-[#c77dff]"
                  : "text-[#fff]"
              }`}
            >
              Transactions
            </Typography>
          )}
        </div>
        <div
          className={`flex flex-row gap-2 py-[14px] pl-6 cursor-pointer ${
            selectedItem === "Projects" ? "bg-[#1CD2AD1A]" : ""
          }`}
          onClick={() => handleItemClick("Projects")}
        >
          {/* <img
            src={
              selectedItem === "Projects"
                ? IconService.projectPrimary
                : IconService.project
            }
          /> */}
          {isOpen && (
            <Typography
              variant="body3"
              className={`${
                selectedItem === "Projects" ? "text-[#c77dff]" : "text-[#fff]"
              }`}
            >
              Projects
            </Typography>
          )}
        </div>
        <div
          className={`flex flex-row gap-2 py-[14px] pl-6 cursor-pointer ${
            selectedItem === "Customers" ? "bg-[#1CD2AD1A]" : ""
          }`}
          onClick={() => handleItemClick("Customers")}
        >
          {/* <img
            src={
              selectedItem === "Customers"
                ? IconService.customerPrimary
                : IconService.customers
            }
          /> */}
          {isOpen && (
            <Typography
              variant="body3"
              className={`${
                selectedItem === "Customers" ? "text-[#c77dff]" : "text-[#fff]"
              }`}
            >
              Customers
            </Typography>
          )}
        </div>
      </div>
      {/* {isOpen && <Divider />} */}
      <div className="sticky bottom-0 px-3">
        <div
          className={`flex flex-row gap-2 py-[14px] pl-6 cursor-pointer ${
            selectedItem === "Settings" ? "bg-[#1CD2AD1A]" : ""
          }`}
          onClick={() => handleItemClick("Settings")}
        >
          {/* <img
            src={
              selectedItem === "Settings"
                ? IconService.settingPrimary
                : IconService.setting
            }
          /> */}
          {isOpen && (
            <Typography
              variant="body3"
              className={`${
                selectedItem === "Settings" ? "text-[#c77dff]" : "text-[#fff]"
              }`}
            >
              Settings
            </Typography>
          )}
        </div>
        <div
          className={`flex flex-row gap-2 py-[14px] pl-6 cursor-pointer ${
            selectedItem === "Logout" ? "bg-[#1CD2AD1A]" : ""
          }`}
          onClick={handleLogout}
        >
          {/* <img
            src={
              selectedItem === "Logout"
                ? IconService.logoutPrimary
                : IconService.logout
            }
          /> */}
          {isOpen && (
            <Typography
              variant="body3"
              className={`${
                selectedItem === "Logout" ? "text-[#c77dff]" : "text-[#fff]"
              }`}
            >
              Logout
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
