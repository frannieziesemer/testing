## What is software testing?
Software testing is the process of evaluating and verifying that a software product or application does what it is supposed to do.


## Why write tests for your software?
The benefits of testing include preventing bugs, reducing development costs and improving performance.

- Protection against bugs
  Substantial research suggests that applying testing to an application can reduce production bug density by 40% — 80%.

- Confidence
  You can add changes, reuse the code or refactor the code which is fairly common. When tests exist you can be sure the functionality is not broken when changing the code behind it.

- Documentation
  Tests can show the flow and behaviour or code clearly, providing a nice form of documentation for someone new to the code

- Industry Standard



## What types of software testing are there?

- unit
- integration
- end-to-end
- contract
- api tests

### Testing pyramid
The testing pyramid is a framework that can be used to help form a strategy for developers to create quality software

```
         / end-to-end tests - checks the bulk of the code. eg. on whole user path login
        /                     -> use of the features
       /                    - can be slow and difficult to maintain
      / Integration tests - testing small portions of code
     /                    - eg. how two or more components operate together or how
    /                       a component works with an external service such as api
   /                      - they are generally slower
  / Unit tests - testing individual components or functionalities (providing a foundation)
 /             - they should be smaller and faster, therefore 'costing' less
/              - and should be the majority of the tests
```

### Unit tests

Unit testing is a type of testing which is found at the bottom of the software testing pyramid. It involves breaking the codebase down into smaller parts (or units) and testing those in isolation.

Depending on the type of programming language (or paradigm) these can be against anything you define as a unit, although the most common practice is against functions.



### Test driven development (TDD)
The practice of writing tests before the code. The goal is to make the failing The tests will fail, and the goal is to make the failing test pass. So the developer writes the bare minimum to make the test pass, when passing the developer can go back to refactor the code for readabiltity knowing the tests are present for safety.


### Jest
A testing framework for JavaScript https://jestjs.io/

```
describe('my function or component', () => {
  test('does the following', () => {

  });
});
```


### Testing evironments
To make testing easier and build in to your project, it will take some configuration. create-react-app comes with testing functionality built in.
Usually you would have to run something like the following scripts but now they are already installed and you can check in `package.json`

install jest + dependencies to allow the test envoronment to run
      `npm install --save-dev jest`
      `npm install -D @testing-library/jest-dom`
      `npm install -D @testing-library/react`
      `npm install -D @testing-library/user-event`



### React Testing Library
react-testing-library is a library which extends the jest framework to allow us to test react components and user interactions.

- [jest-dom](https://github.com/testing-library/jest-dom) The @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.
- [react testing library queries](https://testing-library.com/docs/queries/about) is how you access the elements to test