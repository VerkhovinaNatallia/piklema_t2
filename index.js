"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const url = 'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available';
https_1.default.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        const pets = JSON.parse(data);
        console.log(pets);
    });
}).on('error', (err) => {
    console.error('Error: ', err.message);
});
