import dva from 'dva';
import router from './router';
import models from '../models';
import './style.scss';

const app = dva();
models.forEach((m) => {
  app.model(m);
});
app.router(router);
app.start('#main');
