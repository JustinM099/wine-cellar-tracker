const updateBottleHandler = async (stock, bottle_id) => {
  console.log('stock', stock, 'bottle_id', bottle_id);
  const id = bottle_id;
  if (stock) {
    const response = await fetch(`/api/bottle/count/:${id}`, {
      method: 'PUT',
      body: JSON.stringify({ stock }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('response', response);
  }
};

const addBottleButtons = document.querySelectorAll('.bottle-add');
addBottleButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    updateBottleHandler(+1, e.target.getAttribute('data-id'));
  });
});

const deleteBottleButtons = document.querySelectorAll('.bottle-delete');
deleteBottleButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    updateBottleHandler(-1, e.target.getAttribute('data-id'));
  });
});
