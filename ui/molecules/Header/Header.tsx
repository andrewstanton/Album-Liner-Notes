import React from "react";
import styled from "styled-components";

import { Container, makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {},
}));

const HeaderWrapper = styled.header``;

/**
 * Header Component
 * @const {React.FC} Header
 */
function Header() {
  const classes = useStyles();

  return (
    <HeaderWrapper className={classes.header}>
      <Container>Header Here</Container>
    </HeaderWrapper>
  );
}

export default Header;
