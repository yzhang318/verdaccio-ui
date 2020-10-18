import styled from '@emotion/styled';
import React from 'react';

import { Theme } from 'verdaccio-ui/design-tokens/theme';

import Logo from '../Logo';

import Spinner from './Spinner';

const Loading = () => (
  <Wrapper data-testid="loading">
    <Badge>
      <Logo size="big" />
    </Badge>
    <Spinner />
  </Wrapper>
);

export default Loading;

const Wrapper = styled('div')({
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%',
  position: 'absolute',
});

const Badge = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  margin: '0 0 30px 0',
  borderRadius: 25,
  boxShadow: '0 10px 20px 0 rgba(69, 58, 100, 0.2)',
  background: theme?.palette.type === 'dark' ? theme?.palette.black : '#f7f8f6',
}));
