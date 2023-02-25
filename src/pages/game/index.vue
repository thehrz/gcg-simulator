<script setup lang="ts">
import Table from "~/common/enums/Table"
import IPlayer from "~/common/interfaces/IPlayer"

type Room = {
  id: number,
  players: {
    enemy: IPlayer,
    owner: IPlayer
  }
}

const { data } = await useFetch<Room>('/api/game')
</script>

<template>
  <div class="container">
    <GameContainer
      :table="Table.Mondstadt"
      :owner="data?.players.owner!"
      :enemy="data?.players.enemy!"
      :rounds="1"
    />
  </div>
</template>
