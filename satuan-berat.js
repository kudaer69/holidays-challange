function convertWeight(summation, unitWeight) {
  let total = 0;
  const unit = ['ton', 'kwintal', ' ', 'kg', 'ons', 'dag', 'g', 'dg', 'cg', 'mg'];
  const splitter = summation.split('+');

  for (let i = 0; i < splitter.length; i++) {
    const weight = splitter[i].split(' ');
    let count = 0;
    let temp = 0;

    for (let k = 0; k < unit.length; k++) {
      if (unit[k] == unitWeight) {
        count = k
      }
      
      if (unit[k] == weight[1]) {
        temp = k
      }
    }

    if (count - temp > 0) {
      for (let j = 0; j < unit.length; j++) {
        if (weight[1] == unit[j]) {
          temp = j
        }
  
        if (unit[j] == unitWeight) {
          count = Math.pow(10, +(j - temp));
          temp = 0;
        }
      }
    } else {
      for (let j = unit.length; j > 0; j--) {
        if (weight[1] == unit[j]) {
          temp = j
        }
  
        if (unit[j] == unitWeight) {
          count = Math.pow(10, +(j - temp));
          temp = 0;
        }
      }
    }

    total += weight[0] * count;
  }
  
  const output = `${total} ${unitWeight}`;

  return output;
};

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg')) //1201 kg

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g

console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg')) //52038 kg

