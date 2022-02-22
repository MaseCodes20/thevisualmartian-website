import React from "react";

function Footer() {
  return (
    <div className="absolute bottom-0 w-full bg-green-400 h-[80px]">
      <div className="text-center my-5">
        <p>
          Built and designed by{" "}
          <a href="https://www.masecodes.com/" target="_blank">
            Mase Codes
          </a>{" "}
        </p>
        <p>All rights reserved. (C)</p>
      </div>
    </div>
  );
}

export default Footer;
