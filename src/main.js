import Promise from 'bluebird';
import sdk from './sdk';

Promise.config({
  cancellation: true,
});

console.log('sdkPromise', sdk);
