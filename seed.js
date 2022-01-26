const faker = require('faker')
const fs = require('fs')

const { productName, productDescription, price } = faker.commerce

const products = [...Array(30).keys()].map((_, i) => ({
        id: i + 1,
        title: productName(),
        description: productDescription(),
        price: price(),
        imageUrl: 'https://picsum.photos/300/300'
    
}))

const json = { products }

fs.writeFileSync('./db.json', JSON.stringify(json), 'utf-8', () => {
    console.log('File db.json was created')
});