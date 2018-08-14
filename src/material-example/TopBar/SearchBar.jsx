import styled from "styled-components";

import React, { Component } from "react";
import Search from "@material-ui/icons/Search";
import Select, { components } from "react-select";

import Typography from "@material-ui/core/Typography";
const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "American Samoa" },
  { label: "Andorra" },
  { label: "Angola" },
  { label: "Anguilla" },
  { label: "Antarctica" },
  { label: "Antigua and Barbuda" },
  { label: "Argentina" },
  { label: "Armenia" },
  { label: "Aruba" },
  { label: "Australia" },
  { label: "Austria" },
  { label: "Azerbaijan" },
  { label: "Bahamas" },
  { label: "Bahrain" },
  { label: "Bangladesh" },
  { label: "Barbados" },
  { label: "Belarus" },
  { label: "Belgium" },
  { label: "Belize" },
  { label: "Benin" },
  { label: "Bermuda" },
  { label: "Bhutan" },
  { label: "Bolivia, Plurinational State of" },
  { label: "Bonaire, Sint Eustatius and Saba" },
  { label: "Bosnia and Herzegovina" },
  { label: "Botswana" },
  { label: "Bouvet Island" },
  { label: "Brazil" },
  { label: "British Indian Ocean Territory" },
  { label: "Brunei Darussalam" }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",
  margin: "0 0 0 28px"
});
const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && <components.DropdownIndicator {...props} />
  );
};
const IndicatorSeparator = () => {
  return null;
};
const Indicators = styled.div`
  position: absolute;
  top: 8px;
  left: 0px;
  color: #9e9e9e; // 500
  &:hover {
    color: transparent;
  }
`;
const IconSearch = styled(Search)`
  padding: 0 12px;
`;
const IndicatorsContainer = () => {
  return (
    <Indicators>
      <IconSearch />
    </Indicators>
  );
};

function Placeholder(props) {
  return (
    <Typography
      style={{ position: "absolute", left: "36px" }}
      color="textSecondary"
    >
      {props.children}
    </Typography>
  );
}
const colourStyles = {
  container: (styles, state) => {
    return { ...styles, width: "100%", margin: "0 20px", maxWidth: "640px" };
  },
  control: (styles, state) => {
    return {
      ...styles,
      backgroundColor: state.isFocused ? "#fff !important" : "#F5F5F5", // 100
      border: state.isFocused
        ? "1px solid #ccc !important"
        : "1px solid #F5F5F5",
      maxWidth: "640px",
      height: "40px",
      boxShadow: "0",
      boxSizing: "border-box",
      ":hover": {
        backgroundColor: "#E0E0E0", // 300
        border: "1px solid #E0E0E0"
      }
    };
  },
  input: (styles, state) => {
    return { ...styles, ...dot() };
  },
  placeholder: styles => {
    return {
      ...styles
    };
  },
  menuList: (styles, state) => {
    return {
      ...styles,
      color: "#616161 !important", // 700
      backgroundColor: "#fff"
    };
  },
  option: (styles, state) => {
    return {
      ...styles,
      color: state.isSelected
        ? "#fff !important"
        : state.isFocused
          ? "#555 !important"
          : "#555", // 700
      backgroundColor: state.isSelected
        ? "#0684bd !important"
        : state.isFocused
          ? "#EBF6FA !important"
          : "transparent",
      "&:hover": {
        backgroundColor: "#f4f4f4",
        color: "#515151 !important"
      }
    };
  },
  singleValue: (styles, { data }) => ({ ...styles, ...dot() })
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  handleChange = value => {
    this.setState({
      value: value
    });
  };
  render() {
    return (
      <Select
        theme={{ color: "red" }}
        value={this.state.value}
        placeholder="Search"
        label="Single select"
        onChange={this.handleChange}
        options={suggestions}
        styles={colourStyles}
        components={{
          DropdownIndicator,
          IndicatorsContainer,
          Placeholder
        }}
      />
    );
  }
}
