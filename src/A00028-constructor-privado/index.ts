// Sinpleton - GoF || Factory Method - GoF
// Criando as instancias da classe
export class Database {
  private static database: Database;

  constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
  //criando methodo construcot (Method Factory GoF) methodo que cria os objetos da classe
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);

    return Database.database;
  }
}

const database1 = Database.getDatabase('localhost', 'root', '123455');

const database2 = Database.getDatabase('localhostt', 'root2', '45444');

database1.connect();
database2.connect();
