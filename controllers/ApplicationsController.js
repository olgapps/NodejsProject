/*exports.store=(req,res)=>{
    res.json({
        posts:[{title:"First post"}, {title:"Second post"}]
        //'name': "req.body.name"
        //'phone': req.body.phone,
        //'message': req.body.message
    });
};*/
exports.getPosts=(req,res)=>{
    res.json({
        posts:[{title:"First post"}, {title:"Second post"}]
    });
}