const deleteFunction = async (e) => {
    e.preventDefault()

    const id = document.querySelector('#bottle-id').value
    // const route = window.location.pathname
    // const routeString = route.toString()
    // const idString = routeString.slice(-1)
    // const id = parseInt(idString)
    // console.log(route)
    console.log(id)


    const res = await fetch(`/api/bottle/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        document.location.replace('/')
    } else {
        console.log(res.status)
        alert(`I'm sorry, a problem occurred.`)
    }
}

document.querySelector('#delete-bottle').addEventListener('click', deleteFunction) //might need to change button name   