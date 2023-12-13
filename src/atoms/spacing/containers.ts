import { valueof } from 'utils/typeUtils';

const container = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export type ContainerDefinition = keyof typeof container;
export type ContainerValues = valueof<typeof container>;
export default container;
