import React, { ReactNode } from 'react';

import { Wrapper } from './styles';

interface Props {
  children: ReactNode;
}

const Tag = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default Tag;
