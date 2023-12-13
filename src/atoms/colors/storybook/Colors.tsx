import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';
import container from 'atoms/spacing/containers';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Paragraph from 'quarks/Paragraph';

import { objectEntries } from 'utils/typeUtils';

import type { ColorList, ColorObject } from 'atoms/colors/colors';
import type { GradientList } from 'atoms/colors/gradients';

const ColorSwatches = () => {
  const colorDescriptions = {
    gray: 'Gray is a neutral color and is the foundation of the color system. Almost everything in UI design — text, form fields, backgrounds, dividers — are usually gray.',

    error:
      'Error colors are used across error states and in "destructive" actions. They communicate a destructive/negative action, such as removing a user from your team.',
    warning:
      'Warning colors can communicate that an action is potentially destructive or "on-hold". These colors are commonly used in confirmations to grab the users\' attention.',
    success:
      "Success colors communicate a positive action, positive trend, or a successful confirmation. If you're using green as your primary color, it can be helpful to introduce a different hue for your success green.",
  } as Record<keyof ColorObject, string>;

  const colorArray = objectEntries(color);
  const gradientArray = objectEntries(gradient);

  return (
    <div>
      <Heading as="h1" marginBottom={20} fontWeight="bold">
        Colors
      </Heading>
      <Paragraph maxWidth={container.md} textColor={{ light: 'gray-500', dark: 'gray-300' }} marginBottom={32}>
        Our design system leverages a purposeful set of color styles as the perfect starting point for any brand or
        project. When it comes to color, contrast is critical for ensuring text is legible. We&apos;ve added WCAG 2.1
        contrast ratios to our color system so you can make sure you&apos;re designing with accessibility in mind.
      </Paragraph>
      {colorArray.map(([swatchName, swatchValues]) => (
        <Container key={swatchName}>
          <Heading as="h5" fontWeight="medium" marginBottom={8} textTransform="capitalize">
            {swatchName}
          </Heading>
          {colorDescriptions[swatchName] && (
            <Paragraph maxWidth={container.md} marginBottom={16}>
              {colorDescriptions[swatchName]}
            </Paragraph>
          )}
          <Flex display="flex" flexWrap="wrap" gap="32px" marginBottom={32}>
            {objectEntries(swatchValues).map(([colorName, colorValue]) => (
              <Container
                key={colorName}
                minHeight="150px"
                minWidth="100px"
                boxShadow="lg"
                borderRadius="8px"
                backgroundColor={{ light: 'common-white', dark: 'gray-800' }}
              >
                <Container
                  minHeight="80px"
                  backgroundColor={`${swatchName}-${colorName}` as ColorList}
                  borderTopLeftRadius="8px"
                  borderTopRightRadius="8px"
                />
                <Container paddingAll={12}>
                  <Heading as="h6" marginBottom={8} lineHeight="textLg" fontWeight="medium">
                    {colorName}
                  </Heading>
                  <Paragraph fontSize="textSm" lineHeight="textSm">
                    {colorValue}
                  </Paragraph>
                </Container>
              </Container>
            ))}
          </Flex>
        </Container>
      ))}
      <Heading as="h1" marginBottom={20} fontWeight="bold">
        Gradients
      </Heading>
      <Paragraph maxWidth={container.md} textColor={{ light: 'gray-500', dark: 'gray-300' }} marginBottom={32}>
        A gradient is the gradual blending from one color to another. Incorporating gradients into your designs is a
        great way to make objects stand out by adding a new dimension and adding realism to objects. They almost create
        a new color.
      </Paragraph>
      {gradientArray.map(([swatchName, gradientValues]) => (
        <Container key="Gradients">
          <Heading as="h5" fontWeight="medium" marginBottom={8} textTransform="capitalize">
            {swatchName}
          </Heading>
          <Flex display="flex" flexWrap="wrap" gap="32px" marginBottom={32}>
            {objectEntries(gradientValues).map(([gradientName, gradientValue]) => (
              <Container
                key={gradientName}
                minHeight="201px"
                minWidth="280px"
                maxWidth="280px"
                boxShadow="lg"
                borderRadius="8px"
                backgroundColor={{ light: 'common-white', dark: 'gray-800' }}
              >
                <Container
                  minHeight="128px"
                  backgroundImage={`${swatchName}-${gradientName}` as GradientList}
                  borderTopLeftRadius="8px"
                  borderTopRightRadius="8px"
                />
                <Container paddingAll={12}>
                  <Heading as="h6" marginBottom={8} lineHeight="textLg" fontWeight="medium">
                    {gradientName}
                  </Heading>
                  <Paragraph fontSize="textSm" lineHeight="textSm">
                    {gradientValue}
                  </Paragraph>
                </Container>
              </Container>
            ))}
          </Flex>
        </Container>
      ))}
    </div>
  );
};

export default ColorSwatches;
