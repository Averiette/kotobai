import React from 'react';
import Tabs from '../TabAlphabet/tabAlphabet'
import "./Hiragana.css";

const hiraganaBasic = [
    { id: 1, char: "あ", romaji: "a" }, { id: 2, char: "い", romaji: "i" }, { id: 3, char: "う", romaji: "u" }, { id: 4, char: "え", romaji: "e" }, { id: 5, char: "お", romaji: "o" },
    { id: 6, char: "か", romaji: "ka" }, { id: 7, char: "き", romaji: "ki" }, { id: 8, char: "く", romaji: "ku" }, { id: 9, char: "け", romaji: "ke" }, { id: 10, char: "こ", romaji: "ko" },
    { id: 11, char: "さ", romaji: "sa" }, { id: 12, char: "し", romaji: "shi" }, { id: 13, char: "す", romaji: "su" }, { id: 14, char: "せ", romaji: "se" }, { id: 15, char: "そ", romaji: "so" },
    { id: 16, char: "た", romaji: "ta" }, { id: 17, char: "ち", romaji: "chi" }, { id: 18, char: "つ", romaji: "tsu" }, { id: 19, char: "て", romaji: "te" }, { id: 20, char: "と", romaji: "to" },
    { id: 21, char: "な", romaji: "na" }, { id: 22, char: "に", romaji: "ni" }, { id: 23, char: "ぬ", romaji: "nu" }, { id: 24, char: "ね", romaji: "ne" }, { id: 25, char: "の", romaji: "no" },
    { id: 26, char: "は", romaji: "ha" }, { id: 27, char: "ひ", romaji: "hi" }, { id: 28, char: "ふ", romaji: "fu" }, { id: 29, char: "へ", romaji: "he" }, { id: 30, char: "ほ", romaji: "ho" },
    { id: 31, char: "ま", romaji: "ma" }, { id: 32, char: "み", romaji: "mi" }, { id: 33, char: "む", romaji: "mu" }, { id: 34, char: "め", romaji: "me" }, { id: 35, char: "も", romaji: "mo" },
    { id: 36, char: "や", romaji: "ya" }, { id: 37, char: "", romaji: "", isEmpty: true }, { id: 38, char: "ゆ", romaji: "yu" }, { id: 39, char: "", romaji: "", isEmpty: true }, { id: 40, char: "よ", romaji: "yo" },
    { id: 41, char: "ら", romaji: "ra" }, { id: 42, char: "り", romaji: "ri" }, { id: 43, char: "る", romaji: "ru" }, { id: 44, char: "れ", romaji: "re" }, { id: 45, char: "ろ", romaji: "ro" },
    { id: 46, char: "わ", romaji: "wa" }, { id: 47, char: "", romaji: "", isEmpty: true }, { id: 48, char: "を", romaji: "o" }, { id: 49, char: "", romaji: "", isEmpty: true }, { id: 50, char: "ん", romaji: "n" }
];

const HiraganaTenten = [
    { id: 1, char: "が", romaji: "ga" }, { id: 2, char: "ぎ", romaji: "gi" }, { id: 3, char: "ぐ", romaji: "gu" }, { id: 4, char: "げ", romaji: "ge" }, { id: 5, char: "ご", romaji: "go" },
    { id: 6, char: "ざ", romaji: "za" }, { id: 7, char: "じ", romaji: "ji" }, { id: 8, char: "ず", romaji: "zu" }, { id: 9, char: "ぜ", romaji: "ze" }, { id: 10, char: "ぞ", romaji: "zo" },
    { id: 11, char: "だ", romaji: "da" }, { id: 12, char: "ぢ", romaji: "ji" }, { id: 13, char: "づ", romaji: "zu" }, { id: 14, char: "で", romaji: "de" }, { id: 15, char: "ど", romaji: "do" },
    { id: 16, char: "ば", romaji: "ba" }, { id: 17, char: "び", romaji: "bi" }, { id: 18, char: "ぶ", romaji: "bu" }, { id: 19, char: "べ", romaji: "be" }, { id: 20, char: "ぼ", romaji: "bo" },
    { id: 21, char: "ぱ", romaji: "pa" }, { id: 22, char: "ぴ", romaji: "pi" }, { id: 23, char: "ぷ", romaji: "pu" }, { id: 24, char: "ぺ", romaji: "pe" }, { id: 25, char: "ぽ", romaji: "po" }
];

