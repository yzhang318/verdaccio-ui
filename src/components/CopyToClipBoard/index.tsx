import styled from '@emotion/styled';
import FileCopy from '@material-ui/icons/FileCopy';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { copyToClipBoardUtility } from 'verdaccio-ui/utils/cli-utils';

import IconButton from '../IconButton';
import Tooltip from '../Tooltip';

interface Props {
  text: string;
  children?: React.ReactNode;
}

const renderText = (text: string, children: React.ReactNode): JSX.Element => {
  if (children) {
    return <ClipBoardCopyText>{children}</ClipBoardCopyText>;
  }

  return <ClipBoardCopyText>{text}</ClipBoardCopyText>;
};

const CopyToClipBoard = ({ text, children }: Props) => {
  const { t } = useTranslation();
  return (
    <ClipBoardCopy>
      {renderText(text, children)}
      <Tooltip disableFocusListener={true} title={t('copy-to-clipboard')}>
        <IconButton onClick={copyToClipBoardUtility(text)} data-testid="copy-icon">
          <FileCopy />
        </IconButton>
      </Tooltip>
    </ClipBoardCopy>
  );
};

export default CopyToClipBoard;

const ClipBoardCopy = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const ClipBoardCopyText = styled('span')({
  display: 'inline-block',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  height: '21px',
  fontSize: '1rem',
});
