var win = Ti.UI.createWindow({ backgroundColor: 'white' });

var lbl = Ti.UI.createLabel({
    text: L('enter_email')
});

win.add(lbl);
win.open();