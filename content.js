// クリップボード内の改行文字を削除する関数
function removeLineBreaks() {
  navigator.clipboard.readText()
  .then(text => {
    const withoutNewLine = text.replace(/[\r\n]+/g, "");
    navigator.clipboard.writeText(withoutNewLine);
  })
  .catch(err => {
    console.error('クリップボードからのテキスト読み取りに失敗しました。', err);
  });
}

// ページ内のボタンを作成する関数
function createButton() {
  let button = document.createElement('button');
  button.id="delete-linefeed-button";
  button.innerText = '改行を削除';
  button.addEventListener('click', removeLineBreaks);
  const targetElement = document.getElementById('tabTranslateText');
  targetElement.parentNode.insertBefore(button, targetElement.nextSibling);
}

// ページが読み込まれたときにボタンを作成する
window.addEventListener('load', createButton);
