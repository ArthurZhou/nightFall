const getTime = () => {
    var stamp= new Date().getTime();
    var time = new Date(stamp).toISOString().replace(/T/, ' ').replace(/\..+/, '').substring(0, 19)
    return time;
}

function debug(text) {
    console.debug(`[UTC ${getTime()}] (DEBUG) > ${text}`)
}

function info(text) {
    console.info(`[UTC ${getTime()}] (INFO ) > ${text}`)
}

function warn(text) {
    console.warn(`[UTC ${getTime()}] (WARN ) > ${text}`)
}

function error(text) {
    console.error(`[UTC ${getTime()}] (ERROR) > ${text}`)
}
