import React, { useCallback, useState, ChangeEvent, useContext } from 'react';

import { DetailContext } from '../../pages/Version';
import Box from '../../muiComponents/Box';

import DetailContainerTabs from './DetailContainerTabs';
import DetailContainerContent from './DetailContainerContent';
import { TabPosition } from './tabs';
import { DetailTheme } from './styles';

const DetailContainer: React.FC = () => {
  const [tabPosition, setTabPosition] = useState(TabPosition.README);
  const detailContext = useContext(DetailContext);
  const { readMe } = detailContext;

  const handleChangeTabPosition = useCallback(
    (event: ChangeEvent<{}>) => {
      event.preventDefault();
      const eventTarget = event.target as HTMLSpanElement;
      const chosentab = eventTarget.innerText as TabPosition;
      setTabPosition(TabPosition[chosentab]);
    },
    [setTabPosition]
  );

  return (
      <Box component="div" display="flex" flexDirection="column">
        <DetailContainerTabs onChangeTabPosition={handleChangeTabPosition} tabPosition={tabPosition} />
        <DetailTheme>
          <DetailContainerContent readDescription={readMe} tabPosition={tabPosition} />
        </DetailTheme>
      </Box>
  );
};

export default DetailContainer;
