import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Context } from "./Context";
function Navbar() {
  const [context, setContext] = useContext(Context);
  const [size, setSize] = useState(window.innerWidth >= 768);

  const update = () => {
    setSize(window.innerWidth >= 768);
  };
  useEffect(() => {
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  });
  console.log(context);
  return (
    <div className="navbar ">
      {size ? (
        <div></div>
      ) : (
        <div className="tog">
          <i
            className="nav-icon fa-solid fa-bars "
            onClick={() => {
              if (context === "none") setContext("block");
              if (context === "block") setContext("none");
            }}
          ></i>
        </div>
      )}
    </div>
  );
}

export default Navbar;
