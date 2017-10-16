/**
 * @name: 应用路由配置
 * @description: 路由配置，转到React
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';

// 视图列表
import Main from '../layout';  // 主视图
import Index from '../index';

function welcome(nextState, replace, callback) {
  console.log('welcome!');
  callback();
}

export default ({ history }) => (
  <Router history={history}>
    <Route path="/" component={Main} onEnter={welcome}>
      <IndexRoute component={Index} />
      {/* <Route path="/allScene" component={AllScene} />
      <Route path="/sceneEdit/:id" component={() => <SceneEdit menu={MENU} />} />
      <Route path="/sceneInfo/:id" component={() => <SceneInfo menu={MENU} />} />
      <Route path="/sceneDatasets/:id" component={() => <SceneDataset menu={MENU} />} />
      <Route path="/sceneDatasetEdit/:sid/:did" component={() => <SceneDatasetEdit menu={MENU} />} />
      <Route path="/query/:id" component={() => <Query menu={MENU} />} />
      <Route path="/newSceneDataset/:id" component={() => <NewSceneDataset menu={MENU} />} />
      <Route path="/merchants" component={Merchants} /> */}
    </Route>
  </Router>
);
