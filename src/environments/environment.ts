import sharedEnvironment from './base';

export const environment = {
  ...sharedEnvironment,
  apiUrl: sharedEnvironment['apiUrl'] || 'http://localhost:1337/',
  graphqlUrl: sharedEnvironment['graphqlUrl'] || 'http://localhost:1337/graphql',
  siteUrl: sharedEnvironment['siteUrl'] || 'https://localhost:4200',
  production: sharedEnvironment['production'] || false
};
