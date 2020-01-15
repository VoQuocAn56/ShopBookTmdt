import {ApiRootUrl} from "../../ApiRootUrl";

export class ApiBookInfoUrl {
    public static readonly GetBookInfoUrl:string = ApiRootUrl.Base + "/bookInfo";
    public static readonly GetBookInfoByBookIdUrl:string = ApiRootUrl.Base + "/GetBookInfoByBookId/"
}
