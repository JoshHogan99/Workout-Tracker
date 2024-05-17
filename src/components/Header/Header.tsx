import { useState, useEffect, useRef } from "react";

import "./Header.css";

const Header = () => {
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const scrollElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        if (scrollElement.current && scrollElement.current?.scrollTop >= 30) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      } else {
        if (window.scrollY >= 30) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      }
    };

    scrollElement.current = document.getElementById("site-wrapper");
    if (scrollElement.current) {
      scrollElement.current.addEventListener("scroll", handleScroll);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollElement.current) {
        scrollElement.current.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${showHeader ? "show" : ""}`}>
      <p className={`heading ${showHeader ? "show" : ""}`}>Start Workout</p>
    </header>
  );
};

export default Header;
