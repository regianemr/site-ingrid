import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, ThemeProvider } from "flowbite-react";
import navTheme from "./Themes";

export function MyNavbar() {
  return (
    <ThemeProvider theme={navTheme}>
      <Navbar fluid rounded>
        <NavbarBrand href="/">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="bg-self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ingrid Arcanjo</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Início
          </NavbarLink>
          <NavbarLink href="#">
            Sobre
          </NavbarLink>
          <NavbarLink href="#">Cursos</NavbarLink>
          <NavbarLink href="#">Perguntas</NavbarLink>
          <NavbarLink href="#">Contato</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </ThemeProvider>
  );
}

