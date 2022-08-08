import { Meta, Story } from "@storybook/react";

import BandTemplate, { BandTemplateProps } from "./BandTemplate";

import { footerNav, headerNav } from "../../../siteMeta";

export default {
  title: "ui/templates/BandTemplate",
  component: BandTemplate,
} as Meta;

const Template: Story<BandTemplateProps> = (args, { globals }) => (
  <BandTemplate {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  ...BandTemplate.defaultProps,
  headerNav,
  footerNav,
};
