import Authentication from './authentication/index.js';
import Management from './management/index.js';
import WebAuth from './web-auth/index.js';
import version from './version.js';

export { Authentication, Management, WebAuth, version };

export default {
  Authentication: Authentication,
  Management: Management,
  WebAuth: WebAuth,
  version: version
};
