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
};


export type MutationCreateNoteArgs = {
  tag: Scalars['String'];
  title: Scalars['String'];
};

export type Note = {
  __typename?: 'Note';
  body: Scalars['String'];
  id: Scalars['String'];
  tagId: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Note?: Maybe<Array<Maybe<Note>>>;
};


export type QueryNoteArgs = {
  noteId?: InputMaybe<Scalars['String']>;
};

export type CreateNoteMutationVariables = Exact<{
  title: Scalars['String'];
  tag: Scalars['String'];
}>;


export type CreateNoteMutation = { __typename?: 'Mutation', CreateNote: { __typename?: 'Message', body: string, code: string, error: boolean } };

export type NoteQueryVariables = Exact<{
  noteId?: InputMaybe<Scalars['String']>;
}>;


export type NoteQuery = { __typename?: 'Query', Note?: Array<{ __typename?: 'Note', id: string, title: string, body: string, tagId: string } | null> | null };


export const CreateNoteDocument = gql`
    mutation CreateNote($title: String!, $tag: String!) {
  CreateNote(title: $title, tag: $tag) {
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
 *      tag: // value for 'tag'
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
export const NoteDocument = gql`
    query Note($noteId: String) {
  Note(noteId: $noteId) {
    id
    title
    body
    tagId
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