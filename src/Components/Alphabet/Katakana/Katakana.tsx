import React from "react";
import Tabs from "../TabAlphabet/tabAlphabet";

const katakanaBasic = [
    { id: 1, char: "ア", romaji: "a" }, { id: 2, char: "イ", romaji: "i" }, { id: 3, char: "ウ", romaji: "u" },
    { id: 4, char: "エ", romaji: "e" }, { id: 5, char: "オ", romaji: "o" },
    { id: 6, char: "カ", romaji: "ka" }, { id: 7, char: "キ", romaji: "ki" }, { id: 8, char: "ク", romaji: "ku" },
    { id: 9, char: "ケ", romaji: "ke" }, { id: 10, char: "コ", romaji: "ko" },
    // ... thêm các chữ cái còn lại tương tự như Hiragana
];

const playAudio = (romaji: string) => {
    const audio = new Audio(`/audio/katakana/${romaji}.mp3`);
    audio.play();
};

const KatakanaBlock: React.FC = () => {
    return (
        <div className="main-container">
            <div className="title-box">
                <h3 className="title">BẢNG CHỮ CÁI KATAKANA</h3>
                <p className="subtitle">
                    Katakana được dùng chủ yếu để viết từ mượn, tên nước ngoài và âm thanh tượng thanh.
                </p>
            </div>

            <div className="alphabet-container">
                <Tabs />
                <div className="alphabet-layout">
                    <div>
                        <h3 className="alphabet-title">Bảng chữ cái Katakana cơ bản</h3>
                        <div className="alphabet-grid">
                            {katakanaBasic.map((char) => (
                                <div
                                    key={char.id}
                                    className="alphabet-box"
                                    onClick={() => playAudio(char.romaji)}
                                >
                                    <span className="char">{char.char}</span>
                                    <span className="romaji">{char.romaji}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KatakanaBlock;
