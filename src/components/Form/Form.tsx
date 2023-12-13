import HubspotForm from 'components/Form/HubspotForm';
import SearchForm from 'components/Form/SearchForm';
import Typeform from 'components/Form/Typeform';

import type { IComponentFormRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface FormProps
  extends Omit<
      IComponentFormRecord,
      '_createdAt' | 'id' | 'internal' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt'
    >,
    FlexProps {
  backgroundIsDark?: boolean;
  isInFooter?: boolean;
  isPopup?: boolean;
  isLeftAligned?: boolean;
}

const ComponentForm: FC<FormProps> = ({ isPopup, isInFooter, ...props }) => {
  const { formId, variant } = props;
  if (formId === 'search_form') {
    return <SearchForm />;
  }

  switch (variant) {
    case 'typeform':
      return <Typeform formId={formId || ''} />;
    case 'hubspot':
    default:
      return <HubspotForm {...props} isPopup={isPopup} isInFooter={isInFooter} />;
  }
};

export default ComponentForm;
