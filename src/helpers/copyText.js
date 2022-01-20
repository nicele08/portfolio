export default node => {
  node.select();
  node.setSelectionRange(0, 99999);
  document.execCommand('copy');
};
