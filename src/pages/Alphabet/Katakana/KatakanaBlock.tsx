import React from 'react';
import Tabs from '../TabAlphabet/tabAlphabet';
import "./Katakana.css";
import { katakanaBasic, KatakanaTenten, KatakanaCombine } from '../../../data/Alphabet/Katakana';

const playAudio = (romaji: string) => {
    const audio = new Audio(`/audio/katakana/${romaji}.mp3`);
    audio.play().catch((error) => console.error("Lỗi phát âm thanh:", error));
};

const KatakanaBlock: React.FC = () => {
    return (
        <div className="main-container">
            <div className="title-box">
                <h3 className="title">BẢNG CHỮ CÁI KATAKANA</h3>
                <p className="subtitle b6">
                    Tiếng Nhật có ba loại chữ viết: Hiragana, Katakana và Kanji.
                    <br />Katakana chủ yếu được sử dụng để viết từ mượn, tên nước ngoài, và từ tượng thanh.
                </p>
            </div>

            <div className="alphabet-container">
                <Tabs />
                <div className="alphabet-layout">
                    <div>
                        <h3 className="alphabet-title">Bảng chữ cơ bản</h3>
                        <div className="alphabet-grid">
                            {katakanaBasic.map((char) => (
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

                    <div className="alphabet-grid-right">
                        <div>
                            <h3 className="alphabet-title">Chữ cái âm đục</h3>
                            <div className="alphabet-grid">
                                {KatakanaTenten.map((char) => (
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

                        <div>
                            <h3 className="alphabet-title">Chữ cái âm ghép</h3>
                            <div className="alphabet-grid">
                                {KatakanaCombine.map((char) => (
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
    );
};

export default KatakanaBlock;
