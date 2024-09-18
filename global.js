// globals.js
function dd(data, res) {
    console.log(data); // Log the data
    res.json({ debug: data }); // Return the data as JSON
    return; // Stop further execution
}

global.dd = dd; 