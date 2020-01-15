import {ApiRootUrl} from "../../ApiRootUrl";

export class ApiCategoryUrl{
    public static readonly GetCategoryUrl:string = ApiRootUrl.Base + "/category";
    public static readonly GetCategoryByCategoryTagId = ApiRootUrl.Base + "/categoryByCategoryTagId/";
}