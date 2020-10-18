import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import List from 'verdaccio-ui/components/List';
import ListItem from 'verdaccio-ui/components/ListItem';
import { default as MuiListItemText } from 'verdaccio-ui/components/ListItemText';
import Text from 'verdaccio-ui/components/Text';
import { Theme } from 'verdaccio-ui/design-tokens/theme';
import { formatDateDistance } from 'verdaccio-ui/utils/package';

import { DetailContext } from '../..';
import NoItems from '../NoItems';

const UpLinks = () => {
  const { packageMeta } = useContext(DetailContext);
  const { t } = useTranslation();

  if (!packageMeta || !packageMeta._uplinks || !packageMeta.latest) {
    return null;
  }

  const { _uplinks: uplinks, latest } = packageMeta;

  if (Object.keys(uplinks).length === 0) {
    return <NoItems text={t('uplinks.no-items', { name: latest.name })} />;
  }

  return (
    <>
      <StyledText variant="subtitle1">{t('uplinks.title')}</StyledText>
      <List>
        {Object.keys(uplinks)
          .reverse()
          .map(name => (
            <ListItem key={name}>
              <ListItemText>{name}</ListItemText>
              <Spacer />
              <ListItemText>{formatDateDistance(uplinks[name].fetched)}</ListItemText>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default UpLinks;

const StyledText = styled(Text)<{ theme?: Theme }>(props => ({
  fontWeight: props.theme && props.theme.fontWeight.bold,
}));

const Spacer = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  flex: '1 1 auto',
  borderBottom: `1px dotted ${theme?.palette.type == 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'} `,
  whiteSpace: 'nowrap',
  height: '0.5em',
}));

const ListItemText = styled(MuiListItemText)<{ theme?: Theme }>(({ theme }) => ({
  flex: 'none',
  color: theme?.palette.type == 'light' ? theme?.palette.black : theme?.palette.white,
  opacity: 0.6,
}));
