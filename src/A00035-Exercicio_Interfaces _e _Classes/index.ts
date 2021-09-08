// setando a interface (podemos dizer que são regras) dos elementos do video player
interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}
//setando os metodos e protocolos que o player vai utilizar
interface VideoPlayerProtocol {
  playToggle(): void; // setando como sem retorno
  stop(): void; // setando como sem retorno
  iniciarEventos(): void; // setando como sem retorno
}

// criando a classe e implementando a interface
export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement; // aqui estamos especificando que nosso video player vai ser um Elemento de video do HTML.
  private playButton: HTMLButtonElement; // aqui estamos especificando que nosso video player vai ser um Elemento de botao do HTML.
  private stopButton: HTMLButtonElement; // aqui estamos especificando que nosso video player vai ser um Elemento de botao do HTML.

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }
  // obs: em hipotese alguma utilize arrow funcion e o contexto do this inconscientemente
  // tal ação pode acarretar em diversos bugs e quebra da aplicação.
  // utilizamos aqui pois sabemos o que estamos fazendo e de forma simples.

  iniciarEventos(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle(); // executando o toggle (onde esta os botoes de play e pause)
    });

    this.stopButton.addEventListener('click', () => {
      this.videoPlayer.pause(); // evento de pause do video
      this.videoPlayer.currentTime = 0; // zerando o player
      this.playButton.innerText = 'Play'; // mudando o nome do botao para play assim que zerar
    });
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play(); // funcao propria do navegador para play
      this.playButton.innerText = 'Pause';
    } else {
      this.videoPlayer.pause(); // funcao propria do navegador para pause
      this.playButton.innerText = 'Play';
    }
  }
  stop(): void {
    //
  }
}

const videoplayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement, // selecionando o videoplayer
  playButton: document.querySelector('.play') as HTMLButtonElement, // selecionando o botao de play
  stopButton: document.querySelector('.stop') as HTMLButtonElement, // selecionando o botao de pause
});

//executando o nosso metodo
videoplayer.iniciarEventos();
