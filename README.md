# AIP Trio

AIP Trio is a contest-inspired task-management system that integrates four CodeForces problems to provide secure login and automated task prioritization.

## 🔐 Login Phase

- **Borze (CF 32B)**: Encrypts/decrypts passwords composed of 0, 1, 2 using `.`, `-`, and `--`.  
  Link: https://vjudge.net/problem/CodeForces-32B

## 📋 Task Management Phase

1. **Atilla’s Favorite Problem (CF 1760B)**  
   Extracts the highest alphabetical character from a task’s name to determine its initial priority.  
   Link: https://vjudge.net/problem/CodeForces-1760B

2. **Calculating Function (CF 486A)**  
   Maps the output of Atilla’s problem to a numeric priority for sorting.  
   Link: https://vjudge.net/problem/CodeForces-486A

3. **Do Not Be Distracted (CF 1520A)**  
   Enforces that once you start a task, you must finish it before moving to another, and verifies the overall sequence.  
   Link: https://vjudge.net/problem/CodeForces-1520A

## 🚀 How It Works

1. **Login**: User enters a password; Borze logic validates and decodes it.  
2. **Create Tasks**: Enter task names; the system applies Atilla’s Favorite and Calculating Function to assign priorities.  
3. **Sort & Validate**: Tasks are listed from highest to lowest priority, and Do Not Be Distracted ensures no backtracking.

## 🔄 Integration Flow

The system creates a seamless pipeline where each problem’s output becomes the next problem’s input:
- Task names (e.g., "Clean Room") → Atilla's problem finds highest character ('R') → Character position (18) → Calculating Function computes f(18) = -1+2-3+4-...+18 = 9 → Final priority value used for sorting

## 🚀 How It Works

1. **Login**  
   User enters a password (must consist of only 1, 2, and/or 0); Borze logic validates and decodes it.  
2. **Create Tasks**  
   Enter task names; the system applies Atilla’s Favorite and Calculating Function to assign priorities.  
3. **Sort & Validate**  
   Tasks are listed from highest to lowest priority, and Do Not Be Distracted ensures no backtracking. If it violates the rule of Do Not Be Distracted, the system will show an error message telling the user that their sequence is not valid.


# For more details about the competition:
You can search on X for [#AIPTrio](https://x.com/hashtag/AIPTrio).


## Coding Team:
- Ali Assuleiteen
- Fatima Alabdulmohsen

## Organization Team:
- Nujud Alobaid
- Ali Assuleiteen
- Fatima Alabdulmohsen
- Zainab Alhadhari
- Khalid Alateeq
