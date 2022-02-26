function Footer() {
  return (
    <div className="absolute bottom-0 w-full bg-white h-[80px]">
      <div className="text-center  my-3">
        <p className="text-xs">
          Powered by{" "}
          <a href="https://www.masecodes.com/" target="_blank" rel="noreferrer">
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
              rel="noreferrer"
            >
              The Visual Martian
            </a>{" "}
            , All rights reserved.
          </p>
        </div>
        <div className="flex justify-center items-center mt-2">
          <a
            href="https://www.instagram.com/thevisualmartian/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/instagram-icon-white-on-black.png"
              alt="instagram logo"
              className="h-5"
            />
          </a>

          <a
            href="https://www.youtube.com/channel/UCMRfknmScU6Wi8-lXH3uFOg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/1006-10064683_youtube-dark-icon-logo-youtube-play-png.png"
              alt="instagram logo"
              className="h-5"
            />
          </a>
        </div>
      </div>
      {/* Socials */}
    </div>
  );
}

export default Footer;
