import gql from 'graphql-tag';

export const UPDATE_PROFILE_MUTATION = gql`
    mutation updateUser($id: ID!, $email: String, $page: String) {
        updateUser(input: { where: {id: $id},data: { email: $email, page: $page } }) {
            user {
                id
                username
                email
                confirmed
                blocked
                role {
                    name
                }
                page
                avatar {
                    url
                }
            }
        }
    }
`;
