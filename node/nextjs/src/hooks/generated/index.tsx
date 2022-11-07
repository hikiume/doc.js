import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime scalar type. */
  DateTime: any;
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  delete: Scalars['Boolean'];
  id: Scalars['String'];
  noteId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  body: Scalars['String'];
  code: Scalars['String'];
  error: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateComment: Message;
  CreateNote: Message;
  CreateTag: Message;
  DeleteComment: Message;
  DeleteNote: Message;
  DeleteTag: Message;
  EditComment: Message;
  UserCreate: Message;
  UserLogin: Message;
};


export type MutationCreateCommentArgs = {
  body: Scalars['String'];
  noteId: Scalars['String'];
};


export type MutationCreateNoteArgs = {
  tagId: Scalars['String'];
  title: Scalars['String'];
};


export type MutationCreateTagArgs = {
  tagName: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};


export type MutationDeleteNoteArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTagArgs = {
  tagId: Scalars['String'];
};


export type MutationEditCommentArgs = {
  body: Scalars['String'];
  commentId: Scalars['String'];
};


export type MutationUserCreateArgs = {
  name: Scalars['String'];
  password: Scalars['String'];
  password2: Scalars['String'];
};


export type MutationUserLoginArgs = {
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Note = {
  __typename?: 'Note';
  createdAt: Scalars['DateTime'];
  delete: Scalars['Boolean'];
  id: Scalars['String'];
  tag: Array<Maybe<Tag>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type NoteContent = {
  __typename?: 'NoteContent';
  body: Scalars['String'];
  noteId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type NoteHistory = {
  __typename?: 'NoteHistory';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  noteId: Scalars['String'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Comment: Array<Maybe<Comment>>;
  Note?: Maybe<Array<Note>>;
  NoteContent?: Maybe<NoteContent>;
  NoteHistory: Array<Maybe<NoteHistory>>;
  Tag?: Maybe<Array<Tag>>;
  User?: Maybe<User>;
  UserList: Array<Maybe<User>>;
  UserState?: Maybe<User>;
};


export type QueryNoteArgs = {
  noteId?: InputMaybe<Scalars['String']>;
};


export type QueryNoteContentArgs = {
  noteId: Scalars['String'];
};


export type QueryNoteHistoryArgs = {
  noteId: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime'];
  delete: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  icon: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateCommentMutationVariables = Exact<{
  body: Scalars['String'];
  noteId: Scalars['String'];
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', CreateComment: { __typename?: 'Message', body: string, code: string, error: boolean } };

export type DeleteCommentMutationVariables = Exact<{
  commentId: Scalars['String'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', DeleteComment: { __typename?: 'Message', body: string, code: string, error: boolean } };

export type EditCommentMutationVariables = Exact<{
  commentId: Scalars['String'];
  body: Scalars['String'];
}>;


export type EditCommentMutation = { __typename?: 'Mutation', EditComment: { __typename?: 'Message', body: string, code: string, error: boolean } };

export type CreateNoteMutationVariables = Exact<{
  title: Scalars['String'];
  tagId: Scalars['String'];
}>;


export type CreateNoteMutation = { __typename?: 'Mutation', CreateNote: { __typename?: 'Message', body: string, code: string, error: boolean } };

export type DeleteNoteMutationVariables = Exact<{
  noteId: Scalars['String'];
}>;


export type DeleteNoteMutation = { __typename?: 'Mutation', DeleteNote: { __typename?: 'Message', body: string, code: string, error: boolean } };

export type CreateTagMutationVariables = Exact<{
  tagName: Scalars['String'];
}>;


export type CreateTagMutation = { __typename?: 'Mutation', CreateTag: { __typename?: 'Message', body: string, code: string, error: boolean } };

export type DeleteTagMutationVariables = Exact<{
  tagId: Scalars['String'];
}>;


export type DeleteTagMutation = { __typename?: 'Mutation', DeleteTag: { __typename?: 'Message', body: string, code: string, error: boolean } };

export type UserCreateMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
  password2: Scalars['String'];
}>;


export type UserCreateMutation = { __typename?: 'Mutation', UserCreate: { __typename?: 'Message', body: string, code: string, error: boolean } };

export type UserLoginMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserLoginMutation = { __typename?: 'Mutation', UserLogin: { __typename?: 'Message', body: string, code: string, error: boolean } };

export type CommentQueryVariables = Exact<{ [key: string]: never; }>;


export type CommentQuery = { __typename?: 'Query', Comment: Array<{ __typename?: 'Comment', id: string, noteId: string, userId: string, body: string, delete: boolean, createdAt: any, updatedAt: any } | null> };

export type NoteHistoryQueryVariables = Exact<{
  noteId: Scalars['String'];
}>;


export type NoteHistoryQuery = { __typename?: 'Query', NoteHistory: Array<{ __typename?: 'NoteHistory', id: string, noteId: string, userId: string, body: string, createdAt: any } | null> };

export type NoteQueryVariables = Exact<{
  noteId?: InputMaybe<Scalars['String']>;
}>;


export type NoteQuery = { __typename?: 'Query', Note?: Array<{ __typename?: 'Note', id: string, title: string, delete: boolean, createdAt: any, updatedAt: any, tag: Array<{ __typename?: 'Tag', id: string, name: string, delete: boolean, createdAt: any, updatedAt: any } | null> }> | null };

export type NoteContentQueryVariables = Exact<{
  noteId: Scalars['String'];
}>;


export type NoteContentQuery = { __typename?: 'Query', NoteContent?: { __typename?: 'NoteContent', noteId: string, body: string, updatedAt: any } | null };

export type TagQueryVariables = Exact<{ [key: string]: never; }>;


export type TagQuery = { __typename?: 'Query', Tag?: Array<{ __typename?: 'Tag', id: string, name: string, delete: boolean, createdAt: any, updatedAt: any }> | null };

export type UserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', User?: { __typename?: 'User', id: string, name: string, password: string, icon: string, createdAt: any, updatedAt: any } | null };

export type UserListQueryVariables = Exact<{ [key: string]: never; }>;


export type UserListQuery = { __typename?: 'Query', UserList: Array<{ __typename?: 'User', id: string, name: string, password: string, icon: string, createdAt: any, updatedAt: any } | null> };

export type UserStateQueryVariables = Exact<{ [key: string]: never; }>;


export type UserStateQuery = { __typename?: 'Query', UserState?: { __typename?: 'User', id: string, name: string, password: string, icon: string, createdAt: any, updatedAt: any } | null };


export const CreateCommentDocument = gql`
    mutation CreateComment($body: String!, $noteId: String!) {
  CreateComment(body: $body, noteId: $noteId) {
    body
    code
    error
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      body: // value for 'body'
 *      noteId: // value for 'noteId'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation DeleteComment($commentId: String!) {
  DeleteComment(commentId: $commentId) {
    body
    code
    error
  }
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const EditCommentDocument = gql`
    mutation EditComment($commentId: String!, $body: String!) {
  EditComment(commentId: $commentId, body: $body) {
    body
    code
    error
  }
}
    `;
export type EditCommentMutationFn = Apollo.MutationFunction<EditCommentMutation, EditCommentMutationVariables>;

/**
 * __useEditCommentMutation__
 *
 * To run a mutation, you first call `useEditCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCommentMutation, { data, loading, error }] = useEditCommentMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useEditCommentMutation(baseOptions?: Apollo.MutationHookOptions<EditCommentMutation, EditCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCommentMutation, EditCommentMutationVariables>(EditCommentDocument, options);
      }
export type EditCommentMutationHookResult = ReturnType<typeof useEditCommentMutation>;
export type EditCommentMutationResult = Apollo.MutationResult<EditCommentMutation>;
export type EditCommentMutationOptions = Apollo.BaseMutationOptions<EditCommentMutation, EditCommentMutationVariables>;
export const CreateNoteDocument = gql`
    mutation CreateNote($title: String!, $tagId: String!) {
  CreateNote(title: $title, tagId: $tagId) {
    body
    code
    error
  }
}
    `;
export type CreateNoteMutationFn = Apollo.MutationFunction<CreateNoteMutation, CreateNoteMutationVariables>;

/**
 * __useCreateNoteMutation__
 *
 * To run a mutation, you first call `useCreateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNoteMutation, { data, loading, error }] = useCreateNoteMutation({
 *   variables: {
 *      title: // value for 'title'
 *      tagId: // value for 'tagId'
 *   },
 * });
 */
export function useCreateNoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateNoteMutation, CreateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNoteMutation, CreateNoteMutationVariables>(CreateNoteDocument, options);
      }
export type CreateNoteMutationHookResult = ReturnType<typeof useCreateNoteMutation>;
export type CreateNoteMutationResult = Apollo.MutationResult<CreateNoteMutation>;
export type CreateNoteMutationOptions = Apollo.BaseMutationOptions<CreateNoteMutation, CreateNoteMutationVariables>;
export const DeleteNoteDocument = gql`
    mutation DeleteNote($noteId: String!) {
  DeleteNote(id: $noteId) {
    body
    code
    error
  }
}
    `;
export type DeleteNoteMutationFn = Apollo.MutationFunction<DeleteNoteMutation, DeleteNoteMutationVariables>;

/**
 * __useDeleteNoteMutation__
 *
 * To run a mutation, you first call `useDeleteNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNoteMutation, { data, loading, error }] = useDeleteNoteMutation({
 *   variables: {
 *      noteId: // value for 'noteId'
 *   },
 * });
 */
export function useDeleteNoteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNoteMutation, DeleteNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNoteMutation, DeleteNoteMutationVariables>(DeleteNoteDocument, options);
      }
export type DeleteNoteMutationHookResult = ReturnType<typeof useDeleteNoteMutation>;
export type DeleteNoteMutationResult = Apollo.MutationResult<DeleteNoteMutation>;
export type DeleteNoteMutationOptions = Apollo.BaseMutationOptions<DeleteNoteMutation, DeleteNoteMutationVariables>;
export const CreateTagDocument = gql`
    mutation CreateTag($tagName: String!) {
  CreateTag(tagName: $tagName) {
    body
    code
    error
  }
}
    `;
export type CreateTagMutationFn = Apollo.MutationFunction<CreateTagMutation, CreateTagMutationVariables>;

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTagMutation, { data, loading, error }] = useCreateTagMutation({
 *   variables: {
 *      tagName: // value for 'tagName'
 *   },
 * });
 */
export function useCreateTagMutation(baseOptions?: Apollo.MutationHookOptions<CreateTagMutation, CreateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTagMutation, CreateTagMutationVariables>(CreateTagDocument, options);
      }
export type CreateTagMutationHookResult = ReturnType<typeof useCreateTagMutation>;
export type CreateTagMutationResult = Apollo.MutationResult<CreateTagMutation>;
export type CreateTagMutationOptions = Apollo.BaseMutationOptions<CreateTagMutation, CreateTagMutationVariables>;
export const DeleteTagDocument = gql`
    mutation DeleteTag($tagId: String!) {
  DeleteTag(tagId: $tagId) {
    body
    code
    error
  }
}
    `;
export type DeleteTagMutationFn = Apollo.MutationFunction<DeleteTagMutation, DeleteTagMutationVariables>;

/**
 * __useDeleteTagMutation__
 *
 * To run a mutation, you first call `useDeleteTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTagMutation, { data, loading, error }] = useDeleteTagMutation({
 *   variables: {
 *      tagId: // value for 'tagId'
 *   },
 * });
 */
export function useDeleteTagMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTagMutation, DeleteTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTagMutation, DeleteTagMutationVariables>(DeleteTagDocument, options);
      }
export type DeleteTagMutationHookResult = ReturnType<typeof useDeleteTagMutation>;
export type DeleteTagMutationResult = Apollo.MutationResult<DeleteTagMutation>;
export type DeleteTagMutationOptions = Apollo.BaseMutationOptions<DeleteTagMutation, DeleteTagMutationVariables>;
export const UserCreateDocument = gql`
    mutation UserCreate($name: String!, $password: String!, $password2: String!) {
  UserCreate(name: $name, password: $password, password2: $password2) {
    body
    code
    error
  }
}
    `;
export type UserCreateMutationFn = Apollo.MutationFunction<UserCreateMutation, UserCreateMutationVariables>;

/**
 * __useUserCreateMutation__
 *
 * To run a mutation, you first call `useUserCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateMutation, { data, loading, error }] = useUserCreateMutation({
 *   variables: {
 *      name: // value for 'name'
 *      password: // value for 'password'
 *      password2: // value for 'password2'
 *   },
 * });
 */
export function useUserCreateMutation(baseOptions?: Apollo.MutationHookOptions<UserCreateMutation, UserCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserCreateMutation, UserCreateMutationVariables>(UserCreateDocument, options);
      }
export type UserCreateMutationHookResult = ReturnType<typeof useUserCreateMutation>;
export type UserCreateMutationResult = Apollo.MutationResult<UserCreateMutation>;
export type UserCreateMutationOptions = Apollo.BaseMutationOptions<UserCreateMutation, UserCreateMutationVariables>;
export const UserLoginDocument = gql`
    mutation UserLogin($name: String!, $password: String!) {
  UserLogin(name: $name, password: $password) {
    body
    code
    error
  }
}
    `;
export type UserLoginMutationFn = Apollo.MutationFunction<UserLoginMutation, UserLoginMutationVariables>;

/**
 * __useUserLoginMutation__
 *
 * To run a mutation, you first call `useUserLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLoginMutation, { data, loading, error }] = useUserLoginMutation({
 *   variables: {
 *      name: // value for 'name'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUserLoginMutation(baseOptions?: Apollo.MutationHookOptions<UserLoginMutation, UserLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserLoginMutation, UserLoginMutationVariables>(UserLoginDocument, options);
      }
export type UserLoginMutationHookResult = ReturnType<typeof useUserLoginMutation>;
export type UserLoginMutationResult = Apollo.MutationResult<UserLoginMutation>;
export type UserLoginMutationOptions = Apollo.BaseMutationOptions<UserLoginMutation, UserLoginMutationVariables>;
export const CommentDocument = gql`
    query Comment {
  Comment {
    id
    noteId
    userId
    body
    delete
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useCommentQuery__
 *
 * To run a query within a React component, call `useCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentQuery({
 *   variables: {
 *   },
 * });
 */
export function useCommentQuery(baseOptions?: Apollo.QueryHookOptions<CommentQuery, CommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentQuery, CommentQueryVariables>(CommentDocument, options);
      }
export function useCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentQuery, CommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentQuery, CommentQueryVariables>(CommentDocument, options);
        }
export type CommentQueryHookResult = ReturnType<typeof useCommentQuery>;
export type CommentLazyQueryHookResult = ReturnType<typeof useCommentLazyQuery>;
export type CommentQueryResult = Apollo.QueryResult<CommentQuery, CommentQueryVariables>;
export const NoteHistoryDocument = gql`
    query NoteHistory($noteId: String!) {
  NoteHistory(noteId: $noteId) {
    id
    noteId
    userId
    body
    createdAt
  }
}
    `;

/**
 * __useNoteHistoryQuery__
 *
 * To run a query within a React component, call `useNoteHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoteHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoteHistoryQuery({
 *   variables: {
 *      noteId: // value for 'noteId'
 *   },
 * });
 */
export function useNoteHistoryQuery(baseOptions: Apollo.QueryHookOptions<NoteHistoryQuery, NoteHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NoteHistoryQuery, NoteHistoryQueryVariables>(NoteHistoryDocument, options);
      }
export function useNoteHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoteHistoryQuery, NoteHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NoteHistoryQuery, NoteHistoryQueryVariables>(NoteHistoryDocument, options);
        }
