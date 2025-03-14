const playedDialogue = new Set<string>(); // Lưu trữ hội thoại đã phát

export const playSpeech = (speaker: string, text: string) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US"; // Tuỳ chỉnh ngôn ngữ nếu cần
  window.speechSynthesis.speak(utterance);
};

export const playSpeechOnce = (speaker: string, text: string) => {
  const dialogueKey = `${speaker}-${text}`;
  if (!playedDialogue.has(dialogueKey)) {
    playSpeech(speaker, text); // Phát âm thanh nếu chưa từng phát
    playedDialogue.add(dialogueKey); // Đánh dấu hội thoại đã phát
  }
};

export const resetPlayedDialogues = () => {
  playedDialogue.clear(); // Xóa danh sách hội thoại đã phát (nếu cần reset khi đổi bài)
};
