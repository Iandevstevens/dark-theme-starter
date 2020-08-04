import React from "react";
import sun from "../images/sun.svg";
import "./styles/headerImage.scss";
import PropTypes from "prop-types";

const HeaderImage = ({ lightText }) => {
  return (
    <div className={`headerImg`}>
      <h1>{lightText}</h1>
      <img className="themeImg" src={sun} alt="" />
    </div>
  );
};

HeaderImage.propTypes = {
  lightText: PropTypes.string,
};

export default HeaderImage;
