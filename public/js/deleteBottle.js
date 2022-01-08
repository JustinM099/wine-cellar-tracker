const deleteFunction = async (e) => {
    e.preventDefault()

    const id = document.querySelector('#bottle-id').value
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
    console.log(res)
    if (res.ok) {
        console.log('THE RES IS OK')
        document.location.replace('/')
    } else {
        console.log(res.status)
        alert(`I'm sorry, a problem occurred.`)
    }
}

document.querySelector('#delete-bottle').addEventListener('click', deleteFunction)