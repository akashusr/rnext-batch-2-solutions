// dependencies
import React from "react";

const buttonsData = [
  {
    id: 1,
    name: "Sign in",
    url: "/sign-in",
  },
  {
    id: 2,
    name: "Create account",
    url: "/create-account",
  },
];

const HeaderButtons = () => {
  return (
    <div className="ml-auto flex items-center">
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
        {buttonsData?.map((item, index) => {
          if (index !== buttonsData?.length - 1) {
            return (
              <React.Fragment key={item?.id}>
                <a
                  href={item?.url}
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  {item?.name}
                </a>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
              </React.Fragment>
            );
          } else {
            return (
              <a
                key={item?.id}
                href={item?.url}
                className="text-sm font-medium text-gray-700 hover:text-gray-800"
              >
                {item?.name}
              </a>
            );
          }
        })}
      </div>
      <div className="hidden lg:ml-8 lg:flex">
        <a
          href="#"
          className="flex items-center text-gray-700 hover:text-gray-800"
        >
          <img
            src="https://www.countryflags.com/wp-content/uploads/canada-flag-png-xl.png"
            alt=""
            className="block h-auto w-5 flex-shrink-0"
          />
          <span className="ml-3 block text-sm font-medium">CAD</span>
          <span className="sr-only">, change currency</span>
        </a>
      </div>
    </div>
  );
};

export default HeaderButtons;
