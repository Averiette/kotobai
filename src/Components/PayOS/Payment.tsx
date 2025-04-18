import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import PaymentMethod from "../components/PaymentMethod";
import BankPayment from "../components/BankPayment";

interface OrderParams {
  qrCode: string;
  orderCode: string;
  // Add any other expected fields here
}

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const PaymentOS: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();
  const params = location.state as OrderParams | null;

  const orderItems: OrderItem[] = [
    { id: 1, name: "Mì tôm hảo hảo ly", quantity: 1, price: 1000 },
  ];

  const getTotalPrice = () => {
    return orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleListItemClick = (_event: React.MouseEvent, index: number) => {
    setSelectedIndex(index);
  };

  if (!params || !params.qrCode) {
    return <Typography sx={{ m: 5 }}>Đã xảy ra lỗi. Không tìm thấy thông tin đơn hàng.</Typography>;
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <Box className="flex flex-col md:flex-row flex-1 m-10 gap-10">
        {/* Left Section: Order Info + Payment Method */}
        <Box className="flex flex-col flex-2 border border-gray-200 rounded-2xl shadow">
          <Box className="h-20 border-b border-dashed border-gray-200 w-full flex items-center px-5">
            <Typography className="font-bold text-2xl">Thông tin đơn hàng</Typography>
          </Box>

          <Box className="p-5 flex flex-col gap-5 border-b border-dashed border-gray-200">
            <Typography className="font-bold text-xl">
              {`Mã đơn hàng: #${params.orderCode}`}
            </Typography>

            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className="font-bold">STT</TableCell>
                    <TableCell align="center" className="font-bold">Tên</TableCell>
                    <TableCell align="center" className="font-bold">Giá trị</TableCell>
                    <TableCell align="center" className="font-bold">Số lượng</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderItems.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell align="center">{item.id}</TableCell>
                      <TableCell align="center">{item.name}</TableCell>
                      <TableCell align="center">{item.price}đ</TableCell>
                      <TableCell align="center">{item.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography className="font-bold ml-auto">
              {`Tổng tiền: ${getTotalPrice()}đ`}
            </Typography>
          </Box>

          <PaymentMethod
            selectedIndex={selectedIndex}
            handleListItemClick={handleListItemClick}
          />
        </Box>

        {/* Right Section: Payment Detail */}
        <Box className="flex-1">
          {selectedIndex === 0 && <BankPayment props={params} toast={toast} />}
          {/* Bạn có thể mở rộng nhiều phương thức thanh toán hơn tại đây */}
        </Box>
      </Box>
    </>
  );
};

export default PaymentOS;
