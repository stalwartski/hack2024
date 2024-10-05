function removeVowels(name) {
  const vowels = /[aeiou]/g;
  const result = name.toLowerCase().replace(vowels, '');
  console.log(result);
}

removeVowels("Your Name");