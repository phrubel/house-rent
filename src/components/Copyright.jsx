import React from "react";

const Copyright = () => {
  return (
    <div className="border-t border-white/20">
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="container mx-auto"
      >
        <div className="pt-6">
          <p className="text-base text-center">
            All Right Reserved by{" "}
            <span className="text-rose-700 font-semibold">
              <a
                href="https://www.facebook.com/parvezhasanrubel42"
                className="no-underline"
              >
                Parvez Hasan Rubel.
              </a>
            </span>{" "}
            <br /> Copyright &copy; {new Date().getFullYear()};
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
