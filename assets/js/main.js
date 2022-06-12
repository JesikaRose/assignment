document.querySelector('[data-todo-btn]').onclick = () => {
	const value = document.querySelector('[data-todo-input]').value;
	const ul = document.querySelector('[data-todos]');
	const li = document.createElement('li');
	li.textContent = value
	ul.appendChild(li)
	btn.onclick = (event) => {
    const li = event.target.parentNode
  }
}
