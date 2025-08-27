import { createTheme } from "flowbite-react";

const navTheme = createTheme ({
  navbar: {
    root: {
      base: "bg-[#0f1627] px-5 py-5 rounded-lg shadow-md",
    },
    link: {
      base: "text-white hover:text-[#d8c6ce] transition-colors text-lg",
      active: {
        on: "text-white hover:text-[#d8c6ce] transition-colors text-lg",
        off: "md:hover:text-primary-200 text-white",
      },
    },
    toggle: {
      base: "text-white hover:text-[#464143]",
    },
  },
});


export default navTheme;
