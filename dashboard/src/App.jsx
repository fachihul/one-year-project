import { useState } from "react";

function App() {
  let [activeMenu, setactiveMenu] = useState("Navbar");
  let handleActive = (menu) => {
    setactiveMenu(menu);
    // console.log(menu);
  };
  return (
    <div className="main">
      <div className="main-left">
        <ul>
          <li onClick={() => handleActive("Navbar")}>Navbar</li>
          <li onClick={() => handleActive("Banner")}>Banner</li>
          <li onClick={() => handleActive("About")}>About</li>
          <li onClick={() => handleActive("Service")}>Service</li>
          <li onClick={() => handleActive("Resume")}>Resume</li>
          <li onClick={() => handleActive("Portfolio")}>Portfolio</li>
          <li onClick={() => handleActive("Testimonial")}>Testimonial</li>
          <li onClick={() => handleActive("Partner")}>Partner</li>
          <li onClick={() => handleActive("Blog")}>Blog</li>
          <li onClick={() => handleActive("Contact")}>Contact</li>
          <li onClick={() => handleActive("Footer")}>Footer</li>
        </ul>
      </div>
      <div className="right">
        {activeMenu == "Navbar" && <h1>Navbar</h1>}
        {activeMenu == "Banner" && <h1>Banner</h1>}
        {activeMenu == "About" && <h1>About</h1>}
        {activeMenu == "Service" && <h1>Service</h1>}
        {activeMenu == "Resume" && <h1>Resume</h1>}
        {activeMenu == "Portfolio" && <h1>Portfolio</h1>}
        {activeMenu == "Testimonial" && <h1>Testimonial</h1>}
        {activeMenu == "Partner" && <h1>Partner</h1>}
        {activeMenu == "Blog" && <h1>Blog</h1>}
        {activeMenu == "Contact" && <h1>Contact</h1>}
        {activeMenu == "Footer" && <h1>Footer</h1>}
      </div>
    </div>
  );
}

export default App;
