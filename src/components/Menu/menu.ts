
export enum RoutesEnum {
    HOME = "/",
    PRODUCT_MANAGEMENT = "/product-management",
    CONTACTS = "/contacts",
    REPORTS = "/reports",
    ORDERS = "/orders",
    APPS = "/apps",
    INTEGRATIONS = "/integrations",
  }

export const menu = [
        {   
            "name":"Home",
            "href":RoutesEnum.HOME,
            "src":"/assets/home.svg"
        },
        {
            "name":"Product Managment",
            "href":RoutesEnum.PRODUCT_MANAGEMENT,
            "src":"/assets/invoice.svg"
        },
        {
            "name":"Contacts",
            "href":RoutesEnum.CONTACTS,
            "src":"/assets/contact.svg"
        },
        {
            "name":"Orders",
            "href":RoutesEnum.ORDERS,
            "src":"/assets/inventory.svg"
        },
        {
            "name":"Reports",
            "href":RoutesEnum.REPORTS,
            "src":"/assets/reports.svg"
        },
        {
            "name":"API & APPS",
            "href":RoutesEnum.APPS,
            "src":"/assets/imprint.svg"
        },
        {
            "name":"Integrations",
            "href":RoutesEnum.INTEGRATIONS,
            "src":"/assets/settings.svg"
        } 
    ]
