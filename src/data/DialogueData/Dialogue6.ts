const dialogue6 = {
    id: 6,
    title: "Bài hội thoại 6",
    content: [
      {
        id: 1,
        speaker: "山田一郎",
        text: "はい。",
        translation: "Vâng.",
        audio: "/audio/dialogue/dialogue6/1.mp3",
        isRight: true,
        question: {
          text: '"はい" có nghĩa là gì?',
          choices: [
            { text: "Không", correct: false },
            { text: "Vâng / Dạ", correct: true },
            { text: "Tạm biệt", correct: false },
            { text: "Xin lỗi", correct: false },
          ],
        },
      },
      {
        id: 2,
        speaker: "サントス",
        text: "サントスです。",
        translation: "Tôi là Santos.",
        audio: "/audio/dialogue/dialogue6/2.mp3",
        isRight: false,
        question: {
          text: '"サントスです" có nghĩa là gì?',
          choices: [
            { text: "Tôi là Santos", correct: true },
            { text: "Tạm biệt nhé", correct: false },
            { text: "Tôi thích cà phê", correct: false },
            { text: "Tôi không phải là Santos", correct: false },
          ],
        },
      },
      {
        id: 3,
        speaker: "山田一郎",
        text: "いらっしゃい。どうぞ　お上がり　ください。",
        translation: "Chào mừng bạn. Mời vào nhà.",
        audio: "/audio/dialogue/dialogue6/3.mp3",
        isRight: true,
        question: {
          text: '"お上がりください" là lời mời làm gì?',
          choices: [
            { text: "Mời ăn cơm", correct: false },
            { text: "Mời vào nhà", correct: true },
            { text: "Mời rời đi", correct: false },
            { text: "Mời ngồi", correct: false },
          ],
        },
      },
      {
        id: 4,
        speaker: "サントス",
        text: "失礼します。",
        translation: "Xin phép (khi vào nhà).",
        audio: "/audio/dialogue/dialogue6/4.mp3",
        isRight: false,
        question: {
          text: '"失礼します" thường dùng khi nào?',
          choices: [
            { text: "Khi tạm biệt", correct: false },
            { text: "Khi vào hoặc rời khỏi nơi trang trọng", correct: true },
            { text: "Khi giới thiệu", correct: false },
            { text: "Khi cảm ơn", correct: false },
          ],
        },
      },
      {
        id: 5,
        speaker: "山田友子",
        text: "コーヒーは　いかがですか。",
        translation: "Bạn dùng cà phê nhé?",
        audio: "/audio/dialogue/dialogue6/5.mp3",
        isRight: true,
        question: {
          text: '"コーヒーは　いかがですか" là câu mời như thế nào?',
          choices: [
            { text: "Bạn có muốn uống cà phê không?", correct: true },
            { text: "Bạn uống trà không?", correct: false },
            { text: "Cà phê ở đâu?", correct: false },
            { text: "Bạn mua cà phê chưa?", correct: false },
          ],
        },
      },
      {
        id: 6,
        speaker: "サントス",
        text: "ありがとう　ございます。",
        translation: "Cảm ơn bạn.",
        audio: "/audio/dialogue/dialogue6/6.mp3",
        isRight: false,
        question: {
          text: '"ありがとう　ございます" có nghĩa là gì?',
          choices: [
            { text: "Xin lỗi", correct: false },
            { text: "Tôi hiểu rồi", correct: false },
            { text: "Cảm ơn", correct: true },
            { text: "Không cần đâu", correct: false },
          ],
        },
      },
      {
        id: 7,
        speaker: "山田友子",
        text: "どうぞ。",
        translation: "Mời bạn.",
        audio: "/audio/dialogue/dialogue6/7.mp3",
        isRight: true,
        question: {
          text: '"どうぞ" thường dùng khi nào?',
          choices: [
            { text: "Khi chúc ngủ ngon", correct: false },
            { text: "Khi mời hoặc đưa gì đó cho ai", correct: true },
            { text: "Khi xin phép", correct: false },
            { text: "Khi giới thiệu", correct: false },
          ],
        },
      },
      {
        id: 8,
        speaker: "サントス",
        text: "いただきます。この　スプーン、すてきですね。",
        translation: "Tôi xin phép dùng. Cái thìa này đẹp quá.",
        audio: "/audio/dialogue/dialogue6/8.mp3",
        isRight: false,
        question: {
          text: '"いただきます" thường dùng trong trường hợp nào?',
          choices: [
            { text: "Khi nhận quà", correct: false },
            { text: "Trước khi ăn", correct: true },
            { text: "Sau khi ăn", correct: false },
            { text: "Khi chào hỏi", correct: false },
          ],
        },
      },
      {
        id: 9,
        speaker: "山田友子",
        text: "ええ。会社の　人に　もらいました。",
        translation: "Vâng. Tôi được một người trong công ty tặng đấy.",
        audio: "/audio/dialogue/dialogue6/9.mp3",
        isRight: true,
        question: {
          text: '"会社の　人に　もらいました" nghĩa là gì?',
          choices: [
            { text: "Tôi đã cho người trong công ty", correct: false },
            { text: "Tôi được người trong công ty tặng", correct: true },
            { text: "Tôi làm việc ở công ty", correct: false },
            { text: "Tôi mượn từ người trong công ty", correct: false },
          ],
        },
      },
      {
        id: 10,
        speaker: "山田友子",
        text: "メキシコの　お土産です。",
        translation: "Đó là quà lưu niệm từ Mexico.",
        audio: "/audio/dialogue/dialogue6/10.mp3",
        isRight: false,
        question: {
          text: '"お土産" là gì?',
          choices: [
            { text: "Quà lưu niệm", correct: true },
            { text: "Bữa ăn", correct: false },
            { text: "Bưu thiếp", correct: false },
            { text: "Tiền tệ", correct: false },
          ],
        },
      },
    ],
  };
  
  export default dialogue6;
  