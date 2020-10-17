<template>
    <div>
        <header>
            <h1>Monster Slayer</h1>
        </header>
        <div id="game">
            <section id="monster" class="container">
                <h2>Monster Health</h2>
                <div class="healthbar">
                    <div
                        class="healthbar__value"
                        :style="monsterBarStyles"
                    ></div>
                </div>
            </section>
            <section id="player" class="container">
                <h2>Your Health</h2>
                <div class="healthbar">
                    <div
                        class="healthbar__value"
                        :style="playerBarStyles"
                    ></div>
                </div>
            </section>
            <section v-if="winner" class="container">
                <h2>Game over</h2>
                <h3 v-if="winner === 'player'">You won</h3>
                <h3 v-else-if="winner === 'monster'">You lost</h3>
                <h3 v-else>It's a draw</h3>
                <button @click="startNewGame">Start new game</button>
            </section>
            <section id="controls" v-else>
                <button @click="attackMonster">ATTACK</button>
                <button
                    @click="specialAttack"
                    :disabled="mayUseSpecialAttack"
                >SPECIAL ATTACK
                </button>
                <button
                    @click="healPlayer"
                >HEAL
                </button>
                <button @click="surrender">SURRENDER</button>
            </section>
            <section id="log" class="container">
                <h2>Battle Log</h2>
                <ul>
                    <li :key="index" v-for="(log, index) in logs">
                        <span :class="'log--' + log.who">{{ log.who }} </span>
                        <span>{{ log.what }} </span>
                        <span :class="log.what === 'attack' ? 'log--damage' : 'log--heal'">{{ log.value }}</span>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default {
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            attackRound: 0,
            winner: null,
            logs: []
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'
            }
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.winner === 'player') {
                return {
                    width: '0%'
                }
            }
            return {
                width: this.monsterHealth + '%'
            }
        },
        playerBarStyles() {
            if (this.winner === 'monster') {
                return {
                    width: '0%'
                }
            }
            return {
                width: this.playerHealth + '%'
            }
        },
        mayUseSpecialAttack() {
            return this.attackRound % 3 !== 0
        }
    },
    methods: {
        startNewGame() {
            this.logs = []
            this.playerHealth = 100
            this.monsterHealth = 100
            this.winner = null
            this.attackRound = 0
        },
        attackMonster() {
            this.attackRound++
            const attackValue = getRandomValue(5, 12)
            this.monsterHealth -= attackValue
            this.addLogs('monster', 'attack', attackValue)
            this.attackPlayer()
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15)
            this.playerHealth -= attackValue
            this.addLogs('player', 'attack', attackValue)
        },
        specialAttack() {
            const attackValue = getRandomValue(10, 25)
            this.attackRound++
            this.monsterHealth -= attackValue
            this.addLogs('player', 'special-attack', attackValue)
            this.attackPlayer()
        },
        healPlayer() {
            const healValue = getRandomValue(8, 20)
            this.attackRound++
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth += healValue
            }
            this.addLogs('player', 'heal', healValue)
            this.attackMonster()
        },
        surrender() {
            this.winner = 'monster'
        },
        addLogs(who, what, value) {
            this.logs.unshift({who, what, value})
        }
    }
}
</script>

<style scoped>
header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0.5rem;
    background-color: #880017;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
}
section {
    width: 90%;
    max-width: 40rem;
    margin: auto;
}
.healthbar {
    width: 100%;
    height: 40px;
    border: 1px solid #575757;
    margin: 1rem 0;
    background: #fde5e5;
}
.healthbar__value {
    background-color: #00a876;
    width: 100%;
    height: 100%;
}
.container {
    text-align: center;
    padding: 0.5rem;
    margin: 1rem auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 12px;
}
#monster h2,
#player h2 {
    margin: 0.25rem;
}
#controls {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
button {
    font: inherit;
    border: 1px solid #88005b;
    background-color: #88005b;
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    margin: 1rem;
    width: 12rem;
    cursor: pointer;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
button:focus {
    outline: none;
}
button:hover,
button:active {
    background-color: #af0a78;
    border-color: #af0a78;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}
button:disabled {
    background-color: #ccc;
    border-color: #ccc;
    box-shadow: none;
    color: #3f3f3f;
    cursor: not-allowed;
}
#log ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
#log li {
    margin: 0.5rem 0;
    padding: 5px 0;
    background-color: #e8d7d7;
}
.log--player {
    color: #70f;
}
.log--monster {
    color: #da8d00;
}
.log--damage {
    color: red;
}
.log--heal {
    color: green;
}
</style>
