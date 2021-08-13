import { connect } from 'react-redux';

import { logout as logoutUser } from 'models/globalActions';

import Nav from './Nav';

export default connect(null, { logoutUser })(Nav);
