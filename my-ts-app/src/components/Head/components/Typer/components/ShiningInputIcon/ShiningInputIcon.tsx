import { useState, useEffect } from "react";

const ShiningInputIcon = () => {
  const [isShining, setIsShining] = useState(false);

  const shiningTime = 500;

  useEffect(() => {
    const onShiningchange = () => {
      setIsShining((prevIsShining) => !prevIsShining);
    };

    const interval = setInterval(onShiningchange, shiningTime);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{isShining && <span> | </span>}</>;
};

export default ShiningInputIcon;
