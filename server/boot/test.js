'use strict';

module.exports = function(app, cb) {
  const TestModel = app.models.TestModel;

  app.dataSources.db.automigrate('TestModel', function() {
    TestModel.create({
      testDate: '2018-10-10',
    }, cb);
  });
};
