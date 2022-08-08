import { Meta, Story } from "@storybook/react";

import PageTemplate, { PageTemplateProps } from "./PageTemplate";

import { footerNav, headerNav } from "../../../siteMeta";

export default {
  title: "ui/templates/PageTemplate",
  component: PageTemplate,
} as Meta;

const Template: Story<PageTemplateProps> = (args, { globals }) => (
  <PageTemplate {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  ...PageTemplate.defaultProps,
  headerNav,
  footerNav,
};
