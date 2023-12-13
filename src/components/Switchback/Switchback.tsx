import Flex from 'quarks/Flex';
import Image from 'quarks/Image';

import MoleculeMap from 'molecules/Map/Map';

import ComponentVideo from 'components/ComponentVideo/ComponentVideo';
import ComponentHeading from 'components/Heading/Heading';
import LottieImage from 'components/LottieImage/LottieImage';
import SwitchbackSlidebox from 'components/Slidebox/SwitchbackSlidebox';

import type { IComponentSwitchbackRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface SwitchbackProps extends BasicProps, IComponentSwitchbackRecord {
  backgroundIsDark: boolean;
  optionalHeading?: IComponentSwitchbackRecord['heading'];
}
const ComponentSwitchback: FC<SwitchbackProps> = ({ optionalHeading, reference, reverse }) => {
  const isImage = reference?.__typename === 'ComponentImageRecord';
  const isVideo = reference?.__typename === 'ComponentVideoRecord' && reference?.videoUrl;
  const isMap = reference?.__typename === 'ComponentMapRecord' && reference?.location;

  return (
    <Flex
      flexDirection="column"
      textAlign="left"
      marginX="auto"
      gap="56px"
      md={{
        flexDirection: reverse ? 'row-reverse' : 'row',
        gap: 0,
      }}
      textColor="common-white"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="column" gap="16px" md={{ flex: '0 0 50%', width: '50%', maxWidth: '470px' }}>
        {optionalHeading && <ComponentHeading {...optionalHeading} aligment="left" />}
      </Flex>
      <Flex width={isMap && '100%'} md={{ flex: '0 0 48%', width: '48%', maxWidth: '48%' }}>
        {isImage &&
          reference?.imageDesktop?.url &&
          (reference.imageDesktop.url.slice(-4) !== 'json' ? (
            <Image
              width={reference?.imageDesktop.width}
              height={reference?.imageDesktop.height}
              marginX="auto"
              src={reference?.imageDesktop.url}
              alt=""
              css={`
                max-width: 570px;
                height: fit-content;
                border-radius: 22px;
              `}
            />
          ) : (
            <LottieImage url={reference.imageDesktop?.url} />
          ))}
        {isVideo && <ComponentVideo {...reference} />}
        {reference?.__typename === 'ComponentSlideboxRecord' && (
          <SwitchbackSlidebox backgroundIsDark={true} {...reference} backgroundColor="gray-900" paddingAll={24} />
        )}
        {isMap && (
          <Flex
            width="100%"
            css={`
              > div {
                width: 100%;
                height: 100%;
              }
            `}
          >
            <MoleculeMap {...reference} />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default ComponentSwitchback;
