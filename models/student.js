const { query } = require('express');
const db = require('../config/config');

const User = {};

Student.create = (student, result)=>{
    query = `
        INSERT INTO 
        student(
            last_name,
            middle_name, 
            first_name,
            gender
        )
        VALUES(
        ?,?,?,?
        )
    `;

    db.query(
        query,
        [
            student.last_name,
            student.middle_name,
            student.first_name, 
            student.gender
        ]
    );
}