export interface KatakanaChar {
    id: number;
    char: string;
    romaji: string;
    isEmpty?: boolean;
}

export const katakanaBasic: KatakanaChar[] = [
    { id: 1, char: "ア", romaji: "a" }, { id: 2, char: "イ", romaji: "i" }, { id: 3, char: "ウ", romaji: "u" }, { id: 4, char: "エ", romaji: "e" }, { id: 5, char: "オ", romaji: "o" },
    { id: 6, char: "カ", romaji: "ka" }, { id: 7, char: "キ", romaji: "ki" }, { id: 8, char: "ク", romaji: "ku" }, { id: 9, char: "ケ", romaji: "ke" }, { id: 10, char: "コ", romaji: "ko" },
    { id: 11, char: "サ", romaji: "sa" }, { id: 12, char: "シ", romaji: "shi" }, { id: 13, char: "ス", romaji: "su" }, { id: 14, char: "セ", romaji: "se" }, { id: 15, char: "ソ", romaji: "so" },
    { id: 16, char: "タ", romaji: "ta" }, { id: 17, char: "チ", romaji: "chi" }, { id: 18, char: "ツ", romaji: "tsu" }, { id: 19, char: "テ", romaji: "te" }, { id: 20, char: "ト", romaji: "to" },
    { id: 21, char: "ナ", romaji: "na" }, { id: 22, char: "ニ", romaji: "ni" }, { id: 23, char: "ヌ", romaji: "nu" }, { id: 24, char: "ネ", romaji: "ne" }, { id: 25, char: "ノ", romaji: "no" },
    { id: 26, char: "ハ", romaji: "ha" }, { id: 27, char: "ヒ", romaji: "hi" }, { id: 28, char: "フ", romaji: "fu" }, { id: 29, char: "ヘ", romaji: "he" }, { id: 30, char: "ホ", romaji: "ho" },
    { id: 31, char: "マ", romaji: "ma" }, { id: 32, char: "ミ", romaji: "mi" }, { id: 33, char: "ム", romaji: "mu" }, { id: 34, char: "メ", romaji: "me" }, { id: 35, char: "モ", romaji: "mo" },
    { id: 36, char: "ヤ", romaji: "ya" }, { id: 37, char: "", romaji: "", isEmpty: true }, { id: 38, char: "ユ", romaji: "yu" }, { id: 39, char: "", romaji: "", isEmpty: true }, { id: 40, char: "ヨ", romaji: "yo" },
    { id: 41, char: "ラ", romaji: "ra" }, { id: 42, char: "リ", romaji: "ri" }, { id: 43, char: "ル", romaji: "ru" }, { id: 44, char: "レ", romaji: "re" }, { id: 45, char: "ロ", romaji: "ro" },
    { id: 46, char: "ワ", romaji: "wa" }, { id: 47, char: "", romaji: "", isEmpty: true }, { id: 48, char: "ヲ", romaji: "o" }, { id: 49, char: "", romaji: "", isEmpty: true }, { id: 50, char: "ン", romaji: "n" }
];

export const KatakanaTenten: KatakanaChar[] = [
    { id: 1, char: "ガ", romaji: "ga" }, { id: 2, char: "ギ", romaji: "gi" }, { id: 3, char: "グ", romaji: "gu" }, { id: 4, char: "ゲ", romaji: "ge" }, { id: 5, char: "ゴ", romaji: "go" },
    { id: 6, char: "ザ", romaji: "za" }, { id: 7, char: "ジ", romaji: "ji" }, { id: 8, char: "ズ", romaji: "zu" }, { id: 9, char: "ゼ", romaji: "ze" }, { id: 10, char: "ゾ", romaji: "zo" },
    { id: 11, char: "ダ", romaji: "da" }, { id: 12, char: "ヂ", romaji: "ji" }, { id: 13, char: "ヅ", romaji: "zu" }, { id: 14, char: "デ", romaji: "de" }, { id: 15, char: "ド", romaji: "do" },
    { id: 16, char: "バ", romaji: "ba" }, { id: 17, char: "ビ", romaji: "bi" }, { id: 18, char: "ブ", romaji: "bu" }, { id: 19, char: "ベ", romaji: "be" }, { id: 20, char: "ボ", romaji: "bo" },
    { id: 21, char: "パ", romaji: "pa" }, { id: 22, char: "ピ", romaji: "pi" }, { id: 23, char: "プ", romaji: "pu" }, { id: 24, char: "ペ", romaji: "pe" }, { id: 25, char: "ポ", romaji: "po" }
];

