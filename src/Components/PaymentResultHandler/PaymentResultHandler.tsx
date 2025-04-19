// src/components/PaymentResultHandler/PaymentResultHandler.tsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentResultHandler: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    const cancel = params.get("cancel") === "true";
    const status = params.get("status");

    // If no payment params, do nothing
    if (!code && !status && !cancel) return;

    // Logging or toasts can go here
    if (code === "00" && !cancel && status === "PAID") {
      console.log("✅ Thanh toán thành công!");
      // Optional: trigger UI update or user upgrade
    } else if (cancel || status === "CANCELLED") {
      console.log("❌ Thanh toán đã bị hủy.");
    } else {
      console.log("⚠️ Không xác định được trạng thái thanh toán.");
    }

    // Clean up URL (remove query params)
    navigate(location.pathname, { replace: true });
  }, [location, navigate]);

  return null;
};

export default PaymentResultHandler;
