
/// init

exports.init = init

function init(cb) {
  /// We could initialize here if we wanted to
  process.nextTick(cb);
}


// exports.env = ...

/// prepare

exports.prepare = prepare;

function prepare(build, worker) {
  worker.command('npm', ['install']);
  worker.end();
}

/// test

exports.test = test;

function test(build, worker) {
  worker.command('npm', ['test']);
  worker.end();
}

// exports.analyze = ...

// exports.deploy = ...

// exports.cleanup = ...