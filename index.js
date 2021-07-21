// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function outer(greeting, msg="It's a fine day to learn") { // 2
  const innerFunction =  function(name, lang="Python") { // 3
    return `${greeting}, ${name}! ${msg} ${lang}`; // 4
  }
  return innerFunction("student", "JavaScript"); // 5
}


function outer(greeting, msg="It's a fine day to learn") {
  const innerFunction = function(name, lang="Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  }
  return innerFunction;
}

function wrapAdjective(flair = "*"){
  const innerFunction = function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  }
  return innerFunction;
}

console.log(wrapAdjective('&')("cool"))