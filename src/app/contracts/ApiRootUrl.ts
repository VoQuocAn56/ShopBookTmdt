export class ApiRootUrl {
    private static readonly RootUrl:string  = "https://localhost:44382/api/";
    private static readonly  version:string = "v1";
    public static readonly Base:string =  ApiRootUrl.RootUrl + ApiRootUrl.version;
}
