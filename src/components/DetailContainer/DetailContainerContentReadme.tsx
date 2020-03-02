import React from 'react';

import { preventXSS } from '../../utils/sec-utils';
import Readme from '../Readme';
import { ReadmeSpacing } from './styles';

interface Props {
  description?: string;
}

const DetailContainerContentReadme: React.FC<Props> = ({ description }) => {
  if (!description) {
    return null;
  }
  const encodedReadme = preventXSS(description);
  return <ReadmeSpacing><Readme description={encodedReadme} /></ReadmeSpacing>;
};

export default DetailContainerContentReadme;
