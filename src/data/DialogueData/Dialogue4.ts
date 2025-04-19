const dialogue4 = {
    id: 4,
    title: "Bài hội thoại 4",
    content: [
      {
        id: 1,
        speaker: "サントス",
        text: "すみません。甲子園まで　いくらですか。",
        translation: "Xin lỗi, đến Kōshien thì hết bao nhiêu tiền ạ?",
        audio: "/audio/dialogue/dialogue4/1.mp3",
        isRight: true,
        question: {
          text: '"いくらですか" có nghĩa là gì?',
          choices: [
            { text: "Khi nào", correct: false },
            { text: "Bao nhiêu tiền", correct: true },
            { text: "Bao xa", correct: false },
            { text: "Đi đâu", correct: false },
          ],
        },
      },
      {
        id: 2,
        speaker: "女の人",
        text: "350円です。",
        translation: "350 yên ạ.",
        audio: "/audio/dialogue/dialogue4/2.mp3",
        isRight: false,
        question: {
          text: '"350円です" nghĩa là gì?',
          choices: [
            { text: "250 yên", correct: false },
            { text: "350 yên", correct: true },
            { text: "300 yên", correct: false },
            { text: "450 yên", correct: false },
          ],
        },
      },
      {
        id: 3,
        speaker: "サントス",
        text: "350円ですね。ありがとう　ございました。",
        translation: "350 yên nhỉ. Cảm ơn rất nhiều.",
        audio: "/audio/dialogue/dialogue4/3.mp3",
        isRight: true,
        question: {
          text: '"ありがとう　ございました" có nghĩa là gì?',
          choices: [
            { text: "Cảm ơn rất nhiều", correct: true },
            { text: "Tạm biệt", correct: false },
            { text: "Xin chào", correct: false },
            { text: "Xin lỗi", correct: false },
          ],
        },
      },
      {
        id: 4,
        speaker: "女の人",
        text: "どう　いたしまして。",
        translation: "Không có gì ạ.",
        audio: "/audio/dialogue/dialogue4/4.mp3",
        isRight: false,
        question: {
          text: '"どう　いたしまして" có nghĩa là gì?',
          choices: [
            { text: "Cảm ơn", correct: false },
            { text: "Không có gì", correct: true },
            { text: "Tạm biệt", correct: false },
            { text: "Xin lỗi", correct: false },
          ],
        },
      },
      {
        id: 5,
        speaker: "サントス",
        text: "すみません。甲子園は　何番線ですか。",
        translation: "Xin lỗi, Kōshien là tuyến số mấy ạ?",
        audio: "/audio/dialogue/dialogue4/5.mp3",
        isRight: true,
        question: {
          text: '"何番線ですか" có nghĩa là gì?',
          choices: [
            { text: "Số điện thoại là gì", correct: false },
            { text: "Tuyến số mấy", correct: true },
            { text: "Thứ mấy", correct: false },
            { text: "Giờ mấy", correct: false },
          ],
        },
      },
      {
        id: 6,
        speaker: "駅員",
        text: "5番線です。",
        translation: "Tuyến số 5 ạ.",
        audio: "/audio/dialogue/dialogue4/6.mp3",
        isRight: false,
        question: {
          text: '"5番線です" nghĩa là gì?',
          choices: [
            { text: "Phòng số 5", correct: false },
            { text: "Bến xe số 5", correct: false },
            { text: "Số điện thoại là 5", correct: false },
            { text: "Tuyến số 5", correct: true },
          ],
        },
      },
      {
        id: 7,
        speaker: "サントス",
        text: "どうも。",
        translation: "Cảm ơn ạ.",
        audio: "/audio/dialogue/dialogue4/7.mp3",
        isRight: true,
        question: {
          text: '"どうも" có thể dùng trong trường hợp nào?',
          choices: [
            { text: "Khi chào tạm biệt", correct: false },
            { text: "Khi xin lỗi", correct: false },
            { text: "Khi cảm ơn", correct: true },
            { text: "Khi giới thiệu", correct: false },
          ],
        },
      },
      {
        id: 8,
        speaker: "サントス",
        text: "あのう、この電車は　甲子園へ　行きますか。",
        translation: "À, tàu này có đi đến Kōshien không ạ?",
        audio: "/audio/dialogue/dialogue4/8.mp3",
        isRight: true,
        question: {
          text: '"この電車は　甲子園へ　行きますか" có nghĩa là gì?',
          choices: [
            { text: "Kōshien ở đâu?", correct: false },
            { text: "Bao giờ tàu đến Kōshien?", correct: false },
            { text: "Tàu này có đi đến Kōshien không?", correct: true },
            { text: "Đây có phải là tàu về nhà không?", correct: false },
          ],
        },
      },
      {
        id: 9,
        speaker: "男の人",
        text: "いいえ、次の「普通」ですよ。",
        translation: "Không, là chuyến 'phổ thông' tiếp theo.",
        audio: "/audio/dialogue/dialogue4/9.mp3",
        isRight: false,
        question: {
          text: '"次の「普通」です" nghĩa là gì?',
          choices: [
            { text: "Không có chuyến nào", correct: false },
            { text: "Là chuyến phổ thông tiếp theo", correct: true },
            { text: "Là chuyến tốc hành", correct: false },
            { text: "Là chuyến cuối cùng", correct: false },
          ],
        },
      },
      {
        id: 10,
        speaker: "サントス",
        text: "そうですか。どうも。",
        translation: "Vậy à. Cảm ơn ạ.",
        audio: "/audio/dialogue/dialogue4/10.mp3",
        isRight: true,
        question: {
          text: '"そうですか" có nghĩa là gì?',
          choices: [
            { text: "Không có gì", correct: false },
            { text: "Vậy à", correct: true },
            { text: "Đúng vậy", correct: false },
            { text: "Không đúng", correct: false },
          ],
        },
      },
    ],
  };
  
  export default dialogue4;
  