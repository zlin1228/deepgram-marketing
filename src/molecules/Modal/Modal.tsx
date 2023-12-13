import MuiModal from '@mui/material/Modal';
import { useRef } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useClickAway } from 'react-use';
import styled from 'styled-components';

import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Grid from 'quarks/Grid';

import type { ModalProps as MuiModalProps } from '@mui/material/Modal';
import type { GridProps } from 'quarks/interpolations/grid';
import type { FC } from 'react';

const StyledModal = styled(MuiModal)`
  .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.8);
    display: grid;
    placeitems: center;
  }
`;

interface ModalProps extends GridProps, MuiModalProps {
  /**
   * if true, the modal will be open
   */
  open: boolean;
  /**
   * Callback function for closing the modal.
   */
  onClose: () => void;
  /**
   * if true, close modal button is visible
   */
  hasCloseButton?: boolean;
  /**
   * if true, close modal when clicking outside of the modal
   */
  backdrop?: boolean;
  /**
   * if true, Always keep the children in the DOM
   */
  keepMounted?: boolean;
  isFullScreen?: boolean;
  isFullHeight?: boolean;
  isDark?: boolean;
  isVideo?: boolean;
}

const Modal: FC<ModalProps> = ({
  open,
  onClose,
  hasCloseButton = true,
  backdrop = true,
  children,
  keepMounted = false,
  isVideo,
  ...props
}) => {
  const centerBox = useRef<HTMLDivElement | null>(null);
  useClickAway(centerBox, () => backdrop && onClose());

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      keepMounted={keepMounted}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Grid placeItems="center" height="100vh" overflowY="auto">
        <Container
          className="modal-wrapper-inner"
          position="relative"
          ref={centerBox}
          {...props}
          css={`
            animation: ${open ? 'fadeIn' : 'fadeOut'} 0.3s ease forwards;
            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
            @keyframes fadeOut {
              0% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }
          `}
        >
          {hasCloseButton && (
            <Container
              className="close-btn"
              role="button"
              cursor="pointer"
              position="absolute"
              transform="rotate(45deg)"
              top={isVideo ? '-40px' : '30px'}
              right={isVideo ? '0px' : '40px'}
              lg={{ right: isVideo ? '-20px' : '40px' }}
              onClick={onClose}
              zIndex={100}
            >
              <FiPlus color={color.common.white} size={32} strokeWidth={1} />
            </Container>
          )}
          {children}
        </Container>
      </Grid>
    </StyledModal>
  );
};

export default Modal;