export type NoteHistoryQueryHookResult = ReturnType<typeof useNoteHistoryQuery>;
export type NoteHistoryLazyQueryHookResult = ReturnType<typeof useNoteHistoryLazyQuery>;
export type NoteHistoryQueryResult = Apollo.QueryResult<NoteHistoryQuery, NoteHistoryQueryVariables>;
export const NoteDocument = gql`
    query Note($noteId: String) {
  Note(noteId: $noteId) {
    id
    title
    delete
    createdAt
    updatedAt
    tag {
      id
      name
      delete
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useNoteQuery__
 *
 * To run a query within a React component, call `useNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoteQuery({
 *   variables: {
 *      noteId: // value for 'noteId'
 *   },
 * });
 */
export function useNoteQuery(baseOptions?: Apollo.QueryHookOptions<NoteQuery, NoteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NoteQuery, NoteQueryVariables>(NoteDocument, options);
      }
export function useNoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoteQuery, NoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NoteQuery, NoteQueryVariables>(NoteDocument, options);
        }
export type NoteQueryHookResult = ReturnType<typeof useNoteQuery>;
export type NoteLazyQueryHookResult = ReturnType<typeof useNoteLazyQuery>;
export type NoteQueryResult = Apollo.QueryResult<NoteQuery, NoteQueryVariables>;
export const NoteContentDocument = gql`
    query NoteContent($noteId: String!) {
  NoteContent(noteId: $noteId) {
    noteId
    body
    updatedAt
  }
}
    `;

