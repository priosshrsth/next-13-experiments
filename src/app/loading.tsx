import React from "react";
import Logo from "src/components/logo";

const SplashScreen = () => (
  <div className="flex items-center justify-center h-screen bg-gray-900">
    <div className="text-white">
      <Logo />
      <h1 className="text-2xl font-bold text-center">OUTSIDE</h1>
    </div>
  </div>
);

export default SplashScreen;
