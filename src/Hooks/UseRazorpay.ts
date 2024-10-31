import { useEffect, useState } from "react";

export const useRazorpay = (): boolean => {
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  useEffect(() => {
    const scriptId = "razorpay-script";
    if (document.getElementById(scriptId)) {
      setIsRazorpayLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.id = scriptId;
    script.async = true;

    script.onload = () => setIsRazorpayLoaded(true);
    script.onerror = () => {
      console.error("Failed to load Razorpay SDK");
      setIsRazorpayLoaded(false);
    };

    document.body.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, []);

  return isRazorpayLoaded;
};
