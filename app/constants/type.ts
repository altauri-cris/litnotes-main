export interface Author {
  name: string;
  source_records?: string[];
  type?: {
    key: string;
  };
  key?: string;
  alternate_names?: string[];
  remote_ids?: {
    librarything?: string;
    wikidata?: string;
    goodreads?: string;
    isni?: string;
    amazon?: string;
  };
  latest_revision?: number;
  revision?: number;
  created?: {
    type: string;
    value: string;
  };
  bio?: string;
  last_modified?: {
    type: string;
    value: string;
  };
}

export interface KeyIdea {
  description: string;
  title: string;
  audioOffset: number;
}

export interface ChapterRecap {
  title: string;
  content: string;
  audio: string;
  timeCodesUrl: string;
  duration: number;
  page: number;
  href: string;
  index: number;
  statistics: {
    source_words: number;
    recap_words: number;
    compression_ratio: number;
  };
  level: number;
}

export interface Book {
  _id: string;
  title: string;
  subtitle?: string;
  authors: string[];
  authors_info: Author[];
  leaderboards: string[];
  original_info?: {
    title: string;
    author: string;
  };
  categories?: string[];
  publisher?: string;
  publishedDate?: string;
  isbn?: string[];
  thumbnail: string;
  rating: number;
  ratingCount: number;
  tags?: string[];
  description: string;
  key_ideas?: KeyIdea[];
  chapter_recaps?: ChapterRecap[];
  seo_quotes?: string[];
  seo_audience?: string[];
  chapter_recaps_reading_time?: number;
  seo_summary?: string;
}
