import { Meta, Story } from "@storybook/react";

import Header, { HeaderProps } from "./Header";

import { headerNav } from "../../../siteMeta";

export default {
  title: "ui/molecules/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args, { globals }) => (
  <Header {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  ...Header.defaultProps,
  links: headerNav,
};
