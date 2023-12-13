import Icon from 'atoms/Icons/Icon';
import { gradient } from 'atoms/colors/gradients';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

import Checkbox from 'molecules/Checkbox/Checkbox';
import Dropdown from 'molecules/Dropdown/Dropdown';
import Radio from 'molecules/Radio/Radio';
import Slider from 'molecules/Slider/Slider';
import Switch from 'molecules/Switch/Switch';
import TextArea from 'molecules/TextArea/TextArea';
import TextField from 'molecules/TextField/TextField';

import Button from 'components/ComponentButton/ComponentButton';
import LottieImage from 'components/LottieImage/LottieImage';
import Quote from 'components/Quote/BlogQuote';
import ComponentQuote from 'components/Quote/Quote';

import richTextParser from 'utils/richTextParser';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<any> = () => (
  <Flex width="100%" flexDirection="column" gap="16px" paddingAll={24}>
    <Heading as="h4">Typography</Heading>
    <Paragraph>
      {
        "Our team of world-class researchers and experts is dedicated to helping companies maximize the potential of AI in real-world business applications. We'll assist you in finding the right plan and pricing for your business."
      }
    </Paragraph>
    <Flex
      width="100%"
      css={`
        div {
          color: #616165;
        }
      `}
    >
      <Quote quote="Our team of world-class researchers and experts is dedicated to helping companies maximize the potential of AI in real-world business applications. We'll assist you in finding the right plan and pricing for your business." />
    </Flex>
    <Heading as="h4" marginTop={32}>
      Ordered List
    </Heading>
    <Flex fontSize="textLg" flexDirection="column" gap="24px">
      {richTextParser({
        blocks: [],
        links: [],
        value: {
          schema: 'dast',
          document: {
            type: 'root',
            children: [
              {
                type: 'list',
                style: 'bulleted',
                children: [
                  {
                    type: 'listItem',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            value: 'Punctuation, Numerals, Redaction, Profanity Filtering',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            value: 'Punctuation, Numerals, Redaction, Profanity Filtering',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            value: 'Punctuation, Numerals, Redaction, Profanity Filtering',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      } as any)}
    </Flex>
    <Heading as="h4" marginTop={32}>
      Unordered List
    </Heading>
    <Flex fontSize="textLg" flexDirection="column" gap="24px">
      {richTextParser({
        blocks: [],
        links: [],
        value: {
          schema: 'dast',
          document: {
            type: 'root',
            children: [
              {
                type: 'list',
                style: 'bulleted',
                children: [
                  {
                    type: 'listItem',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            value: 'Punctuation, Numerals, Redaction, Profanity Filtering',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            value: 'Punctuation, Numerals, Redaction, Profanity Filtering',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'span',
                            value: 'Punctuation, Numerals, Redaction, Profanity Filtering',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      } as any)}
    </Flex>
    <Heading as="h4" marginTop={32}>
      Quote
    </Heading>
    <Flex
      marginTop={32}
      css={`
        h3 {
          color: #101014;
        }
      `}
    >
      <ComponentQuote quote="Being able to rely on Deepgram transcription, both on the front and back end of the call is paramount to accurate emotion detection for our Call Center Customers." />
    </Flex>
    <Heading as="h4" marginTop={32}>
      Inline text elements
    </Heading>
    <Flex width="100%" gap="48px" flexWrap="wrap">
      <Button buttonType="text" color="primary" label="Inline CTA" endIcon="chevron-right" />
      <Button buttonType="text" color="purple" label="Inline CTA" endIcon="chevron-right" />
      <Text textDecoration="underline">Underline</Text>
      <Text fontWeight="bold">Strong</Text>
      <Text fontStyle="italic">Italic</Text>
      <Text
        textColor="primary-900"
        backgroundShorthand={gradient.primary.red}
        css={`
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        `}
      >
        Highlight
      </Text>
    </Flex>
    <Heading as="h1" textStyle="lg" marginTop={32}>
      Heading 1
    </Heading>
    <Paragraph>
      {
        "Our team of world-class researchers and experts is dedicated to helping companies maximize the potential of AI in real-world business applications. We'll assist you in finding the right plan and pricing for your business."
      }
    </Paragraph>
    <Heading as="h1" textStyle="md">
      Heading 2
    </Heading>
    <Paragraph>
      {
        "Our team of world-class researchers and experts is dedicated to helping companies maximize the potential of AI in real-world business applications. We'll assist you in finding the right plan and pricing for your business."
      }
    </Paragraph>
    <Heading as="h1" textStyle="sm">
      Heading 3
    </Heading>
    <Paragraph>
      {
        "Our team of world-class researchers and experts is dedicated to helping companies maximize the potential of AI in real-world business applications. We'll assist you in finding the right plan and pricing for your business."
      }
    </Paragraph>
    <Heading as="h1" textStyle="xs">
      Heading 4
    </Heading>
    <Paragraph>
      {
        "Our team of world-class researchers and experts is dedicated to helping companies maximize the potential of AI in real-world business applications. We'll assist you in finding the right plan and pricing for your business."
      }
    </Paragraph>
    <Heading as="h4" marginTop={32}>
      Buttons
    </Heading>
    <Flex width="100%" gap="16px" flexWrap="wrap">
      <Button buttonType="fill" color="primary" label="Primary" />
      <Button buttonType="fill" color="success" label="Secondary" />
      <Button buttonType="fill" color="purple" label="Button" />
      <Button buttonType="fill" color="magenta" label="Button" />
    </Flex>
    <Heading as="h4" marginTop={32}>
      Form Elements
    </Heading>
    <Flex
      width="100%"
      gap="16px"
      flexDirection="column"
      lg={{ flexDirection: 'row' }}
      css={`
        .MuiInputBase-root {
          background-color: transparent !important;
          border: 1px solid #ceced2;
          input {
            color: #101014 !important;
            font-size: 16px;
          }
          &:hover,
          &:focus {
            background-color: #effff6 !important;
          }
        }
      `}
    >
      <TextField
        type="text"
        placeholder="First Name*"
        helperText="This is normal field"
        width="100%"
        maxWidth="100%"
        lg={{ maxWidth: 'calc(50% - 8px)' }}
      />
      <TextField
        type="email"
        placeholder="Email*"
        errorMessage="This is required field"
        required
        error
        disabled
        width="100%"
        maxWidth="100%"
        lg={{ maxWidth: 'calc(50% - 8px)' }}
      />
    </Flex>
    <Flex width="100%" gap="16px" flexDirection="column" lg={{ flexDirection: 'row' }}>
      <Dropdown
        label="Select a member"
        list={['Phoenix Baker', 'Olivia Rhye', 'Lana Steiner', 'Candice Wu', 'Natali Craig', 'Drew Cano']}
        helperText="This is normal field"
        onChange={() => console.log('')}
      />
      <Dropdown
        label="Select a member"
        list={[]}
        error
        errorMessage="This is required field"
        onChange={() => console.log('')}
      />
    </Flex>
    <Flex width="100%" gap="16px" paddingLeft={6} flexDirection="column" lg={{ flexDirection: 'row' }}>
      <Checkbox id="checkbox" label="Remember me" helperText="Save my login details for next time" checked />
      <Checkbox id="checkbox" label="Remember me" helperText="Save my login details for next time" />
      <Checkbox id="checkbox" label="Disabled" helperText="Save my login details for next time" disabled />
    </Flex>
    <Flex width="100%" gap="16px" paddingLeft={6} flexDirection="column" lg={{ flexDirection: 'row' }}>
      <Radio id="radio" label="Remember me" helperText="Save my login details for next time" checked />
      <Radio id="radio" label="Remember me" helperText="Save my login details for next time" />
      <Radio id="radio" label="Disabled" helperText="Save my login details for next time" disabled />
    </Flex>
    <TextArea label="How can we help?" helperText="This is required field" />
    <Switch label="I agree to the Privacy Policy" helperText="Save my login details for next time" />
    <Slider defaultValue={50} />
    <Heading as="h4" marginTop={32}>
      Images Grid
    </Heading>
    <Flex width="100%" alignItems="center" flexDirection="column" lg={{ flexDirection: 'row' }} gap="32px">
      <Flex maxWidth="100%" width="100%" lg={{ maxWidth: 'calc(50% - 16px)' }}>
        <Image
          src="https://www.datocms-assets.com/96965/1688759753-transcription-hero.svg"
          alt=""
          width={570}
          height={570}
          isFullWidth
          css={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </Flex>
      <Flex maxWidth="100%" width="100%" lg={{ maxWidth: 'calc(50% - 16px)' }}>
        <LottieImage url="https://www.datocms-assets.com/96965/1687285216-conversational-ai-hero.json" />
      </Flex>
    </Flex>
    <Heading as="h4" marginTop={32}>
      Icons
    </Heading>
    <Flex width="100%" flexWrap="wrap" gap="24px">
      <Icon iconName="linkedin" size={24} color="#00E878" />
      <Icon iconName="twitter" size={24} color="#00E878" />
      <Icon iconName="facebook" size={24} color="#00E878" />
      <Icon iconName="lightning-01" size={24} color="#00E878" />
      <Icon iconName="github" size={24} color="#00E878" />
      <Icon iconName="play-circle" size={24} color="#00E878" />
      <Text>...</Text>
    </Flex>
  </Flex>
);

export const kitchenSink = Template.bind({});
kitchenSink.parameters = {
  options: { showPanel: false },
};
