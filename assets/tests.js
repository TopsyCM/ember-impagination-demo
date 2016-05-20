define('ember-impagination-demo/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/components/layout-component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/layout-component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/layout-component.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/components/nested-child1.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/nested-child1.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/nested-child1.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/components/record-player.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/record-player.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/record-player.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/components/record-reader.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/record-reader.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/record-reader.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/components/step-records.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/step-records.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/step-records.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/controllers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/helpers/color-block.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/color-block.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/color-block.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-impagination-demo/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-impagination-demo/tests/helpers/start-app', 'ember-impagination-demo/tests/helpers/destroy-app'], function (exports, _qunit, _emberImpaginationDemoTestsHelpersStartApp, _emberImpaginationDemoTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberImpaginationDemoTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _emberImpaginationDemoTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('ember-impagination-demo/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/helpers/page-state.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/page-state.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/page-state.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/helpers/resolver', ['exports', 'ember-impagination-demo/resolver', 'ember-impagination-demo/config/environment'], function (exports, _emberImpaginationDemoResolver, _emberImpaginationDemoConfigEnvironment) {

  var resolver = _emberImpaginationDemoResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberImpaginationDemoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberImpaginationDemoConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-impagination-demo/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/helpers/start-app', ['exports', 'ember', 'ember-impagination-demo/app', 'ember-impagination-demo/config/environment'], function (exports, _ember, _emberImpaginationDemoApp, _emberImpaginationDemoConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberImpaginationDemoConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberImpaginationDemoApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-impagination-demo/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/models/page.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/page.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/page.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('ember-impagination-demo/tests/test-helper', ['exports', 'ember-impagination-demo/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberImpaginationDemoTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberImpaginationDemoTestsHelpersResolver['default']);
});
define('ember-impagination-demo/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-impagination-demo/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map