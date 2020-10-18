import styled from '@emotion/styled';
import React from 'react';

import { Theme, FontWeight } from 'verdaccio-ui/design-tokens/theme';

interface Props {
  text: string;
  capitalize?: boolean;
  weight?: FontWeight;
}

const Label = ({ text, capitalize = false, weight = 'regular', ...props }: Props) => (
  <Wrapper capitalize={capitalize} weight={weight} {...props}>
    {text}
  </Wrapper>
);

export default Label;

const Wrapper = styled('div')<Required<Pick<Props, 'capitalize' | 'weight'>> & { theme?: Theme }>(props => ({
  fontWeight: props.theme && props.theme.fontWeight[props.weight],
  textTransform: props.capitalize ? 'capitalize' : 'none',
}));
