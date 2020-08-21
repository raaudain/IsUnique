// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

function isUnique(string) {
  const chars = new Set();

  for (let c of string) {
    if (chars.has(c)) return false;
    else chars.add(c);
  }

  return true;
}

isUnique("ramon audain");