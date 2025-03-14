const dialogue1 = {
  id: 1,
  title: "Bài hội thoại 1",
  content: [
    {
      id: 1,
      speaker: "Park",
      text: "はじめまして。わたしはパクです。 よろしくおねがいします。",
      translation: "Rất vui được gặp bạn. Tôi là Park. Rất mong được sự giúp đỡ của bạn.",
      audio: "/audio/dialogue/dialogue1/1.mp3", 
      isRight: false,
      question: {
        text: '"はじめまして" có nghĩa là gì?',
        choices: [
          { text: "Xin chào", correct: true },
          { text: "Tạm biệt", correct: false },
          { text: "Cảm ơn", correct: false },
          { text: "Xin lỗi", correct: false },
        ],
      },
    },
    {
      id: 2,
      speaker: "Daniel",
      text: "はじめまして。ダニエルです。 こちらこそよろしくおねがいします。",
      translation: "Rất vui được gặp bạn. Tôi là Daniel. Tôi cũng mong được sự giúp đỡ của bạn.",
      audio: "/audio/dialogue/dialogue1/2.mp3",
      isRight: true,
      question: {
        text: '"こちらこそよろしくおねがいします" có nghĩa là gì?',
        choices: [
          { text: "Tôi cũng mong được sự giúp đỡ của bạn.", correct: true },
          { text: "Rất vui được gặp bạn.", correct: false },
          { text: "Tôi không hiểu.", correct: false },
          { text: "Bạn có khỏe không?", correct: false },
        ],
      },
    },
    {
      id: 3,
      speaker: "Daniel",
      text: "あのう、すみません。おなまえは?",
      translation: "Xin lỗi, bạn tên là gì?",
      isRight: true,
    },
    {
      id: 4,
      speaker: "Wan",
      text: "ワンです。",
      translation: "Tôi là Wan.",
      isRight: false,
    },
    {
      id: 5,
      speaker: "Wan",
      text: "中国人です。よろしくおねがいします。",
      translation: "Tôi là người Trung Quốc. Rất mong được sự giúp đỡ của bạn.",
      isRight: false,
      question: {
        text: "Wan đến từ quốc gia nào?",
        choices: [
          { text: "Hàn Quốc", correct: false },
          { text: "Úc", correct: false },
          { text: "Trung Quốc", correct: true },
          { text: "Nhật Bản", correct: false },
        ],
      },
    },
    {
      id: 6,
      speaker: "Wan",
      text: "ダニエルさん。お国はどちらですか。",
      translation: "Daniel, bạn đến từ quốc gia nào?",
      isRight: false,
      question: {
        text: '"お国はどちらですか" có nghĩa là gì?',
        choices: [
          { text: "Bạn đến từ đâu?", correct: true },
          { text: "Bạn làm nghề gì?", correct: false },
          { text: "Bạn có khỏe không?", correct: false },
          { text: "Bạn thích gì?", correct: false },
        ],
      },
    },
    {
      id: 7,
      speaker: "Daniel",
      text: "オーストラリアです。",
      translation: "Tôi đến từ Úc.",
      isRight: true,
      question: {
        text: "Daniel đến từ quốc gia nào?",
        choices: [
          { text: "Hàn Quốc", correct: false },
          { text: "Úc", correct: true },
          { text: "Trung Quốc", correct: false },
          { text: "Nhật Bản", correct: false },
        ],
      },
    },
    {
      id: 8,
      speaker: "Wan",
      text: "あのう、ダニエルさん、お仕事は?",
      translation: "Xin lỗi Daniel, bạn làm nghề gì?",
      isRight: false,
    },
    {
      id: 9,
      speaker: "Daniel",
      text: "私は学生です。",
      translation: "Tôi là học sinh.",
      isRight: true,
      question: {
        text: '"学生" có nghĩa là gì?',
        choices: [
          { text: "Học sinh", correct: true },
          { text: "Nhân viên công ty", correct: false },
          { text: "Giáo viên", correct: false },
          { text: "Bác sĩ", correct: false },
        ],
      },
    },
    {
      id: 10,
      speaker: "Wan",
      text: "そうですか。私は会社員です。",
      translation: "Vậy à. Tôi là nhân viên công ty.",
      isRight: false,
      question: {
        text: '"会社員" có nghĩa là gì?',
        choices: [
          { text: "Học sinh", correct: false },
          { text: "Nhân viên công ty", correct: true },
          { text: "Giáo viên", correct: false },
          { text: "Bác sĩ", correct: false },
        ],
      },
    },
    {
      id: 11,
      speaker: "Daniel",
      text: "パクさんは会社員ですか。",
      translation: "Park, bạn có phải là nhân viên công ty không?",
      isRight: true,
      question: {
        text: "Daniel hỏi Park về?",
        choices: [
          { text: "Nghề nghiệp", correct: true },
          { text: "Quốc tịch", correct: false },
          { text: "Sở thích", correct: false },
          { text: "Tuổi tác", correct: false },
        ],
      },
    },
    {
      id: 12,
      speaker: "Park",
      text: "いいえ、私は会社員じゃありません。 学生です。",
      translation: "Không, tôi không phải là nhân viên công ty. Tôi là học sinh.",
      isRight: false,
      question: {
        text: "Park trả lời nghề nghiệp của mình là gì?",
        choices: [
          { text: "Học sinh", correct: true },
          { text: "Nhân viên công ty", correct: false },
          { text: "Giáo viên", correct: false },
          { text: "Bác sĩ", correct: false },
        ],
      },
    },
    {
      id: 13,
      speaker: "Park",
      text: "私はあおぞら日本語学校の学生です。",
      translation: "Tôi là học sinh của trường tiếng Nhật Aozora.",
      isRight: false,
      question: {
        text: "Park là học sinh của trường tiếng Nhật nào?",
        choices: [
          { text: "Trường tiếng Nhật Tokyo", correct: false },
          { text: "Trường tiếng Nhật Osaka", correct: false },
          { text: "Trường tiếng Nhật Aozora", correct: true },
          { text: "Trường tiếng Nhật Kyoto", correct: false },
        ],
      },
    },
  ],
};

export default dialogue1;
    