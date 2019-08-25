// eslint-disable-next-line func-style
function printItems(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  });
}

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);