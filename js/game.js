// Criado por: Sérgio Murillo da Costa Faria

// Definindo variáveis globais
/// Elementos do Jogo
let player;
let player2;
let ai;
let ball;
/// Controles
let cursors;
/// Dados
let playerOffset = 50;
let edgeOffset = 10;
let moveSpeed = 300;
let ballSpeed = 200;
let ballBounce = 1;
let remainingLife = 1;
let remainingTime = 60;
let playerScore = 0;
let width = 600;
let height = 600;
let angle = 90;
let toggleControls = false;
let aiPlayer = true;
let stopGame = false;
/// Textos
let scoreMessage = 'Score: ';
let timeMessage = 'Time: ';
let lifeMessage = 'Life: ';
let gameOverMessage = 'Game Over';

class mainScene {
    preload() {
        // Carregando assets
        this.load.image('player', 'assets/bar.png');
        this.load.image('ball', 'assets/ball.png');
        this.canvas = this.sys.game.canvas;
    }
    create() {
        width = this.canvas.width;
        height = this.canvas.height;
        // Criando player
        player = this.physics.add.sprite(playerOffset, height / 2, 'player');

        // Criando IA ou player 2
        if (aiPlayer)
            ai = this.physics.add.sprite(width - playerOffset, height / 2, 'player');
        else
            player2 = this.physics.add.sprite(width - playerOffset, height / 2, 'player');

        // Criando bola
        ball = this.physics.add.sprite(width / 2, height / 2, 'ball');
        ball.setVelocity(ballSpeed, ballSpeed);
        ball.setBounce(ballBounce, ballBounce);
        ball.setCollideWorldBounds(true);

        // Criando limites do jogo para o player e definindo como imóvel
        player.setCollideWorldBounds(true);
        player.setImmovable(true);

        // Criando limites do jogo para a IA ou player 2 e definindo como imóvel
        if (aiPlayer) {
            ai.setCollideWorldBounds(true);
            ai.setImmovable(true);
        }
        else {
            player2.setCollideWorldBounds(true);
            player2.setImmovable(true);
        }

        // Criando colisão entre player/IA e bola
        this.physics.add.collider(player, ball, this.rotateGame, null, this);
        if (aiPlayer)
            this.physics.add.collider(ai, ball);
        else
            this.physics.add.collider(player2, ball, this.rotateGame, null, this);

        // Criando input do teclado
        cursors = this.input.keyboard.createCursorKeys();

        // Criando textos
        this.scoreText = this.add.text(10, 10, scoreMessage + playerScore, { fontSize: '32px', fill: '#FFF' });
        this.timeText = this.add.text(width - 200, 10, timeMessage + remainingTime, { fontSize: '32px', fill: '#FFF' });
        this.lifeText = this.add.text(10, height - 50, lifeMessage + remainingLife, { fontSize: '32px', fill: '#FFF' });
        this.ballSpeedText = this.add.text(width - 300, height - 50, 'Ball Speed: ' + ballSpeed, { fontSize: '32px', fill: '#FFF' });
    }
    update() {
        if (stopGame) return;
        // Definindo movimento do player
        if (cursors.up.isDown && !toggleControls) {
            player.setVelocityY(-moveSpeed);
        }
        else if (cursors.down.isDown && !toggleControls) {
            player.setVelocityY(moveSpeed);
        }
        else if (cursors.left.isDown && toggleControls) {
            player.setVelocityY(moveSpeed);
        }
        else if (cursors.right.isDown && toggleControls) {
            player.setVelocityY(-moveSpeed);
        }
        else {
            player.setVelocityY(0);
        }

        // Definindo movimento do player 2 caso não seja IA
        if (!aiPlayer) {
            if (cursors.w.isDown && !toggleControls) {
                player2.setVelocityY(-moveSpeed);
            }
            else if (cursors.s.isDown && !toggleControls) {
                player2.setVelocityY(moveSpeed);
            }
            else if (cursors.a.isDown && toggleControls) {
                player2.setVelocityY(moveSpeed);
            }
            else if (cursors.d.isDown && toggleControls) {
                player2.setVelocityY(-moveSpeed);
            }
            else {
                player2.setVelocityY(0);
            }
        }

        // Definindo movimento da IA
        if (aiPlayer) {
            ai.setVelocityY(ball.body.velocity.y);
            remainingTime -= (1 / 60);
            this.timeText.setText(timeMessage + Math.floor(remainingTime));
        }

        // Definindo movimento da bola
        if (ball.x <= edgeOffset) {
            this.respawnBall(false);
        }
        else if (ball.x >= width - edgeOffset) {
            this.respawnBall(true);
        }
    }

    rotateGame() {
        // Rotacionando o jogo sempre que a bola colidir com um player
        this.cameras.main.rotation += Math.PI / 2;
        toggleControls = !toggleControls;
        ballSpeed += 20;
        ball.setVelocity(ballSpeed, ballSpeed);
        this.ballSpeedText.setText('Ball Speed: ' + ballSpeed);
    }

    respawnBall(playerPoint) {
        // Respawnando a bola no centro da tela
        ball.x = width / 2;
        ball.y = height / 2;
        ball.setVelocity(ballSpeed, ballSpeed);

        // Atualizando a pontuação do player ou da IA/player 2
        if (playerPoint)
            this.scoreText.setText(scoreMessage + ++playerScore);
        else {
            remainingLife--;
            this.lifeText.setText(lifeMessage + remainingLife);
        }
        if (remainingLife == 0) {
            this.add.text(300, 300, gameOverMessage, { fontSize: '32px', fill: '#FFF' });
            this.gameOver();
        }
    }

    gameOver() {
        // Adicionando um delay antes de reiniciar o jogo
        stopGame = true;

        player.setVelocityY(0);
        ball.setVelocity(0, 0);
        if (aiPlayer)
            ai.setVelocityY(0);
        else
            player2.setVelocityY(0);

        this.time.addEvent({
            delay: 3000,
            callback: () => {
                this.restartGame();
            },
            loop: false
        });
    }

    restartGame() {
        // Reiniciando o jogo
        this.scene.restart();

        ball.x = width / 2;
        ball.y = height / 2;
        ball.setVelocity(ballSpeed, ballSpeed);

        remainingLife = 3;
        remainingTime = 60;
        playerScore = 0;
        ballSpeed = 200;

        toggleControls = false;
        this.cameras.main.rotation = 0;

        stopGame = false;
    }
}

// Criando o jogo com as configurações definidas
new Phaser.Game({
    width: 600,
    height: 600,
    backgroundColor: '#040483',
    scene: mainScene,
    physics: { default: 'arcade' },
    parent: 'game',
});