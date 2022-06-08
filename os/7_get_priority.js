// Node.js program to demonstrate the
// os.getPriority() Method

// Require os module
const os = require('os');

// Accessing ps-list module to
// get process details
const psList = require('ps-list');

// Calling psList function defined
// in ps-list module
psList().then(data => {

    // Printing all the process information
    // from returned data
    console.log(data);

    // Iterating through each element
    // of the returned data
    data.forEach(function (element) {
        try {

            // Getting priority of selected process
            var process_priority = os.getPriority(element.pid);

            // Printing pid priority and process name
            console.log("pid:" + String(element.pid)
                + "\t priority:" + String(process_priority)
                + "\t name:" + String(element.name));
        } catch (err) {

            console.log(er)
            // There will be error like operation
            // not permitted, so omitting error to
            // get clean output printing error
            // generated from os.getPriority() function
            //console.log("pid:"+String(element.pid)+
            //"\t priority: error \t name:"
            //+String(element.name)); console.log(err);
        }
    });
});
