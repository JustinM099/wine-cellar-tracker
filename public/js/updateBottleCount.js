const updateBottleHandler = async (stock, id) => {
  try {
    console.log('stock', stock, 'id', id);

    if (stock) {
      console.log('about to fetch', stock, 'for bottle id', id);
      const response = await fetch(`/api/bottle/count/:${id}`, {
        method: 'PUT',
        body: JSON.stringify({ stock }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('response', response);
    }
  } catch (err) {
    console.log(err);
  }
};

const addBottleButtons = document.querySelectorAll('.bottle-add');
addBottleButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let newStockCount = parseInt(e.target.getAttribute('data-stock')) + 1;
    updateBottleHandler(newStockCount, e.target.getAttribute('data-id'));
  });
});

const deleteBottleButtons = document.querySelectorAll('.bottle-delete');
deleteBottleButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let newStockCount = e.target.getAttribute('data-stock') - 1;
    updateBottleHandler(newStockCount, e.target.getAttribute('data-id'));
  });
});
