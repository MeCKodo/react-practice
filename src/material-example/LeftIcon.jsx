import React from 'react';
import Message from '@material-ui/icons/Message';
import Phone from '@material-ui/icons/Phone';
import Videocam from '@material-ui/icons/Videocam';
import Dashboard from '@material-ui/icons/Dashboard';
import DateRange from '@material-ui/icons/DateRange';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import FileCopy from '@material-ui/icons/FileCopy';
import AddBox from '@material-ui/icons/AddBox';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Link from '@material-ui/icons/Link';

// assignment_turned_in
const IconGroup = {
  Message: (props) => <Message {...props} />,
  Phone: (props) => <Phone {...props} />,
  Videocam: (props) => <Videocam {...props} />,
  Dashboard: (props) => <Dashboard {...props} />,
  DateRange: (props) => <DateRange {...props} />,
  AssignmentTurnedIn: (props) => <AssignmentTurnedIn {...props} />,
  FileCopy: (props) => <FileCopy {...props} />,
  Link: (props) => <Link {...props} />,
  LibraryBooks: (props) => <LibraryBooks {...props} />,
  AddBox: (props) => <AddBox {...props} />,
};

export default (props) => {
  const { icon } = props;
  const Icon = IconGroup[icon];
  return (
    <React.Fragment>
      <Icon {...props} />
    </React.Fragment>
  )
};
