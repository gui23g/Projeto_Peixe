//configuracoes basicas
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);
//variaveis
var tutubarao, peixinho1, peixinho2, vel;

//ciclo de vida do jogo
function preload(){
    //imagens
    const azulClaro = 'assets/bg_azul-claro.png';
    const azulEscuro = 'assets/bg_azul-escuro.png';
    const logoBranco = 'assets/logo-inteli_branco.png';
    const logoAzul = 'assets/logo-inteli_azul.png';
    const tubarao = 'assets/peixes/tubarao.png';
    const peixe1 = 'assets/peixes/peixe_amarelo.png';
    const peixe2 = 'assets/peixes/peixe_rosa.png';

    const bgSelector = Math.floor(Math.random()*2);
    console.log(bgSelector); //teste para descobrir qual número caiu
    //definir qual fundo ira usar
    if(bgSelector == 0){
        this.load.image('mar',azulEscuro);
        this.load.image('logo',logoBranco);
    }else{
        this.load.image('mar',azulClaro);
        this.load.image('logo',logoAzul);
    }
    this.load.image('tubarao',tubarao);
    this.load.image('peixe1',peixe1);
    this.load.image('peixe2', peixe2);
}
function create(){
    this.add.image(400,300,'mar');
    this.add.image(400,525,'logo').setScale(0.5);
    peixinho1 = this.add.image(800,400,'peixe1').setFlip(true,false).setOrigin(0,0);
    peixinho2 = this.add.image(0,200,'peixe2').setFlip(true,false).setOrigin(1,1);
   tutubarao = this.add.image(400,300,'tubarao').setFlip(true,false);
}
function update(){
    //logica tubarao
    tutubarao.x = this.input.x;
    tutubarao.y = this.input.y;

    //logica peixes de fundo
    vel = 5;
    peixinho1.x -=vel;
    if(peixinho1.x == -100){
        peixinho1.x = 800;
    }

    peixinho2.x +=vel;
    if(peixinho2.x == 900){
        peixinho2.x = 0;
    }
}