import './sass/main.scss';
import './task-2';
import './task-3';

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${ms}`);
            reject('Uppsss');
        }, `${ms}`);
    })
}
const logger = time => console.log(`Resolved after ${time}ms`);
delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);