function screenSize() {
  return document.documentElement.clientWidth;
}

function countCards() {
  const width = screenSize();
  if (width > 1280) {
    return 3;
  } return 2;
}

export { screenSize, countCards };