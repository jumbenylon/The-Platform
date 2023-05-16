import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useOnHoverOutside } from "../../../hooks/useOnHoverOutside";
import { arrowDownWhite, arrowUpYellowIcon } from "../../../images";
import styles from "./dropdown.module.css";

const Dropdown = ({ menu, handleMenu }) => {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => setDropdown(false);
  const dropdownRef = useRef(null); // Create a reference for dropdown container

  useOnHoverOutside(dropdownRef, handleDropdown); // Call the hook

  return (
    <div
      className={`${styles["cursor_pointer"]} ${styles["dropdown_body"]}`}
      ref={dropdownRef}
      onMouseOver={() => setDropdown(true)}
    >
      <div className={styles["button_parent"]}>
        <div
          className={
            dropdown
              ? `${styles["nav_title"]} ${styles["btn"]}  ${styles["active"]}`
              : `${styles["nav_title"]} ${styles["btn"]}`
          }
        >
          {menu.name}
          {dropdown ? (
            <img src={arrowUpYellowIcon} alt="" />
          ) : (
            <img src={arrowDownWhite} alt="" />
          )}
        </div>
      </div>
      {dropdown && (
        <div className={styles["list_body"]}>
          {menu.subMenu.map((item, index) => (
            <div className={styles["list_el"]} key={index}>
              <Link
                to={item.link}
                onClick={() => (window.innerWidth < 992 ? handleMenu() : {})}
              >
                {item.name}
              </Link>
              {item.free && <span className={styles["free_check"]}>Free</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
