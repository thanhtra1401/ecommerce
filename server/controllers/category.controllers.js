const {Category} = require("../models")
 

// get category
const getCategory = async () => {
    const categories = await Category.findAll()
    
}