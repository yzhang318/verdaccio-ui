import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React, { forwardRef } from 'react';

type Variant = 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
type TextRef = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

interface Props extends Omit<TypographyProps, 'variant'> {
  variant?: Variant;
}

// The reference is already from type of the Component, so the any below is not a problem
const Text = forwardRef<TextRef, Props>(function Text({ variant = 'subtitle1', ...props }, ref) {
  return <Typography {...props} variant={variant} component="span" ref={ref} />;
});

export default Text;
