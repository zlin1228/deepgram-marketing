import Container from 'quarks/Container';

import Modal from 'molecules/Modal/Modal';

import Form from 'components/Form/Form';

import type { IComponentFormRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface VideoPopupProps
  extends BasicProps,
    Omit<
      IComponentFormRecord,
      '_createdAt' | 'id' | 'internal' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt'
    > {
  open: boolean;
  onClose: () => void;
}

const VideoPopup: FC<VideoPopupProps> = ({ open, onClose, ...props }) => (
  <Modal open={open} onClose={onClose} width="90%" maxWidth="800px" marginX="auto">
    <Container
      position="relative"
      width="100%"
      maxWidth="580px"
      marginX="auto"
      paddingAll={40}
      backgroundColor="gray-900"
      border="2px solid"
      borderColor="gray-700"
      borderRadius="16px"
      boxShadow="purpleLg"
      {...props}
    >
      <Form {...props} isPopup />
    </Container>
  </Modal>
);

export default VideoPopup;
