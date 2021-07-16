import {getProducts} from 'lib/games'

export default async function productsController(req, res){
  const products = await getProducts({
    filter: req.query.filter,
    available: req.query.available
  })

  res.json(products)

}