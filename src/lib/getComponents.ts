import PQueue from 'p-queue';

import {
  GetComponentAccordionQuery,
  GetComponentCardDeckQuery,
  GetComponentConversionPanelQuery,
  GetComponentFeatureListQuery,
  GetComponentHeadingQuery,
  GetComponentHeroQuery,
  GetComponentImageQuery,
  GetComponentPricingCardDeckQuery,
  GetComponentQuoteQuery,
  GetComponentQuoteSliderQuery,
  GetComponentSingleInstanceQuery,
  GetComponentSlideboxQuery,
  GetComponentSwitchbackQuery,
  GetComponentTrustBarQuery,
} from 'lib/sdk';

import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import type { ITemplateCaseStudyRecord, ITemplatePageRecord } from 'lib/types';

const sectionQueries = {
  ComponentAccordionRecord: GetComponentAccordionQuery,
  ComponentCardDeckRecord: GetComponentCardDeckQuery,
  ComponentConversionPanelRecord: GetComponentConversionPanelQuery,
  ComponentHeadingRecord: GetComponentHeadingQuery,
  ComponentHeroRecord: GetComponentHeroQuery,
  ComponentImageRecord: GetComponentImageQuery,
  ComponentPricingCardDeckRecord: GetComponentPricingCardDeckQuery,
  ComponentQuoteRecord: GetComponentQuoteQuery,
  ComponentQuoteSliderRecord: GetComponentQuoteSliderQuery,
  ComponentSingleInstanceRecord: GetComponentSingleInstanceQuery,
  ComponentSlideboxRecord: GetComponentSlideboxQuery,
  ComponentSwitchbackRecord: GetComponentSwitchbackQuery,
  ComponentTrustBarRecord: GetComponentTrustBarQuery,
  ComponentFeatureListRecord: GetComponentFeatureListQuery,
} as const;

const queue = new PQueue({ concurrency: 1 });

const getComponents = async (
  pageData: ITemplatePageRecord | ITemplateCaseStudyRecord,
  apolloClient: ApolloClient<NormalizedCacheObject>,
  end = -1,
) => {
  const sections = pageData?.sections || [];
  const layoutComponents = sections?.slice(0, end).map(section => ({
    componentId: section?.component?.id,
    queryName: section?.component?.__typename,
    query: 'section',
    ...section,
  }));

  const promises = layoutComponents
    .filter(component => component && sectionQueries[component.queryName as keyof typeof sectionQueries])
    .map(component =>
      queue.add(async () => {
        if (!component?.componentId) {
          return null;
        }

        const { data } = await apolloClient.query({
          query: sectionQueries[component.queryName as keyof typeof sectionQueries],
          variables: { id: component.componentId },
        });

        return { ...component, component: { ...component.component, ...data.data }, type: component.query };
      }),
    );

  const componentArr = promises ? await Promise.all(promises) : [];

  return {
    componentsArray: componentArr.filter(comp => comp?.type === 'section'),
  };
};

export default getComponents;
