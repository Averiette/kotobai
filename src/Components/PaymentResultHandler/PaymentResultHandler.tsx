// src/components/PaymentResultHandler.tsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentResultHandler: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (code) {
      // Handle the payment result here
      if (location.pathname === "/home") {
        console.log("Payment successful with code:", code);
        // You can show success message, update user info, etc.
      } else if (location.pathname === "/upgrade") {
        console.log("Payment canceled with code:", code);
        // You can show cancel message or retry option
      }

      // Clean up URL: Remove code param from URL after handling
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return null; // No UI, just handle logic
};

export default PaymentResultHandler;