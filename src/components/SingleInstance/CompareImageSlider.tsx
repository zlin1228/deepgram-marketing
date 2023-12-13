/* eslint-disable no-inline-styles/no-inline-styles */
import { useState } from 'react';
import { ReactCompareSlider } from 'react-compare-slider';

import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Image from 'quarks/Image';

import ComponentHeading from 'components/Heading/Heading';

import type { IComponentSingleInstanceRecord } from 'lib/types';
import type { FC } from 'react';

const CompareImageSlider: FC<IComponentSingleInstanceRecord> = ({ optionalHeading, json, imageList, ...props }) => {
  const [isDragable, setIsDragable] = useState(true);
  const [isGrabbed, setIsGrabbed] = useState(false);

  const handleDragable = () => {
    setIsDragable(!isDragable);
  };

  const handleGrabbed = () => {
    setIsGrabbed(!isGrabbed);
  };

  return (
    <Flex
      width="100%"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      gap="56px"
      lg={{ flexDirection: 'row' }}
      {...props}
    >
      <Flex flexDirection="column" gap="16px" lg={{ flex: '0 0 50%', width: '50%', maxWidth: '470px' }}>
        {optionalHeading && <ComponentHeading {...optionalHeading} aligment="left" />}
      </Flex>
      <Flex
        position="relative"
        borderRadius="16px"
        overflowX="hidden"
        overflowY="hidden"
        lg={{ flex: '0 0 50%', width: '50%', maxWidth: '100%' }}
      >
        <ReactCompareSlider
          itemOne={
            <Image
              src={imageList?.[0]?.imageDesktop?.url || ''}
              width={imageList?.[0]?.imageDesktop?.width}
              height={imageList?.[0]?.imageDesktop?.height}
              alt=""
              marginX="auto"
              css={`
                max-width: 570px;
                height: fit-content;
              `}
            />
          }
          itemTwo={
            <Image
              src={imageList?.[1]?.imageDesktop?.url || ''}
              width={imageList?.[1]?.imageDesktop?.width}
              height={imageList?.[1]?.imageDesktop?.height}
              alt=""
              marginX="auto"
              css={`
                max-width: 570px;
                height: fit-content;
              `}
            />
          }
          handle={
            <Flex
              className="dragable-point"
              position="absolute"
              top="0"
              left="70%"
              height="100%"
              width="4px"
              backgroundColor="common-white"
              onMouseUp={() => handleGrabbed()}
            >
              <Flex
                position="absolute"
                top="50%"
                left="70%"
                transform="translate(-50%, -50%)"
                overflowX="hidden"
                overflowY="hidden"
                width="64px"
                height="64px"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                onMouseEnter={() => handleDragable()}
                onMouseLeave={() => handleDragable()}
                onMouseDown={() => handleGrabbed()}
                onMouseUp={() => handleGrabbed()}
              >
                <Flex height="100%" alignItems="center" textColor="common-white" fontWeight="semiBold">
                  <Icon iconName="chevron-left" size={48} />
                  <Icon iconName="chevron-right" size={48} />
                </Flex>
              </Flex>
            </Flex>
          }
          onlyHandleDraggable
          position={50}
          css={`
            height: 100%;
          `}
        />
        <Flex
          position="absolute"
          bottom="24px"
          left="24px"
          fontSize="textSm"
          textColor="common-white"
          fontWeight="semiBold"
          backgroundColor="common-black"
          borderRadius="4px"
          paddingY={4}
          paddingX={12}
          transition="0.8s cubic-bezier(0.165, 0.84, 0.44, 1)"
          boxShadow="0px 4px 96px rgba(17, 36, 84, 0.4)"
          opacity={isGrabbed ? 0 : 1}
        >
          {json?.[0]?.image_title}
        </Flex>
        <Flex
          position="absolute"
          bottom="24px"
          right="24px"
          fontSize="textSm"
          textColor="common-white"
          fontWeight="semiBold"
          backgroundColor="common-black"
          borderRadius="4px"
          paddingY={4}
          paddingX={12}
          transition="0.8s cubic-bezier(0.165, 0.84, 0.44, 1)"
          boxShadow="0px 4px 96px rgba(17, 36, 84, 0.4)"
          opacity={isGrabbed ? 0 : 1}
        >
          {json?.[1]?.image_title}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CompareImageSlider;
