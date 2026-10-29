import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  if (!mounted) {
    return <div style={{ height: "300px" }} />;
  }

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
