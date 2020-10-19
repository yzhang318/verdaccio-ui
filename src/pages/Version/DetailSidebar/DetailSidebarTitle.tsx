import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from 'verdaccio-ui/components/Box';
import Heading from 'verdaccio-ui/components/Heading';
import { Theme } from 'verdaccio-ui/design-tokens/theme';

interface Props {
  packageName: string;
  version: string;
  isLatest: boolean;
  description?: string;
}

const DetailSidebarTitle = ({ description, packageName, version, isLatest }: Props) => {
  const { t } = useTranslation();
  return (
    <Box className={'detail-info'} display="flex" flexDirection="column" marginBottom="8px">
      <StyledHeading>{packageName}</StyledHeading>
      {description && <div>{description}</div>}
      <StyledBoxVersion>
        {isLatest ? t('sidebar.detail.latest-version', { version }) : t('sidebar.detail.version', { version })}
      </StyledBoxVersion>
    </Box>
  );
};

export default DetailSidebarTitle;

const StyledHeading = styled(Heading)({
  fontSize: '1rem',
  fontWeight: 700,
});

const StyledBoxVersion = styled(Box)<{ theme?: Theme }>(({ theme }) => ({
  color: theme?.palette.text.secondary,
}));
