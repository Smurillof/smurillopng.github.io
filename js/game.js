// Criado por: Sérgio Murillo da Costa Faria

// Definindo variáveis globais
/// Elementos do Jogo
let player;
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
        this.load.image('ai', 'assets/bar2.png');
        this.load.image('ball', 'assets/ball.png');
        this.load.image('background', 'assets/background.png');
        this.canvas = this.sys.game.canvas;
    }
    create() {
        width = this.canvas.width;
        height = this.canvas.height;
        this.add.sprite(width / 2, height / 2, 'background').setScale(1.5);

        // Criando player
        player = this.physics.add.sprite(playerOffset, height / 2, 'player');

        // Criando IA
        ai = this.physics.add.sprite(width - playerOffset, height / 2, 'ai');

        // Criando bola
        ball = this.physics.add.sprite(width / 2, height / 2, 'ball');
        ball.setVelocity(ballSpeed, ballSpeed);
        ball.setBounce(ballBounce, ballBounce);
        ball.setCollideWorldBounds(true);

        // Criando limites do jogo para o player e definindo como imóvel
        player.setCollideWorldBounds(true);
        player.setImmovable(true);

        // Criando limites do jogo para a IA e definindo como imóvel
        ai.setCollideWorldBounds(true);
        ai.setImmovable(true);

        // Criando colisão entre player/IA e bola
        this.physics.add.collider(player, ball, this.rotateGame, null, this);
        this.physics.add.collider(ai, ball);

        // Criando input do teclado
        cursors = this.input.keyboard.createCursorKeys();

        // Criando textos
        this.scoreText = this.add.text(10, 10, scoreMessage + playerScore, { fontSize: '24px', fill: '#000' });
        this.timeText = this.add.text(width - 130, 10, timeMessage + remainingTime, { fontSize: '24px', fill: '#000' });
        this.lifeText = this.add.text(10, height - 30, lifeMessage + remainingLife, { fontSize: '24px', fill: '#000' });
        this.ballSpeedText = this.add.text(width - 230, height - 30, 'Ball Speed: ' + ballSpeed, { fontSize: '24px', fill: '#000' });

        // Criando botão
        this.restartButton = this.add.text(width / 2, height / 2, 'Press here to Restart!', { fontSize: '32px', fill: '#FFF' })
            .setOrigin(0.5)
            .setPadding(10)
            .setBackgroundColor('#000')
            .setInteractive()
            .setVisible(false)
            .on('pointerdown', () => this.restartGame())
            .on('pointerover', () => this.restartButton.setStyle({ fill: '#ff0' }))
            .on('pointerout', () => this.restartButton.setStyle({ fill: '#FFF' }));
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

        // Definindo movimento da IA
        ai.setVelocityY(ball.body.velocity.y);
        remainingTime -= (1 / 60);
        this.timeText.setText(timeMessage + Math.floor(remainingTime));

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
            this.add.text(width / 2, height / 2 - 50, gameOverMessage, { fontSize: '32px', fill: '#000' })
                .setOrigin(0.5)
            this.gameOver();
        }
    }

    gameOver() {
        // Adicionando um delay antes de reiniciar o jogo
        stopGame = true;

        this.cameras.main.rotation = 0;

        player.setVelocityY(0);
        ball.setVelocity(0, 0);
        ai.setVelocityY(0);

        this.restartButton.setVisible(true);
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
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
});