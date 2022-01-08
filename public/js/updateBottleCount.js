const updateBottleHandler = async (stock, id) => {
  try {
    if (stock > -1) {
      await fetch(`/api/bottle/count/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ stock }),
        headers: { 'Content-Type': 'application/json' },
      });
      document.getElementById(id).innerHTML = `${stock}`;
      let targetArray = document.querySelectorAll(`[data-id='${id}']`);
      targetArray.forEach((el) => {
        el.setAttribute('data-stock', stock);
      });
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
