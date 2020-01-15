import {ApiRootUrl} from "../../ApiRootUrl";

export class ApiBookUrl{
    public static readonly GetBookUrl:string = ApiRootUrl.Base + "/book";
    public static readonly GetBookByCategoryIdUrl:string = ApiRootUrl.Base + "/bookByCategoryId/";
    public static readonly GetBookByBookId:string = ApiRootUrl.Base + "/book/"
}