import React, { useState } from "react";

const TabsMenu = () => {
  const [tabsActive, setTabsActive] = useState(0);

  const MenuList = ["Semua", "HRM & Payroll", "Akuntansi"];

  return (
    <div>
      <div>
        <ul className="flex gap-10">
          {MenuList.map((item, index) => {
            return (
              <TabsMenuItem
                key={`menu-${index}`}
                active={tabsActive === index}
                onClick={() => setTabsActive(index)}
              >
                {item}
              </TabsMenuItem>
            );
          })}
        </ul>
        <div className="mt-12 w-full aspect-[230/91] bg-blue-100 rounded-lg"></div>
      </div>
    </div>
  );
};

const TabsMenuItem = ({ children, onClick, active = false }) => {
  return (
    <li
      className={`relative pb-3 after:content-[''] after:absolute after:h-0.5 after:left-0 after:right-0 after:bottom-0 after:bg-primary ${
        active ? "after:opacity-100" : "after:opacity-0"
      } cursor-pointer hover:after:absolute hover:after:h-0.5 hover:after:opacity-100 transition-all`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default TabsMenu;
