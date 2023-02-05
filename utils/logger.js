function getStack() {
    if (process.env.PRINT_STACK_DETAIL.toUpperCase() === 'TRUE') {
        console.log(new Error().stack.split('\n')[3]);
    }
}

const printGeneral = (message) => {
    console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' [GENE] ' + '\x1b[34m%s\x1b[0m', message)
    getStack();
}

const printInfo = (message) => {
    console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' [INFO] ' + '\x1b[36m%s\x1b[0m', message)
    getStack();
}

const printTrace = (message) => {
    console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' [TRAC] ' + '\x1b[37m%s\x1b[0m', message)
    getStack();
}

const printDebug = (message) => {
    if (process.env.PRINT_DEBUG.toUpperCase() === 'TRUE') {
        console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' [DEBG] ' + '\x1b[32m%s\x1b[0m', message)
    }
    getStack();
}

const printWarning = (message) => {
    console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' [WARN] ' + '\x1b[35m%s\x1b[0m', message)
    getStack();
}

const printError = (message) => {
    console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' [ERRO] ' + '\x1b[31m%s\x1b[0m', message)
    getStack();
}

const printFatal = (message) => {
    console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' [FATL] ' + '\x1b[5m%s\x1b[0m', message)
    getStack();
}

const Logger = {
    printGeneral, printInfo, printTrace, printDebug, printWarning, printError, printFatal
};

export default Logger;