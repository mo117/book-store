export class SessionData {
  public static IsLogin: boolean;
  public static IsPublisher: boolean;
  public static username: string;
  public static all_category: any = [];
  public static CategotyId: any = 0;
  public static booksArray: any = [];
  static SaveDataInSession(Data) {
    console.log(Data);

    this.IsLogin = true;
    this.IsPublisher = Data.ispublisher;
    this.username = Data.username;
    localStorage.setItem('IsPublisher', Data.ispublisher);
    localStorage.setItem('username', Data.username);

    localStorage.setItem('UserToken', Data.token);
  }

  static ClearDataInSessionByLogOut() {
    this.IsLogin = false;
    localStorage.removeItem('UserToken');
    localStorage.removeItem('IsPublisher');
    localStorage.removeItem('username');

  }
}
