/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/

function generateHashtag (str) {
    let spaces = str.split(' ').length;
    console.log(spaces);
    if(str.split(' ').join('').length >= 140)
      return false;
    else if(str.split(' ').join('').length <= 0)
      return false;
    else {
        return '#' + str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return word.toUpperCase();
      }).replace(/\s+/g, '');
    }
  }

  console.log(generateHashtag('generate me a hashtag'));