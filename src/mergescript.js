#!/usr/bin/env osascript -l JavaScript

var labels    = Application("Pages").documents[0];
var addresses = Application("Numbers").documents[0].sheets[0].tables[0];

for (let i = 1; i < addresses.rows.length; i ++) {
    // Pull fields from Numbers sheet
    var toField = addresses.rows[i].cells[0].value().toString(); 
    var street1 = addresses.rows[i].cells[1].value().toString();
    var street2 = addresses.rows[i].cells[2].value()
    var city    = addresses.rows[i].cells[3].value().toString();
    var state   = addresses.rows[i].cells[4].value().toString();
    var zip     = addresses.rows[i].cells[5].value().toString();

    // compose the full label, inserting Street 2 if needed
    var label = "";
    if (!street2) {
        label =`${toField}
${street1}
${city}, ${state} ${zip}`;
    }else{
        label =`${toField}
${street1}, ${street2}
${city}, ${state} ${zip}`;
    }

    // console.log(label);
    // console.log("\n")

    // full label set on the Pages object
    labels.textItems[i].objectText.set(label)
}
