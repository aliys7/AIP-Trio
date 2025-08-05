function atilla(task) {
    task = task.toLowerCase();
    let maxChar = task[0]; // Initialize the maximum character
  
    for (let i = 1; i < task.length; i++) {
      if (task.charCodeAt(i) > maxChar.charCodeAt(0)) {
        maxChar = task[i];
      }
    }
  
    // Convert the maximum character to its "1-based" alphabetical index
    return Math.abs(maxChar.charCodeAt(0) - 96);
  }
  
  function calculatingFunction(n) {
    let result = Math.floor(n / 2) + (n % 2); // Integer division and odd/even check
    result *= (n % 2 === 1 ? -1 : 1); // Multiply by -1 if odd, else by 1
    return result;
  }
  
  function getPriority(word) {
    let atillaResult = atilla(word);
    let priority = calculatingFunction(atillaResult);
    return priority;
  }
  
  function borze(s) {
    let ans = "";
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '0') {
        ans += '.';
      } else if (s[i] === '2') {
        ans += '--';
      } else {
        ans += '-.';
      }
    }
  
    return ans;
  }

  function doNotBeDistracted(tasks) {
    const s = new Set();
    let c = tasks[0];
    s.add(c);
  
    let ans = true;
  
    for (let i = 1; i < tasks.length; i++) {
      const c2 = tasks[i];
      if (c === c2) continue;
  
      if (s.has(c2)) {
        ans = false;
        break;
      } else {
        s.add(c2);
        c = c2;
      }
    }
  
    return ans;
  }
  
  function sortPairsDescending(pairs) {
  // Sort based on the second element (int) in descending order
  return pairs.sort((a, b) => b[1] - a[1]);
}

function checkSequence(tasks) {
  let priorityPairs = [];
  
  for(let i = 0; i < tasks.length; i++) {
    priorityPairs[i] = [tasks[i], getPriority(tasks[i])];
  }
  
  sortedPrioirityPairs = sortPairsDescending(priorityPairs); // sorted
  
  let result = true;
  
  // Check priority sequence
  for(let i = 0; i < sortedPrioirityPairs.length; i++) {
    if(tasks[i] != sortedPrioirityPairs[i][0]) {
      result = false;
      break;
    }
  }
  
  // Check if returned to a previously visited task
  if(result)
    result = doNotBeDistracted(tasks);
    
  return result;
  
  
  
}
  
  // Example usage
  function main() {
    let task1 = "OOP"
    let task2 = "Math"
    let task3 = "Physics"
  
    let pairs = [
      [task1, getPriority(task1)],
      [task2, getPriority(task2)],
      [task3, getPriority(task3)],
      ]
      
      console.log("Pairs before sorting them:");
    console.log(pairs);
    
    let sorted_pairs = sortPairsDescending(pairs);
     console.log("Pairs after sorting them:");
    console.log(sorted_pairs);
    
    
    
    let password = "012012";
    let ciphertext = borze(password);
  
    console.log("Password " + password + " becomes: " + ciphertext);


    const n = 6; // Length of string
  const tasksList1 = ["OOP", "Math", "OOP", "Physics"]; // Input list
  const tasksList2 = ["OOP", "Math", "Physics"]; // Input list
  
  const tasksList3 = ["Math", "OOP", "Physics"]; // Input list
  
  console.log(tasksList1);
  console.log(checkSequence(tasksList1)); // Output: false

  console.log(tasksList2);
  console.log(checkSequence(tasksList2)); // Output: false
  
  console.log(tasksList3);
  console.log(checkSequence(tasksList3)); // Output: true

}


  
  
  main();
  