import MuiRating from '@mui/material/Rating';
import { FC, SyntheticEvent } from 'react';
import styled from 'styled-components';

import { BasicProps, basic } from 'quarks/interpolations/basic';

const StyledRating = styled(MuiRating)`
  ${basic}
`;

type RatingProps = BasicProps & {
  /**
   * Number 1-5 by .1 increments that determines the star count
   */
  value?: number;
  /**
   * If true, the stars are non-clickable
   */
  readOnly?: boolean;
  /**
   * `small` for small, `large` for large and nothing for medium
   */
  size?: 'small' | 'large';
  /**
   * if true the stars will be disabled
   */
  disabled?: boolean;
  /**
   * used to control component
   */
  onChange?: (event: SyntheticEvent<Element, Event>, value: number | null) => void;
};

const Rating: FC<RatingProps> = ({ ...props }) => <StyledRating precision={0.1} {...props} />;

export default Rating;

Rating.defaultProps = {};
