import axios from 'axios';
import { useRef, useState } from 'react';

import AudioBg from 'assets/svg/Illustration.svg';

import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import Select from 'molecules/Select/Select';

import langList from 'components/FeatureList/languageList';

import type { IComponentFeatureListRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface InteractiveProps extends BasicProps, IComponentFeatureListRecord {
  backgroundIsDark?: boolean;
  isActive?: boolean;
  isSubComponent?: boolean;
}

const LiveStreaming: FC<InteractiveProps> = ({ isActive, isSubComponent }) => {
  const [checkedLang, setCheckedLang] = useState<string>('English');
  const [isShow, setIsShow] = useState(0);
  const [transcription, setTranscription] = useState('');
  const socketRef = useRef<any>(null);
  const tokenURL = '/api/getToken';

  const handleChange = (name: string) => {
    if (socketRef.current && isShow > 1) {
      socketRef.current.close();
      socketRef.current = null;
    }
    setCheckedLang(name);
    setIsShow(0);
    setTranscription('');
  };

  const handleTranscription = async () => {
    if (socketRef.current && isShow > 1) {
      socketRef.current.close();
      socketRef.current = null;
      setIsShow(0);
      setTranscription('');
    } else if (isShow < 1) {
      setIsShow(1);
      const res = await axios.get(tokenURL);
      const api_key = res.data['api_key'];

      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(stream => {
          const mediaRecorder = new MediaRecorder(stream, {
            mimeType: 'audio/webm',
          });
          const currentLang = langList.filter(lang => lang.title === checkedLang)?.[0]?.code || 'en';
          const deepgramSocket = new WebSocket(
            `wss://api.deepgram.com/v1/listen?tier=enhanced&punctuate=true&language=${currentLang}`,
            ['token', api_key],
          );

          deepgramSocket.addEventListener('open', () => {
            setIsShow(2);
            setTimeout(() => {
              setIsShow(3);
            }, 1000);
            mediaRecorder.addEventListener('dataavailable', async event => {
              if (event.data.size > 0 && deepgramSocket.readyState === 1) {
                deepgramSocket.send(event.data);
              }
            });
            mediaRecorder.start(1000);
          });
          deepgramSocket.addEventListener('message', (message: any) => {
            const received = JSON.parse(message.data);
            const transcript = received.channel.alternatives[0].transcript;
            if (transcript && received.is_final) {
              setTranscription(prev => prev + ' ' + transcript);
            }
          });
          socketRef.current = deepgramSocket;
        })
        .catch(err => {
          console.log(err);
          setIsShow(-1);
        });
    }
  };

  return (
    <Flex
      flexDirection="column"
      gap="16px"
      md={{ gap: '40px', flexDirection: 'row' }}
      display={isActive || !isSubComponent ? 'flex' : 'none'}
    >
      <Flex
        width="100%"
        md={{ flex: '0 0 calc(50% - 20px)', maxWidth: 'calc(50% - 20px)' }}
        backgroundColor="gray-900"
        borderRadius="16px"
        paddingAll={32}
        flexDirection="column"
        alignItems="center"
        textColor="common-white"
        textAlign="center"
        gap="12px"
        backgroundImage={AudioBg}
        backgroundSize="contain"
        backgroundPosition="center bottom"
        backgroundRepeat="no-repeat"
        minHeight="500px"
        justifyContent="space-between"
      >
        <Flex flexDirection="column" gap="12px">
          <Heading as="h3" textStyle="xs">
            Give it a try.
          </Heading>
          <Container maxWidth="370px" marginX="auto" fontSize="textMd" css=" color: #D7DFEB;" marginBottom={32}>
            Click the mic to transcribe live in English or select another language.
          </Container>
          <Container
            width="200px"
            height="200px"
            cursor="pointer"
            marginX="auto"
            borderRadius="50%"
            onClick={() => handleTranscription()}
          />
        </Flex>
        <Container width="100%">
          <Select
            list={langList.map(lang => lang.title)}
            onChange={handleChange}
            width="100%"
            defaultValue="English"
            css={`
              .MuiSelect-select {
                color: ${color.common.white};
              }
              ,
              svg {
                color: ${color.common.white};
              }
            `}
          />
        </Container>
      </Flex>
      <Flex
        width="100%"
        md={{ flex: '0 0 calc(50% - 20px)', maxWidth: 'calc(50% - 20px)' }}
        backgroundColor="gray-900"
        borderRadius="16px"
        paddingAll={24}
        gap="24px"
        flexDirection="column"
      >
        <Heading textColor="common-white" as="h3" textStyle="xs">
          Transcription
        </Heading>
        <Flex
          flexDirection="column"
          paddingAll={24}
          gap="16px"
          backgroundColor="common-black"
          textColor="gray-200"
          fontSize="textLg"
          flexGrow={1}
          borderRadius="8px"
        >
          <Container transition="opacity 300ms">
            {isShow === -1 && 'Unable to access the microphone. Please check system settings.'}
            {isShow === 0 && 'Click the mic to transcribe live in English or select another language.'}
            {isShow === 1 && 'Loading... Please Wait.'}
            {isShow === 2 && 'Go.'}
            {isShow === 3 && transcription}
          </Container>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LiveStreaming;
