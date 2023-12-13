import { useCallback, useEffect, useRef, useState } from 'react';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, MouseEvent } from 'react';

type PodcastAudioPlayerProps = BasicProps & {
  url: string;
  title: string;
  podcastTitle: string;
};

const PodcastAudioPlayer: FC<PodcastAudioPlayerProps> = ({ url, title, podcastTitle, ...props }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [playTime, setPlayTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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
    const currentTime = audioRef.current.currentTime;
    const durationTime = audioRef.current.duration;
    setPlayTime(formatTime(currentTime));
    setDuration(formatTime(durationTime));
    setProgress(Math.round((currentTime / durationTime) * 1000) / 10);
    if (playAnimationRef.current) {
      window.cancelAnimationFrame(playAnimationRef.current);
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, isPlay]);

  const handlePick = (e: MouseEvent) => {
    const targetPos = (containerRef.current as HTMLDivElement).getBoundingClientRect();
    const pickPos = Math.min(Math.max(Math.round(((e.clientX - targetPos.x) / targetPos.width) * 100), 0), 99) / 100;
    audioRef.current.currentTime = Math.round(audioRef.current.duration * pickPos);
  };

  useEffect(() => {
    repeat();

    return () => {
      playAnimationRef.current && window.cancelAnimationFrame(playAnimationRef.current);
    };
  }, []);

  return (
    <Flex flexDirection="column" {...props}>
      <Flex gap="24px" alignItems="center">
        <Container width="60px" height="40px" flex="0 0 40px" onClick={handlePlay} cursor="pointer">
          {isPlay ? (
            <Icon iconName="pause-circle" size={60} color={color.primary[400]} />
          ) : (
            <Icon iconName="play-circle" size={60} color={color.primary[400]} />
          )}
        </Container>
        <Flex gap="8px" flexDirection="column" maxWidth="calc(100% - 84px)">
          <Text textStyle="sm" textColor="gray-200" whiteSpace="nowrap" overflowX="hidden" textOverflow="ellipsis">
            {podcastTitle}
          </Text>
          <Text textStyle="xl" fontWeight="bold">
            {title}
          </Text>
        </Flex>
      </Flex>
      <Container
        ref={containerRef}
        width="100%"
        marginTop={24}
        marginBottom={16}
        position="relative"
        cursor="pointer"
        onClick={handlePick}
        css={`
          svg {
            width: 100%;
            height: auto;
          }
        `}
      >
        <Icon iconName="audio-play-wave" height="100%" width="100%" opacity="0.6" />
        <Container
          overflowX="hidden"
          overflowY="hidden"
          width={`${progress}%`}
          position="absolute"
          top="0"
          left="0"
          height="100%"
        >
          <Icon iconName="audio-play-wave" height="100%" width="auto" />
        </Container>
      </Container>
      <Container>
        <Text textStyle="xs" textColor="gray-200">
          {playTime} | {duration}
        </Text>
      </Container>
      <Container overflowX="hidden" overflowY="hidden" width="0" height="0" opacity="0">
        <audio src={url} ref={audioRef}>
          <source src={url} type="audio/mp3" />
          <track kind="captions" src={url} label="transcription" />
          <a href={url}>Download audio file</a>.
        </audio>
      </Container>
    </Flex>
  );
};

export default PodcastAudioPlayer;
