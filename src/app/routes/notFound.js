import LandingContainer from 'app/modules/landing/containers/LandingContainer';

export default {
  path: '*',
  component: LandingContainer,
  getIndexRoute(partialNextState, cb) {
    console.log(1111, partialNextState);
    require.ensure([], (require) => {
      cb(null, {
        component: require('app/components/NotFound')
      });
    });
  }
};
