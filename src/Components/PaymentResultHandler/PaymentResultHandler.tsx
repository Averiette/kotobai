// src/components/PaymentResultHandler/PaymentResultHandler.tsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentResultHandler: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (code) {
      if (location.pathname === "/home") {
        console.log("✅ Thanh toán thành công! Code:", code);
      } else if (location.pathname === "/upgrade") {
        console.log("❌ Thanh toán thất bại hoặc đã bị hủy. Code:", code);
      }

      // Remove ?code=xxx from URL after handling
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default PaymentResultHandler;
