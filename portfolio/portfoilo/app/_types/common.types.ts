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

export type LinkType = {
  src: string;
  url: string;
  darkSrc: string;
};

export type SkillStackType = {
  name: string;
  src: string;
};

export type RoleType = 'BE' | 'FE' | 'Infra';

export type MemberType = {
  name: string;
  role: RoleType[];
};

export type ContributionType = {
  mainContent: string;
  subContents: string[];
};

export type ProjectThumbnailType = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  skillStack: SkillStackType[];
};

export type ProjectType = ProjectThumbnailType & {
  service: string;
  startDate: string;
  endDate: string;
  link: LinkType[];
  members: string;
  contribution: ContributionType[];
};
