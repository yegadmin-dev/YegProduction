export interface SlideData {
  id: number;
  slideNumber: number;
  title: string;
  subtitle?: string;
  category: string;
  theme?: 'dark' | 'emerald' | 'gradient';
  contentSnippet?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  image: string;
  highlight: string;
  tags: string[];
}

export interface CandidateApplication {
  name: string;
  phone: string;
  portfolioUrl: string;
  primarySkill: string;
  reason: string;
  notes: string;
}
