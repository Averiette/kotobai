const dialogue5 = {
    id: 5,
    title: "Bài hội thoại 5",
    content: [
      {
        id: 1,
        speaker: "佐藤",
        text: "ミラーさん。",
        translation: "Anh Miller.",
        audio: "/audio/dialogue/dialogue5/1.mp3",
        isRight: true,
        question: {
          text: '"ミラーさん" là cách gọi như thế nào?',
          choices: [
            { text: "Tên người kèm kính ngữ", correct: true },
            { text: "Tên một địa điểm", correct: false },
            { text: "Một từ cảm thán", correct: false },
            { text: "Một kiểu chào", correct: false },
          ],
        },
      },
      {
        id: 2,
        speaker: "ミラー",
        text: "何ですか。",
        translation: "Có chuyện gì vậy?",
        audio: "/audio/dialogue/dialogue5/2.mp3",
        isRight: false,
        question: {
          text: '"何ですか" có nghĩa là gì?',
          choices: [
            { text: "Là gì thế?", correct: true },
            { text: "Khi nào?", correct: false },
            { text: "Ở đâu?", correct: false },
            { text: "Ai vậy?", correct: false },
          ],
        },
      },
      {
        id: 3,
        speaker: "佐藤",
        text: "あした　友達と　お花見を　します。",
        translation: "Ngày mai tôi sẽ đi ngắm hoa với bạn.",
        audio: "/audio/dialogue/dialogue5/3.mp3",
        isRight: true,
        question: {
          text: '"お花見をします" nghĩa là gì?',
          choices: [
            { text: "Xem pháo hoa", correct: false },
            { text: "Ngắm hoa anh đào", correct: true },
            { text: "Tưới cây", correct: false },
            { text: "Mua hoa", correct: false },
          ],
        },
      },
      {
        id: 4,
        speaker: "佐藤",
        text: "ミラーさんも　いっしょに　行きませんか。",
        translation: "Anh Miller đi cùng nhé?",
        audio: "/audio/dialogue/dialogue5/4.mp3",
        isRight: true,
        question: {
          text: '"いっしょに　行きませんか" mang ý nghĩa gì?',
          choices: [
            { text: "Không đi cùng nhé?", correct: false },
            { text: "Có muốn đi cùng không?", correct: true },
            { text: "Hãy đi ngay", correct: false },
            { text: "Tạm biệt nhé", correct: false },
          ],
        },
      },
      {
        id: 5,
        speaker: "ミラー",
        text: "いいですね。どこへ　行きますか。",
        translation: "Hay đấy. Đi đâu vậy?",
        audio: "/audio/dialogue/dialogue5/5.mp3",
        isRight: false,
        question: {
          text: '"どこへ　行きますか" có nghĩa là gì?',
          choices: [
            { text: "Đi như thế nào?", correct: false },
            { text: "Đi cùng ai?", correct: false },
            { text: "Đi đâu?", correct: true },
            { text: "Đi mấy giờ?", correct: false },
          ],
        },
      },
      {
        id: 6,
        speaker: "佐藤",
        text: "大阪城公園です。",
        translation: "Là công viên lâu đài Osaka.",
        audio: "/audio/dialogue/dialogue5/6.mp3",
        isRight: true,
        question: {
          text: '"大阪城公園" là gì?',
          choices: [
            { text: "Một nhà ga", correct: false },
            { text: "Một công viên", correct: true },
            { text: "Một siêu thị", correct: false },
            { text: "Một nhà hàng", correct: false },
          ],
        },
      },
      {
        id: 7,
        speaker: "ミラー",
        text: "何時ですか。",
        translation: "Mấy giờ vậy?",
        audio: "/audio/dialogue/dialogue5/7.mp3",
        isRight: false,
        question: {
          text: '"何時ですか" có nghĩa là gì?',
          choices: [
            { text: "Mấy giờ?", correct: true },
            { text: "Ngày mấy?", correct: false },
            { text: "Ở đâu?", correct: false },
            { text: "Bao nhiêu?", correct: false },
          ],
        },
      },
      {
        id: 8,
        speaker: "佐藤",
        text: "10時です。大阪城公園駅で　会いましょう。",
        translation: "10 giờ. Gặp nhau ở ga Osaka Castle Park nhé.",
        audio: "/audio/dialogue/dialogue5/8.mp3",
        isRight: true,
        question: {
          text: '"会いましょう" mang ý nghĩa gì?',
          choices: [
            { text: "Cùng đi", correct: false },
            { text: "Cùng gặp nhau", correct: true },
            { text: "Cùng ăn", correct: false },
            { text: "Cùng chơi", correct: false },
          ],
        },
      },
      {
        id: 9,
        speaker: "ミラー",
        text: "わかりました。",
        translation: "Tôi hiểu rồi.",
        audio: "/audio/dialogue/dialogue5/9.mp3",
        isRight: false,
        question: {
          text: '"わかりました" có nghĩa là gì?',
          choices: [
            { text: "Tôi không biết", correct: false },
            { text: "Tôi không hiểu", correct: false },
            { text: "Tôi hiểu rồi", correct: true },
            { text: "Tôi sẽ hỏi lại", correct: false },
          ],
        },
      },
      {
        id: 10,
        speaker: "佐藤",
        text: "じゃ、また　あした。",
        translation: "Vậy, hẹn gặp lại ngày mai.",
        audio: "/audio/dialogue/dialogue5/10.mp3",
        isRight: true,
        question: {
          text: '"また　あした" mang ý nghĩa gì?',
          choices: [
            { text: "Ngày mai nữa", correct: false },
            { text: "Mai không gặp", correct: false },
            { text: "Hẹn gặp lại ngày mai", correct: true },
            { text: "Hôm qua", correct: false },
          ],
        },
      },
    ],
  };
  
  export default dialogue5;
  