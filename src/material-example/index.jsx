import React, {Component} from 'react';
import styled from 'styled-components';
import LeftIcon from './LeftIcon';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple'

const MaterialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TopBar = styled.div`
  display: flex;
  flex-basis: 70px;
`;

const LeftNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: ${props => props.isOpen ? 120 : 56}px;
  height: ${props => props.test ? 50: 100}%;
  overflow-y: scroll;
`;

export default class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      test: false,
    };
  }
  
  switchNavStatus = () => {
    const { isOpen, test } = this.state;
    this.setState({
      isOpen: !isOpen,
      test: !test,
    });
    console.log(this.state.isOpen);
  };
  
  render() {
    const { isOpen, test } = this.state;
    
    return (
      <MaterialWrapper>
        <TopBar>
          <FormatListBulleted onClick={this.switchNavStatus} />
        </TopBar>
        <LeftNavWrapper isOpen={isOpen} test={test}>
          <ul>
            <li>
                <LeftIcon />
              {/*<p>message</p>*/}
            </li>
            <li>
              <LeftIcon />
              {/*<p>message</p>*/}
            </li>
          </ul>
          <ul>
            <li>
              <LeftIcon />
              {/*<p>message</p>*/}
            </li>
            <li>
              <LeftIcon />
              {/*<p>message</p>*/}
            </li>
            <li>
              <LeftIcon />
              {/*<p>message</p>*/}
            </li>
            <li>
              <LeftIcon />
              {/*<p>message</p>*/}
            </li>
            <li>
              <LeftIcon />
              {/*<p>message</p>*/}
            </li>
            <li>
              <LeftIcon />
              {/*<p>message</p>*/}
            </li>
            <li>
              <LeftIcon />
              {/*<p>message</p>*/}
            </li>
          </ul>
        </LeftNavWrapper>
      </MaterialWrapper>
    )
  }
}
