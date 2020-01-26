import sharedEnvironment from './base';

export const environment = {
  ...sharedEnvironment,
  apiUrl: sharedEnvironment['apiUrl'] || 'http://binary-coffee.dev/',
  graphqlUrl: sharedEnvironment['graphqlUrl'] || 'http://binary-coffee.dev/graphql',
  siteUrl: sharedEnvironment['siteUrl'] || 'https://binary-coffee.dev',
  production: sharedEnvironment['production'] || false
};
