import b from './b.js'

if (module.hot) {
  module.hot.accept('./b.js', function() {
    console.log('Accepting the updated library module!');
    b.log();
  })
}
b.log();