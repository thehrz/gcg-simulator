// Mock data

export default defineEventHandler(() => {
  return {
      id: 1,
      players: {
        enemy: {
          name: "robot",
          characters: [
            {
              cardID: "jadeplume_terrorshroom",
              hp: 5,
              energy: 1,
              isFighting: true,
            },
            {
              cardID: "chongyun",
              hp: 10,
              energy: 2,
              artifact: {
                cardID: "broken_rimes_echo",
              },
              isFighting: false,
            },
          ],
          dices: ["any"],
          support: [
            {
              cardID: "timmie",
              count: 1,
            },
          ],
          thisRound: false,
        },
        owner: {
          name: "player",
          avatar: "nahida",
          characters: [
            {
              cardID: "ganyu",
              hp: 10,
              energy: 2,
              isFighting: true,
              weapon: {
                cardID: "skyward_harp",
              },
              talent: {
                cardID: "undivided_heart",
              },
              state: ["dendro", "cryo"],
            },
          ],
          actions: [
            {
              cardID: "undivided_heart",
            },
            {
              cardID: "prophecy_of_submersion",
            },
          ],
          dices: ["cryo", "cryo"],
          support: [
            {
              cardID: "parametric_transformer",
            },
            {
              cardID: "favonius_cathedral",
              time: 1,
              heal: 2,
            },
          ],
          summons: [
            {
              cardID: "sacred_cryo_pearl",
              time: 2,
            },
          ],
          thisRound: true,
        },
      },
    }
})
