var exec = require('cordova/exec');

var GAPlugin = function() {};

GAPlugin.prototype.init = function(success, fail, id, period) {
  exec(success, fail, 'GAPlugin', 'initGA', [id, period]);
};

GAPlugin.prototype.setVersion = function(success, fail, version) {
  exec(success, fail, 'GAPlugin', 'setVersion', [version]);
};

// log an event
//
// category = The event category. This parameter is required to be non-empty.
// eventAction = The event action. This parameter is required to be non-empty.
// eventLabel = The event label. This parameter may be a blank string to indicate no label.
// eventValue = The event value. This parameter may be -1 to indicate no value.
GAPlugin.prototype.trackEvent = function(success, fail, category, eventAction, eventLabel, eventValue) {
  exec(success, fail, 'GAPlugin', 'trackEvent', [category, eventAction, eventLabel, eventValue]);
};


// log a page view
//
// pageURL = the URL of the page view
GAPlugin.prototype.trackPage = function(success, fail, pageURL) {
  exec(success, fail, 'GAPlugin', 'trackPage', [pageURL]);
};

// Set a custom variable. The variable set is included with
// the next event only. If there is an existing custom variable at the specified
// index, it will be overwritten by this one.
//
// value = the value of the variable you are logging
// index = the numerical index of the dimension to which this variable will be assigned (1 - 20)
//  Standard accounts support up to 20 custom dimensions.
GAPlugin.prototype.setVariable = function(success, fail, index, value) {
  exec(success, fail, 'GAPlugin', 'setVariable', [index, value]);
};

GAPlugin.prototype.exit = function(success, fail) {
  exec(success, fail, 'GAPlugin', 'exitGA', []);
};

var gaPlugin = new GAPlugin();
module.exports = gaPlugin;
