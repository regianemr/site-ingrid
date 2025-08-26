import { createTheme } from "flowbite-react";

const navTheme = createTheme ({
  navbar: {
    root: {
      base: "bg-[#1E3A8A] px-6 py-3 rounded-none shadow-md",
    },
    link: {
      base: "text-white hover:text-[#DB2777] transition-colors",
      active: {
        on: "text-[#DB2777]",
        off: "text-white",
      },
    },
    toggle: {
      base: "text-white hover:text-[#DB2777]",
    },
  },
  button: {
    root: {
      base: "px-6 py-3 font-semibold rounded-lg transition",
      primary: "bg-[#DB2777] text-white hover:bg-[#BE185D]",
      secondary: "bg-white text-[#1E3A8A] hover:bg-gray-100",
    },
  },
  modal: {
    root: {
      base: "bg-white rounded-lg shadow-lg p-6",
    },
  },
});


export default navTheme;
