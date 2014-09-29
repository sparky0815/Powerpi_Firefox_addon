
var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");
var prefs = require("sdk/simple-prefs").prefs;
var ip = require('sdk/simple-prefs').prefs['powerpiadress'];
var piadress = require("sdk/simple-prefs").on("powerpiadress", onPrefChange);



var button = ToggleButton({
  id: "PowerPi",
  label: "PowerPi",
  icon: {
   "16": "./Raspi_Colour_R-16.png",
   "32": "./Raspi_Colour_R-32.png",
   "64": "./Raspi_Colour_R-64.png"
 // "16": "./Sparky0815_PowerPi-16.png",
 // "32": "./Sparky0815_PowerPi-32.png",
 // "64": "./Sparky0815_PowerPi-64.png"
  
  
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url(ip),
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
  panel.show({
      position: button,
	  width: 330,
	  height: 570
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}


function onPrefChange(powerpiadress) {
	ip = require('sdk/simple-prefs').prefs['powerpiadress'];
	panel = panels.Panel({
		contentURL: self.data.url(ip),
		onHide: handleHide
	});
}