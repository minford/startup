function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    const passwordEl = document.querySelector("#password");
    localStorage.setItem("passWord", passwordEl.value);
    window.location.href = "recipes.html";
  }

  function displayQuote(data) {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#quote');
  
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('quote');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');
  
        quoteEl.textContent = data.content;
        authorEl.textContent = data.author;
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
      });
  }
  
  displayQuote();