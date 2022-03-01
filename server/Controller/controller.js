//  const { connection } = require('../Database/db')
 const sql = require('mssql')
 const poolPromise = require('../Database/db')
 const poolConnection = require('../Database/db')
const fs = require('fs');
// const Config =require('../Database/db');
// const config = Config.config;
var rawdata = fs.readFileSync('./query/queries.json');
var queries = JSON.parse(rawdata);

class MainController {

    async getAllMasterType(req , res){
      try {
        // var request = new sql.Request();
        const pool = await poolPromise
                const result = await poolConnection.request()
                .query(queries.getAllMasterType)
                res.json(result.recordset)
        
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    } 
    
    async getAllMasterTypeID(req , res){
      try {
        const MasterTypeID = req.params.id;
       
        const pool = await poolPromise
                const result = await poolConnection.request()
                  .input('mastertypeid',sql.Int,MasterTypeID)
                .query(queries.getAllMasterTypeID)
                res.json(result.recordset)
        
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    } 

    async getuserById(req , res){
      try {
        const UserId = req.params.id;
       
        const pool = await poolPromise
                const result = await poolConnection.request()
                  .input('userid',sql.Int,UserId)
                .query(queries.getuserById)
                res.json(result.recordset)
        
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    } 
    async getAllMasterMaintenanceID(req , res){
      try {
        const MasterID = req.params.id;
       
        const pool = await poolPromise
                const result = await poolConnection.request()
                  .input('masterid',sql.Int,MasterID)
                .query(queries.getAllMasterMaintenanceID)
                res.json(result.recordset)
        
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    } 
    async getAllMasterMaintenance(req , res){
     
      try {
        const masterid = req.params.id;
        // var request = new sql.Request();
        const pool = await poolPromise
                const result = await poolConnection.request()
                .query(queries.getAllMasterMaintenance)
                res.json(result.recordset)
        
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    } 

    async MasterTypeDelete(req , res){
      try {
        const masterid = req.params.id;
        if(masterid != null ) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('mastertypeid',sql.Int,masterid)
            .query(queries.MasterTypeDelete)
            res.json(result)
          } else {
            res.send('Please fill all the details!')
          }
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
  
    async addNewMasterMaintenanceData(req , res){
        try {
         const now = new Date();  
          if(req.body.MasterTypeID != null && req.body.Description != null && req.body.Status != null) {
         
            const pool = await poolPromise
            const result = await pool.request()
            
            .input('MasterTypeID1',sql.Int , req.body.MasterTypeID)
            .input('Description1',sql.VarChar(200) , req.body.Description)
             .input('Status1',sql.VarChar(200),req.body.Status)
             .input('CreatedBy1',sql.Int,req.body.CreatedBy)
             .input('CreatedDate1',sql.DateTime,now)
             .input('ModifiedBy1',sql.Int,req.body.ModifiedBy)
             .input('ModifiedDate1',sql.DateTime,now)
            .query(queries.addNewMasterMaintenanceData)
            res.json(result)
          } else {
            res.send('Please fill all the details!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message);
      }
      }

      async addNewMasterTypeData(req , res){
        try {
         const now = new Date();  
          if(req.body.MasterTypeID != null && req.body.MasterTypeDescription != null && req.body.Status != null) {
         
            const pool = await poolPromise
            const result = await pool.request()
            
            // .input('MasterTypeIDType',sql.Int , req.body.MasterTypeID)
            .input('DescriptionType',sql.VarChar(200) , req.body.MasterTypeDescription)
             .input('StatusType',sql.VarChar(200),req.body.Status)
             .input('CreatedByType',sql.Int,req.body.CreatedBy)
             .input('CreatedDateType',sql.DateTime,now)
             .input('ModifiedByType',sql.Int,req.body.ModifiedBy)
             .input('ModifiedDateType',sql.DateTime,now)
            .query(queries.addNewMasterTypeData)
            res.json(result)
          } else {
            res.send('Please fill all the details!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message);
      }
      }


      async getAllUserMaintenance(req , res){

        try {
  
          // var request = new sql.Request();
  
          const pool = await poolPromise
  
                  const result = await poolConnection.request()
  
                  .query(queries.getAllUserMaintenance)
  
                  res.json(result.recordset)
  
         
  
        } catch (error) {
  
          res.status(500)
  
          res.send(error.message)
  
        }
  
      }

      async getfiltervalues(req , res){

        try {
  
          // var request = new sql.Request();
  
          const pool = await poolPromise
  
                  const result = await poolConnection.request()
  
                  .query(queries.getfiltervalues)
  
                  res.json(result.recordset)
  
         
  
        } catch (error) {
  
          res.status(500)
  
          res.send(error.message)
  
        }
  
      }

      async getstatusfiltervalues(req , res){

        try {
  
          // var request = new sql.Request();
  
          const pool = await poolPromise
  
                  const result = await poolConnection.request()
  
                  .query(queries.getstatusfiltervalues)
  
                  res.json(result.recordset)
  
         
  
        } catch (error) {
  
          res.status(500)
  
          res.send(error.message)
  
        }
  
      }



      async addNewUserMaintenance(req , res){
        const now = new Date();  
          try {
            if(req.body.UserCode != null && req.body.UserName != null && req.body.Email != null && req.body.Password) {
              const pool = await poolPromise
              const result = await pool.request()
              .input('userid',sql.Int , req.body.UserId)
              .input('usercode',sql.VarChar (100), req.body.UserCode)
              .input('username',sql.VarChar(100) , req.body.UserName)
              .input('email',sql.VarChar(100),req.body.Email)
              .input('statusid',sql.VarChar(100) , req.body.StatusID)    
              .input('createdby',sql.Int , req.body.CreatedBy)
              .input('createddate',sql.DateTime , now)
              .input('modifiedby',sql.Int , req.body.ModifiedBy)
              .input('modifieddate',sql.DateTime , now)
              .input('password',sql.VarChar(100),req.body.Password)
              .input('companyid',sql.Int,req.body.CompanyID)

             .query(queries.addNewUserMaintenance)
              res.json(result)
            } else {
              res.send('Please fill all the details!')
            }
          } catch (error) {
            res.status(500)
            res.send(error.message)
        }
        } 
        async UpdateUserMaintenance(req , res){
            try {
              if(req.body.UserId != null ) {
              const pool = await poolPromise
                const result = await pool.request()
                .input('userID',sql.Int , req.body.UserId)
                .input('userCode',sql.Int , req.body.UserCode)
                .input('userName',sql.VarChar(100),req.body.UserName)
                .input('statusID',sql.Int,req.body.StatusID)
                .input('email',sql.VarChar(100),req.body.Email)
                .input('createdBy',sql.Int,req.body.CreatedBy)
                .input('createdDate',sql.DateTime,req.body.CreatedDate)
                .input('password',sql.NVarChar(50),req.body.Password)
                .query(queries.UpdateUserMaintenance)
                res.json(result)
              } else {
                res.send('All fields are required!')
              }
            } catch (error) {
              res.status(500)
              res.send(error.message)
            }
          }

          


            async MasterMaintenenceDelete(req , res){
              try {
                const masterid = req.params.id;
                if(masterid != null ) {
                  const pool = await poolPromise
                    const result = await pool.request()
                    .input('mastertypeid',sql.Int,MasterID)
                    .query(queries.MasterMaintenenceDelete)
                    res.json(result)
                  } else {
                    res.send('Please fill all the details!')
                  }
              } catch (error) {
                res.status(500)
                res.send(error.message)
              }
            }

            async getAllchart(req , res){

              try {
        
                // var request = new sql.Request();
        
                const pool = await poolPromise
        
                        const result = await poolConnection.request()
        
                        .query(queries.getAllchart)
        
                        res.json(result.recordset)
        
               
        
              } catch (error) {
        
                res.status(500)
        
                res.send(error.message)
        
              }
        
            }

            async updateMasterTypeDetails(req , res){

              try {
                const now = new Date();  
                if(req.body.MasterTypeID != null) {
        
                const pool = await poolPromise
        
                  const result = await pool.request()
                  .input('MasterTypeIDType',sql.Int,req.body.MasterTypeID)
                  .input('Mastertypedescription',sql.VarChar , req.body.MasterTypeDescription)
                  .input('status',sql.VarChar(200),req.body.Status)
                  .input('CreatedByType',sql.Int,req.body.CreatedBy)
                  .input('CreatedDateType',sql.DateTime,now)
                  .input('ModifiedByType',sql.Int,req.body.ModifiedBy)
                  .input('ModifiedDateType',sql.DateTime,now)
                  .query(queries.updateMasterTypeDetails)
        
                  res.json(result)
        
                } else {
        
                  res.send('All fields are required!')
        
                }
        
              } catch (error) {
        
                res.status(500)
        
                res.send(error.message)
        
              }
        
            }

            async updateMasterMaintenenceDetails(req , res){

              try {
                const now = new Date();  
                if(req.body.MasterID != null ) {
                const pool = await poolPromise
                  const result = await pool.request()
                  .input('masterid',sql.Int,req.body.MasterID)
                  .input('MasterTypeIDType',sql.Int,req.body.MasterTypeID)
                  .input('MasterTypeDescription',sql.VarChar(200) , req.body.Description)
                  .input('status',sql.VarChar(200),req.body.Status)
                  .input('CreatedByType',sql.Int,req.body.CreatedBy)
                  .input('CreatedDateType',sql.DateTime,now)
                  .input('ModifiedByType',sql.Int,req.body.ModifiedBy)
                  .input('ModifiedDateType',sql.DateTime,now)
                  .query(queries.updateMasterMaintenenceDetails)
        
                  res.json(result)
        
                } else {
        
                  res.send('All fields are required!')
        
                }
        
              } catch (error) {
        
                res.status(500)
        
                res.send(error.message)
        
              }
        
            }

    // async getAllData1(req , res){
    //     try {
    //       const pool = await poolPromise
    //         const result = await pool.request()
    //         .query(queries.getAllData)
    //         res.json(result.recordset)
    //     } catch (error) {
    //       res.status(500)
    //       res.send(error.message)
    //     }
    //   }
    // async addNewData(req , res){
    //   try {
    //     if(req.body.name != null && req.body.email != null && req.body.password != null) {
    //       const pool = await poolPromise
    //       const result = await pool.request()
    //       .input('user',sql.VarChar , req.body.name)
    //       .input('email',sql.VarChar , req.body.email)
    //       .input('password',sql.VarChar,req.body.password)
    //       .query(queries.addNewUser)
    //       res.json(result)
    //     } else {
    //       res.send('Please fill all the details!')
    //     }
    //   } catch (error) {
    //     res.status(500)
    //     res.send(error.message)
    // }
    // }
    // async updateData(req , res){
    //   try {
    //     if(req.body.password != null && req.body.name != null) {
    //     const pool = await poolPromise
    //       const result = await pool.request()
    //       .input('newPassword',sql.VarChar , req.body.password)
    //       .input('userName',sql.VarChar,req.body.name)
    //       .query(queries.updateUserDetails)
    //       res.json(result)
    //     } else {
    //       res.send('All fields are required!')
    //     }
    //   } catch (error) {
    //     res.status(500)
    //     res.send(error.message)
    //   }
    // }
    // async deleteData(req , res){
    //   try {
    //     if(req.body.name != null ) {
    //       const pool = await poolPromise
    //         const result = await pool.request()
    //         .input('userName',sql.VarChar,req.body.name)
    //         .query(queries.deleteUser)
    //         res.json(result)
    //       } else {
    //         res.send('Please fill all the details!')
    //       }
    //   } catch (error) {
    //     res.status(500)
    //     res.send(error.message)
    //   }
    // }
}

const controller = new MainController()
module.exports = controller;