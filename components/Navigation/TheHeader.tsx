import { AccountCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import MenuIcon from '@mui/icons-material/Menu';
const buttonStyle = {
  
}
const Header = () => {
  const { t } = useTranslation();
  const [auth, setAuth] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const toggle = (): void => {
    setIsOpen(!isOpen);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className="bg-primary"
      // style={zIndex: 100, width:100%}
    >
      <div className="font-sans antialiased container mx-auto text-white md:mx-auto relative h-full md:mb-auto flex justify-between flex-wrap items-center ">
        <Link href="/">
          <a className="relative text-center ml-2 md:ml-0 mt-2 md:mt-auto">
            <Image
              src="/images/assets/svg/logo_new.svg"
              alt="Desijewel"
              width={155}
              height={56}
            />
          </a>
        </Link>
        <div className="gap-3 text-3xl md:hidden flex items-center">
          <div className="flex gap-2">
            {/* <div
              v-if="$auth.loggedIn"
              className="h-full my-auto md:p-2 text-3xl flex gap-2"
            >
              <AuthAccountDropdown />
            </div> */}

            <button
              className="flex items-center px-3 py-2 border-2 rounded text-white border-teal-light mr-1 sm:mr-3"
              onClick={toggle}
              aria-label="menu"
            > <MenuIcon /></button>
          </div>
        </div>
        <div
          className={`font-semibold w-full block flex-grow md:flex md:flex-initial md:w-auto items-center md:mt-0 h-full ml-2 md:ml-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="h-full my-auto">
            <ul className="nav-list md:flex md:flex-row flex flex-col w-full md:w-auto md:pt-0">
              <li>
                <Link href="/">
                  <a className="block px-6 py-3 md:py-6 font-Poppins md:hover:bg-white md:hover:text-primary" aria-label="Home">{t("home")}</a>
                </Link>
              </li>
              <li>
                <Link href="/gold">
                  <a className="block px-6 py-3 md:py-6 font-Poppins md:hover:bg-white md:hover:text-primary" aria-label="Gold">{t("gold")}</a>
                </Link>
              </li>
              <li>
                <Link href="/silver">
                  <a className="block px-6 py-3 md:py-6 font-Poppins md:hover:bg-white md:hover:text-primary" 
                  aria-label="Silver">{t("silver")}</a>
              
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="block px-6 py-3 md:py-6 font-Poppins md:hover:bg-white md:hover:text-primary"
                    aria-label="Contact"   >{t("contact")}</a>
                </Link>
              </li>

              {auth ? (
                <li className="mx-2 py-2 md:py-auto md:mx-4 hidden md:block">
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                  </div>
                </li>
              ) : (
                <li
                  
                
                >
                  <Link href="/about">
                    <a className="block px-6 py-3 md:py-6 font-Poppins md:hover:bg-white md:hover:text-primary" aria-label="About">{t("about")}</a>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
