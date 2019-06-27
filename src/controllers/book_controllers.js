const bookModels = require(`../models/book_models`)
const help = require(`../helpers/helpers`)
const isEmpty = require(`lodash.isempty`)

module.exports = {
    getBook: (req, res) =>{
        bookModels.getBook((err, result) =>{
            if (err) console.log(err)

            help.response(res, result, 200)
        })
    },

    insertBook: (req, res) =>{
        const book = {
            book_name: req.body.book_name,
            book_writer: req.body.book_writer,
            id_shelf: req.body.id_shelf,
            id_category: req.body.id_category
        }
        bookModels.insertBook(book, (err, result)=>{
            if (err) console.log(err)

            help.response(res, result, 200)
        })
    },

    updateBook: (req, res) =>{
        const id_book = req.params.id_book
        const book = {
            book_name: req.body.book_name,
            book_writer: req.body.book_writer,
            id_shelf: req.body.id_shelf,
            id_category: req.body.id_category
        }
        bookModels.updateBook(book, id_book, (err, result)=>{
            if (err) console.log(err)

            help.response(res, result, 200)
        })
        
    },

    deleteBook: (req, res) =>{
        const id_book = req.params.id_book
        bookModels.deleteBook(id_book,(err,result)=>{
            if (err) console.log(err)

           
            help.response(res, result, 200)
        })
    },

     
    getBookBy: (req, res ) =>{
      const judul = req.query.judul
      const kategori = req.query.kategori
      const rak = req.query.rak

      if (!isEmpty(judul && kategori && rak)) {
        var sql = `a.book_name like '%${judul}%' AND b.category_name like '%${kategori}%' AND c.shelf_name like '%${rak}%'`
      }else if(!isEmpty(judul && kategori)){
        var sql = `a.book_name like '%${judul}%' AND b.category_name like '%${kategori}%'`
      }else if(!isEmpty(judul)){
        var sql = `WHERE a.book_name like '%${judul}%'`
      }else {
          var sql = ``
      }
        // console.log(sql)
      bookModels.getBookBy(sql, (err, result)=>{
          if (err) console.log(err)

          if(isEmpty(result)){
            res.json({
                status: 404,
                message: "data not Found "
            });
        }else {

          help.response(res, result, 200)
        }
      })

    }
}