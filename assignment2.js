const OS = require('os');
try {

    console.log("OS's CPU architecture is : " + OS.arch());
    console.log("Availaible free memory of the system is : " + OS.freemem());
    console.log("Total memory of the system is : " + OS.totalmem());
    console.log("OS's Platform is : " + OS.type());
    console.log("Information about the current user : " + OS.userInfo());
} catch (err) {
    console.log("Error occurred : " + err);
}