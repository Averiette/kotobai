const dialogue10 = {
    id: 10,
    title: "Bài hội thoại 10",
    content: [
      {
        id: 1,
        speaker: "カリナ",
        text: "みどり町まで　お願いします。",
        translation: "Làm ơn cho tôi đến thị trấn Midori.",
        audio: "/audio/dialogue/dialogue10/1.mp3",
        isRight: true,
        question: {
          text: '"みどり町まで　お願いします" có nghĩa là gì?',
          choices: [
            { text: "Tôi sống ở Midori", correct: false },
            { text: "Tôi muốn đi đến thị trấn Midori", correct: true },
            { text: "Thị trấn Midori rất xa", correct: false },
            { text: "Tôi sẽ đến Midori sau", correct: false }
          ]
        }
      },
      {
        id: 2,
        speaker: "運転手",
        text: "はい。",
        translation: "Vâng.",
        audio: "/audio/dialogue/dialogue10/2.mp3",
        isRight: false
      },
      {
        id: 3,
        speaker: "カリナ",
        text: "すみません。あの　信号を　右へ　曲がってください。",
        translation: "Xin lỗi. Hãy rẽ phải ở đèn giao thông kia.",
        audio: "/audio/dialogue/dialogue10/3.mp3",
        isRight: true,
        question: {
          text: '"右へ　曲がってください" có nghĩa là gì?',
          choices: [
            { text: "Hãy rẽ trái", correct: false },
            { text: "Hãy đi thẳng", correct: false },
            { text: "Hãy rẽ phải", correct: true },
            { text: "Hãy dừng lại", correct: false }
          ]
        }
      },
      {
        id: 4,
        speaker: "運転手",
        text: "右ですね。",
        translation: "Rẽ phải đúng không?",
        audio: "/audio/dialogue/dialogue10/4.mp3",
        isRight: false
      },
      {
        id: 5,
        speaker: "カリナ",
        text: "ええ。",
        translation: "Vâng.",
        audio: "/audio/dialogue/dialogue10/5.mp3",
        isRight: true
      },
      {
        id: 6,
        speaker: "運転手",
        text: "まっすぐですか。",
        translation: "Đi thẳng phải không?",
        audio: "/audio/dialogue/dialogue10/6.mp3",
        isRight: false
      },
      {
        id: 7,
        speaker: "カリナ",
        text: "ええ、まっすぐ　行って　ください。",
        translation: "Vâng, xin hãy đi thẳng.",
        audio: "/audio/dialogue/dialogue10/7.mp3",
        isRight: true,
        question: {
          text: '"まっすぐ　行って　ください" có nghĩa là gì?',
          choices: [
            { text: "Hãy quay lại", correct: false },
            { text: "Hãy đi thẳng", correct: true },
            { text: "Hãy rẽ phải", correct: false },
            { text: "Hãy dừng lại", correct: false }
          ]
        }
      },
      {
        id: 8,
        speaker: "カリナ",
        text: "あの　花屋の　前で　止めて　ください。",
        translation: "Hãy dừng lại trước tiệm hoa kia.",
        audio: "/audio/dialogue/dialogue10/8.mp3",
        isRight: true,
        question: {
          text: '"花屋の　前で　止めて　ください" có nghĩa là gì?',
          choices: [
            { text: "Dừng sau tiệm hoa", correct: false },
            { text: "Dừng trước tiệm hoa", correct: true },
            { text: "Dừng cạnh cửa hàng bánh", correct: false },
            { text: "Dừng tại công viên", correct: false }
          ]
        }
      },
      {
        id: 9,
        speaker: "運転手",
        text: "はい。1,800円です。",
        translation: "Vâng. 1,800 yên.",
        audio: "/audio/dialogue/dialogue10/9.mp3",
        isRight: false
      },
      {
        id: 10,
        speaker: "カリナ",
        text: "これで　お願いします。",
        translation: "Tôi gửi anh số tiền này.",
        audio: "/audio/dialogue/dialogue10/10.mp3",
        isRight: true
      },
      {
        id: 11,
        speaker: "運転手",
        text: "3,200円の　お釣りです。ありがとう　ございました。",
        translation: "Tiền thối lại 3,200 yên. Xin cảm ơn.",
        audio: "/audio/dialogue/dialogue10/11.mp3",
        isRight: false
      }
    ]
  };
  
  export default dialogue10;
  