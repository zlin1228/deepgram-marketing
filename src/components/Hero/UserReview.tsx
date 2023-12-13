import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface ComponentProps extends BasicProps {
  review: string;
}

const UserReview: FC<ComponentProps> = ({ review, ...props }) => {
  // TODO - connect to Dato. Recommended making a block.
  const rating = 4.5;

  return (
    <Flex gap="10px" {...props}>
      <Icon iconName="g2-logo" size={18} color={color.common.white} />
      <Flex gap="4px">
        {Array(5)
          .fill(null)
          .map((_, index) => {
            const currRating = rating <= 5 ? rating - index : (rating % 5) - index;

            return (
              <Icon
                key={`staricon-${index + 1}`}
                iconName={currRating > 0 && currRating < 1 ? 'star-half' : 'star'}
                size={18}
                color={currRating > 0 ? color.primary[400] : color.success[800]}
              />
            );
          })}
      </Flex>
      <Text textColor="common-white" textStyle="sm" data-sb-field-path="user_review">
        {review}
      </Text>
    </Flex>
  );
};

export default UserReview;
