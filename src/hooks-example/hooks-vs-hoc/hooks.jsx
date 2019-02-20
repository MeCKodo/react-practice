import { Component } from "react";

function ImageHOC(Component) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        extend: false
      };
    }
    render() {
      return null;
    }
  };
}

export { ImageHOC };
