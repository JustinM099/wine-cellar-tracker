const updateBottleHandler = async (num, bottle_id) => {
  alert(num, bottle_id);
  const id = bottle_id;
  if (num) {
    const response = await fetch(`/api/bottle/count/:${id}`, {
      method: 'PUT',
      body: JSON.stringify({ num }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('response', response);
  }
};

const addBottleButtons = document.querySelectorAll('.bottle-add');
addBottleButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    updateBottleHandler(e.target.id, e);
  });
});

const deleteBottleButtons = document.querySelectorAll('.bottle-delete');
deleteBottleButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    updateBottleHandler(-1, e);
  });
});
