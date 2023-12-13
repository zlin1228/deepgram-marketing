import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

const cssKeyframes = `
  animation: anchor-animate 5s linear infinite;
  @keyframes anchor-animate {
    0% {
      width: 0px;
    }
    100% {
      width: 100%;
    }
  }
`;

export const anchorLength = (heading: string) => {
  if (!heading) {
    return 0;
  }

  // eslint-disable-next-line array-callback-return
  let itemArr = heading.split(/\[\[|\]\]/).map((segment, index) => {
    if (index % 2 === 1) {
      return segment;
    }
  });

  itemArr = itemArr.filter(element => element !== undefined);

  return itemArr?.length || 0;
};

const anchorLinks = (heading: string, active: number, setCurrentNumber: (e: number) => void) => {
  if (!heading) {
    return;
  }

  // eslint-disable-next-line array-callback-return
  let itemArr = heading.split(/\[\[|\]\]/).map((segment, index) => {
    if (index % 2 === 1) {
      return segment;
    }
  });

  itemArr = itemArr.filter(element => element !== undefined);

  const underlinedArray = heading.split(/\[\[|\]\]/).map(segment => {
    if (itemArr.find(item => item === segment)) {
      const segmentIndex = itemArr.indexOf(segment);

      return (
        <Text
          key={segment}
          className="trustbar-anchor"
          position="relative"
          textColor="common-white"
          transition="color 300ms ease-in-out"
          cursor="pointer"
          onClick={() => setCurrentNumber(segmentIndex)}
        >
          {segment}
          {active === segmentIndex && (
            <>
              <Flex
                width="100%"
                height="2px"
                position="absolute"
                bottom="-2px"
                left="0"
                css={`
                  background-color: rgba(255, 255, 255, 0.25);
                `}
              />
              <Flex
                height="2px"
                position="absolute"
                bottom="-2px"
                left="0"
                zIndex="1"
                backgroundColor="common-activeGreen"
                css={cssKeyframes}
              />
            </>
          )}
        </Text>
      );
    }

    return segment;
  });

  return underlinedArray;
};

export default anchorLinks;
