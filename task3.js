"use strict";
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
const sortData = (data) => {
    data.forEach(el => {
        console.log(`ID:${el.id},Email:${el.email}`);
    });
};
const getData = (url) => {
    return fetch(url);
};
getData(COMMENTS_URL).then(data => data.json()).then(json => sortData(json));
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */ 
