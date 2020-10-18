import styled from '@emotion/styled';
import React from 'react';
import 'github-markdown-css';

import { Theme } from 'verdaccio-ui/design-tokens/theme';

interface Props {
  description: string;
}

const Readme = ({ description }: Props) => (
  <Wrapper className="markdown-body" dangerouslySetInnerHTML={{ __html: description }} />
);

export default Readme;

const Wrapper = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  background: theme?.palette.white,
  color: theme?.palette.black,
  padding: theme?.spacing(2, 3),
}));
