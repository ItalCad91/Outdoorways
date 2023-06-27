export function displayHomePage(req, res, next) 
{
    res.render('index', {title : 'Home', page:'home'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};

export function displayWomenPage(req, res, next) 
{
    res.render('index', {title : 'Women', page:'women'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};

export function displayMenPage(req, res, next) 
{
    res.render('index', {title : 'Men', page:'men'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};

export function displayKidsPage(req, res, next) 
{
    res.render('index', {title : 'Kids', page:'kids'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};