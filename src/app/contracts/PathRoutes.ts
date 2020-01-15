export class PathRoutes{
    public static readonly Init = '';
    public static readonly Home:string = 'home';
    public static readonly RedirectToHome:string = '/home';

    public static readonly HomeLiteratureByBookCategory = 'sach-van-hoc/:name';
    public static readonly HomeLiterature = 'sach-van-hoc';
    public static readonly HomeDetailLiteratureBook = 'sach-van-hoc/chitiet';

    public static readonly HomeEconomicsByBookCategory = 'sach-kinh-te/:name';
    public static readonly HomeEconomics = 'sach-kinh-te';
    public static readonly HomeDetailEconomicsBook = 'sach-kinh-te/chitiet';
}