const HiraganaCombine = [
    { id: 1, char: "", romaji: "", isEmpty: true }, { id: 2, char: "きゃ", romaji: "kya" }, { id: 3, char: "きゅ", romaji: "kyu" }, { id: 4, char: "きょ", romaji: "kyo" }, { id: 5, char: "", romaji: "", isEmpty: true },
    { id: 6, char: "", romaji: "", isEmpty: true }, { id: 7, char: "しゃ", romaji: "sha" }, { id: 8, char: "しゅ", romaji: "shu" }, { id: 9, char: "しょ", romaji: "sho" }, { id: 10, char: "", romaji: "", isEmpty: true },
    { id: 11, char: "", romaji: "", isEmpty: true }, { id: 12, char: "ちゃ", romaji: "cha" }, { id: 13, char: "ちゅ", romaji: "chu" }, { id: 14, char: "ちょ", romaji: "cho" }, { id: 15, char: "", romaji: "", isEmpty: true },
    { id: 16, char: "", romaji: "", isEmpty: true }, { id: 17, char: "にゃ", romaji: "nya" }, { id: 18, char: "にゅ", romaji: "nyu" }, { id: 19, char: "にょ", romaji: "nyo" }, { id: 20, char: "", romaji: "", isEmpty: true },
    { id: 21, char: "", romaji: "", isEmpty: true }, { id: 22, char: "ひゃ", romaji: "hya" }, { id: 23, char: "ひゅ", romaji: "hyu" }, { id: 24, char: "ひょ", romaji: "hyo" }, { id: 25, char: "", romaji: "", isEmpty: true },
    { id: 26, char: "", romaji: "", isEmpty: true }, { id: 27, char: "みゃ", romaji: "mya" }, { id: 28, char: "みゅ", romaji: "myu" }, { id: 29, char: "みょ", romaji: "myo" }, { id: 30, char: "", romaji: "", isEmpty: true },
    { id: 31, char: "", romaji: "", isEmpty: true }, { id: 32, char: "りゃ", romaji: "rya" }, { id: 33, char: "りゅ", romaji: "ryu" }, { id: 34, char: "りょ", romaji: "ryo" }, { id: 35, char: "", romaji: "", isEmpty: true },
    { id: 36, char: "", romaji: "", isEmpty: true }, { id: 37, char: "ぎゃ", romaji: "gya" }, { id: 38, char: "ぎゅ", romaji: "gyu" }, { id: 39, char: "ぎょ", romaji: "gyo" }, { id: 40, char: "", romaji: "", isEmpty: true },
    { id: 41, char: "", romaji: "", isEmpty: true }, { id: 42, char: "じゃ", romaji: "ja" }, { id: 43, char: "じゅ", romaji: "ju" }, { id: 44, char: "じょ", romaji: "jo" }, { id: 45, char: "", romaji: "", isEmpty: true },
    { id: 46, char: "", romaji: "", isEmpty: true }, { id: 47, char: "びゃ", romaji: "bya" }, { id: 48, char: "びゅ", romaji: "byu" }, { id: 49, char: "びょ", romaji: "byo" }, { id: 50, char: "", romaji: "", isEmpty: true },
    { id: 51, char: "", romaji: "", isEmpty: true }, { id: 52, char: "ぴゃ", romaji: "pya" }, { id: 53, char: "ぴゅ", romaji: "pyu" }, { id: 54, char: "ぴょ", romaji: "pyo" }, { id: 55, char: "", romaji: "", isEmpty: true }
];

const playAudio = (romaji: string) => {
    const audio = new Audio(`/audio/hiragana/${romaji}.mp3`);
    audio.play();
};

const HiraganaBlock: React.FC = () => {
    return (
        <div className="main-container">
            <div className="title-box">
                <h3 className="title">BẢNG CHỮ CÁI</h3>
                <p className="subtitle b6">
                    Tiếng Nhật có ba loại chữ viết: Hiragana, Katakana và Kanji.
                    <br />Hiragana và Katakana là chữ biểu âm, mỗi chữ đại diện cho một âm tiết, 
                    trong khi Kanji là chữ tượng hình, mỗi chữ mang một ý nghĩa nhất định.
                </p>
            </div>


            <div className="alphabet-container">
                <Tabs />
                <div className="alphabet-layout">
                    <div><h3 className="alphabet-title">Bảng chữ cơ bản</h3>
                    <div className="alphabet-grid">
                        {hiraganaBasic.map((char) => (  
                            <div 
                            key={char.id} 
                            className={char.isEmpty ? "alphabet-box empty-box" : "alphabet-box"}
                            onClick={() => !char.isEmpty && playAudio(char.romaji)}
                        >
                            {!char.isEmpty && (
                                <>
                                    <span className="char">{char.char}</span>
                                    <span className="romaji">{char.romaji}</span>
                                </>
                            )}
                        </div>
                        ))}
                    </div></div>


                    <div className="alphabet-grid-right">
                    <div><h3 className="alphabet-title">Chữ cái âm đục</h3>
                        <div className="alphabet-grid">
                            {HiraganaTenten.map((char) => (
                                <div 
                                    key={char.id} 
                                    className={char.isEmpty ? "alphabet-box empty-box" : "alphabet-box"}
                                    onClick={() => !char.isEmpty && playAudio(char.romaji)}
                                >
                                    {!char.isEmpty && (
                                        <>
                                            <span className="char">{char.char}</span>
                                            <span className="romaji">{char.romaji}</span>
                                        </>
                                    )}
                                </div>
                            ))}</div>


                        <div><h3 className="alphabet-title">Chữ cái âm ghép</h3>
                        <div className="alphabet-grid">
                            {HiraganaCombine.map((char) => (
                                <div 
                                    key={char.id} 
                                    className={char.isEmpty ? "alphabet-box empty-box" : "alphabet-box"}
                                    onClick={() => !char.isEmpty && playAudio(char.romaji)}
                                >
                                    {!char.isEmpty && (
                                        <>
                                            <span className="char">{char.char}</span>
                                            <span className="romaji">{char.romaji}</span>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HiraganaBlock;

