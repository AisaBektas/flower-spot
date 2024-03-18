import { FC } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/logo.png";
import { ROUTES } from "../navigation/routes.enum";

interface ILogoProps {
  link?: string;
  icon?: string;
}

export const Logo: FC<ILogoProps> = ({
  link = ROUTES.HOME,
  icon = LogoImage,
}) => {
  return (
    <Link to={link}>
      <img
        src={icon}
        className="h-[30px] w-[169px]"
        alt="FlowrSpot Logo"
        title="FlowrSpot Logo"
      />
    </Link>
  );
};
