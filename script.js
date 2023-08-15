let arr = ["What did one hat say to the other?You wait here — I'll go on ahead!","Why don't the circus lions eat the clowns?Because they taste funny!","What did the pirate say when he turned 80?Aye matey.","Why did the chicken cross the playground?To get to the other slide!","Why did the actor fall through the floorboards?They were going through a stage!","Why did a scarecrow win a Nobel prize?He was outstanding in his field!","Why are peppers the best at archery?Because they habanero!","What did the duck say after she bought chapstick?","Put it on my bill!","Why did an old man fall in a well?Because he couldn't see that well!","What do you call a fake noodle?An impasta!","What did the three-legged dog say when he walked into a saloon?“I'm looking for the man who shot my paw!”","How do you tell the difference between a bull and a cow?It is either one or the udder!","What's red and smells like blue paint?Red paint!","What's the difference between a hippo and a Zippo?One is very heavy, the other is a little lighter!"];

let len = arr.length;
let ran = Math.floor(Math.random() * len);
let joke = arr[ran];
let questionIndex = joke.indexOf("?");
let part1 = joke.slice(0, questionIndex + 1);
let part2 = joke.slice(questionIndex + 1);

document.querySelector(".box h2").textContent = part1;
document.querySelector(".box h3").textContent = part2;



