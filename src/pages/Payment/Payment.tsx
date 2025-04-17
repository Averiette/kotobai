import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@Components/Navbar/Navbar";

// CSS
import styles from "./Payment.module.css";

// Assets
import QRImage from "@assets/img/Momo45.png"; 
import QRBank from "@assets/img/QR45.png"; 
import QRImage144 from "@assets/img/Momo144.png";
import QRBank144 from "@assets/img/QR144.png";
import ThumnailPayment from "@assets/img/ThumnailPaymeny.png";
import momoImg from "@assets/img/Momo.png";
import vnpayImg from "@assets/img/VNPay.jpg";

const Payment: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = React.useState<string>("momo");
  const [timeLeft, setTimeLeft] = React.useState<number>(300); // 5 phút

  React.useEffect(() => {
    if (timeLeft <= 0) {
      const confirm = window.confirm(
        "Bạn có muốn tiếp tục chuyển khoản không?"
      );
      if (confirm) {
        setTimeLeft(300); 
      } else {
        navigate("/home"); 
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  };

  const handleComplete = () => {
    navigate("/home");
  };

  return (
    <div>
      <Navbar />
      <div className={styles.paymentContainer}>
        <h2 className={styles.title}>CỔNG THANH TOÁN</h2>

        <div className={styles.gatewayBox}>
          <div className={styles.left}>
            <img src={ThumnailPayment} alt="Payment Visual" />
          </div>

          <div className={styles.right}>
            <div className={styles.iconsRow}>
              <img
                src={momoImg}
                alt="Momo"
                onClick={() => {
                  setSelectedMethod("momo");
                  setTimeLeft(300);
                }}
                className={selectedMethod === "momo" ? styles.activeIcon : ""}
              />
              <img
                src={vnpayImg}
                alt="VNPAY"
                onClick={() => {
                  setSelectedMethod("vnpay");
                  setTimeLeft(300); 
                }}
                className={selectedMethod === "vnpay" ? styles.activeIcon : ""}
              />
            </div>

            {selectedMethod === "momo" && (
              <div className={`${styles.paymentDetailBox} b7`}>
                <p>
                  Quét QR để thanh toán nhanh chóng. Vui lòng đảm bảo đúng nội dung chuyển khoản. Tài
                  khoản sẽ được nâng cấp sau <strong>15-20 giây</strong> khi hoàn thành chuyển tiền.
                </p>

                <div className={styles.qrBox}>
                <img
                    src={id === "popular" ? QRImage144 : QRImage}
                    alt="QR Code"
                    className={styles.qrImage}
                  />
                  <div className={styles.paymentInfo}>
                    <p>
                      <strong>Số tiền:</strong>{" "}
                      <span className={styles.amount}>
                        {id === "saving"
                          ? "45.000đ"
                          : id === "popular"
                          ? "144.000đ"
                          : "199.000VND"}
                      </span>
                    </p>
                    <p>
                      <strong>Cú pháp:</strong>{" "}
                      <span className={styles.code}>Không có</span>
                    </p>
                    <p className={styles.countdown}>
                      ⏳ Thời gian còn lại: <strong>{formatTime(timeLeft)}</strong>
                    </p>
                    <p className={styles.note}>
                      Hãy chờ một vài phút để hệ thống cập nhật thông tin của bạn. Nếu
                      không thấy cập nhật, vui lòng liên hệ hotline:{" "}
                      <strong>0788.900.175</strong> (Từ 08h00 đến 22h00)
                    </p>
                  </div>
                </div>
                <button
                      className={styles.completeButton}
                      onClick={handleComplete}
                    >
                      Hoàn thành
                </button>
              </div>
            )}

            {selectedMethod === "vnpay" && (
              <div className={`${styles.paymentDetailBox} b7`}>
                <p>
                  Quét QR để thanh toán nhanh chóng. Vui lòng đảm bảo đúng nội dung chuyển khoản. Tài
                  khoản sẽ được nâng cấp sau <strong>15-20 giây</strong> khi hoàn thành chuyển tiền.
                </p>

                <div className={styles.qrBox}>
                <img
                  src={id === "popular" ? QRBank144 : QRBank}
                  alt="QR Code"
                  className={styles.qrImage}
                />
                  <div className={styles.paymentInfo}>
                    <p>
                      <strong>Số tiền:</strong>{" "}
                      <span className={styles.amount}>
                        {id === "saving"
                          ? "45.000đ"
                          : id === "popular"
                          ? "144.000đ"
                          : "199.000VND"}
                      </span>
                    </p>
                    <p>
                      <strong>Cú pháp:</strong>{" "}
                      <span className={styles.code}>
                        {id === "popular" ? "MUS722GDS5" : "MUS203IFW3"}
                      </span>
                    </p>
                    <p className={styles.countdown}>
                      ⏳ Thời gian còn lại: <strong>{formatTime(timeLeft)}</strong>
                    </p>
                    <p className={styles.note}>
                      Hãy chờ một vài phút để hệ thống cập nhật thông tin của bạn. Nếu
                      không thấy cập nhật, vui lòng liên hệ hotline:{" "}
                      <strong>0788.900.175</strong> (Từ 08h00 đến 22h00)
                    </p>
                  </div>
                </div>
                <button
                      className={styles.completeButton}
                      onClick={handleComplete}
                    >
                      Hoàn thành
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
