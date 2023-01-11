<script lang="ts" setup>
import { useQuery } from '@urql/vue';
import { GetTodosDocument } from '.types/hasura/gql/graphql';
import { GetProfilesDocument } from '.types/gql/graphql';

//const { data } = useQuery({ query: GetProfilesDocument })
const { data } = useQuery({ query: GetTodosDocument })
const profiles = useQuery({ query: GetProfilesDocument })

console.log(data)

data.value?.todos?.map((u) => {
  u.id
})

</script>

<template>
  <div>
    <p>{{ data }}</p>
    <p>{{ profiles.data }}</p>
  </div>
</template>
