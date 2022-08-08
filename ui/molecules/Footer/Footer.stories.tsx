import { Meta, Story } from "@storybook/react";
import { INavLink } from "../Nav/Nav";

import Footer, { FooterProps } from "./Footer";

export default {
  title: "ui/molecules/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args, { globals }) => (
  <Footer {...args} {...globals} />
);

const links: INavLink[] = [
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
  ...Footer.defaultProps,
  links,
};
