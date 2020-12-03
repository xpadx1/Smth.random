const random = (min, max) => {
    let i = 0;
    let sumPeriod = 0;
    let amount = 10;
    let y;
    let z;
      while(i<=amount){
         y = (Math.random() * (max - min) + min)
        console.log(y);
         z = y/5
        console.log ('grafa 2: ' + z);
        i++
        sumPeriod = z + sumPeriod
      }
      
      
      let period = sumPeriod/amount
      console.log('');
      console.log( 'suma: ' + sumPeriod);
      console.log('{T}: ' + period);
      console.log('');
      
     
      
      
  }
  
  let x = random(15.70, 16.23);
  console.log(x);