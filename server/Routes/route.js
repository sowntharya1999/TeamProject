
const express =  require('express');
// module.exports = app =>{


const controller = require('../Controller/controller')

const router = express.Router();
// router.get("/", controller.getAllData);
router.get('/api/getAllMasterType', controller.getAllMasterType);
 router.get('/api/getAllMasterMaintenance' , controller.getAllMasterMaintenance);
 router.get('/api/getfiltervalues', controller.getfiltervalues);
 router.get('/api/getstatusfiltervalues', controller.getstatusfiltervalues);
 router.get('/api/getAllMasterTypeID/:id', controller.getAllMasterTypeID);

 router.post('/api/addNewMasterMaintenanceData' , controller.addNewMasterMaintenanceData);
 router.post('/api/addNewMasterTypeData' , controller.addNewMasterTypeData);
 router.get('/api/getAllUserMaintenance' , controller.getAllUserMaintenance);
 router.post('/api/addNewUserMaintenance' , controller.addNewUserMaintenance);
 router.put('/api/UpdateUserMaintenance',controller.UpdateUserMaintenance);
 router.delete('/api/MasterMaintenenceDelete/:id' , controller.MasterMaintenenceDelete);

 router.delete('/api/MasterTypeDelete/:id' , controller.MasterTypeDelete);
 router.get('/api/getAllchart' , controller.getAllchart);
 router.put('/api/updateMasterTypeDetails',controller.updateMasterTypeDetails);
 router.put('/api/updateMasterMaintenenceDetails',controller.updateMasterMaintenenceDetails);
//  app.use('/api/getAllData', router);

module.exports = router;
