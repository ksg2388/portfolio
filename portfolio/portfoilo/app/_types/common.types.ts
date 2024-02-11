export type ThemeType = 'LIGHT_MODE' | 'DARK_MODE';

export type FrontendSkillType =
  | 'TypeScript'
  | 'React'
  | 'JavaScript'
  | 'NextJs'
  | 'Recoil'
  | 'styledComponents'
  | 'VueJs'
  | 'Emotion'
  | 'TailwindCss'
  | 'Redux'
  | 'ReactQuery'
  | 'Sass';

export type ProjectThumbnailType = {
  title: string;
  description: string;
  imageUrl: string;
  skillStack: string[];
};
