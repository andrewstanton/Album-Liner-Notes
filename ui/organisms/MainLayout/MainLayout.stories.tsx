import { Meta, Story } from "@storybook/react";

import MainLayout, { MainLayoutProps } from "./MainLayout";

import { headerNav, footerNav } from "../../../siteMeta";

export default {
  title: "ui/organisms/MainLayout",
  component: MainLayout,
} as Meta;

const Template: Story<MainLayoutProps> = (args, { globals }) => (
  <MainLayout {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  ...MainLayout.defaultProps,
  headerNav,
  footerNav,
};
