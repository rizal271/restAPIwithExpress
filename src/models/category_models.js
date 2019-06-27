const condb = require(`../config/conn`)

module.exports = {
    getCategory: (callback) => {
        condb.query(`SELECT * FROM tb_category`, (err, result) => {
          if (err) console.log(err)
    
          callback(err, result)
        })
    },
    insertCategory: (category, callback) =>{
      condb.query('INSERT INTO tb_category SET ?', category, (err, result)=>{
        if (err) console.log(err)

        callback(result)
      })
    },
    updateCategory: (category, id_category, callback) => {
      condb.query(`UPDATE tb_category SET ? WHERE id_category= ?`, [category, id_category], (err, result)=>{
        if (err) console.log(err)

        callback(result)
      })
    },
    deleteCategory : (id_category, callback) =>{
      console.log(id_category)
      condb.query('DELETE FROM tb_category WHERE id_category = ?', id_category,(err, result)=>{
          if(err) console.log(err)

          callback(result)
      })
  }

}
