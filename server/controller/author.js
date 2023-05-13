const Author = require('../model/Author')
const Opinion = require('../model/Opinion')
const fs = require('fs')
const path = require('path')

exports.addAuthor = async(req,res,next)=>
{
    try{
        if(!req.file)
        {
            const error = new Error('يجب إضافة صورة');
            error.statusCode = 422 ; 
            throw error
        }
        const author = await Author.create({...req.body,image:req.file.filename})
        res.status(201).json({author,message:"تم إضافة المؤلف بنجاح"})
    }
    catch(err){
        if(! err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
}

exports.editAuthor = async(req,res,next)=>
{
    try{
        const {authorId} = req.params
        const author = await Author.findByPk(authorId)
        if(!author)
        {
            const error = new Error("المؤلف غير موجود")
            error.statusCode = 404 ; 
            throw error;
        }
        if(req.file)
        {
            clearImage(author.image)
            await author.update({image:req.file.filename})
        }
        await author.update(req.body)
        res.status(201).json({author,message:"تم تعديل معلومات المؤلف بنجاح"})
    }
    catch(err){
        if(! err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
}

exports.getSingleAuthor = async(req,res,next)=>
{
    try{
        const {authorId} = req.params
        const author = await Author.findOne({id:authorId,attributes:["name","id","headline","image"]})
        if(!author)
        {
            const error = new Error("المؤلف غير موجود")
            error.statusCode = 404 ;
            throw error ;
        }
        res.status(200).json({author})
    }
    catch(err){
        if(! err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
}

/** limit 8 paginaition */
exports.getAllAuthors = async(req,res,next)=>
{
    try{
        const LIMIT_SIZE = 8 ;
        const page = req.query.page || 1
        const offset = (page - 1) * LIMIT_SIZE
        const authors = await Author.findAll({attributes:["name","id","image"],limit:LIMIT_SIZE,offset,
        order:[["createdAt","DESC"]]})
        res.status(200).json({authors})
    }
    catch(err){
        if(! err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
}

/** limit 6 pagination */
exports.getAuthorOpinions = async(req,res,next)=>
{
    try{
        const {authorId} = req.params
        const author = await Author.findByPk(authorId)
        if(!author)
        {
            const error = new Error('المؤلف غير متوفر')
            error.statusCode = 404 ;
            throw error ;
        }
        const LIMIT_SIZE = 6 ;
        const page = req.query.page || 1
        const offset = (page - 1) * LIMIT_SIZE
        const opinions = await Opinion.findAll({where:{authorId},limit:LIMIT_SIZE,offset,
        order:[["createdAt","DESC"]],attributes:["title","description","id"]})
        res.status(200).json({opinions})
    }
    catch(err){
        if(! err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
}

const clearImage = (filePath)=>{
    filePath = path.join(__dirname,'..',`images/${filePath}`);
    fs.unlink(filePath,(err)=>{
        console.log(err);
    })
}