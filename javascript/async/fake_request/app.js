const getRandomDelay = (maxDelayDuration) => {
  return Math.floor(Math.random() * (maxDelayDuration + 500)) + 500;
};

const fakeRequestCallback = (url, success, failure) => {
  const delayLimit = 2000;
  const delay = getRandomDelay(delayLimit);
  setTimeout(() => {
    if (delay <= delayLimit) {
      success(`Here's your data from ${url}`);
    } else {
      failure(`OOPS, something went wrong :(((`);
    }
  }, delay);
};

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delayLimit = 2000;
    const delay = getRandomDelay(delayLimit);
    setTimeout(() => {
      if (delay <= delayLimit) {
        resolve(`Here's your data from ${url}`);
      } else {
        reject(`OOPS, something went wrong :(((`);
      }
    }, delay);
  });
};

console.log(`Hello there, waiting for responses...`);
/* 
fakeRequestCallback(
  "book.com/page1",
  (response) => {
    console.log(`It worked~~~`);
    console.log(response);
    fakeRequestCallback(
      "book.com/page2",
      (response) => {
        console.log(`It worked 2nd time~~~`);
        console.log(response);
        fakeRequestCallback(
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
 */

//  Promises make it easier to read code and maintain
// by using then and read function

/* fakeRequestPromise("random.com")
  .then((res) => {
    console.log(`It worked <3`);
    console.log(res);
    fakeRequestPromise("random.com/page1")
      .then((res) => {
        console.log(`It worked 2nd time <3`);
        console.log(res);
        fakeRequestPromise("random.com/page2")
          .then((res) => {
            console.log(`It worked 3rd time <3`);
            console.log(res);
          })
          .catch((err) => {
            console.log(`Error on 3rd request: ${err}`);
          });
      })
      .catch((err) => {
        console.log(`Error on 2nd request: ${err}`);
      });
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
 */

// The magic is below
// Using only 1 catch to catch all errors
fakeRequestPromise("random.com")
  .then((res) => {
    console.log(`It worked <3`);
    console.log(res);
    return fakeRequestPromise("random.com/page1")
  })
  .then((res) => {
    console.log(`It worked 2nd time <3`);
    console.log(res);
    return fakeRequestPromise("random.com/page2")
  })
  .then((res) => {
    console.log(`It worked 3rd time <3`);
    console.log(res);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
