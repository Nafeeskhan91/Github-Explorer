// script.js

function searchRepositories() {
    const username = document.getElementById('searchInput').value;
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            displayRepositories(data);
        })
        .catch(error => console.error('Error fetching repositories:', error));
}

function displayRepositories(repositories) {
    const repositoriesElement = document.getElementById('repositories');
    repositoriesElement.innerHTML = '';
    repositories.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.classList.add('repo');
        repoElement.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available'}</p>
            <p>Language: ${repo.language || 'N/A'}</p>
            <p>Stars: ${repo.stargazers_count}</p>
            <p>Forks: ${repo.forks_count}</p>
        `;
        repositoriesElement.appendChild(repoElement);
    });
}
