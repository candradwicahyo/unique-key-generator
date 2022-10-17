
window.addEventListener('DOMContentLoaded', () => {
  
  const input = document.querySelector('.input');
  
  function uniqueKeyGenerator() {
    // converse from number to string
    const result = Math.random().toString(36);
    input.value = result.substring(2, result.length);
  }
  
  uniqueKeyGenerator();
  
  // gwnerate new unique key
  const generate = document.querySelector('.generate');
  generate.addEventListener('click', uniqueKeyGenerator);
  
  // copy to clipboard
  const copy = document.querySelector('.copy');
  copy.addEventListener('click', () => {
    input.select();
    document.execCommand("copy");
    alert('copied successfully!');
  });
  
});