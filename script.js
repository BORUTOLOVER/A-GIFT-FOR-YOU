function unlockPhone() {
  const input = document.getElementById("unlock-input").value.trim();
  if (input.toLowerCase() === "4 june") {
    document.getElementById("lock-screen").classList.add("hidden");
    document.getElementById("home-screen").classList.remove("hidden");
  } else {
    alert("Wrong password!");
  }
}

function openApp(appId) {
  // Hide home screen
  document.getElementById("home-screen").classList.add("hidden");

  // Show selected app
  const app = document.getElementById(appId);
  app.classList.remove("hidden");

  // Double-tap to close
  let lastTapTime = 0;
  app.onclick = function () {
    const currentTime = new Date().getTime();
    const tapGap = currentTime - lastTapTime;

    if (tapGap < 500) { // double tap within 500ms
      app.classList.add("hidden");
      document.getElementById("home-screen").classList.remove("hidden");
    }

    lastTapTime = currentTime;
  };
}