// globals.js
function dd(data) {
    console.log(data);
    process.exit();
}

global.dd = dd; 