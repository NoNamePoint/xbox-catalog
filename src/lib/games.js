function formater(product){
    return {
      id: product.DisplaySkuAvailabilities[0].Sku.ProductId,
      image: `https:${
        product.LocalizedProperties[0].Images.find(
          ({ ImagePurpose }) => ImagePurpose === 'Poster'
        ).Uri
      }`,
      title: product.DisplaySkuAvailabilities[0].Sku.LocalizedProperties[0].SkuTitle,
      price: product.DisplaySkuAvailabilities[0].Availabilities[0].OrderManagementData.Price.ListPrice,
      msrp: product.DisplaySkuAvailabilities[0].Availabilities[0].OrderManagementData.Price.MSRP,
    };
}

const FILTERS = {
    'new-releases': 'New',
    'most-played': 'MostPlayed',
}

function getFilter(filter){
    const filterName = FILTERS[filter] || 'TopPaid'
    return `https://reco-public.rec.mp.microsoft.com/channels/Reco/V8.0/Lists/Computed/${filterName}?Market=us&Language=en&ItemTypes=Game&deviceFamily=Windows.Xbox&NumberOfPlayers=CoopSupportOnline&count=${20}&skipitems=0`;
}

export async function getProducts({filter}){
     
        const productList = await fetch(getFilter(filter))
        const list = await productList.json()
        console.log(list)
        const productsRequest = await fetch(
            `https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${list.Items.map(({Id}) => Id).join(',')}&market=US&languages=en-us&MS-CV=DGU1mcuYo0WMMp+F.1`
        )
        let data = await productsRequest.json()
        console.log(data.Products[0])   
        return data.Products.map(formater);
}