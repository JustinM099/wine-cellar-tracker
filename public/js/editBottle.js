// variety, reviews, tasting-notes, stock, cellar-location
const editFunction = async (e) => {
    e.preventDefault()
    const id = document.querySelector('#bottle-id').value
    const producer_name = document.querySelector('#producer').value
    const wine_name = document.querySelector('#wine-name').value
    const vintage = document.querySelector('#vintage').value
    const region = document.querySelector('#region').value
    const wine_type = document.querySelector('#wine-type').value
    const category_id = document.querySelector('#variety').value //this isnt going to work
    const reviews = document.querySelector('#reviews').value
    const tasting_notes = document.querySelector('#tasting-notes').value
    const stock = document.querySelector('#stock').value
    const cellar_location = document.querySelector('#cellar-location').value
    const route = window.location.pathname
    console.log(route)
    console.log(id)

    const res = await fetch(`/api/bottle/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          producer_name,
          vintage,
          stock,
          region,
          wine_name,
          tasting_notes,
          reviews,
          wine_type,
          cellar_location,
          category_id, //this isnt going to work
        }),
        headers: {
            'Content-Type': 'application/json'
        }

    })

    if(res.ok){
        document.location.replace('/')

    }else{
        console.log("RES", res)
        alert(`I'm sorry, we were unable to complete your request.`)
    }
}
document.querySelector('#update-cellar').addEventListener('click', editFunction) //might need to change to button id. currently targets the form.
