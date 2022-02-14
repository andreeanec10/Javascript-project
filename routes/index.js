var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
let db = require('../src/database');
let empModel = require('../src/models/Employeer');
const Project = require('../src/models/Project');
let projectModel = require('../src/models/Project');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// FOR EMPLOYEES

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

// FOR PROJECTS

/* GET all Projects */
router.get('/projects', function(req, res) {
  projectModel.find({}, function ( err, proj) {
    if (err) {
      console.log(err);
      res.send('Error occures on get projects!');
    } else {
      res.send(proj);
      console.log('[GET Projects]');
    }
  })
});

/* POST add a new project */
router.post('/projects/post', function(req, res) {
  let newProj = new projectModel(req.body);
  newProj.save().then(doc => {
    res.send('Project added.');
    console.log('[POST new Project]')
    console.log(doc);
  })
  .catch(err => {
    res.send(err);
    console.error(err);
  });
});

/* PUT update a project */
router.put('/projects/update/:_id', function(req, res) {
  projectModel.updateOne({'_id': req.params._id}, {$set: req.body},  function ( err, emp) {
      if (err) {
        console.log(err);
        res.send('Error, project does not exist!');
      } else {
        res.send('Project updated');
        console.log('[PUT Project update]');
      }
    });
  })

  /* DELETE an employee */
  router.delete('/projects/delete/:_id', function(req, res) {
    projectModel.remove({'_id': req.params._id},  function ( err) {
        if (err) {
          console.log(err);
          res.send('Error, cannot delete the project!');
        } else {
          res.send('Project deleted');
          console.log('[DELETE Project deleted]');
        }
      });    
  });


// PROJECT + EMPLOYEES

// GET Employee name and the project name they work on
router.get('/employee/:name/getproject', function(req, res) {
  empModel.find({"name": req.params.name})
  .populate("Projects")
  .exec(function(resp) {
    res.json(resp.Projects[0].name);
  })
  // empModel.aggregate([{
  //   $lookup: {
  //     from: "Projects",
  //     localField: "project_id",
  //     foreignField: "project_code",
  //     as: "prj_name"
  //   }
  // }]);

})


module.exports = router;
