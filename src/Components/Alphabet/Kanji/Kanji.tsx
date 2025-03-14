import React from "react";
import '../Hiragana/Hiragana.css'

const kanjiList = [
    { id: 1, char: "日", meaning: "Mặt trời, ngày", kunyomi: "ひ", onyomi: "ニチ, ジツ" },
    { id: 2, char: "月", meaning: "Mặt trăng, tháng", kunyomi: "つき", onyomi: "ゲツ, ガツ" },
    { id: 3, char: "山", meaning: "Núi", kunyomi: "やま", onyomi: "サン" },
    // ... Thêm các chữ Kanji khác vào đây
];

const KanjiBlock: React.FC = () => {
    return (
                <div className="alphabet-layout">
                    <div>
                        <h3 className="alphabet-title">Một số chữ Kanji cơ bản</h3>
                        <div className="kanji-grid">
                            {kanjiList.map((kanji) => (
                                <div key={kanji.id} className="kanji-box">
                                    <span className="kanji-char">{kanji.char}</span>
                                    <span className="kanji-meaning">{kanji.meaning}</span>
                                    <span className="kanji-kunyomi">Kunyomi: {kanji.kunyomi}</span>
                                    <span className="kanji-onyomi">Onyomi: {kanji.onyomi}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    );
};

export default KanjiBlock;
