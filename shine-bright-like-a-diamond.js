const num = 10;

for (let i = 0; i < num - 1; i++) {
  let temp = '';

  for (let j = num - 1; j > i; j--) {
    if (j == i + 1) {
      temp += ' $';
    } else {
      temp += ' ';
    }
  }

  for (let k = 0; k < i; k++) {
    if (k == i - 1) {
      temp += ' $';
    } else {
      temp += '  ';
    }
  }
  
  console.log(temp);
}

for (let i = 0; i < num; i++) {
  let temp = '';

  for (let j = 0; j < i; j++) {
    temp += ' ';
  }

  for (let k = num; k > i; k--) {
    if (k == num) {
      temp += '$';
    } else {
      temp += ' ';
    }
  }

  for (let l = num - 1; l > i; l--) {
    if (l == i + 1) {
      temp += '$';
    } else {
      temp += ' ';
    }
  }

  console.log(temp);
}

