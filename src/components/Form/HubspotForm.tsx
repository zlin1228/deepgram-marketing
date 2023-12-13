import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';
import { useEffect } from 'react';

import AlertCircleIcon from 'assets/svg/alert-circle.svg';

import { media } from 'atoms/breakpoints/breakpoints';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';

import ChevronDown from 'components/Form/assets/chevron-down.svg';

import { getCountryCode } from 'utils/functions';

import type { IComponentFormRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface FormProps
  extends Omit<
      IComponentFormRecord,
      '_createdAt' | 'id' | 'internal' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt'
    >,
    FlexProps {
  backgroundIsDark?: boolean;
  isInFooter?: boolean;
  isPopup?: boolean;
  isLeftAligned?: boolean;
}

const HubspotForm: FC<FormProps> = ({ formId, isPopup, isLeftAligned, inverted }) => {
  const testFormId = '57010195-c142-4647-9db2-fd0ea0af1df8';

  useHubspotForm({
    portalId: '6890003',
    formId: formId || '',
    target: `#hsform-${formId || ''}`,
  });

  useEffect(() => {
    let countryCode = '';
    if (formId === testFormId) {
      getCountryCode().then(data => {
        countryCode = data.country_calling_code;
      });

      const intervalId = setInterval(() => {
        const phoneSelect = document.querySelector('input[name="phone"]') as HTMLSelectElement | null;
        if (phoneSelect) {
          phoneSelect.value = countryCode;
          clearInterval(intervalId);
        }
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <Container
      id={`hsform-${formId || ''}`}
      textColor="common-white"
      width="100%"
      maxWidth={formId === testFormId || isPopup ? '500px' : '570px'}
      marginX="auto"
      marginLeft={isLeftAligned ? 0 : undefined}
      sm={{
        width: formId === testFormId ? 'auto' : '100%',
      }}
      css={[
        `
        & input[type=email], & input[type=text], & input[type=tel] {
          height: 44px;
          border-radius: 4px;
          padding: 8px 12px;
          font-size: 16px;
          border: unset;
          outline: unset;
          width: 100%;
          min-width: 170px;
          &:focus-visible {
            outline: unset;
          }
        }
        & textarea {
          min-height: 160px;
          border-radius: 4px;
          padding: 8px 12px;
          font-size: 16px;
          border: unset;
          outline: unset;
          width: 100%;
          &:focus-visible {
            outline: unset;
          }
        }
        & select {
          padding: 14px;
          width: 100%;
          color: #E1E1E5;
          font-size: 16px;
          background: #101014;
          border-radius: 8px;
          border: 1px solid #2C2C33;
          appearance: none;
          background-image: url(${ChevronDown});
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1em;
          &:after {
            right: 12px;
          }
          &:focus-visible {
            outline: unset;
          }
          .hs-error-msgs {
            &::after {
              right: 16px !important;
            }
          }
        }
        & .hs-fieldtype-select .hs-error-msgs {
          &::after {
            top: 0;
            right: 16px;
          }
        }
        & input[type=submit] {
          height: 44px;
          font-size: 16px;
          border-radius: 4px;
          background: ${inverted ? 'linear-gradient(to right, #008fc1, #00f099, #008fc1, #00f099)' : '#fff'};
          background-size: 300% 100%;
          border: unset;
          padding-left: 32px;
          padding-right: 32px;
          font-weight: 600;
          cursor: pointer;
          color: #101014;
          &:hover {
            background: linear-gradient(to right, #008fc1, #00f099, #008fc1, #00f099);
            background-size: 300% 100%;
            animation: gradientAnimation 300ms;
            animation-fill-mode: forwards;
          }
        }
        .hs-error-msgs {
          padding-left: 8px;
          font-size: 14px;
          line-height: 1;
          margin-top: 8px;
          list-style: none;
          color: ${color.error[500]};
          position: relative;
          &::after {
            content: '';
            position: absolute;
            right: 8px;
            top: -40px;
            width: 20px;
            height: 20px;
            background: url(${AlertCircleIcon}) no-repeat center center;
          }
        }
        @keyframes gradientAnimation {
          from {background-position: 0 0;}
          to {background-position: 100% 0;}
        }
      `,
        formId === '57010195-c142-4647-9db2-fd0ea0af1df8'
          ? `
        & form {
          display: flex;
          gap: 16px;
          flex-direction: column;
          ${
            inverted
              ? `
            padding: 6px;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.1);
            margin-bottom: 2rem;

            .field {
              position: relative;
            }

            input[type=email], & input[type=text], & input[type=tel] {
              color: ${color.common.white};
              background-color: transparent;

              &::placeholder {
                color: ${color.common.white};
              }
            }
            .hs-error-msgs {
              position: absolute;
              bottom: -2rem;
              width: 105%;
              color: ${color.error[300]};

              &:after {
                top: -50px;
              }
            }
          `
              : ''
          }
          .hs_i_m_good_with_the_privacy_policy {
            display: none;
          }
          .hs-button {
            width: 100%;
          }
          ${[media.xs]} {
            flex-direction: row;
          }
        }
      `
          : `
        & form {
          display: flex;
          column-gap: 24px;
          flex-wrap: wrap;
          .inputs-list {
            list-style: none;
            padding: 0;
          }
          .hs-form-field {
            width: 100%;
            margin-bottom: 24px;
            label {
              margin-bottom: 8px;
              text-align: left;
              display: block;
              font-size: 16px;
              color: ${color.gray[300]};
              &.hs-error-msg {
                font-size: 14px;
                line-height: 20px;
                color: ${color.error[500]};
              }
            }
            ${[media.lg]} {
              &.hs_firstname,
              &.hs_lastname,
              &.hs_email,
              &.hs_phone,
              &.hs_company,
              &.hs_jobtitle {
                width: calc(50% - 12px);
                flex: 0 0 calc(50% - 12px);
              }
            }
            & input[type=email], & input[type=text], & input[type=tel], & textarea {
              background: transparent;
              color: ${color.gray[300]};
              border: 1px solid ${color.gray[800]};
              background-color: ${color.gray[900]};
              width: 100%;
              &.error {
                border-color: ${color.error[300]};
              }
              &::placeholder {
                color: ${color.gray[500]};
              }
            }
          }
          fieldset {
            width: 100%;
            flex: 0 0 100%;
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
            ${[media.sm]} {
              .hs-form-field {
                width: 100% !important;
                flex: 0 0 100% !important;
              }
            }
            &.form-columns-2 {
              ${[media.sm]} {
                .hs-form-field {
                  width: calc(50% - 12px) !important;
                  flex: 0 0 calc(50% - 12px) !important;
                }
              }
            }
          }
          .hs_submit {
            width: 100%;
            .hs-button {
              width: 100%;
              background: ${color.common.white};
              color: ${color.common.black};
              filter: drop-shadow(10px 0px 15px rgba(56, 237, 172, 0.2)) drop-shadow(-10px 0px 15px rgba(150, 162, 255, 0.2));
              border: 1px solid transparent;
              &:hover {
                background: linear-gradient(to right, #008fc1, #00f099, #008fc1, #00f099);
                background-size: 300% 100%;
                animation: gradientAnimation 300ms;
                animation-fill-mode: forwards;
              }
            }
          }
        }
      `,
      ]}
    />
  );
};

export default HubspotForm;
