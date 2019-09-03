new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
        heals: 5,
        specialAttacks: 2
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
            this.heals = 5;
            this.specialAttacks = 2;
        },
        attack: function() {
            var damage = this.calculateDamage(5, 12);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
            this.checkWin();
        },
        specialAttack: function() {
            if (this.specialAttacks >= 1) {
                this.specialAttacks = this.specialAttacks - 1;
            } else {
                this.turns.unshift({
                    gaveUp: true,
                    text: 'No more Special Attacks left!'     
                }); return;
            }
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isSpecialAttack: true,
                text: 'Player hits Monster hard for ' + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();
            this.checkWin();
        },
        heal: function() {
            if (this.heals >= 1) {
                this.heals = this.heals - 1;
            } else {
                this.turns.unshift({
                    gaveUp: true,
                    text: 'No more heals left!'
                    
                }); return;
            }
            
            if(this.playerHealth <= 90) {
            this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isHealing: true,
                text: 'Player heals for 10.'
            });
            this.monsterAttack();
        },
        giveUp: function() {
            this.gameIsRunning = false;
            this.turns.unshift({
                gaveUp: true,
                text: 'Player gives up.'
            });
        },
        monsterAttack: function() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You Lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } return false;
        }
    }
});