// src/hooks/useSubscriptionCheck.ts
import { useEffect, useState } from "react";
import api from "../service/axiosInstance";

const useSubscriptionCheck = (userId: string | undefined) => {
  const [hasActiveSub, setHasActiveSub] = useState(false);

  useEffect(() => {
    const checkSubscription = async () => {
      if (!userId) return;
      try {
        const res = await api.get(`/api/subscriptions/history/user/${userId}`);
        const { data } = res.data;
        const now = new Date();

        const isActive = data?.some((sub: any) => {
          return sub.paymentStatus === "PAID" && new Date(sub.endDate) >= now;
        });

        setHasActiveSub(isActive);
      } catch (err) {
        console.error("Subscription check failed", err);
      }
    };

    checkSubscription();
  }, [userId]);

  return hasActiveSub;
};

export default useSubscriptionCheck;
