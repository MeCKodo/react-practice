// import React from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
// import Select from "react-select";
// import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
// import Chip from "@material-ui/core/Chip";
// import MenuItem from "@material-ui/core/MenuItem";
// import { emphasize } from "@material-ui/core/styles/colorManipulator";
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
// const Placeholder = props => {
//   console.log(props);
//   return (
//     <Typography>
//       <Search />
//       {props.children}
//     </Typography>
//   );
// };

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
    return { ...styles, width: "100%", margin: "0 20px" };
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

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     marginLeft: 20,
//     marginRight: 20
//   },
//   input: {
//     display: "flex",
//     padding: 0
//   },
//   valueContainer: {
//     display: "flex",
//     flex: 1,
//     alignItems: "center"
//   },
//   chip: {
//     margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
//   },
//   chipFocused: {
//     backgroundColor: emphasize(
//       theme.palette.type === "light"
//         ? theme.palette.grey[300]
//         : theme.palette.grey[700],
//       0.08
//     )
//   },
//   noOptionsMessage: {
//     fontSize: 16,
//     padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
//   },
//   singleValue: {
//     fontSize: 16
//   },
//   placeholder: {
//     position: "absolute",
//     left: 2,
//     fontSize: 16
//   }
// });

// // const SearchWrapper = styled.div`
// //   max-width: 640px;
// //   height: 40px;
// // `;

// const SearchInput = styled(TextField)`
//   & .bootstrapInput {
//     max-width: 640px;
//     height: 40px;
//     border-radius: 4px;
//     background-color: red;
//     padding: 0;
//     border: 0;
//   }
// `;

// function NoOptionsMessage(props) {
//   return (
//     <Typography
//       color="textSecondary"
//       className={props.selectProps.classes.noOptionsMessage}
//       {...props.innerProps}
//     >
//       {props.children}
//     </Typography>
//   );
// }

// function inputComponent({ inputRef, ...props }) {
//   return <div ref={inputRef} {...props} />;
// }

// function Control(props) {
//   return (
//     <SearchInput
//       InputProps={{
//         disableUnderline: true,
//         classes: {
//           input: "bootstrapInput"
//         }
//       }}
//     />
//   );
// }

// function Option(props) {
//   return (
//     <MenuItem
//       buttonRef={props.innerRef}
//       selected={props.isFocused}
//       component="div"
//       style={{
//         fontWeight: props.isSelected ? 500 : 400
//       }}
//       {...props.innerProps}
//     >
//       {props.children}
//     </MenuItem>
//   );
// }

// function Placeholder(props) {
//   return (
//     <Typography
//       color="textSecondary"
//       className={props.selectProps.classes.placeholder}
//       {...props.innerProps}
//     >
//       {props.children}
//     </Typography>
//   );
// }

// function SingleValue(props) {
//   return (
//     <Typography
//       className={props.selectProps.classes.singleValue}
//       {...props.innerProps}
//     >
//       {props.children}
//     </Typography>
//   );
// }

// function ValueContainer(props) {
//   return (
//     <div className={props.selectProps.classes.valueContainer}>
//       {props.children}
//     </div>
//   );
// }

// function MultiValue(props) {
//   return (
//     <Chip
//       tabIndex={-1}
//       label={props.children}
//       className={classNames(props.selectProps.classes.chip, {
//         [props.selectProps.classes.chipFocused]: props.isFocused
//       })}
//       onDelete={event => {
//         props.removeProps.onClick();
//         props.removeProps.onMouseDown(event);
//       }}
//     />
//   );
// }

// const components = {
//   Option,
//   Control,
//   NoOptionsMessage,
//   Placeholder,
//   SingleValue,
//   MultiValue,
//   ValueContainer
// };

// class IntegrationReactSelect extends React.Component {
//   state = {
//     single: null,
//     multi: null
//   };

//   handleChange = name => value => {
//     this.setState({
//       [name]: value
//     });
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <div className={classes.root}>
//         <Select
//           classes={classes}
//           options={suggestions}
//           components={components}
//           value={this.state.single}
//           onChange={this.handleChange("single")}
//           placeholder="Search a country (start with a)"
//         />
//       </div>
//     );
//   }
// }

// IntegrationReactSelect.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(IntegrationReactSelect);
