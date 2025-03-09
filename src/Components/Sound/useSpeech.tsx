const maleCharacters = ["Marco", "Daniel", "Natapon", "Honda", "Carlos", "Park", "Nishikawa"];
const femaleCharacters = ["Lan", "Mary", "Anna", "Ichi", "Maryam"];

export const playSpeech = (name: string, dialogue: string) => {
  const utterance = new SpeechSynthesisUtterance(dialogue);
  utterance.lang = "ja-JP"; // Ngôn ngữ Nhật

  // Lấy danh sách giọng đọc (có thể trống khi gọi lần đầu, cần đợi)
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
  // Xác định giới tính của nhân vật
  const gender = maleCharacters.includes(name) ? "male" : "female";

  // Lấy giọng mặc định theo giới tính
  const selectedVoice = voices.find((voice) => 
    gender === "male" ? voice.name.toLowerCase().includes("male") : voice.name.toLowerCase().includes("female")
  ) || voices.find((voice) => voice.lang.startsWith("ja")); // Lấy giọng Nhật nếu không tìm thấy

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  speechSynthesis.speak(utterance);
};
