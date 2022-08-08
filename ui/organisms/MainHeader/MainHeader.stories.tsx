import { Meta, Story } from "@storybook/react";

import MainHeader, { MainHeaderProps } from "./MainHeader";

import { headerNav } from "../../../siteMeta";

export default {
  title: "ui/organisms/MainHeader",
  component: MainHeader,
} as Meta;

const Template: Story<MainHeaderProps> = (args, { globals }) => (
  <MainHeader {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  ...MainHeader.defaultProps,
  links: headerNav,
};
