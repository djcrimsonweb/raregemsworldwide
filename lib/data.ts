export type Scene = 'Tokyo' | 'Paris' | 'London' | 'Berlin' | 'Seoul' | 'NYC' | 'Global';
export type Category = 'Internet Culture' | 'Radio' | 'Music' | 'Fashion' | 'Design / 3D' | 'Games' | 'Mind';

export interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  category: Category;
  scene: Scene;
  gemScore: number;
  tags: string[];
  featured?: boolean;
}

export const CATEGORIES: Category[] = [
  'Internet Culture',
  'Radio',
  'Music',
  'Fashion',
  'Design / 3D',
  'Games',
  'Mind'
];

export const SCENES: Scene[] = [
  'Tokyo',
  'Paris',
  'London',
  'Berlin',
  'Seoul',
  'NYC',
  'Global'
];

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'The Rise of Afro-Futurism in Digital Art',
    description: 'Exploring how African diaspora artists are redefining digital aesthetics',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    category: 'Design / 3D',
    scene: 'NYC',
    gemScore: 487,
    tags: ['afrofuturism', 'digital art', 'culture'],
    featured: true,
  },
  {
    id: '2',
    title: 'Tokyo Underground Indie Gaming Scene',
    description: 'A deep dive into the experimental game studios reshaping the medium',
    image: 'https://images.unsplash.com/photo-1538481143235-405ba7c39e1f?w=800&h=600&fit=crop',
    category: 'Games',
    scene: 'Tokyo',
    gemScore: 342,
    tags: ['gaming', 'indie', 'tokyo'],
  },
  {
    id: '3',
    title: 'How K-Beauty Became a Global Meme',
    description: 'From skincare to cultural phenomenon',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=600&fit=crop',
    category: 'Fashion',
    scene: 'Seoul',
    gemScore: 523,
    tags: ['kbeauty', 'skincare', 'trends'],
  },
  {
    id: '4',
    title: 'BBC Radio 4 Experimental Sound Design',
    description: 'Sonic storytelling in the digital age',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop',
    category: 'Radio',
    scene: 'London',
    gemScore: 298,
    tags: ['radio', 'sound', 'bbc'],
  },
  {
    id: '5',
    title: 'Hyperpop: The Anti-Pop Takeover',
    description: 'How experimental music became mainstream',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    category: 'Music',
    scene: 'Berlin',
    gemScore: 612,
    tags: ['hyperpop', 'music', 'experimental'],
  },
  {
    id: '6',
    title: 'The Philosophy of Meme Culture',
    description: 'What memes reveal about contemporary consciousness',
    image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8b08f?w=800&h=600&fit=crop',
    category: 'Mind',
    scene: 'Global',
    gemScore: 445,
    tags: ['philosophy', 'culture', 'memes'],
  },
  {
    id: '7',
    title: 'Paris Fashion Week: Digital Decentralization',
    description: 'How NFTs and virtual runways are reshaping haute couture',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop',
    category: 'Fashion',
    scene: 'Paris',
    gemScore: 356,
    tags: ['fashion', 'paris', 'digital'],
  },
  {
    id: '8',
    title: 'Internet Archaeology: The Deep Web\'s Cultural Archive',
    description: 'Discovering forgotten digital culture',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    category: 'Internet Culture',
    scene: 'Global',
    gemScore: 521,
    tags: ['internet', 'archaeology', 'history'],
  },
  {
    id: '9',
    title: 'Berlin Techno: Sacred Frequencies',
    description: 'The spiritual dimension of electronic music',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop',
    category: 'Music',
    scene: 'Berlin',
    gemScore: 478,
    tags: ['techno', 'berlin', 'music'],
  },
  {
    id: '10',
    title: 'Algorithm Aesthetics: When AI Generates Culture',
    description: 'The rise of AI-generated visual culture and its implications',
    image: 'https://images.unsplash.com/photo-1554960900-4be48e3a7fbe?w=800&h=600&fit=crop',
    category: 'Design / 3D',
    scene: 'NYC',
    gemScore: 634,
    tags: ['ai', 'aesthetics', 'algorithm'],
  },
];
