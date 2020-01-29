const userTable = document.querySelector('#users')

fetch('https://acme-users-api-rev.herokuapp.com/api/users')
    .then( response => response.json())
    .then( result => renderUsers(result.users))


const renderUsers = (users) => {
    const html = users.map( user => {
        return `
        <tr> <td> ${user.fullName} </td> </tr>`
    }).join('')

    userTable.innerHTML = html
}
