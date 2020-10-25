var express = require('express');
var router = express.Router();
let financy = require ('../financy-registry');
/* GET home page. */
router
.get('/financy', (req, res, )=> {
  res.send({
    message: 'svetot na finansiite',
    items: financy,
    // message1: "so ima kao si mi",
    // boolian: true,
    // marka: "bembara",
    // stan: "centar"
  })
})

.get('/financy/:name', (req, res)=>{
  let message = `ima vakva firma #${req.params.name}`
  const finans = financy.find(finans => {
    return finans.name == req.params.name
  })
  if(!finans){
    message= `nema vakva firma #${req.params.name}`
  }
  res.send({
    message: `ima vakav firma #${req.params.name}`,
    item: finans
  })
})

.post('/financy', (req, res)=>{
  const finans ={
    address:financy.lenght + 1,
    company:req.body.company,
    finance:req.body.finance,
    name:req.body.name
  }
  financy.push(finans)
  res.send({
    message:`nova firma e dodadena popladnevo`,
    items:financy
  })
})
.delete('/financy/:name', (req, res)=>{
  
  const filterFinans = financy.filter(finans=>{
    return finans.name != req.params.name

  })
  finans = filterFinans
  res.send({
    message: `Firmata e izbrisana #${req.params.name}`,
    items: filterFinans
  })
    
})



module.exports = router;
