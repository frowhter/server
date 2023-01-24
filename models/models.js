const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Products = sequelize.define('products',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING(512)},
    cat_id: {type: DataTypes.INTEGER},
    content: {type: DataTypes.TEXT},
    price: {type: DataTypes.DOUBLE(15,2)},
    img: {type: DataTypes.STRING(256)},
    code: {type: DataTypes.STRING(128)},
    slug: {type: DataTypes.STRING(512)},
    active: {type: DataTypes.INTEGER},
},{
    freezeTableName: true
})

const Models_info = sequelize.define('models_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    parent_cat_id: {type: DataTypes.INTEGER},
    sub_cat_id: {type: DataTypes.INTEGER},
    pokolenie: {type: DataTypes.TEXT},
    year_start: {type: DataTypes.STRING(128)},
    year_end: {type: DataTypes.STRING(128)},
    img: {type: DataTypes.STRING(512)},
}, {
    freezeTableName: true
})

const Customer_reviews = sequelize.define('customer_reviews',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING(128)},
    img: {type: DataTypes.STRING(512)},
    text: {type: DataTypes.TEXT},
    star: {type: DataTypes.INTEGER},
    status: {type: DataTypes.STRING(256)},
    'minus-days': {type: DataTypes.INTEGER},
})

const Cats = sequelize.define('cats',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING(128)},
    parent_id: {type: DataTypes.INTEGER},
    description: {type: DataTypes.TEXT},
    slug: {type: DataTypes.STRING(128)},
})

const Cat_variations = sequelize.define('cat_variations',{
    cat_id: {type: DataTypes.INTEGER, primaryKey: true},
    text: {type: DataTypes.STRING(256)},
})



module.exports = {
    Products,
    Models_info,
    Cats,
    Cat_variations,
    Customer_reviews,
}

