// Sound/useSpeech.ts

export const playAudio = (
  audioSrc: string,
  onStart?: () => void,
  onEnd?: () => void
) => {
  const audio = new Audio(audioSrc);
  if (onStart) {
    audio.onplay = onStart;
  }
  if (onEnd) {
    audio.onended = onEnd;
  }
  audio.play();
};

export const playSpeech = (
  name: string,
  dialogue: string,
  onStart?: () => void,
  onEnd?: () => void
) => {
  const utterance = new SpeechSynthesisUtterance(dialogue);
  utterance.lang = "ja-JP";

  let voices = speechSynthesis.getVoices();

  if (voices.length === 0) {
    speechSynthesis.onvoiceschanged = () => {
      voices = speechSynthesis.getVoices();
      setVoiceAndSpeak(utterance, voices, name, onStart, onEnd);
    };
  } else {
    setVoiceAndSpeak(utterance, voices, name, onStart, onEnd);
  }
};

const setVoiceAndSpeak = (
  utterance: SpeechSynthesisUtterance,
  voices: SpeechSynthesisVoice[],
  name: string,
  onStart?: () => void,
  onEnd?: () => void
) => {
  const japaneseVoices = voices.filter((voice) => voice.lang.startsWith("ja"));
  let selectedVoice: SpeechSynthesisVoice | undefined;
  selectedVoice = japaneseVoices.length > 0 ? japaneseVoices[0] : undefined;
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }
  if (onStart) {
    utterance.onstart = onStart;
  }
  if (onEnd) {
    utterance.onend = onEnd;
  }
  speechSynthesis.speak(utterance);
};