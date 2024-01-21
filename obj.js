 person  = {
    firstName : "Bohdan",
    lastName : "Trokachevskyi",
    comments : "" 
}

  engineer = {
    expirience : 5,
    company : 'test',
    __proto__ : person
 }



 QA_engineer  = {
    test5 : 'smth5',
    test6: 'smth6',
__proto__ : engineer

}


console.log(Object.values(person),Object.values(engineer),Object.values(QA_engineer));

/* person  = new Object()  = {
    firstName : "Bohdan",
    lastName : "Trokachevskyi",
    comments : "" 
}

  engineer =  new Object() ={
    expirience : 5,
    company : 'test',
    __proto__ : person
 }



 QA_engineer  =  new Object() = {
    test5 : 'smth5',
    test6: 'smth6',
__proto__ : engineer

} */
