import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    const { show } = this.state;

    return (
      <div>
        <div>
          图片
          <button>{show ? "收起" : "展开"}</button>
        </div>
        {show ? <img src="" /> : null}
      </div>
    );
  }
}

export { Image };
