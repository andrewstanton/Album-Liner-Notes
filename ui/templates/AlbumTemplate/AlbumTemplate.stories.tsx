import { Meta, Story } from "@storybook/react";

import AlbumTemplate, { AlbumTemplateProps } from "./AlbumTemplate";

import { footerNav, headerNav } from "../../../siteMeta";

export default {
  title: "ui/templates/AlbumTemplate",
  component: AlbumTemplate,
} as Meta;

const Template: Story<AlbumTemplateProps> = (args, { globals }) => (
  <AlbumTemplate {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  ...AlbumTemplate.defaultProps,
  headerNav,
  footerNav,
};
