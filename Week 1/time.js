function clearConsole() {
    console.clear();
  }
  function time() {
    console.log(new Date().getSeconds());
  }
  setInterval(() => {time(); clearConsole();}, 1000);
  
//   () => {time(); clearConsole();}