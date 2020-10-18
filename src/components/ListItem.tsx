import { default as MaterialUIListItem, ListItemProps } from '@material-ui/core/ListItem';
import React, { forwardRef } from 'react';

type ListItemRef = HTMLDivElement | HTMLLIElement;

interface Props extends Omit<ListItemProps, 'button'> {
  button?: boolean;
}

const ListItem = forwardRef(function ListItem({ button = false, ...props }: Props, ref: React.Ref<ListItemRef>) {
  // it seems typescript has some discrimination type limitions. Please see: https://github.com/mui-org/material-ui/issues/14971
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <MaterialUIListItem {...props} button={button as any} innerRef={ref} />;
});

export default ListItem;
