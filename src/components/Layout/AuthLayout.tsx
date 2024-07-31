import IconService from "@/utils/Icons";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import vector from "../../assets/images/Vector.png";
import building from "../../assets/images/Building.png";
import bike from "../../assets/images/Bike.png";

const AuthLayout = ({ children }: any) => {
  const theme: any = useTheme();

  return (
    <div className="login w-full relative">
      <div>
        {/* <Image src={vector} className="w-full header-bg" alt="no image" />
        <Image className="w-full absolute bottom-0 building-bg" src={building} alt="no image" />
        <Image className="absolute bottom-[17px] left-32 bike-icon" src={bike} alt="no image" /> */}
        <div className="main-content-sec">
          <div className="inner-content-sec">
            {/* <Image className="logo " src={IconService.logo} alt="no image" /> */}
            <div className="">{children}</div>
          </div>
        </div>
        <div className="">
        </div>
        <div className="">
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;


