import Section from 'molecules/Section/Section';

import ComponentAccordion from 'components/Accordion/Accordion';
import BentoBox from 'components/BentoBox/BentoBox';
import ComponentCardDeck from 'components/CardDeck/CardDeck';
import PricingCardDeck from 'components/CardDeck/PricingCardDeck';
import CodeTable from 'components/CodeTable/CodeTable';
import ComponentComparisonTable from 'components/ComparisonTable/ComparisonTable';
import ComponentImage from 'components/ComponentImage/ComponentImage';
import ComponentVideo from 'components/ComponentVideo/ComponentVideo';
import ConversionPanel from 'components/ConversionPanel/ConversionPanel';
import ComponentFeatureList from 'components/FeatureList/FeatureList';
import ComponentHeading from 'components/Heading/Heading';
import ComponentHero from 'components/Hero/Hero';
import PricingTable from 'components/PricingTable/PricingTable';
import ComponentQuote from 'components/Quote/Quote';
import QuoteWall from 'components/QuoteSlider/QuoteWall';
import SingleInstance from 'components/SingleInstance/SingleInstance';
import Slidebox from 'components/Slidebox/Slidebox';
import Switchback from 'components/Switchback/Switchback';
import TestimonialConversionPanel from 'components/TestimonialConversionPanel/TestimonialConversionPanel';
import ComponentTrustBar from 'components/TrustBar/TrustBar';

import type {
  IEntityCompanyRecord,
  IEntityPersonRecord,
  ITemplateBlogRecord,
  ITemplateCaseStudyRecord,
  ITemplateChangelogRecord,
  ITemplateNewsRecord,
  ITemplatePartnerRecord,
  ILayoutSectionRecord as LayoutSectionProps,
} from 'lib/types';
import type { FC, ReactElement } from 'react';

interface ILayoutSection extends LayoutSectionProps {
  layoutId?: string;
  children?: ReactElement;
  company: IEntityCompanyRecord;
  authors?: IEntityPersonRecord[];
  relatedCaseStudies?: ITemplateCaseStudyRecord[];
  resourceList?: any;
  changelogs?: ITemplateChangelogRecord[];
  news?: ITemplateNewsRecord[];
  blogs?: ITemplateBlogRecord[];
  partners?: ITemplatePartnerRecord[];
}

export const getBackgroundIsDark = (backgroundColor?: string | null) => {
  const darkBackgroundArr = ['Black'];

  return (backgroundColor && darkBackgroundArr?.includes(backgroundColor)) || false;
};

