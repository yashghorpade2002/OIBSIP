const form = document.querySelector('form');
const input = document.getElementById('new-task');
const ul = document.getElementById('task-list');

// add new task to the list
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = input.value.trim();

  if (task) {
    const li = document.createElement('li');
    const taskText = document.createTextNode(task);
    const deleteBtn = document.createElement('button');
    const deleteBtnText = document.createTextNode('Delete');
    const completeBtn = document.createElement('button');
    const completeBtnText = document.createTextNode('Complete');

    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.classList.add('delete');
    completeBtn.appendChild(completeBtnText);
    completeBtn.classList.add('complete');
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);
    ul.appendChild(li);

    input.value = '';
  }
});

// delete task from the list
ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    const li = e.target.parentElement;
    ul.removeChild(li);
  }
});

// mark task as complete
ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('complete')) {
    const li = e.target.parentElement;
    li.classList.toggle('completed');
  }
});