/**
 * __useNoteContentQuery__
 *
 * To run a query within a React component, call `useNoteContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoteContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoteContentQuery({
 *   variables: {
 *      noteId: // value for 'noteId'
 *   },
 * });
 */
export function useNoteContentQuery(baseOptions: Apollo.QueryHookOptions<NoteContentQuery, NoteContentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NoteContentQuery, NoteContentQueryVariables>(NoteContentDocument, options);
      }
export function useNoteContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoteContentQuery, NoteContentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NoteContentQuery, NoteContentQueryVariables>(NoteContentDocument, options);
        }
export type NoteContentQueryHookResult = ReturnType<typeof useNoteContentQuery>;
export type NoteContentLazyQueryHookResult = ReturnType<typeof useNoteContentLazyQuery>;
export type NoteContentQueryResult = Apollo.QueryResult<NoteContentQuery, NoteContentQueryVariables>;
export const TagDocument = gql`
    query Tag {
  Tag {
    id
    name
    delete
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useTagQuery__
 *
 * To run a query within a React component, call `useTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagQuery({
 *   variables: {
 *   },
 * });
 */
export function useTagQuery(baseOptions?: Apollo.QueryHookOptions<TagQuery, TagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagQuery, TagQueryVariables>(TagDocument, options);
      }
