import {test,expect} from '@playwright/test';
import exp from 'constants';

test('get all users', async ({request}) => {
const users = await request.get('https://reqres.in/api/users?page=2');
expect(users.status()).toBe(200);
const userResponse = await users.json();
expect(userResponse['page']).toBe(2);

});
test('user update', async({request}) => {
    const userUpdate = await request.put('https://reqres.in/api/users/2', {   

    "name": "Bohdan",
    "job": "QA"
}

    )
const responseUserUpdate = await userUpdate.json();
expect(userUpdate.status()).toBe(200);
expect(responseUserUpdate['updatedAt']).toBeDefined();

});
test('user delete', async({request}) => {
    const userDelete = await request.delete('https://reqres.in/api/users/2')
expect(userDelete.status()).toBe(204);
});


test('user patch', async({request}) => {
    const userPatch= await request.put('https://reqres.in/api/users/2', {   

    "name": "Bohdan",
    "job": "QA"
}

    )
    
const responseUserPatch = await userPatch.json();
console.log(responseUserPatch);
expect(userPatch.status()).toBe(200);
expect(responseUserPatch['updatedAt']).toBeDefined();

});


