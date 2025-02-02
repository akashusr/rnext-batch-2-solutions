// dependencies
import React from "react";

const footerMenuData = [
  {
    id: 1,
    name: "Privacy policy",
    url: "https://learnwithsumit.com/privacy-policy",
  },
  {
    id: 2,
    name: "Terms",
    url: "https://learnwithsumit.com/terms",
  },
];

const FooterMenu = () => {
  return (
    <div className="flex items-center justify-center space-x-4 text-sm/6 text-gray-500 md:justify-end">
      {footerMenuData?.map((item, index) => {
        if (index !== footerMenuData?.length - 1) {
          return (
            <React.Fragment key={item?.id}>
              <a href={item?.url}>{item?.name}</a>
              <div className="h-4 w-px bg-gray-200" />
            </React.Fragment>
          );
        } else {
          return (
            <a key={item?.id} href={item?.url}>
              {item?.name}
            </a>
          );
        }
      })}
    </div>
  );
};

export default FooterMenu;
