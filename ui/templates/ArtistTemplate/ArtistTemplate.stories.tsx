import { Meta, Story } from "@storybook/react";

import ArtistTemplate, { ArtistTemplateProps } from "./ArtistTemplate";

import { footerNav, headerNav } from "../../../siteMeta";

export default {
  title: "ui/templates/ArtistTemplate",
  component: ArtistTemplate,
} as Meta;

const Template: Story<ArtistTemplateProps> = (args, { globals }) => (
  <ArtistTemplate {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  ...ArtistTemplate.defaultProps,
  headerNav,
  footerNav,
};
