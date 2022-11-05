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

export type Message = {
  __typename?: 'Message';
  body: Scalars['String'];
  code: Scalars['String'];
  error: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateNote: Message;
  CreateTag: Message;
  DeleteNote: Message;
  DeleteTag: Message;
};


export type MutationCreateNoteArgs = {
  tagId: Scalars['String'];
  title: Scalars['String'];
};


export type MutationCreateTagArgs = {
  tagName: Scalars['String'];
};


export type MutationDeleteNoteArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTagArgs = {
  tagId: Scalars['String'];
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

export type Query = {
  __typename?: 'Query';
  Note?: Maybe<Array<Note>>;
  NoteContent?: Maybe<NoteContent>;
  Tag?: Maybe<Array<Tag>>;
};


export type QueryNoteArgs = {
  noteId?: InputMaybe<Scalars['String']>;
};


export type QueryNoteContentArgs = {
  noteId: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime'];
  delete: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateNoteMutationVariables = Exact<{
  title: Scalars['String'];
  tagId: Scalars['String'];
}>;


export type CreateNoteMutation = { __typename?: 'Mutation', CreateNote: { __typename?: 'Message', body: string, code: string, error: boolean } };

export type CreateTagMutationVariables = Exact<{
  tagName: Scalars['String'];
}>;


export type CreateTagMutation = { __typename?: 'Mutation', CreateTag: { __typename?: 'Message', body: string, code: string, error: boolean } };

export type DeleteNoteMutationVariables = Exact<{
  noteId: Scalars['String'];
}>;


export type DeleteNoteMutation = { __typename?: 'Mutation', DeleteNote: { __typename?: 'Message', body: string, code: string, error: boolean } };

export type DeleteTagMutationVariables = Exact<{
  tagId: Scalars['String'];
}>;


export type DeleteTagMutation = { __typename?: 'Mutation', DeleteTag: { __typename?: 'Message', body: string, code: string, error: boolean } };

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