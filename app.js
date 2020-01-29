const userTable = document.querySelector('#users')
const pageBar = document.querySelector('#pageBar')

const fetchData = (id) => {
    fetch(`https://acme-users-api-rev.herokuapp.com/api/users/${id}`)
    .then( response => response.json())
    .then( result => {
        renderUsers(result.users);
        renderPager(result.count)
    })
}

let id = window.location.hash.slice(1);

// when first loading page, do this
// if we are reaching the base page, load the first set of employees
if (id) {
    fetchData(id);
} else {
    fetchData(0);
}

// when the hash changes, do this
window.addEventListener('hashchange', () => {
    id = window.location.hash.slice(1);
    fetchData(id);
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

const renderPager = (count) => {
    pages = count / 50
    const pagesArray = []
    for (let i = 0; i < pages; i++) {
        pagesArray.push(i)
    }

    const html = pagesArray.map( page => {
        return `
        <a href='#${page}'>${page+1}</a>`
    } ).join('')
    pageBar.innerHTML = html
}
