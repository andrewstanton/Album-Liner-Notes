import { Meta, Story } from "@storybook/react";

import HomeTemplate, { HomeTemplateProps } from "./HomeTemplate";

import { footerNav, headerNav } from "../../../siteMeta";

export default {
  title: "ui/templates/HomeTemplate",
  component: HomeTemplate,
} as Meta;

const Template: Story<HomeTemplateProps> = (args, { globals }) => (
  <HomeTemplate {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  ...HomeTemplate.defaultProps,
  headerNav,
  footerNav,
};
