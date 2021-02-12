const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 3500) + 500;
  setTimeout(() => {
    if (delay <= 3000) {
      success(`Here's your data from ${url}`);
    } else {
      failure(`OOPS, something went wrong :(((`);
    }
  }, delay);
};

console.log(`Hello there.`);

fakeRequestCallback(
  "book.com/page1",
  (response) => {
    console.log(`It worked~~~`);
    console.log(response);
    fakeRequestCallback(
      "book.com/page2",
      (response) => {
        console.log(`It worked 2nd time~~~`);
        console.log(response);fakeRequestCallback(
            "book.com/page1",
            (response) => {
              console.log(`It worked 3rd time~~~`);
              console.log(response);
            },
            (err) => {
              console.log(`Error on 3rd request: ${err}`);
            }
          );
      },
      (err) => {
        console.log(`Error on 2nd request: ${err}`);
      }
    );
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);