export function useTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagQuery, TagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagQuery, TagQueryVariables>(TagDocument, options);
        }
export type TagQueryHookResult = ReturnType<typeof useTagQuery>;
export type TagLazyQueryHookResult = ReturnType<typeof useTagLazyQuery>;
export type TagQueryResult = Apollo.QueryResult<TagQuery, TagQueryVariables>;
export const UserDocument = gql`
    query User($userId: String!) {
  User(id: $userId) {
    id
    name
    password
    icon
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserListDocument = gql`
    query UserList {
  UserList {
    id
    name
    password
    icon
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useUserListQuery__
 *
 * To run a query within a React component, call `useUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserListQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserListQuery(baseOptions?: Apollo.QueryHookOptions<UserListQuery, UserListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserListQuery, UserListQueryVariables>(UserListDocument, options);
      }
export function useUserListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserListQuery, UserListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserListQuery, UserListQueryVariables>(UserListDocument, options);
        }
export type UserListQueryHookResult = ReturnType<typeof useUserListQuery>;
export type UserListLazyQueryHookResult = ReturnType<typeof useUserListLazyQuery>;
export type UserListQueryResult = Apollo.QueryResult<UserListQuery, UserListQueryVariables>;
export const UserStateDocument = gql`
    query UserState {
  UserState {
    id
    name
    password
    icon
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useUserStateQuery__
 *
 * To run a query within a React component, call `useUserStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserStateQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserStateQuery(baseOptions?: Apollo.QueryHookOptions<UserStateQuery, UserStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserStateQuery, UserStateQueryVariables>(UserStateDocument, options);
      }
export function useUserStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserStateQuery, UserStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserStateQuery, UserStateQueryVariables>(UserStateDocument, options);
        }
export type UserStateQueryHookResult = ReturnType<typeof useUserStateQuery>;
export type UserStateLazyQueryHookResult = ReturnType<typeof useUserStateLazyQuery>;
export type UserStateQueryResult = Apollo.QueryResult<UserStateQuery, UserStateQueryVariables>;