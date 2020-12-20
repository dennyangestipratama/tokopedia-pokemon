import express from 'express';
import Loadable from 'react-loadable'

import serverRenderer from './middleware/renderer';

const PORT = 3000;
const path = require('path');
const app = express();
const router = express.Router();

router.use('^/$', serverRenderer);
router.use('*', serverRenderer);

router.use(express.static(
   path.resolve(__dirname, '..', 'build'),
   { maxAge: '30d' },
));
app.use(router);

Loadable.preloadAll().then(() => {
   app.listen(PORT, (error) => {
      if (error) {
         return console.log('something bad happened', error);
      }
      console.log("listening on " + PORT + "...");
   });
});