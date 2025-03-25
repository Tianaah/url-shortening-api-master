const urlInput = document.getElementById("url-input");
const errorMessagesEl = document.querySelector(".error-message");
const activateBtn = document.getElementById("activate-btn");
const linkHistoryEl = document.getElementById("links-history");

function getUrlInput() {
  return urlInput.value.trim().toLowerCase();
}

async function shortenUrl(urlLink) {
  const apiUrl = "https://cleanuri.com/api/v1/shorten";

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        url: urlLink,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      displayToLinkHistory(urlLink, data);
    } else {
      console.error(`Error shortening URL: ${res.statusText}`);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

function displayToLinkHistory(originalLink, urlData) {
  const linkItem = document.createElement("div");
  linkItem.classList.add("item");

  linkItem.innerHTML = `
    <p class="link">${originalLink}</p>
    <hr>
    <div class="short-link">
      <p>${urlData.result_url}</p>
      <button class="copy-link-btn">Copy</button>
    </div>
  `;

  linkHistoryEl.appendChild(linkItem);

  linkItem.querySelector(".copy-link-btn").addEventListener("click", (e) => {
    navigator.clipboard.writeText(urlData.result_url);
    e.target.textContent = "Copied!";
    e.target.style.backgroundColor = "var(--dark-violet)";

    setTimeout(() => {
      e.target.textContent = "Copy";
      e.target.style.backgroundColor = "var(--cyan)";
    }, 1500);
  });
}

activateBtn.addEventListener("click", () => {
  const userURL = getUrlInput();

  if (!userURL || !isValidUrl(userURL)) {
    errorMessagesEl.classList.add("error");
    urlInput.classList.add("error");
  } else {
    errorMessagesEl.classList.remove("error");
    urlInput.classList.remove("error");
    urlInput.value = "";
    linkHistoryEl.classList.add("active");
    shortenUrl(userURL);
  }
});
