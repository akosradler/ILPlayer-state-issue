export type Typename = {
  __typename: string
}

export type WithTypename<T> = T & Typename
