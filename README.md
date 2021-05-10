## Simple task manager with session handling

A simple task manager with authentication and gracefully session timeout handling, made with NextJS 10, ReactJs 17, hooks, Context API, NextAuth, react-bootstrap, and jest + enzyme.

See it running live in Heroku: https://jmd-ma-task-manager.herokuapp.com/
## How to run

npm install

npm run dev

## Note for npm v7 users
Enzyme's dependencies have not yet been updated to declare React 17 in peerDependencies. You need to add --legacy-peer-deps to the install command for it to work correctly.

## How to test

npm run test

## Git workflow

Here you can find explained the flow followed in this repo:
https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow

## TO-DO

- Add more tests
- Move some hardcodes to env variables