import { Meta, Story } from "@storybook/react";

import ContactTemplate, { ContactTemplateProps } from "./ContactTemplate";

import { footerNav, headerNav } from "../../../siteMeta";

export default {
  title: "ui/templates/ContactTemplate",
  component: ContactTemplate,
} as Meta;

const Template: Story<ContactTemplateProps> = (args, { globals }) => (
  <ContactTemplate {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  ...ContactTemplate.defaultProps,
  headerNav,
  footerNav,
};
