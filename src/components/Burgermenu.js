import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";

const Burgermenu = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleStateChange = (state) => {
    setIsClicked(state.isOpen);
  };
  const closeMenu = () => {
    setIsClicked(false);
  };

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Menu width={"100%"} isOpen={isClicked} onStateChange={handleStateChange}>
      <Link to="/" onClick={toggleClick}>
        Hjem
      </Link>
      <Link to="/groups" onClick={toggleClick}>
        Grupper
      </Link>
      <Link to="/contact" onClick={toggleClick}>
        Kontakt
      </Link>
    </Menu>
  );
};
export default Burgermenu;
