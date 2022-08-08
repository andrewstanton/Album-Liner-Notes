import { Meta, Story } from "@storybook/react";
import { ILink } from "../Nav/Nav";

import Header, { HeaderProps } from "./Header";

export default {
  title: "ui/molecules/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args, { globals }) => (
  <Header {...args} {...globals} />
);

const links: ILink[] = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Artist",
    url: "/artists",
    active: true,
  },
];

export const Default = Template.bind({});
Default.args = {
  ...Header.defaultProps,
  links,
};
