import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, ThemeProvider } from "flowbite-react";
import navTheme from "./Themes";

export function MyNavbar() {
  return (
    <ThemeProvider theme={navTheme}>
      <Navbar fluid rounded>
        <NavbarBrand href="/">
          {/* <img src="/" className="mr-3 h-6 sm:h-9" alt="Logo" /> */}
          <span className="bg-self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ingrid Arcanjo</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" >
            Início
          </NavbarLink>
          <NavbarLink href="#">
            Sobre o Curso
          </NavbarLink>
          <NavbarLink href="#">Diferenciais</NavbarLink>
          <NavbarLink href="#">Quem sou</NavbarLink>
          <NavbarLink href="#">Perguntas</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </ThemeProvider>
  );
}

