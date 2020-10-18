import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Theme } from 'verdaccio-ui/design-tokens/theme';
import { getAuthorName } from 'verdaccio-ui/utils/package';
import { isEmail } from 'verdaccio-ui/utils/url';

import { DetailContext } from '../../pages/Version';
import Avatar from '../Avatar';
import List from '../List';
import ListItem from '../ListItem';
import ListItemText from '../ListItemText';
import Text from '../Text';

const Author = () => {
  const { packageMeta } = useContext(DetailContext);
  const { t } = useTranslation();

  if (!packageMeta) {
    return null;
  }

  const { author, name: packageName, version } = packageMeta.latest;

  if (!author) {
    return null;
  }

  const { email, name } = author;

  const avatarComponent = <Avatar alt={author.name} src={author.avatar} />;

  return (
    <List subheader={<StyledText variant={'subtitle1'}>{t('sidebar.author.title')}</StyledText>}>
      <AuthorListItem button={true}>
        {!email || !isEmail(email) ? (
          avatarComponent
        ) : (
          <a href={`mailto:${email}?subject=${packageName}@${version}`} target={'_top'}>
            {avatarComponent}
          </a>
        )}
        {name && <AuthorListItemText primary={getAuthorName(name)} />}
      </AuthorListItem>
    </List>
  );
};

export default Author;

const StyledText = styled(Text)<{ theme?: Theme }>(props => ({
  fontWeight: props.theme && props.theme.fontWeight.bold,
}));

const AuthorListItem = styled(ListItem)({
  padding: 0,
  ':hover': {
    backgroundColor: 'transparent',
  },
});

const AuthorListItemText = styled(ListItemText)({
  padding: '0 10px',
  margin: 0,
});
