/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse-generator").innerHTML = `"${excuseGenerator(sentenceStructure)}"`;
};

let whoDunnit = [
  "My brother-in-law's second cousin's friend from Wichita",
  "Frankie, that guy who stole my lunch money in 3rd grade that one time,",
  "My dentist's dentist",
  "My computer, who believe it or not is actually sentient,"
];

let actionThatHappened = [
  "eviscerated",
  "demolished",
  "went back in time and erased from existence",
  "lit on fire",
  "ate for brunch"
];

let thingIWasSupposedToAttendTo = [
  "the code I needed to complete this project",
  "the rent money, and I got kicked out of my house",
  "the steering wheel of my car",
  "my internet router"
];

let whenOrWhereItHappened = [
  "while I was on a trip.",
  "before I could give you that thing you wanted.",
  "while I was interrupted by my neighbor, who was trying to show me his new favorite magic trick.",
  "when I went to the store to buy a tub of vanilla bean ice cream."
];

let sentenceStructure = [whoDunnit, actionThatHappened, thingIWasSupposedToAttendTo, whenOrWhereItHappened];

let excuseGenerator = (array) => {
  const sentence = [];
  for (let i of array) {
    let rng = Math.floor(Math.random() * array.length);
    console.log(rng);
    sentence.push(i[rng]);
  }
  return sentence.join(' ');
}