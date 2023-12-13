import color from 'atoms/colors/colors';
import gradient from 'atoms/colors/gradients';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import SocialShare from 'components/ConversionPanel/SocialShare';
import ComponentForm from 'components/Form/Form';

import richTextParser from 'utils/richTextParser';

import type { IComponentConversionPanelRecord, IEntityCompanyRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { HeadingTypes, TextStyles } from 'quarks/styleProps/heading';
import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser';

interface ConversionPanelProps extends IComponentConversionPanelRecord, FlexProps {
  backgroundIsDark?: boolean;
  company?: IEntityCompanyRecord;
}

const ConversionPanel: FC<ConversionPanelProps> = ({
  id,
  heading,
  headingType,
  desktopHeadingSize,
  tabletHeadingSize,
  mobileHeadingSize,
  body,
  form,
  callToActions,
  isContained,
  isGrayBorder,
  hasSocial,
  company,
  ...props
}) => (
  <Flex
    data-sb-object-id={id}
    flexDirection="column"
    width="100%"
    gap="48px"
    sm={{ gap: '96px' }}
    lg={{ gap: '160px' }}
    {...props}
  >
    {heading && (
      <Flex
        width="100%"
        flexDirection="column"
        gap="24px"
        borderRadius={isContained ? '16px' : undefined}
        backgroundShorthand={
          isContained && !isGrayBorder
            ? `linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box, ${gradient.primary.dark} border-box, ${gradient.primary.conversion} border-box`
            : undefined
        }
        paddingY={isContained ? 32 : 0}
        paddingX={isContained ? 24 : 0}
        borderStyle={isContained ? 'solid' : 'none'}
        borderWidth={isGrayBorder ? '1px' : '3px'}
        borderColor={isGrayBorder ? 'gray-700' : 'common-transparent'}
        sm={{ gap: '32px', paddingAll: isContained ? 40 : 0 }}
        md={{ maxWidth: '700px', marginX: 'auto' }}
        lg={{
          flexDirection: isContained ? 'row' : 'column',
          maxWidth: isContained ? '100%' : '1008px',
          justifyContent: isContained ? 'space-between' : undefined,
          paddingAll: isContained ? 56 : 0,
          gap: isContained ? '32px' : '56px',
        }}
      >
        <Flex
          flexDirection="column"
          gap="16px"
          alignItems={isContained ? undefined : 'center'}
          textAlign={isContained ? undefined : 'center'}
          sm={{ gap: isContained ? '16px' : '24px' }}
          lg={{ flexGrow: isContained ? '1' : undefined }}
        >
          <Heading
            data-sb-field-path="heading"
            as={(headingType?.toLowerCase() as HeadingTypes) || 'h2'}
            textStyle={(mobileHeadingSize as TextStyles) || 'md'}
            sm={{ textStyle: (tabletHeadingSize as TextStyles) || 'lg' }}
            lg={{ textStyle: (desktopHeadingSize as TextStyles) || 'xl' }}
            textColor="common-white"
            fontWeight="bold"
          >
            {heading}
          </Heading>
          {body && (
            <Flex
              flexDirection="column"
              fontFamily="bodyFont"
              fontSize={isContained ? 'textMd' : 'textLg'}
              textColor={isContained ? 'gray-200' : 'common-white'}
              maxWidth="800px"
              marginX={isContained ? undefined : 'auto'}
              data-sb-field-path="body"
              sm={{
                fontSize: isContained ? 'textMd' : 'textXl',
              }}
            >
              {richTextParser(body as RichText)}
            </Flex>
          )}
        </Flex>

        {!!callToActions?.length && (
          <Flex
            gap="16px"
            width="100%"
            flexDirection="column"
            sm={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 'auto' }}
          >
            {callToActions?.map(button => (
              <ComponentButton key={button?.id} {...button} data-sb-object-id={button?.id} />
            ))}
          </Flex>
        )}
        {form && <ComponentForm {...form} />}
      </Flex>
    )}
    {hasSocial && company && <SocialShare {...company} />}
  </Flex>
);

export default ConversionPanel;
