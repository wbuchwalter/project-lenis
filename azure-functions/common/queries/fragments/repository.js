`use strict`

const REPOSITORY_FRAGMENT = `fragment REPOSITORY_FRAGMENT on RepositoryConnection {
    totalCount
    pageInfo {
        endCursor
        hasNextPage
    }
    edges {
        node {
            id
            name
            resourcePath  
            pushedAt
            repositoryTopics(first: 50) {
              nodes {
                 topic {
                  name
                }
              }
            }
            isFork
            description
        }
    }
  }`  

module.exports = {
    repositoryFragment : REPOSITORY_FRAGMENT
}