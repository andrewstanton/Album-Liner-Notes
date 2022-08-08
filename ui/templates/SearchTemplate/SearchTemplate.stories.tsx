import { Meta, Story } from "@storybook/react";

import SearchTemplate, { SearchTemplateProps } from "./SearchTemplate";

import { footerNav, headerNav } from "../../../siteMeta";

export default {
  title: "ui/templates/SearchTemplate",
  component: SearchTemplate,
} as Meta;

const Template: Story<SearchTemplateProps> = (args, { globals }) => (
  <SearchTemplate {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  ...SearchTemplate.defaultProps,
  headerNav,
  footerNav,
};
