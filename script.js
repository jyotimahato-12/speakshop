

function clickme() {
    const micBtn = document.getElementById("micro");
    micBtn.classList.add("listening");
    setTimeout(() => {
      micBtn.classList.remove("listening");
    }, 3000);
  }
  
  
function clickme() {
  const micBtn = document.getElementById("micro");
  micBtn.classList.add("listening");
  setTimeout(() => {
    micBtn.classList.remove("listening");
  }, 5000); // Match mic timeout
}

// 🎥 Virtual Try-On
async function enableTryOn(imageURL) {
  const video = document.getElementById("webcam");
  const canvas = document.getElementById("overlayCanvas");
  const ctx = canvas.getContext("2d");

  // Start webcam (invisible)
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;

  canvas.style.display = "block";

  const img = new Image();
  img.src = imageURL;

  img.onload = () => {
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(draw);
    }
    draw();
  };
}

// 💳 Purchase
function purchase() {
  document.body.innerHTML = "✅ Payment Successful";

  const message = new SpeechSynthesisUtterance("payment successful");
  message.lang = "en-US";
  message.rate = 1;
  message.pitch = 1;
  window.speechSynthesis.speak(message);
}

// 📦 Show Products
function showProducts(keyword) {
  const container = document.getElementById("productDisplay");
  document.getElementById("micro").style.display = "none";
  container.innerHTML = "";

  if (!Array.isArray(allProducts)) {
    container.innerHTML = `<p>⚠️ Product list not available.</p>`;
    container.style.display = "block";
    return;
  }

  const filtered = allProducts.filter((p) =>
    p.title.toLowerCase().includes(keyword.toLowerCase())
  );

  if (filtered.length === 0) {
    container.innerHTML = `<p>No results found for "${keyword}".</p>`;
    container.style.display = "block";
    return;
  }

  filtered.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p><strong>₹${(product.price * 83).toFixed(2)}</strong></p>
      <button onclick="purchase()">Purchase</button>
      <button onclick="enableTryOn('${product.image}')">Try On</button>
    `;
    container.appendChild(card);
  });

  container.style.display = "grid";
}

// 🎙️ Voice Recognition Logic
let isRecognizing = false;
let recognition;
let micTimeout;

window.onload = () => {
  const button = document.getElementById("micro");
  const result = document.getElementById("result");
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Your browser does not support speech recognition.");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.addEventListener("start", () => {
    isRecognizing = true;
    result.textContent = "🎤 Listening...";
    clickme();

    // Stop after 5 seconds if no speech
    micTimeout = setTimeout(() => {
      if (isRecognizing) recognition.stop();
    }, 5000);
  });

  recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript.trim();
    result.textContent = `🗣️ You said: "${transcript}"`;
    showProducts(transcript);

    recognition.stop(); // force stop after one command
  });

  recognition.addEventListener("end", () => {
    isRecognizing = false;
    clearTimeout(micTimeout);
  });

  recognition.addEventListener("error", (event) => {
    result.textContent = `⚠️ Error: ${event.error}`;
    isRecognizing = false;
    clearTimeout(micTimeout);
  });

  button.addEventListener("click", () => {
    if (!isRecognizing) {
      recognition.start();
    }
  });
};





    
      
    
    
    







  
  
