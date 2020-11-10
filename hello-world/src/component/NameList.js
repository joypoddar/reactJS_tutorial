import React from 'react'
import Persons from './Persons';

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Vue'
        },
        {
            id: 3,
            name: 'Diana',
            age: 22,
            skill: 'Fullstack'
        }
    ];
    const personList = persons.map((person) => <Persons key = {person.id} person = {person}/> );
    const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2> );
    return (
        <div>
            {/* personList */}
            {nameList}
        </div>
    )
}

export default NameList
