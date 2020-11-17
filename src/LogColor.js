const LogColor = (function () {
    return {
        green: function (title, message) {
            logger(title, message, 'green');
        },
        red: function (title, message) {
            logger(title, message, 'red');
        },
        blue: function (title, message) {
            logger(title, message, 'blue');
        },
        orange: function (title, message) {
            logger(title, message, 'orange');
        },
        pink: function (title, message) {
            logger(title, message, 'pink');
        },
    };
})();

function logger(title, message, color) {
    console.group("%c" + '>>> ' + title +' @ ' + new Date().toISOString(), "color: " + color +"; font-weight: bold");
    console.log(message);
    console.groupEnd();
}

export default LogColor; 
