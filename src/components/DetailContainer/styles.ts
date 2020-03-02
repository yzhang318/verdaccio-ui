import styled from '@emotion/styled';

import { Theme } from '../../design-tokens/theme';

export const DetailTheme = styled('div')<{ theme?: Theme }>(props => ({
  backgroundColor: props?.theme?.palette.readmeBackgroundColor,
}));

export const ReadmeSpacing = styled('div')<{ theme?: Theme }>(props => ({
  padding: '20px',
}));
