const dialogue3 = {
  id: 3,
  title: "Bài hội thoại 3",
  content: [
    {
      id: 1,
      speaker: "ミラー",
      text: "すみません、「あすか」の電話番号は何番(なんばん)ですか。",
      translation: "Xin lỗi, số điện thoại của \"Asuka\" là số mấy ạ?",
      audio: "/audio/dialogue/dialogue3/1.mp3",
      isRight: true,
      question: {
        text: '"何番(なんばん)ですか" có nghĩa là gì?',
        choices: [
          { text: "Khi nào", correct: false },
          { text: "Số mấy", correct: true },
          { text: "Ở đâu", correct: false },
          { text: "Mấy giờ", correct: false },
        ],
      },
    },
    {
      id: 2,
      speaker: "佐藤",
      text: "「あすか」ですか。５２７５の　２７２５です。",
      translation: "\"Asuka\" ạ? Là 5275-2725.",
      audio: "/audio/dialogue/dialogue3/2.mp3",
      isRight: false,
      question: {
        text: '"５２７５の　２７２５" là số điện thoại nào?',
        choices: [
          { text: "5275-2752", correct: false },
          { text: "2725-5275", correct: false },
          { text: "5275-2725", correct: true },
          { text: "5257-2725", correct: false },
        ],
      },
    },
    {
      id: 3,
      speaker: "ミラー",
      text: "どうも　ありがとう　ございます。",
      translation: "Xin cảm ơn rất nhiều.",
      audio: "/audio/dialogue/dialogue3/3.mp3",
      isRight: true,
      question: {
        text: '"どうも　ありがとう　ございます" có nghĩa là gì?',
        choices: [
          { text: "Tạm biệt", correct: false },
          { text: "Xin cảm ơn rất nhiều", correct: true },
          { text: "Xin lỗi", correct: false },
          { text: "Chào", correct: false },
        ],
      },
    },
    {
      id: 4,
      speaker: "店の人",
      text: "はい、「あすか」です。",
      translation: "Vâng, đây là \"Asuka\".",
      audio: "/audio/dialogue/dialogue3/4.mp3",
      isRight: false,
      question: {
        text: '"はい、「あすか」です" là câu nói của ai?',
        choices: [
          { text: "Miller", correct: false },
          { text: "Nhân viên cửa hàng", correct: true },
          { text: "Một người qua đường", correct: false },
          { text: "Satou", correct: false },
        ],
      },
    },
    {
      id: 5,
      speaker: "ミラー",
      text: "すみません。そちらは　何時までですか。",
      translation: "Xin lỗi, bên đó đến mấy giờ ạ?",
      audio: "/audio/dialogue/dialogue3/5.mp3",
      isRight: true,
      question: {
        text: '"何時までですか" có nghĩa là gì?',
        choices: [
          { text: "Khi nào", correct: false },
          { text: "Mấy giờ", correct: true },
          { text: "Số mấy", correct: false },
          { text: "Ở đâu", correct: false },
        ],
      },
    },
    {
      id: 6,
      speaker: "店の人",
      text: "１０時までです。",
      translation: "Đến 10 giờ ạ.",
      audio: "/audio/dialogue/dialogue3/6.mp3",
      isRight: false,
      question: {
        text: '"１０時までです" nghĩa là gì?',
        choices: [
          { text: "Đến 11 giờ", correct: false },
          { text: "Đến 9 giờ", correct: false },
          { text: "Đến 10 giờ", correct: true },
          { text: "Đến 12 giờ", correct: false },
        ],
      },
    },
    {
      id: 7,
      speaker: "ミラー",
      text: "休みは　何曜日ですか。",
      translation: "Ngày nghỉ là thứ mấy ạ?",
      audio: "/audio/dialogue/dialogue3/7.mp3",
      isRight: true,
      question: {
        text: '"何曜日ですか" có nghĩa là gì?',
        choices: [
          { text: "Mấy giờ", correct: false },
          { text: "Thứ mấy", correct: true },
          { text: "Ở đâu", correct: false },
          { text: "Ngày mấy", correct: false },
        ],
      },
    },
    {
      id: 8,
      speaker: "店の人",
      text: "日曜日です。",
      translation: "Chủ nhật ạ.",
      audio: "/audio/dialogue/dialogue3/8.mp3",
      isRight: false,
      question: {
        text: '"日曜日です" nghĩa là gì?',
        choices: [
          { text: "Thứ bảy", correct: false },
          { text: "Chủ nhật", correct: true },
          { text: "Thứ sáu", correct: false },
          { text: "Thứ hai", correct: false },
        ],
      },
    },
    {
      id: 9,
      speaker: "ミラー",
      text: "どうも　ありがとうございました。",
      translation: "Xin cảm ơn rất nhiều.",
      audio: "/audio/dialogue/dialogue3/9.mp3",
      isRight: true,
      question: {
        text: '"どうも　ありがとうございました" có nghĩa là gì?',
        choices: [
          { text: "Chào", correct: false },
          { text: "Xin lỗi", correct: false },
          { text: "Tạm biệt", correct: false },
          { text: "Xin cảm ơn rất nhiều", correct: true },
        ],
      },
    },
  ],
};

export default dialogue3;