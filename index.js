
/// init

exports.init = init

function init(cb) {
  /// We could initialize here if we wanted to
  process.nextTick(cb);
}


// exports.env = ...

/// prepare

exports.prepare = prepare;

function prepare(build, stage) {
  stage.command('npm', ['install']);
  stage.end();
}

/// test

exports.test = test;

function test(build, stage) {
  stage.command('npm', ['test']);
  stage.end();
}

// exports.analyze = ...

// exports.deploy = ...

// exports.cleanup = ...