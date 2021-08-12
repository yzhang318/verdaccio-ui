import { default as MaterialUIButton, ButtonProps } from '@material-ui/core/Button';
import React, { forwardRef } from 'react';

type ButtonRef = HTMLButtonElement;

type Color = 'primary' | 'secondary';

type Props<T> = {
  onClick: () => void;
  color: T;
};

// function GenericComponent<T>(props: { someProp: T }) {
//   return null;
// }

// const CustomButton = forwardRef<HTMLButtonElement, Props<T>>((props, ref) => {
//   return <Button {...props} ref={ref} />;
// });

// export default CustomButton;

// const Test = <GenericComponent someProp={''} />;

// const CustomButton = React.forwardRef(<T>(props: Props<T>, ref:React.Ref<HTMLButtonElement>) => {
//     return <Button {...props} ref={ref} />;

// })

const CustomButton = forwardRef(<T>(props: Props<T>, ref: React.Ref<HTMLButtonElement>) => {
  return <button {...props} />;
});
