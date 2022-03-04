import { Meta, Story } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

export default {
  title: "ui/atoms/Button",
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args, { globals }) => (
  <Button {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  variant: "contained",
  color: "primary",
  children: "Sample",
};
