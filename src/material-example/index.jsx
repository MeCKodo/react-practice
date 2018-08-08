import React, {Component} from 'react';
import styled from 'styled-components';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import LeftItem from './LeftItem';

const MaxWidth = 200;
const MinWidth = 72;

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
  width: ${props => props.isOpen ? MaxWidth : MinWidth}px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all .2s ease;
  border-right: 1px solid #eee;
  padding: 24px 0;
`;

const Lists = styled.ul`
  &:hover {
    svg {
      color: #9e9e9e;
    }
    p {
      color: #212121;
    }
  }
`;
const ListsArr = [[
  {
    url : '1',
    title : 'Messages',
    icon: 'Message',
  }, {
    url : '2',
    title : 'Calls',
    icon: 'Phone',
  }, {
    url : '3',
    title : 'Meetings',
    icon: 'Videocam',
  },
], [
  {
    url : '4',
    title : 'Dashboard',
    icon: 'Dashboard',
  }, {
    url : '5',
    title : 'Calendar',
    icon: 'DateRange',
  }, {
    url : '6',
    title : 'Tasks',
    icon: 'AssignmentTurnedIn',
  }, {
    url : '7',
    title : 'Files',
    icon: 'FileCopy',
  }, {
    url : '8',
    title : 'Links',
    icon: 'Link',
  }, {
    url : '9',
    title : 'Notes',
    icon: 'LibraryBooks',
  }, {
    url : '10',
    title : 'Integration',
    icon: 'AddBox',
  },
] ];
export default class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen : false,
      test : false,
    };
  }
  
  switchNavStatus = () => {
    const { isOpen, test } = this.state;
    this.setState({
      isOpen : !isOpen,
      test : !test,
    });
  };
  
  render() {
    const { isOpen } = this.state;
    
    return (
      <MaterialWrapper>
        <TopBar>
          <FormatListBulleted onClick={this.switchNavStatus}/>
        </TopBar>
        <LeftNavWrapper isOpen={isOpen}>
          {
            ListsArr.map((arr, index) => {
              console.log(arr);
              return (<Lists key={index}>
                {
                  arr.map(item =>
                    <LeftItem
                      key={item.url}
                    url={item.url}
                    open={isOpen}
                    title={item.title}
                    icon={item.icon}/>)
                }
              </Lists>)
            })
          }
        </LeftNavWrapper>
      </MaterialWrapper>
    )
  }
}