const LayoutSection: FC<ILayoutSection> = ({
  children,
  layoutId,
  company,
  authors,
  relatedCaseStudies,
  resourceList,
  changelogs,
  news,
  blogs,
  partners,
  ...section
}) => {
  const { component, backgroundColor } = section;
  const sectionBackgroundColor = backgroundColor || 'White';

  const backgroundIsDark = getBackgroundIsDark(sectionBackgroundColor);

  const componentGenerator = (sectionComponent: { __typename?: string; id: string }) => {
    switch (sectionComponent?.__typename) {
      case 'ComponentHeadingRecord':
        return (
          <ComponentHeading
            key={sectionComponent?.id}
            backgroundIsDark={backgroundIsDark}
            {...(sectionComponent as any)}
          />
        );
      case 'ComponentHeroRecord':
        return (
          <ComponentHero
            key={sectionComponent?.id}
            backgroundIsDark={backgroundIsDark}
            {...(sectionComponent as any)}
          />
        );
      case 'ComponentTrustBarRecord':
        return (
          <ComponentTrustBar
            key={sectionComponent?.id}
            backgroundIsDark={backgroundIsDark}
            {...(sectionComponent as any)}
          />
        );
      case 'ComponentCardDeckRecord':
        return (
          <ComponentCardDeck
            key={sectionComponent?.id}
            backgroundIsDark={backgroundIsDark}
            relatedCaseStudies={relatedCaseStudies}
            {...(sectionComponent as any)}
          />
        );
      case 'ComponentConversionPanelRecord':
        return (
          <ConversionPanel
            key={sectionComponent?.id}
            backgroundIsDark={backgroundIsDark}
            company={company}
            {...(sectionComponent as any)}
          />
        );
      case 'ComponentQuoteRecord':
        return (
          <ComponentQuote
            key={sectionComponent?.id}
            backgroundIsDark={backgroundIsDark}
            {...(sectionComponent as any)}
          />
        );
      case 'ComponentQuoteSliderRecord':
        return (
          <QuoteWall key={sectionComponent?.id} backgroundIsDark={backgroundIsDark} {...(sectionComponent as any)} />
        );
      case 'ComponentAccordionRecord':
        return (
          <ComponentAccordion
            key={sectionComponent?.id}
            backgroundIsDark={backgroundIsDark}
            {...(sectionComponent as any)}
          />
        );
      case 'ComponentSingleInstanceRecord':
        return (
          <SingleInstance
            key={sectionComponent?.id}
            backgroundIsDark={backgroundIsDark}
            authors={authors}
            resourceList={resourceList}
            changelogs={changelogs}
            news={news}
            blogs={blogs}
            partners={partners}
            {...(sectionComponent as any)}
          />
        );
      case 'ComponentImageRecord':
        return (
          <ComponentImage
            key={sectionComponent?.id}
            backgroundIsDark={backgroundIsDark}
            {...(sectionComponent as any)}
          />
        );
      case 'ComponentSwitchbackRecord':
        return (
          <Switchback key={sectionComponent?.id} backgroundIsDark={backgroundIsDark} {...(sectionComponent as any)} />
        );
      case 'ComponentPricingCardDeckRecord':
        return (
          <PricingCardDeck
            key={sectionComponent?.id}
            backgroundIsDark={backgroundIsDark}
            {...(sectionComponent as any)}
          />
        );
      case 'ComponentSlideboxRecord':
        return (
          <Slidebox key={sectionComponent?.id} backgroundIsDark={backgroundIsDark} {...(sectionComponent as any)} />
        );
      case 'ComponentFeatureListRecord':
        return (
          <ComponentFeatureList
            key={sectionComponent?.id}
            backgroundIsDark={backgroundIsDark}
            {...(sectionComponent as any)}
          />
        );
      case 'ComponentTestimonialConversionPanelRecord':
        return (
          <TestimonialConversionPanel
            key={sectionComponent?.id}
            backgroundIsDark={backgroundIsDark}
            {...(sectionComponent as any)}
          />
        );
      case 'ComponentComparisonTableRecord':
        return <ComponentComparisonTable key={sectionComponent?.id} {...(sectionComponent as any)} />;
      case 'ComponentCodeTableRecord':
        return (
          <CodeTable key={sectionComponent?.id} backgroundIsDark={backgroundIsDark} {...(sectionComponent as any)} />
        );
      case 'ComponentVideoRecord':
        return <ComponentVideo key={sectionComponent?.id} {...(sectionComponent as any)} />;
      case 'ComponentPricingTableRecord':
        return <PricingTable key={sectionComponent?.id} {...(sectionComponent as any)} />;
      case 'ComponentBentoBoxRecord':
        return (
          <BentoBox key={sectionComponent?.id} backgroundIsDark={backgroundIsDark} {...(sectionComponent as any)} />
        );
      default:
        console.warn(`${sectionComponent?.__typename} is incorrect or missing from componentGenerator`);

        return null;
    }
  };
  const isFullWidth =
    component?.__typename === 'ComponentSingleInstanceRecord' &&
    (component.component === 'resource_listing' || component.component === 'typeform');

  return (
    <Section {...section} layoutId={layoutId || ''} isFullWidth={isFullWidth}>
      {component && componentGenerator(component)}
      {children && children}
    </Section>
  );
};

export default LayoutSection;
