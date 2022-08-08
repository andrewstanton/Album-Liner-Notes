import { Meta, Story } from "@storybook/react";

import Section from "./Section";

export default {
  title: "ui/atoms/Section",
  component: Section,
  argTypes: {},
} as Meta;

const Template: Story = (args, { globals }) => (
  <Section {...args} {...globals} />
);

export const Default = Template.bind({});
Default.args = {
  ...Section.defaultProps,
  bgColor: "#F1F0EB",
  children: "I am a section",
};
