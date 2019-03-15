var helper = require('cogs-test-helper');

helper.run({
  'test/config.json': {
    'test/input.js': helper.getFileBuffer('test/output.js'),
    'test/error.js': Error
  }
});
