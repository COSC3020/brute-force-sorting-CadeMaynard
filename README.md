[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12432485&assignment_repo_type=AssignmentRepo)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered".

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Side Note

This is another exercise that continues to allude me but I feel it is only fair that I upload some of the work I put into it. I continuously ran into some very strange issues with this program, like splice repeatedly add copies of the same number, or my main issue, the function not actually editing the originaly array and instead changing a copy. I had a solution that worked but it was not changing the original array, and since you can't just reassign a reference item (for reasons I don't fully understand) the only way I could make that version work is if at the end of the function if it copied the individual items from the new array to the old one, but that felt like a cheap innefficient solution so I opted to try another way. Frankly, I wish I had used that cheap solution because it would have at least worked.

## Runtime

Though I cannot analyze the runtime of my own program, I can say what would happen if permutations were generated randomly: because there is no way we can generate random permutations without repetition (we could check for repitition but we could only do it after we had already generated the list) it is possible, though unlikely, that we would never get a sorted version of the list and the program would continue indefinitely. Worst case would be $\Theta(\infty)$
