import vocabularyImg from '@assets/Cards/Vocabulary.png';
import dialogueImg from '@assets/Cards/Dialogue.png';
import grammarImg from '@assets/Cards/Grammar.png';
import listenImg from '@assets/Cards/Listen.png';
import practiceImg from '@assets/Cards/Practice.png';
import answersImg from '@assets/Cards/Test.png';

export const lessonCategories = [
  { 
    id: 1, 
    title: 'Học từ vựng mới Dễ trở bàn tay', 
    category: 'Vocabulary', 
    imageUrl: vocabularyImg, 
    progress: 70,
  },
  { 
    id: 2, 
    title: 'Rèn luyện hội thoại Tự tin giao tiếp', 
    category: 'Dialogue', 
    imageUrl: dialogueImg, 
    progress: 50,
  },
  { 
    id: 3, 
    title: 'Phá đảo ngữ pháp Trở thành cao thủ', 
    category: 'Grammar', 
    imageUrl: grammarImg, 
    progress: 90,
  },
  { 
    id: 4, 
    title: 'Nghe đều đặn Giao tiếp tự tin', 
    category: 'Listen', 
    imageUrl: listenImg, 
    progress: 30, 
  },
];

export const practiceCategories = [
  { 
    id: 5, 
    title: 'Khổ luyện thành tài', 
    category: 'Practice', 
    imageUrl: practiceImg, 
    progress: 80, 
  },
  { 
    id: 6, 
    title: 'Đáp án', 
    category: 'Answers', 
    imageUrl: answersImg, 
    progress: 100, 
  }
];
