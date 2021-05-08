export interface categoryFilter {
    context :string,        //string Scope under which the request is made; determines fields present in response. Options: view and edit. Default is view.
    page: number,	        //integer Current page of the collection. Default is 1.
    per_page: number,	    //integer Maximum number of items to be returned in result set. Default is 10.
    search: string,	        //string Limit results to those matching a string.
    exclude: [],	        //array	Ensure result set excludes specific ids.
    include: [],	        //array	Limit result set to specific ids.
    order:string,	        //string Order sort attribute ascending or descending. Options: asc and desc. Default is asc.
    orderby:string,	        //string Sort collection by resource attribute. Options: id, include, name, slug, term_group, description and count. Default is name.
    hide_empty: boolean,	//boolean Whether to hide resources not assigned to any products. Default is false.
    parent: number, 	    //integer Limit result set to resources assigned to a specific parent.
    product: number,	    //integer Limit result set to resources assigned to a specific product.
    slug: string	        //string Limit result set to resources with a specific slug.
}