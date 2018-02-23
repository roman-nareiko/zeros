module.exports = function zeros(number) {
  let fives = 0;

  function count_fives(number){
    let count = 0;

    while(number % 5 === 0){
      count++;
      number /= 5;
    }

    return count;
  }

  for(let i = 5; i <= number; i += 5) {
    fives += count_fives(i);
  }

  return fives;
}
