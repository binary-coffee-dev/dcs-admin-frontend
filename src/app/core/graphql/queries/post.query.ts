import gql from 'graphql-tag';

export const POST_QUERY = gql`
    query fetchPost($id: String!) {
        postByName(name: $id) {
            id
            name
            title
            description
            body
            publishedAt
            views
            banner { url }
            author {
                username
                email
                avatar { url }
                page
            }
        }
    }
`;
