import React from 'react'
import Persons from './Persons';

function NameList() {
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
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
