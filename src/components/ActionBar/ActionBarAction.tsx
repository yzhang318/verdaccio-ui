import styled from '@emotion/styled';
import BugReportIcon from '@material-ui/icons/BugReport';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Theme } from 'verdaccio-ui/design-tokens/theme';

import FloatingActionButton from '../FloatingActionButton';
import Link from '../Link';
import Tooltip from '../Tooltip';

import downloadTarball from './download-tarball';

type ActionType = 'VISIT_HOMEPAGE' | 'OPEN_AN_ISSUE' | 'DOWNLOAD_TARBALL';

interface Props {
  type: ActionType;
  link: string;
}

/* eslint-disable react/jsx-no-bind */
const ActionBarAction = ({ type, link }: Props) => {
  const { t } = useTranslation();
  switch (type) {
    case 'VISIT_HOMEPAGE':
      return (
        <Tooltip title={t('action-bar-action.visit-home-page')}>
          <Link external={true} to={link}>
            <Fab size="small">
              <HomeIcon />
            </Fab>
          </Link>
        </Tooltip>
      );
    case 'OPEN_AN_ISSUE':
      return (
        <Tooltip title={t('action-bar-action.open-an-issue')}>
          <Link external={true} to={link}>
            <Fab size="small">
              <BugReportIcon />
            </Fab>
          </Link>
        </Tooltip>
      );
    case 'DOWNLOAD_TARBALL':
      return (
        <Tooltip title={t('action-bar-action.download-tarball')}>
          <Fab data-testid="download-tarball-btn" onClick={downloadTarball(link)} size="small">
            <DownloadIcon />
          </Fab>
        </Tooltip>
      );
  }
};

export default ActionBarAction;

const Fab = styled(FloatingActionButton)<{ theme?: Theme }>(({ theme }) => ({
  backgroundColor: theme?.palette.type === 'light' ? theme?.palette.primary.main : theme?.palette.cyanBlue,
  color: theme?.palette.white,
  marginRight: 10,
  ':hover': {
    color: theme?.palette.type === 'light' ? theme?.palette.primary.main : theme?.palette.cyanBlue,
    background: theme?.palette.white,
  },
}));
