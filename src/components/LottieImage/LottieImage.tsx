import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import Container from 'quarks/Container';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface LottieImageProps extends BasicProps {
  url: string;
}

const LottieImage: FC<LottieImageProps> = ({ url }) => {
  const [animationData, setAnimationData] = useState('');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    if (url && url !== '') {
      fetch(url)
        .then(res => {
          try {
            return res?.json();
          } catch (error) {
            console.log(error);
          }
        })
        .then(out => setAnimationData(out));
    }
  }, []);

  return <Container>{animationData && <Lottie options={{ ...defaultOptions, animationData }} />}</Container>;
};

export default LottieImage;
