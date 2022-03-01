// const sql = require('mssql/msnodesqlv8');

//     const config = {
//       database: 'Dev_Training',
//       server: '100.72.130.5',
//       driver: 'msnodesqlv8',
//       options: {
//         userName: 'devTraining_Usr', //update me
//         password: 'C@res0ft'  //update me
//     }
//     } 
//     const poolPromise = new sql.ConnectionPool(config)
//       .connect()
//       .then(pool => {
//         console.log('Connected to MSSQL')
//         return pool
//       })
//       .catch(err => console.log('Database Connection Failed! Bad Config: ', err))
    
//     module.exports = {
//       sql, poolPromise
//     }


const sql = require('mssql/msnodesqlv8')
var config={
    user:'devTraining_Usr',
    password:'C@res0ft',
    database:'Dev_Training',
    server:'100.72.130.5',
    driver:'msnodesqlv8',
    option:{
        trustConnection:true
    },
   

};
const poolPromise = new sql.ConnectionPool(config)

const poolConnection = poolPromise.connect();

// .connect()
// .then(pool => {
//   console.log('Connected to MSSQL');
//   return pool;
// });

// sql.connect(config,function(err){
//     if(err){
//         console.log(err);
//     }
//     var request = new sql.Request();
//     request.query('select * from SLMasterTypeMaintenance',function(err,recordset){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(recordset);
//             console.log("Database connected");
//         }
//     })
    
// })
module.exports=sql;
module.exports=poolConnection;
module.exports=poolPromise;

    
    