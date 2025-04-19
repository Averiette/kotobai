const dialogue8 = {
    id: 8,
    title: "Bài hội thoại 8",
    content: [
      {
        id: 1,
        speaker: "木村",
        text: "いい　映画でしたね。",
        translation: "Bộ phim hay nhỉ.",
        audio: "/audio/dialogue/dialogue8/1.mp3",
        isRight: true,
        question: {
          text: '"いい　映画でしたね" có nghĩa là gì?',
          choices: [
            { text: "Đó là một bộ phim dở", correct: false },
            { text: "Đó là một bộ phim hay", correct: true },
            { text: "Tôi không thích bộ phim", correct: false },
            { text: "Bộ phim sắp chiếu", correct: false },
          ],
        },
      },
      {
        id: 2,
        speaker: "ミラー",
        text: "ええ。わたしは　家族を　思い出しました。",
        translation: "Vâng. Tôi đã nhớ đến gia đình.",
        audio: "/audio/dialogue/dialogue8/2.mp3",
        isRight: false,
        question: {
          text: '"家族を　思い出しました" có nghĩa là gì?',
          choices: [
            { text: "Tôi đã quên gia đình", correct: false },
            { text: "Tôi đã nhớ đến gia đình", correct: true },
            { text: "Gia đình tôi đang đến", correct: false },
            { text: "Tôi sẽ gọi cho gia đình", correct: false },
          ],
        },
      },
      {
        id: 3,
        speaker: "木村",
        text: "そうですか。ミラーさんの　ご家族は？",
        translation: "Vậy à. Gia đình của anh Miller thì sao?",
        audio: "/audio/dialogue/dialogue8/3.mp3",
        isRight: true,
        question: {
          text: '"ご家族は？" trong ngữ cảnh này nghĩa là gì?',
          choices: [
            { text: "Gia đình bạn thì sao?", correct: true },
            { text: "Gia đình tôi thì sao?", correct: false },
            { text: "Bạn sống một mình à?", correct: false },
            { text: "Gia đình bạn đang ở đâu?", correct: false },
          ],
        },
      },
      {
        id: 4,
        speaker: "ミラー",
        text: "両親と　姉が　1人　います。",
        translation: "Tôi có bố mẹ và một chị gái.",
        audio: "/audio/dialogue/dialogue8/4.mp3",
        isRight: false,
        question: {
          text: '"両親と　姉が　1人　います" nghĩa là gì?',
          choices: [
            { text: "Có bố mẹ và một em gái", correct: false },
            { text: "Có bố mẹ và một chị gái", correct: true },
            { text: "Có 1 người em trai", correct: false },
            { text: "Có bố mẹ và hai chị gái", correct: false },
          ],
        },
      },
      {
        id: 5,
        speaker: "木村",
        text: "どちらに　いらっしゃいますか。",
        translation: "Họ đang ở đâu vậy?",
        audio: "/audio/dialogue/dialogue8/5.mp3",
        isRight: true,
        question: {
          text: '"どちらに　いらっしゃいますか" có nghĩa là gì?',
          choices: [
            { text: "Bạn đi đâu vậy?", correct: false },
            { text: "Họ ở đâu vậy?", correct: true },
            { text: "Ai đang ở nhà?", correct: false },
            { text: "Bạn có ở nhà không?", correct: false },
          ],
        },
      },
      {
        id: 6,
        speaker: "ミラー",
        text: "両親は　ニューヨークの　近くに　住んで　います。\n姉は　ロンドンで　働いています。",
        translation: "Bố mẹ tôi sống gần New York. Chị tôi làm việc ở London.",
        audio: "/audio/dialogue/dialogue8/6.mp3",
        isRight: false,
        question: {
          text: '"姉は　ロンドンで　働いています" nghĩa là gì?',
          choices: [
            { text: "Chị tôi sống ở London", correct: false },
            { text: "Chị tôi học ở London", correct: false },
            { text: "Chị tôi làm việc ở London", correct: true },
            { text: "Chị tôi du lịch ở London", correct: false },
          ],
        },
      },
      {
        id: 7,
        speaker: "ミラー",
        text: "木村さんの　ご家族は？",
        translation: "Gia đình của bạn Kimura thì sao?",
        audio: "/audio/dialogue/dialogue8/7.mp3",
        isRight: false,
        question: {
          text: '"ご家族は？" trong câu này có thể hiểu là?',
          choices: [
            { text: "Gia đình bạn thì sao?", correct: true },
            { text: "Gia đình bạn đang ăn cơm à?", correct: false },
            { text: "Gia đình bạn có khỏe không?", correct: false },
            { text: "Gia đình bạn đến Nhật chưa?", correct: false },
          ],
        },
      },
      {
        id: 8,
        speaker: "木村",
        text: "3人です。父は　銀行員です。\n母は　高校で　英語を　教えて　います。",
        translation: "Nhà tôi có 3 người. Bố tôi là nhân viên ngân hàng. Mẹ tôi dạy tiếng Anh ở trường cấp 3.",
        audio: "/audio/dialogue/dialogue8/8.mp3",
        isRight: true,
        question: {
          text: '"母は　高校で　英語を　教えて　います" có nghĩa là gì?',
          choices: [
            { text: "Mẹ tôi học tiếng Anh ở trường cấp 3", correct: false },
            { text: "Mẹ tôi dạy tiếng Anh ở trường cấp 3", correct: true },
            { text: "Mẹ tôi là giáo viên tiếng Nhật", correct: false },
            { text: "Mẹ tôi dạy cấp 3 ở ngân hàng", correct: false },
          ],
        },
      },
    ],
  };
  
  export default dialogue8;
  