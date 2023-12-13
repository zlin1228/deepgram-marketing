import { Widget } from '@typeform/embed-react';

import Container from 'quarks/Container';

import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface FormProps extends FlexProps {
  backgroundIsDark?: boolean;
  formId?: string;
  isFullScreen?: boolean;
}

const Typeform: FC<FormProps> = ({ formId }) => (
  <Container
    width="100%"
    aspectRatio={[16, 9]}
    css={`
      .type-form {
        width: 100%;
        height: 100%;
      }
    `}
  >
    <Widget id={formId || ''} className="type-form" />
  </Container>
);

export default Typeform;
