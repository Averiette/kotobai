const dialogue9 = {
    id: 9,
    title: "Bài hội thoại 9",
    content: [
      {
        id: 1,
        speaker: "山田",
        text: "サントスさんの　趣味は　何ですか。",
        translation: "Sở thích của anh Santos là gì?",
        audio: "/audio/dialogue/dialogue9/1.mp3",
        isRight: false,
        question: {
          text: '"趣味は　何ですか" có nghĩa là gì?',
          choices: [
            { text: "Bạn đang làm gì vậy?", correct: false },
            { text: "Sở thích của bạn là gì?", correct: true },
            { text: "Bạn có muốn đi đâu không?", correct: false },
            { text: "Bạn thích công việc nào?", correct: false },
          ],
        },
      },
      {
        id: 2,
        speaker: "サントス",
        text: "写真です。",
        translation: "Là chụp ảnh.",
        audio: "/audio/dialogue/dialogue9/2.mp3",
        isRight: true,
        question: {
          text: '"写真です" nghĩa là gì?',
          choices: [
            { text: "Là chụp ảnh", correct: true },
            { text: "Là đi bộ", correct: false },
            { text: "Là nấu ăn", correct: false },
            { text: "Là đọc sách", correct: false },
          ],
        },
      },
      {
        id: 3,
        speaker: "山田",
        text: "どんな　写真を　撮りますか。",
        translation: "Bạn chụp ảnh như thế nào?",
        audio: "/audio/dialogue/dialogue9/3.mp3",
        isRight: false,
        question: {
          text: '"どんな　写真を　撮りますか" có nghĩa là gì?',
          choices: [
            { text: "Bạn chụp ảnh gì?", correct: true },
            { text: "Bạn chụp ảnh ai?", correct: false },
            { text: "Bạn muốn chụp ảnh không?", correct: false },
            { text: "Ảnh của bạn đâu?", correct: false },
          ],
        },
      },
      {
        id: 4,
        speaker: "サントス",
        text: "動物の　写真です。特に　馬が　好きです。",
        translation: "Ảnh động vật. Đặc biệt là tôi thích ngựa.",
        audio: "/audio/dialogue/dialogue9/4.mp3",
        isRight: true,
        question: {
          text: '"馬が　好きです" nghĩa là gì?',
          choices: [
            { text: "Tôi thích ngựa", correct: true },
            { text: "Tôi cưỡi ngựa", correct: false },
            { text: "Tôi sợ ngựa", correct: false },
            { text: "Tôi mua ngựa", correct: false },
          ],
        },
      },
      {
        id: 5,
        speaker: "山田",
        text: "へえ、それは　おもしろいですね。\n日本へ　来てから、馬の　写真を　撮りましたか。",
        translation: "Ồ, điều đó thú vị thật đấy. Sau khi đến Nhật, bạn đã chụp ảnh ngựa chưa?",
        audio: "/audio/dialogue/dialogue9/5.mp3",
        isRight: false,
        question: {
          text: '"馬の　写真を　撮りましたか" có nghĩa là gì?',
          choices: [
            { text: "Bạn đã chụp ảnh ngựa chưa?", correct: true },
            { text: "Bạn thấy ngựa chưa?", correct: false },
            { text: "Bạn đã vẽ con ngựa chưa?", correct: false },
            { text: "Bạn đã nuôi ngựa chưa?", correct: false },
          ],
        },
      },
      {
        id: 6,
        speaker: "サントス",
        text: "いいえ。\n日本では　なかなか　馬を　見る　ことが　できません。",
        translation: "Chưa. Ở Nhật khó có thể thấy ngựa.",
        audio: "/audio/dialogue/dialogue9/6.mp3",
        isRight: true,
        question: {
          text: '"馬を　見る　ことが　できません" có nghĩa là gì?',
          choices: [
            { text: "Tôi không thể thấy ngựa", correct: true },
            { text: "Tôi không thể cưỡi ngựa", correct: false },
            { text: "Tôi không thể mua ngựa", correct: false },
            { text: "Tôi không thích ngựa", correct: false },
          ],
        },
      },
      {
        id: 7,
        speaker: "山田",
        text: "北海道に　馬が　たくさん　ありますよ。",
        translation: "Ở Hokkaido có rất nhiều ngựa đấy.",
        audio: "/audio/dialogue/dialogue9/7.mp3",
        isRight: false,
        question: {
          text: '"北海道に　馬が　たくさん　ありますよ" có nghĩa là gì?',
          choices: [
            { text: "Ở Hokkaido có nhiều ngựa", correct: true },
            { text: "Ngựa đến từ Hokkaido", correct: false },
            { text: "Có người cưỡi ngựa ở Hokkaido", correct: false },
            { text: "Hokkaido không có ngựa", correct: false },
          ],
        },
      },
      {
        id: 8,
        speaker: "サントス",
        text: "ほんとうですか。\nじゃ、夏休みに　ぜひ　行きたいです。",
        translation: "Thật không? Vậy thì kỳ nghỉ hè tôi nhất định sẽ đi.",
        audio: "/audio/dialogue/dialogue9/8.mp3",
        isRight: true,
        question: {
          text: '"夏休みに　ぜひ　行きたいです" có nghĩa là gì?',
          choices: [
            { text: "Tôi muốn đi vào kỳ nghỉ hè", correct: true },
            { text: "Tôi không thể đi vào kỳ nghỉ hè", correct: false },
            { text: "Tôi đã đi vào kỳ nghỉ hè", correct: false },
            { text: "Tôi làm việc vào kỳ nghỉ hè", correct: false },
          ],
        },
      },
    ],
  };
  
  export default dialogue9;
  