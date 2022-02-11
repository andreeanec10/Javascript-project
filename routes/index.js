var express = require('express');
var router = express.Router();
let db = require('../src/database');
let empModel = require('../src/models/Employeer');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Employee by name */
router.get('/employee/:name', function(req, res) {
  empModel.find({'name': req.params.name}, function ( err, emp) {
    if (err) {
      console.log(err);
      res.send('Error occures on get employees!');
    } else {
      res.send(emp);
      console.log('[GET Employees by name]');
    }
  })
});

/* GET all Employees */
router.get('/Employees', function(req, res) {
  empModel.find({}, function ( err, emp) {
    if (err) {
      console.log(err);
      res.send('Error occures on get employees!');
    } else {
      res.send(emp);
      console.log('[GET Employees]');
    }
  })
});

/* POST add a new employee */
router.post('/Employees/post', function(req, res) {
  let newEmp = new empModel(req.body);
  newEmp.save().then(doc => {
    res.send('Employee added.');
    console.log('[POST new Employee]')
    console.log(doc);
  })
  .catch(err => {
    res.send(err);
    console.error(err);
  });
});

/* PUT update an employee */
router.put('/Employees/update/:_id', function(req, res) {
  empModel.updateOne({'_id': req.params._id}, {$set: req.body},  function ( err, emp) {
      if (err) {
        console.log(err);
        res.send('Error, employee does not exist!');
      } else {
        res.send('Employee updated');
        console.log('[PUT Employee update]');
      }
    });
  })

/* DELETE an employee */
router.delete('/Employees/delete/:name', function(req, res) {
  empModel.remove({'name': req.params.name},  function ( err) {
      if (err) {
        console.log(err);
        res.send('Error, cannot delete the employee!');
      } else {
        res.send('Employee deleted');
        console.log('[DELETE Employee deleted]');
      }
    });    
});
module.exports = router;
