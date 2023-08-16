const boldBtnEl = document.getElementById('bold'),
  italicBtnEl = document.getElementById('italic'),
  underlineBtnEl = document.getElementById('underline'),
  upperLowerBtnEl = document.getElementById('upper-lower');

const textAreaEl = document.getElementById('textarea');

let isBold = false,
  isItalic = false,
  isUnderline = false,
  upperLower = false;

boldBtnEl.addEventListener('click', () => {
  isBold = !isBold;
  if (isBold) {
    textAreaEl.style.fontWeight = 'bold';
  } else {
    textAreaEl.style.fontWeight = 'normal';
  }
});

italicBtnEl.addEventListener('click', () => {
  isItalic = !isItalic;
  if (isItalic) {
    textAreaEl.style.fontStyle = 'italic';
  } else {
    textAreaEl.style.fontStyle = 'normal';
  }
});

underlineBtnEl.addEventListener('click', () => {
  isUnderline = !isUnderline;
  if (isUnderline) {
    textAreaEl.style.textDecoration = 'underline';
  } else {
    textAreaEl.style.textDecoration = 'none';
  }
});

upperLowerBtnEl.addEventListener('click', () => {
  upperLower = !upperLower;
  if (upperLower) {
    textAreaEl.style.textTransform = 'uppercase';
  } else {
    textAreaEl.style.textTransform = 'lowercase';
  }
});

// --------------

const centerBtnEl = document.getElementById('center'),
  leftBtnEl = document.getElementById('left'),
  rightBtnEl = document.getElementById('right'),
  justifyBtnEl = document.getElementById('justify');

centerBtnEl.addEventListener('click', () => {
  textAreaEl.style.textAlign = 'center';
});
leftBtnEl.addEventListener('click', () => {
  textAreaEl.style.textAlign = 'left';
});
rightBtnEl.addEventListener('click', () => {
  textAreaEl.style.textAlign = 'right';
});
justifyBtnEl.addEventListener('click', () => {
  textAreaEl.style.textAlign = 'justify';
});

// =============================

const fontSizeInputEl = document.getElementById('font-size');

function changeFont() {
  let fontValue = fontSizeInputEl.value;

  textAreaEl.style.fontSize = fontValue + 'px';
  fontValue.value = '';
}

const colorInputEl = document.getElementById('color');

function changeColor() {
  let colorValue = colorInputEl.value;
  textAreaEl.style.color = colorValue;
}
