function Footer() {
  return (
    <div className="absolute bottom-0 w-full bg-white h-[80px]">
      <div className="text-center my-5">
        <p className="text-xs">
          Powered by{" "}
          <a href="https://www.masecodes.com/" target="_blank">
            Mase Codes
          </a>{" "}
        </p>
        <div className="flex justify-center items-center">
          <img
            src="copyrightlogo.png"
            alt="copyright log"
            className="h-3 mr-1 mix-blend-darken"
          />
          <p className="text-xs">
            <a
              href="https://www.instagram.com/thevisualmartian/"
              target="_blank"
            >
              The Visual Martian
            </a>{" "}
            , All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
