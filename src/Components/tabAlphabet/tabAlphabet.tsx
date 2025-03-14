import React, { useState } from 'react';
import HiraganaBlock from '../Alphabet/Hiragana/Hiragana';
import KatakanaBlock from '../Alphabet/Katakana/KatakanaBlock';
import KanjiBlock from '../Alphabet/Kanji/Kanji';
import styles from './tabAlphabet.module.css';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'hiragana' | 'katakana' | 'kanji'>('hiragana');

    const handleTabClick = (tabId: 'hiragana' | 'katakana' | 'kanji') => {
        setActiveTab(tabId);
    };

    return (
        <div className='main-layout'>
            <div className={styles.mainContainer}> 
                <div className={styles.titleBox}> 
                    <h3 className={styles.title}>BẢNG CHỮ CÁI</h3> 
                    <p className={`${styles.subtitle} b6`}>
                        Tiếng Nhật có ba loại chữ viết: Hiragana, Katakana và Kanji.
                        <br />Hiragana và Katakana là chữ biểu âm, mỗi chữ đại diện cho một âm tiết,
                        trong khi Kanji là chữ tượng hình, mỗi chữ mang một ý nghĩa nhất định.
                    </p>
                </div>

                <div className={styles.alphabetContainer}>
                    <div className={styles.tabContainer}>
                        <div className={styles.tabs}>
                            <button
                                className={`${styles.tab} ${activeTab === 'hiragana' ? styles.active : ''}`}
                                onClick={() => handleTabClick('hiragana')}
                            >
                                Hiragana
                            </button>
                            <button
                                className={`${styles.tab} ${activeTab === 'katakana' ? styles.active : ''}`}
                                onClick={() => handleTabClick('katakana')}
                            >
                                Katakana
                            </button>
                            <button
                                className={`${styles.tab} ${activeTab === 'kanji' ? styles.active : ''}`}
                                onClick={() => handleTabClick('kanji')}
                            >
                                Kanji
                            </button>
                        </div>
                        {activeTab === 'hiragana' && <HiraganaBlock />}
                        {activeTab === 'katakana' && <KatakanaBlock />}
                        {activeTab === 'kanji' && <KanjiBlock />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;