export interface PracticeInfo {
    id: number;
    title: string;
    subtitle: string;
    desc: string;
    note: string;
    category: "Đã hoàn thành" | "Đang làm" | "Đang khóa";
    image: string;
    progress: number;
}

import lesson1Img from "../../assets/Practice List/260px x 230px_L1.png";
import lesson2Img from "../../assets/Practice List/260px x 230px_L2.png";
import lesson3Img from "../../assets/Practice List/260px x 230px_L3.png";
import lesson4Img from "../../assets/Practice List/260px x 230px_L4.png";
import lesson5Img from "../../assets/Practice List/260px x 230px_L5.png";

export const practiceInfo: PracticeInfo[] = [
    { id: 1, title: "はじめまして", subtitle: "Ôn tập bài 1", desc: "Rất vui được gặp bạn", note: "Bài tập tổng hợp", category: "Đã hoàn thành", image: lesson1Img, progress: 40 },
    { id: 2, title: "買い物・食事", subtitle: "Ôn tập bài 2", desc: "Mua sắm・Bữa ăn", note: "Bài tập tổng hợp", category: "Đã hoàn thành", image: lesson2Img, progress: 20 },
    { id: 3, title: "スケジュール", subtitle: "Ôn tập bài 3", desc: "Lịch trình", note: "Bài tập tổng hợp", category: "Đang làm", image: lesson3Img, progress: 10 },
    { id: 4, title: "私の国・町", subtitle: "Ôn tập bài 4", desc: "Đất nước・Thị trấn của tôi", note: "Bài tập tổng hợp", category: "Đang khóa", image: lesson4Img, progress: 0 },
    { id: 5, title: "休みの日", subtitle: "Ôn tập bài 5", desc: "Ngày nghỉ", note: "Bài tập tổng hợp", category: "Đang khóa", image: lesson5Img, progress: 0 },
];

