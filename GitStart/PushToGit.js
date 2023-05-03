let n=121;
let sum=0;
let i=n;
 while(n>0)
 {
     let x=n%10;
     sum= sum+( x*x*x);
     n=Math.floor(n/10);
 }
 if(sum==i)
  console.log('true');
 else
  console.log('false');
  