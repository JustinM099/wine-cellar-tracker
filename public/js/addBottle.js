const init = () => console.log('Add Bottle JS linked!')

const newBottle = async (e) => {
    e.preventDefault();
    console.log('Create Function Started')

    const producer_name = document.querySelector('#producer').value
    const wine_name = document.querySelector('#wine-name').value
    const vintage = document.querySelector('#vintage').value
    const region = document.querySelector('#region').value
    const wine_type = document.querySelector('#wine-type').value //this isnt working
    const category_id = document.querySelector('#variety').value //this isnt going to work
    const reviews = document.querySelector('#reviews').value
    const tasting_notes = document.querySelector('#tasting-notes').value
    const stock = document.querySelector('#stock').value
    const cellar_location = document.querySelector('#cellar-location').value


    if (producer_name && wine_type && category_id && stock) {
        const response = await fetch(`/api/bottle`, {
            method: 'POST',
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
                'Content-Type': 'application/json',
            },
        })
        console.log('Response', response)
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(`I'm sorry, we were unable to create your bottle. Please try again.`);
        }
    } else {
        console.log('Houston, we have a problem.', 
        'producer name:', producer_name,
        'wine_type:', wine_type,
        'category_id', category_id,
        'stock', stock)
    }
}
document.querySelector('#bottle-button').addEventListener('click', newBottle)
init()