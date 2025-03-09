const maleCharacters = ["Marco", "Daniel", "Natapon", "Honda", "Carlos", "Nishikawa"];
const femaleCharacters = ["Park", "Mary", "Anna", "Wan", "Yamaguchi"];

export const playSpeech = (name: string, dialogue: string) => {
  const utterance = new SpeechSynthesisUtterance(dialogue);
  utterance.lang = "ja-JP"; // Ngôn ngữ Nhật

  let voices = speechSynthesis.getVoices();

  if (voices.length === 0) {
    speechSynthesis.onvoiceschanged = () => {
      voices = speechSynthesis.getVoices();
      setVoiceAndSpeak(utterance, voices, name);
    };
  } else {
    setVoiceAndSpeak(utterance, voices, name);
  }
};

const setVoiceAndSpeak = (utterance: SpeechSynthesisUtterance, voices: SpeechSynthesisVoice[], name: string) => {
  const gender = maleCharacters.includes(name) ? "male" : "female";

  // Lọc danh sách giọng tiếng Nhật
  const japaneseVoices = voices.filter((voice) => voice.lang.startsWith("ja"));

  let selectedVoice: SpeechSynthesisVoice | undefined;

  if (gender === "male") {
    // Tìm giọng có thể là nam
    const maleVoices = japaneseVoices.filter((voice) => 
      voice.name.toLowerCase().includes("male") || 
      voice.name.toLowerCase().includes("man") ||
      voice.name.toLowerCase().includes("おとこ") // Một số giọng Nhật có thể chứa "おとこ" (nam)
    );
    selectedVoice = maleVoices.length > 0 ? maleVoices[0] : undefined;
  } else {
    // Tìm giọng có thể là nữ
    const femaleVoices = japaneseVoices.filter((voice) => 
      voice.name.toLowerCase().includes("female") || 
      voice.name.toLowerCase().includes("woman") ||
      voice.name.toLowerCase().includes("おんな") // Một số giọng Nhật có thể chứa "おんな" (nữ)
    );
    selectedVoice = femaleVoices.length > 0 ? femaleVoices[0] : undefined;
  }

  // Nếu không tìm thấy giọng phù hợp, chọn giọng Nhật đầu tiên làm mặc định
  if (!selectedVoice) {
    selectedVoice = japaneseVoices.length > 0 ? japaneseVoices[0] : undefined;
  }

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  speechSynthesis.speak(utterance);
};
