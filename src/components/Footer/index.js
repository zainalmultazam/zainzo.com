import React from "react";

import Logo from "../../assets/img/logo.png";
import LogoISO from "../../assets/img/logo-iso.png";
import LogoPSE from "../../assets/img/logo-pse.png";
import QRCodeJournal from "../../assets/img/qr-code-journal.png";

// Social Media Logo
import {
  FaTiktok,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-4 bg-neutral-50">
      <div className="m-auto max-w-desktop">
        <div className="flex gap-10">
          <div>
            <img src={Logo} alt={"Logo"} />
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-4">
              <FooterMenuHeader>Mengapa Zainzo</FooterMenuHeader>
              <FooterMenuItem>Dukungan Penuh</FooterMenuItem>
              <FooterMenuItem>Klien Kami</FooterMenuItem>
            </div>
            <div className="flex flex-col gap-4">
              <FooterMenuHeader>Produk</FooterMenuHeader>
              <FooterMenuItem>Zainzo People</FooterMenuItem>
              <FooterMenuItem>Zainzo Books</FooterMenuItem>
            </div>
            <div className="flex flex-col gap-4">
              <FooterMenuHeader>Solusi</FooterMenuHeader>
              <FooterMenuItem>Integrasi</FooterMenuItem>
              <FooterMenuItem>Harga</FooterMenuItem>
            </div>
            <div className="flex flex-col gap-4">
              <FooterMenuHeader>Perusahaan</FooterMenuHeader>
              <FooterMenuItem>Tentang Kami</FooterMenuItem>
              <FooterMenuItem>Karir</FooterMenuItem>
              <FooterMenuItem>Pusat Bantuan</FooterMenuItem>
              <FooterMenuItem>Kebijakan Privasi</FooterMenuItem>
            </div>
          </div>
          <div className="ml-auto flex gap-4 h-12">
            <img src={QRCodeJournal} alt="Logo ISO" className="h-full" />
            <img src={LogoPSE} alt="Logo ISO" className="h-full" />
            <img src={LogoISO} alt="Logo ISO" className="h-full" />
          </div>
        </div>
        <div className="mt-28 flex">
          <p className="text-neutral-500">
            © Copyright 2023 PT. Zainzo Indonesia
          </p>
          <div className="ml-auto flex items-center gap-4 text-neutral-500">
            <FaTiktok size={24} className="hover:text-black cursor-pointer" />
            <FaLinkedin size={24} className="hover:text-black cursor-pointer" />
            <FaTwitter size={24} className="hover:text-black cursor-pointer" />
            <FaInstagram
              size={24}
              className="hover:text-black cursor-pointer"
            />
            <FaFacebookSquare
              size={24}
              className="hover:text-black cursor-pointer"
            />
            <FaYoutube size={24} className="hover:text-black cursor-pointer" />
            <FaPinterest
              size={24}
              className="hover:text-black cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterMenuHeader = ({ children }) => {
  return <h6 className="font-semibold">{children}</h6>;
};

const FooterMenuItem = ({ children, onClick }) => {
  return (
    <span
      className="text-neutral-500 hover:text-black cursor-pointer"
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Footer;
