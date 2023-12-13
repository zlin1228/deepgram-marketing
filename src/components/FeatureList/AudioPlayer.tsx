import { useCallback, useEffect, useRef, useState } from 'react';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import type { IFileField } from 'lib/types';
import type { FC } from 'react';

interface InteractiveProps extends IFileField {
  backgroundIsDark?: boolean;
  noHeading?: boolean;
  noPadding?: boolean;
}

const AudioPlayer: FC<InteractiveProps> = ({ url, noHeading, noPadding }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [playTime, setPlayTime] = useState('00:00');
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<any>(null);
  const playAnimationRef = useRef<any>(null);

  const handlePlay = () => {
    const audioEl = audioRef.current;
    if (audioEl) {
      if (isPlay) {
        (audioEl as HTMLAudioElement).pause();
      } else {
        (audioEl as HTMLAudioElement).play();
      }
      setIsPlay(!isPlay);
    }
  };

  const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

      return `${formatMinutes}:${formatSeconds}`;
    }

    return '00:00';
  };

  const repeat = useCallback(() => {
    if (!audioRef.current) {
      return;
    }
    const currentTime = audioRef.current.currentTime;
    const durationTime = audioRef.current.duration;
    setPlayTime(formatTime(currentTime));
    setProgress(Math.round((currentTime / durationTime) * 100));
    if (playAnimationRef.current) {
      window.cancelAnimationFrame(playAnimationRef.current);
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, isPlay]);

  useEffect(() => {
    repeat();

    return () => {
      playAnimationRef.current && window.cancelAnimationFrame(playAnimationRef.current);
    };
  }, []);

  return (
    <Flex
      paddingX={noPadding ? 0 : 24}
      paddingY={noPadding ? 0 : 16}
      borderRadius="8px"
      gap="10px"
      flexDirection="column"
      backgroundColor="gray-900"
      textColor="common-white"
      width="100%"
    >
      {!noHeading && (
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="displayXs" fontWeight="bold">
            Audio Input
          </Text>
        </Flex>
      )}
      <Flex gap="8px" alignItems="center">
        <Flex alignItems="center" onClick={handlePlay}>
          {isPlay ? (
            <Icon iconName="pause-circle" size={16} color={color.common.white} />
          ) : (
            <Icon iconName="play-circle" size={16} color={color.common.white} />
          )}
        </Flex>
        <Text textStyle="xs" textColor="gray-200">
          {playTime}
        </Text>
        <Container flexGrow={1} height="6px" borderRadius="4px" backgroundColor="gray-600">
          <Text display="block" height="100%" borderRadius="4px" backgroundColor="primary-300" width={`${progress}%`} />
        </Container>
        <Container overflowX="hidden" overflowY="hidden" width="0" height="0" opacity="0">
          <audio src={url} ref={audioRef}>
            <source src={url} type="audio/mp3" />
            <track kind="captions" src={url} label="transcription" />
            <a href={url}>Download audio file</a>.
          </audio>
        </Container>
      </Flex>
    </Flex>
  );
};

export default AudioPlayer;
