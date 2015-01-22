function Stack() {
	// Array to hold string of characters
  	this.arr = [];
	// Function to push character onto stack
	this.push = function push(x) {
		this.arr.push(x);
	}
	// Function to pop character from stack
	this.pop = function() {
		return this.arr.pop();
	}
}

// Instantiate new Stack objects s and t, respectively
var s = new Stack();
var t = new Stack();
// Prompt user to enter a word
word = prompt("Enter a word: ");

// Set boolean flag to true
var isPalindrome = true;

/* 
Loop through string to push characters onto stack
characters are pushed onto s stack front to back
characters are pushed onto t stack back to front
*/
for(var i = 0; i < word.length; i++) {
	s.push(word[i]);
	t.push(word[word.length - 1 - i]);
}


// Loop through stacks to compare characters from both stacks
for (var i = 0; i < word.length && isPalindrome; i++)
	if(s.pop() != t.pop())
		isPalindrome = false;	// If characters do not match, set flag to false

// Variable to hold results
var result;
isPalindrome ? result = "Yes, it is " : result = "No, it is a not ";
alert(result + " a palindrome");