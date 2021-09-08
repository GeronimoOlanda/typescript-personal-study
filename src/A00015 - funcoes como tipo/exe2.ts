const uppedLevel = (name: string) => {
  return `${name} uppei de level!`;
};

const jogadorUpLevel = (
  name: string,
  experience: number,
  porcentagem?: number,
) => {
  porcentagem = 100;

  const contador = experience;

  const cont2 = contador;

  if (cont2 >= porcentagem) {
    console.log(`${uppedLevel(name)}\n Experience: ${cont2}`);
  } else {
    console.log(`Experiencia atual: ${cont2}`);
  }
};

const jogador = jogadorUpLevel('Geronimo', 20);
