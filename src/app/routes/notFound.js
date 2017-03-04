import LandingContainer from 'app/modules/landing/containers/LandingContainer';

export default {
  path: '/not',
  component: LandingContainer,
  getIndexRoute(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, { component: require('app/components/NotFound') });
    });
  },
/*  getIndexRoute: async (location, cb) => {
    const component = await System.import('app/components/NotFound');
    cb(null, { component });
  }*/
};
