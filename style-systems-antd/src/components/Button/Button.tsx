import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';

export interface ButtonProps extends AntButtonProps {}
 
export const Button = (props: ButtonProps) => {
  return <AntButton {...props} />;
}; 