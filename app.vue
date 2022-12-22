<script lang="ts" setup>
import { useMutation, useQuery } from '@urql/vue';
import { GetUsersDocument, CreateUserDocument, CreateUserMutation, CreateUserMutationVariables } from '.types/gql/graphql';

const { data } = useQuery({ query: GetUsersDocument })

data.value?.users?.map((u) => {
  u.name
})

useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument)

</script>

<template>
  <div>
    <p>{{ data }}</p>
  </div>
</template>
