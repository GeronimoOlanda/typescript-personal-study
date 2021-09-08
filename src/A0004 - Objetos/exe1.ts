const objetosA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor',
  chaveB: 'Valor2',
};
objetosA.chaveA = 'Geronimo';
objetosA.chaveC = 'Olanda';
objetosA.chaveD = 'Thalia';
