import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Chip from 'verdaccio-ui/components/Chip';
import List from 'verdaccio-ui/components/List';
import ListItem from 'verdaccio-ui/components/ListItem';
import Text from 'verdaccio-ui/components/Text';
import { Theme } from 'verdaccio-ui/design-tokens/theme';
import fileSizeSI from 'verdaccio-ui/utils/file-size';
import { formatLicense } from 'verdaccio-ui/utils/package';

import { DetailContext } from '../../context';

interface Props {
  name: string;
  children: React.ReactNode;
}

const DistChip = ({ name, children }: Props) =>
  children ? (
    <DistChips
      label={
        <>
          <b>{name}</b>
          {': '}
          {children}
        </>
      }
    />
  ) : null;

const Dist = () => {
  const { packageMeta } = useContext(DetailContext);
  const { t } = useTranslation();

  if (!packageMeta) {
    return null;
  }

  const { dist, license } = packageMeta?.latest;

  return (
    <List subheader={<StyledText variant="subtitle1">{t('sidebar.distribution.title')}</StyledText>}>
      <DistListItem button={true}>
        <DistChip name={t('sidebar.distribution.file-count')}>{dist.fileCount}</DistChip>
        <DistChip name={t('sidebar.distribution.size')}>{dist.unpackedSize && fileSizeSI(dist.unpackedSize)}</DistChip>
        <DistChip name={t('sidebar.distribution.license')}>{formatLicense(license)}</DistChip>
      </DistListItem>
    </List>
  );
};

export default Dist;

const StyledText = styled(Text)<{ theme?: Theme }>(props => ({
  fontWeight: props.theme && props.theme.fontWeight.bold,
  textTransform: 'capitalize',
}));

const DistListItem = styled(ListItem)({
  paddingLeft: 0,
  paddingRight: 0,
});

const DistChips = styled(Chip)({
  marginRight: 5,
  textTransform: 'capitalize',
});
