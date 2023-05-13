import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-4xl mx-auto px-14 py-16">
      <div className="grid md:grid-cols-3 items-start gap-8 md:gap-4 justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Your account</h2>
          <a className="text-blue-800 text-sm underline" href="#">
            Can't access your account?
          </a>
          <a className="text-blue-800 text-sm underline" href="#">
            Recent transactions with Google
          </a>
          <a className="text-blue-800 text-sm underline" href="#">
            Useful stuff you can do with Google
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Help Communities</h2>
          <p className="text-sm">Learn more about</p>
          <a className="text-blue-800 text-sm underline" href="#">
            Google's Product Experts Program
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Status dashboard</h2>
          <p className="text-sm">
            If you're having trouble accessing a Google product, there's a
            chance we're currently experiencing a temporary problem. You can
            check for outages and downtime on the
          </p>
          <a className="text-blue-800 text-sm underline" href="#">
            G Suite Status Dashboard
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
