/*
  Used as main file in package.json
*/

/* eslint-disable no-var */
/* eslint-env node */

var DayPicker = require('./dist/src/DayPicker');
var DateUtils = require('./dist/src/DateUtils');
var LocaleUtils = require('./dist/src/LocaleUtils');
var ModifiersUtils = require('./dist/src/ModifiersUtils');
var Weekday = require('./dist/src/Weekday');
var Navbar = require('./dist/src/Navbar');
var PropTypes = require('./dist/src/PropTypes');

module.exports = DayPicker;
module.exports.DateUtils = DateUtils;
module.exports.LocaleUtils = LocaleUtils;
module.exports.ModifiersUtils = ModifiersUtils;
module.exports.WeekdayPropTypes = Weekday.propTypes;
module.exports.NavbarPropTypes = Navbar.propTypes;
module.exports.PropTypes = PropTypes;
