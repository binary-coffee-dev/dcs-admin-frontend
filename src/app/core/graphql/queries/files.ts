import gql from 'graphql-tag';

export const FILES_QUERY = gql`
    query pageQuery($limit: Int!, $start: Int!) {
        uploadsConnection(limit: $limit, start: $start) {
            values {
                name
                url
                mime
            }
            aggregate {
                count
            }
        }
    }
`;
