export interface productFilter {
   
context : string,  //Scope under which the request is made; determines fields present in response. Options: view and edit. Default is view.
page : number, // Current page of the collection. Default is 1.
per_page: number,// Maximum number of items to be returned in result set. Default is 10.
search: string ,//Limit results to those matching a string.
after: string ,//Limit response to resources published after a given ISO8601 compliant date.
before: string ,//Limit response to resources published before a given ISO8601 compliant date.
exclude: [] ,//Ensure result set excludes specific IDs.
include: [] ,//Limit result set to specific ids.
offset: number,// Offset the result set by a specific number of items.
order: string ,//Order sort attribute ascending or descending. Options: asc and desc. Default is desc.
orderby: string ,//Sort collection by object attribute. Options: date, id, include, title and slug. Default is date.
parent: [] ,//Limit result set to those of particular parent IDs.
parent_exclude: [] ,//Limit result set to all items except those of a particular parent ID.
slug: string ,//Limit result set to products with a specific slug.
status: string ,//Limit result set to products assigned a specific status. Options: any, draft, pending, private and publish. Default is any.
type: string ,//Limit result set to products assigned a specific type. Options: simple, grouped, external and variable.
sku: string ,//Limit result set to products with a specific SKU.
featured: boolean,// Limit result set to featured products.
category: string ,//Limit result set to products assigned a specific category ID.
tag: string ,//Limit result set to products assigned a specific tag ID.
shipping_class: string ,//Limit result set to products assigned a specific shipping class ID.
attribute: string ,//Limit result set to products with a specific attribute.
attribute_term: string ,//Limit result set to products with a specific attribute term ID (required an assigned attribute).
tax_class: string ,//Limit result set to products with a specific tax class. Default options: standard, reduced-rate and zero-rate.
on_sale: boolean,// Limit result set to products on sale.
min_price: string ,//Limit result set to products based on a minimum price.
max_price: string ,//Limit result set to products based on a maximum price.
stock_status: string //Limit result set to products with specified stock status. Options: instock, outofstock and onbackorder.

}