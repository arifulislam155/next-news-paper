"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLargeFill } from "react-icons/ri";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="md:hidden">
      <button onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <RiCloseLargeFill size={24} />
        ) : (
          <AiOutlineMenu size={24} />
        )}
      </button>
    </div>
  );
};

export default MobileMenu;
