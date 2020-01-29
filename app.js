const userTable = document.querySelector('#users')
const pageBar = document.querySelector('#pageBar')

fetch('https://acme-users-api-rev.herokuapp.com/api/users')
    .then( response => response.json())
    .then( result => {
        renderUsers(result.users)
        pager(result.count)
    })

const renderUsers = (users) => {
    const header = `      
    <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Title</th>
    </tr>
    `
    const html = users.map( user => {
        return `
        <tr> 
        <td> ${user.firstName} </td> 
        <td> ${user.lastName} </td> 
        <td> ${user.email} </td> 
        <td> ${user.title} </td> 
        </tr>

        `
    }).join('')

    userTable.innerHTML = `${header}${html}`
}

const pager = (count) => {
    pages = count / 50
    let pagesArray = []
    for (let i = 1; i < pages; i++) {
        pagesArray.push(i)
    }
    console.log(pagesArray)

    const html = pagesArray.map( page => {
        return `
        <a href='${page}'>${page}</a>`
    } )
    pageBar.innerHTML = html
}
