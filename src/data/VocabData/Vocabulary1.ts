export const vocabData: { 
    [key: number]: { 
        nameJP: string;  
        nameVI: string;  
        words: { id: number; word: string; kanji: string; romaji: string; meaning: string }[] 
    } 
} = {
    1: {
        nameJP: "私の名前・国・仕事",
        nameVI: "Tên tôi - Quốc gia - Nghề nghiệp",
        words: [
            { id: 1, word: "私", kanji: "私", romaji: "watashi", meaning: "Tôi" },
            { id: 2, word: "名前", kanji: "名", romaji: "namae", meaning: "Tên (bạn)" },
            { id: 3, word: "国", kanji: "国", romaji: "kuni", meaning: "Đất nước (bạn)" },
            { id: 4, word: "日本", kanji: "日本", romaji: "nihon", meaning: "Nhật Bản" },
            { id: 5, word: "韓国", kanji: "韓国", romaji: "kankoku", meaning: "Hàn Quốc" },
            { id: 6, word: "中国", kanji: "中国", romaji: "chuugoku", meaning: "Trung Quốc" },
            { id: 7, word: "アメリカ", kanji: "", romaji: "amerika", meaning: "Mỹ" },
            { id: 8, word: "イタリア", kanji: "", romaji: "itaria", meaning: "Ý" },
            { id: 9, word: "オーストラリア", kanji: "", romaji: "oosutoraria", meaning: "Úc" },
            { id: 10, word: "ロシア", kanji: "", romaji: "roshia", meaning: "Nga" },
            { id: 11, word: "タイ", kanji: "", romaji: "tai", meaning: "Thái Lan" },
            { id: 12, word: "高校", kanji: "高", romaji: "koukou", meaning: "Trường trung học phổ thông (cấp 3)" },
            { id: 13, word: "大学", kanji: "大", romaji: "daigaku", meaning: "Trường đại học" },
            { id: 14, word: "日本語学校", kanji: "日本語", romaji: "nihongogakkou", meaning: "Trường tiếng Nhật" },
            { id: 15, word: "仕事", kanji: "仕", romaji: "shigoto", meaning: "Công việc (của bạn)" },
            { id: 16, word: "学生", kanji: "学", romaji: "gakusei", meaning: "Học sinh" },
            { id: 17, word: "先生", kanji: "先", romaji: "sensei", meaning: "Thầy/Cô giáo" },
            { id: 18, word: "教師", kanji: "教", romaji: "kyoushi", meaning: "Giáo viên" },
            { id: 19, word: "会社員", kanji: "会社", romaji: "kaishain", meaning: "Nhân viên văn phòng" },
            { id: 20, word: "社員", kanji: "社", romaji: "shain", meaning: "Nhân viên (của công ty nào đó)" }
        ]
    },
    2: {
        nameJP: "私の誕生日",
        nameVI: "Ngày sinh của tôi",
        words: [
            { id: 21, word: "誕生日", kanji: "誕", romaji: "tanjoubi", meaning: "Ngày sinh / Sinh nhật" },
            { id: 22, word: "ブラジル", kanji: "", romaji: "burajiru", meaning: "Brazil" },
            { id: 23, word: "〜月", kanji: "月", romaji: "~gatsu", meaning: "Tháng ~" },
            { id: 24, word: "〜日", kanji: "日", romaji: "~nichi", meaning: "Ngày (mùng) ~" },
            { id: 25, word: "〜歳", kanji: "歳", romaji: "~sai", meaning: "~ tuổi" },
            { id: 26, word: "いつ", kanji: "", romaji: "itsu", meaning: "Lúc nào / Khi nào" }
        ]
    },
    3: {
        nameJP: "私の趣味",
        nameVI: "Sở thích của tôi",
        words: [
            { id: 27, word: "趣味", kanji: "趣", romaji: "shumi", meaning: "Sở thích" },
            { id: 28, word: "スポーツ", kanji: "", romaji: "supootsu", meaning: "Thể thao" },
            { id: 29, word: "サッカー", kanji: "", romaji: "sakkaa", meaning: "Bóng đá" },
            { id: 30, word: "テニス", kanji: "", romaji: "tenisu", meaning: "Tennis (Quần vợt)" },
            { id: 31, word: "水泳", kanji: "水", romaji: "suiei", meaning: "Bơi lội" },
            { id: 32, word: "音楽", kanji: "音", romaji: "ongaku", meaning: "Âm nhạc" },
            { id: 33, word: "読書", kanji: "読", romaji: "dokusho", meaning: "Đọc sách" },
            { id: 34, word: "旅行", kanji: "旅", romaji: "ryokou", meaning: "Du lịch" },
            { id: 35, word: "料理", kanji: "料", romaji: "ryouri", meaning: "Nấu ăn / Món ăn" },
            { id: 36, word: "何", kanji: "何", romaji: "nani", meaning: "Cái gì" },
            { id: 37, word: "あっ", kanji: "", romaji: "a!", meaning: "A! / Á!" }
        ]
    }
};
