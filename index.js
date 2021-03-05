document.addEventListener("copy", (event) => {
  event.clipboardData.setData(
    "text/plain",
    `Hmmm this isn't right.`
  );
  event.preventDefault();
});

