export interface ChecklistOption {
  label: string;
  score: number;
}

export interface ChecklistQuestion {
  id: number;
  text: string;
}

export interface ResultBand {
  minScore: number;
  maxScore: number;
  title: string;
  description: string;
}

export interface ChecklistDefinition {
  title: string;
  description: string;
  options: ChecklistOption[];
  questions: ChecklistQuestion[];
  resultBands: ResultBand[];
}
