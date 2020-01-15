import {ApiRootUrl} from "../../ApiRootUrl";

export class ApiAuthorUrl {
    public static readonly GetAuthorUrl:string = ApiRootUrl.Base + "/author";
    public static readonly GetAuthorByAuthorIdUrl:string = ApiRootUrl.Base + "/author/"
}
