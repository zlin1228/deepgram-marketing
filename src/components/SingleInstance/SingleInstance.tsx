import Typeform from 'components/Form/Typeform';
import AuthorListing from 'components/SingleInstance/AuthorListing';
import Calculator from 'components/SingleInstance/Calculator';
import ChangelogListing from 'components/SingleInstance/ChangelogListing';
import CompareAccuracy from 'components/SingleInstance/CompareAccuracy';
import CompareAccuracyStep from 'components/SingleInstance/CompareAccuracyStep';
import CompareFeatures from 'components/SingleInstance/CompareFeatures';
import CompareImageSlider from 'components/SingleInstance/CompareImageSlider';
import ComparisonTable from 'components/SingleInstance/ComparisonTable';
import InteractiveComponent from 'components/SingleInstance/InteractiveComponent';
import JobListing from 'components/SingleInstance/JobListing';
import LeadershipListing from 'components/SingleInstance/LeadershipListing';
import NewsListing from 'components/SingleInstance/NewsListing';
import PartnerListing from 'components/SingleInstance/PartnerListing';
import PlatformListing from 'components/SingleInstance/PlatformListing';
import ResourceListing from 'components/SingleInstance/ResourceListing';
import SelectAlternative from 'components/SingleInstance/SelectAlternative';

import type {
  IComponentSingleInstanceRecord,
  IEntityPersonRecord,
  ITemplateBlogRecord,
  ITemplateNewsRecord,
  ITemplatePartnerRecord,
} from 'lib/types';
import type { FC } from 'react';

interface SingleInstanceProps extends IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
  authors?: IEntityPersonRecord[];
  resourceList?: any;
  news?: ITemplateNewsRecord[];
  blogs?: ITemplateBlogRecord[];
  partners?: ITemplatePartnerRecord[];
}

const SingleInstance: FC<SingleInstanceProps> = props => {
  const { component, json } = props;
  switch (component) {
    case 'comparison_conversion_panel':
      return <ComparisonTable {...props} />;
    case 'calculator':
      return <Calculator {...props} />;
    case 'job_listing':
      return <JobListing {...props} />;
    case 'author_listing':
      return <AuthorListing {...props} />;
    case 'team_listing':
      return <LeadershipListing {...props} />;
    case 'resource_listing':
      return <ResourceListing {...props} />;
    case 'interactive':
      return <InteractiveComponent {...props} />;
    case 'changelog_listing':
      return <ChangelogListing {...props} />;
    case 'news_listing':
      return <NewsListing {...props} />;
    case 'typeform':
      return <Typeform formId={json.form_id} />;
    case 'comparing_image_slider':
      return <CompareImageSlider {...props} />;
    case 'platform_listing':
      return <PlatformListing />;
    case 'compare_accuracy':
      return <CompareAccuracy {...props} />;
    case 'select_alternative':
      return <SelectAlternative {...props} />;
    case 'compare_accuracy_step_3':
      return <CompareAccuracyStep {...props} />;
    case 'compare_features':
      return <CompareFeatures {...props} />;
    case 'partner_listing':
      return <PartnerListing {...props} />;
    default:
      return <></>;
  }
};

export default SingleInstance;
