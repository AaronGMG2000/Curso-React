import heroes from '../data/heroes';

const getHereobyID = (id)=> heroes.find(element=>element.id===id);

console.log(getHereobyID(2));

const getHeroesByOwner = (owner)=> heroes.filter(element=>element.owner===owner);

console.log(getHeroesByOwner('Marvel'));

