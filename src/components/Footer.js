import React from "react";

const Footer = () => {
  const year = new Date();
  return (
    <div className="mt-10">
      <h3 className="text-center">
        All &copy; copy rights received by To-Do List {year.getFullYear()}
      </h3>
    </div>
  );
};

export default Footer;
