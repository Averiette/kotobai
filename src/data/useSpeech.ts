const playedDialogue = new Set<string>(); // Lưu trữ hội thoại đã phát

export const playSpeech = (text: string, lang: string = "en-US") => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang; // Tuỳ chỉnh ngôn ngữ
  window.speechSynthesis.speak(utterance);
};

export const playSpeechOnce = (text: string, lang: string = "en-US") => {
  if (!playedDialogue.has(text)) {
    playSpeech(text, lang); // Phát âm thanh nếu chưa từng phát
    playedDialogue.add(text); // Đánh dấu hội thoại đã phát
  }
};

export const resetPlayedDialogues = () => {
  playedDialogue.clear(); // Xóa danh sách hội thoại đã phát (nếu cần reset khi đổi bài)
};
