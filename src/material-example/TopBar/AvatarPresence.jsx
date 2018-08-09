import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "./Avatar";
import Presence from "./Presence";
import image from "../../static/images.JPG";

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  height: 40px;
  width: 40px;
`;

const PresenceWrapper = styled.div`
  position: absolute;
  right: -2px;
  bottom: -1px;
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 100;
`;

export default props => {
  return (
    <Wrapper>
      <PresenceWrapper>
        <Presence />
      </PresenceWrapper>
      <Avatar alt="avatar" src={image} size="large" />
    </Wrapper>
  );
};
