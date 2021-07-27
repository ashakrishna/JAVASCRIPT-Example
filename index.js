const appEl = document.querySelector('#app');

async function getUsers() {
  const res = await fetch('https://api.github.com/users');
  const users = await res.json();
  renderUsers(users);
}

function renderUsers(users) {
  const liStr = users
    .map(
      u => `<li>
  <span>${u.login}</span>
  <img height="100" src="${u.avatar_url}" />
</li>`
    )
    .join('');
  appEl.innerHTML = `
  <ul>
    ${liStr}
  </ul>
`;
}

//getUsers();
