// remove icon
document.querySelectorAll('img.alignnone').forEach(function (e) {
  if (e.width === 200 && e.height === 200 && e.alt) {
    e.parentNode.removeChild(e);
  }
});