export const KatakanaCombine: KatakanaChar[] = [
    { id: 1, char: "", romaji: "", isEmpty: true }, { id: 2, char: "キャ", romaji: "kya" }, { id: 3, char: "キュ", romaji: "kyu" }, { id: 4, char: "キョ", romaji: "kyo" }, { id: 5, char: "", romaji: "", isEmpty: true },
    { id: 6, char: "", romaji: "", isEmpty: true }, { id: 7, char: "シャ", romaji: "sha" }, { id: 8, char: "シュ", romaji: "shu" }, { id: 9, char: "ショ", romaji: "sho" }, { id: 10, char: "", romaji: "", isEmpty: true },
    { id: 11, char: "", romaji: "", isEmpty: true }, { id: 12, char: "チャ", romaji: "cha" }, { id: 13, char: "チュ", romaji: "chu" }, { id: 14, char: "チョ", romaji: "cho" }, { id: 15, char: "", romaji: "", isEmpty: true },
    { id: 16, char: "", romaji: "", isEmpty: true }, { id: 17, char: "ニャ", romaji: "nya" }, { id: 18, char: "ニュ", romaji: "nyu" }, { id: 19, char: "ニョ", romaji: "nyo" }, { id: 20, char: "", romaji: "", isEmpty: true },
    { id: 21, char: "", romaji: "", isEmpty: true }, { id: 22, char: "ヒャ", romaji: "hya" }, { id: 23, char: "ヒュ", romaji: "hyu" }, { id: 24, char: "ヒョ", romaji: "hyo" }, { id: 25, char: "", romaji: "", isEmpty: true },
    { id: 26, char: "", romaji: "", isEmpty: true }, { id: 27, char: "ミャ", romaji: "mya" }, { id: 28, char: "ミュ", romaji: "myu" }, { id: 29, char: "ミョ", romaji: "myo" }, { id: 30, char: "", romaji: "", isEmpty: true },
    { id: 31, char: "", romaji: "", isEmpty: true }, { id: 32, char: "リャ", romaji: "rya" }, { id: 33, char: "リュ", romaji: "ryu" }, { id: 34, char: "リョ", romaji: "ryo" }, { id: 35, char: "", romaji: "", isEmpty: true },
    { id: 36, char: "", romaji: "", isEmpty: true }, { id: 37, char: "ギャ", romaji: "gya" }, { id: 38, char: "ギュ", romaji: "gyu" }, { id: 39, char: "ギョ", romaji: "gyo" }, { id: 40, char: "", romaji: "", isEmpty: true },
    { id: 41, char: "", romaji: "", isEmpty: true }, { id: 42, char: "ジャ", romaji: "ja" }, { id: 43, char: "ジュ", romaji: "ju" }, { id: 44, char: "ジョ", romaji: "jo" }, { id: 45, char: "", romaji: "", isEmpty: true },
    { id: 46, char: "", romaji: "", isEmpty: true }, { id: 47, char: "ビャ", romaji: "bya" }, { id: 48, char: "ビュ", romaji: "byu" }, { id: 49, char: "ビョ", romaji: "byo" }, { id: 50, char: "", romaji: "", isEmpty: true },
    { id: 51, char: "", romaji: "", isEmpty: true }, { id: 52, char: "ピャ", romaji: "pya" }, { id: 53, char: "ピュ", romaji: "pyu" }, { id: 54, char: "ピョ", romaji: "pyo" }, { id: 55, char: "", romaji: "", isEmpty: true }
];