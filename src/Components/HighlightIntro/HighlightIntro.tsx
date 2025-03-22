import React from "react";

// Assets
import Highlight1 from "../../assets/Introduce/600px x 450px_hl1.png";
import Highlight2 from "../../assets/Introduce/600px x 450px_hl2.png";
import Highlight3 from "../../assets/Introduce/600px x 450px_hl3.png";

//CSS
import styles from "./HighlightIntro.module.css";

interface HighlightItem {
  id: number;
  title: string;
  contents: string;
  image: string; 
}

const highlightData: HighlightItem[] = [
  {
    id: 1,
    title: "Học tiếng Nhật hiệu quả chuẩn FPT UNIVERSITY",
    contents:
      "Chúng tôi hiểu rằng mỗi sinh viên FPT đều có những mục tiêu học tập khác nhau. Vì vậy, KOTOBA.I được thiết kế bám sát theo lộ trình của các lớp học tiếng Nhật tại Trường Đại học FPT. Điều này giúp bạn dễ dàng làm quen và tiếp thu kiến thức một cách nhanh chóng và hiệu quả nhất. Chúng tôi cam kết cung cấp cho bạn một nền tảng vững chắc để chinh phục tiếng Nhật.",
    image: Highlight1, 
  },
  {
    id: 2,
    title: "Thực hành không ngừng với kho tài liệu phong phú",
    contents:
      "Không chỉ cung cấp kiến thức lý thuyết, trang web của chúng tôi còn trang bị cho bạn một kho tàng bài tập đa dạng, từ luyện tập từ vựng, ngữ pháp đến các bài khóa thực tế. Với giao diện trực quan và thân thiện, bạn sẽ được trải nghiệm những bài học sinh động, giúp bạn luyện tập mọi lúc mọi nơi. Càng luyện tập, bạn càng tiến bộ!",
    image: Highlight2,
  },
  {
    id: 3,
    title: "Học cùng bạn bè, cùng nhau tiến bộ",
    contents:
      "Tham gia cộng đồng học tập của chúng tôi, bạn sẽ có cơ hội giao lưu, chia sẻ kinh nghiệm học tập với những người bạn cùng đam mê tiếng Nhật. Cùng nhau giải đáp thắc mắc, cùng nhau ôn luyện, chắc chắn bạn sẽ cảm thấy việc học tiếng Nhật trở nên thú vị hơn bao giờ hết. Chúng tôi tin rằng, sự hỗ trợ từ cộng đồng sẽ giúp bạn đạt được mục tiêu của mình.",
    image: Highlight3,
  },
];

const HighlightIntro: React.FC = () => {
  return (
    <div className={styles.container}>
      {highlightData.map((item, index) => (
        <div
            key={item.id}
            className={`${styles.highlight} ${index % 2 === 0 ? styles.reverse : ""}`}>

          <div className={styles.imageContainer}>
            <img src={item.image} alt={item.title} className={styles.image} />
          </div>

          <div className={styles.textContainer}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={`${styles.contents} b6`}>{item.contents}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighlightIntro;
