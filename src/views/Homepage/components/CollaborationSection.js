import React from "react";

// Images
import LogoGoogle from "../../../assets/img/logo-google.png";
import LogoWalmart from "../../../assets/img/logo-walmart.png";
import LogoMicrosoft from "../../../assets/img/logo-microsoft.png";
import LogoNetflix from "../../../assets/img/logo-netflix.png";
import LogoNike from "../../../assets/img/logo-nike.png";
import LogoIHeart from "../../../assets/img/logo-iheartmedia.png";

const CollaborationSection = () => {
  return (
    <div className="w-full py-16 flex gap-4 justify-center flex-wrap">
      <CollaborationLogo image={LogoGoogle} />
      <CollaborationLogo image={LogoWalmart} />
      <CollaborationLogo image={LogoMicrosoft} />
      <CollaborationLogo image={LogoNetflix} />
      <CollaborationLogo image={LogoNike} />
      <CollaborationLogo image={LogoIHeart} />
    </div>
  );
};

const CollaborationLogo = ({ image }) => {
  return (
    <div className="flex items-center justify-center">
      <img src={image} alt={"Collaboration Logo"} />
    </div>
  );
};

export default CollaborationSection;
