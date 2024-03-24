import * as fs from 'node:fs';
import jsonResourceVerify from './verify.js';
import { AWSRolePolicy } from '../types/aws.js';

const dataDir: string = './data/';
var jsonData: AWSRolePolicy = null;


fs.readdir(dataDir, (err, files) => {
    files.forEach(fileName => {
        if (fileName.endsWith('.json')) {
            fs.readFile(dataDir + fileName, (err2, file) => {
                jsonData = JSON.parse(file.toString());
                console.log(fileName + " = " + jsonResourceVerify(jsonData));
            })
        }
    });
});
