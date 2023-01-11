/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProfile: Scalars['String'];
  removeProfile: Scalars['Boolean'];
};


export type MutationCreateProfileArgs = {
  newProfile: NewProfile;
};


export type MutationRemoveProfileArgs = {
  id: Scalars['Int'];
};

export type NewProfile = {
  age: Scalars['Int'];
  name: Scalars['String'];
};

export type ProfileModel = {
  __typename?: 'ProfileModel';
  age: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  profiles?: Maybe<Array<ProfileModel>>;
};

export type GetProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfilesQuery = { __typename?: 'Query', profiles?: Array<{ __typename?: 'ProfileModel', age: number, id: string, name: string }> | null };

export type CreateProfileMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateProfileMutation = { __typename?: 'Mutation', createProfile: string };


export const GetProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetProfilesQuery, GetProfilesQueryVariables>;
export const CreateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newProfile"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"test","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"age"},"value":{"kind":"IntValue","value":"28"}}]}}]}]}}]} as unknown as DocumentNode<CreateProfileMutation, CreateProfileMutationVariables>;