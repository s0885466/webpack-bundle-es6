import path from 'path';

import root from 'app-root-path';

const PROJECT_ROOT = root.path;

exports.PROJECT_ROOT = PROJECT_ROOT;
exports.SOURCE_DIRECTORY = path.resolve(PROJECT_ROOT, './source');
exports.BUILD_DIRECTORY = path.resolve(PROJECT_ROOT, './build');
exports.HOST = 'localhost';
exports.PORT = 3001;
