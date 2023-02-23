import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navElement = links.map((link, index)=>{return <a href={"#"+link} key={index}>{link}</a>})
  return <nav>{navElement}</nav>;
}

export default NavBar;
