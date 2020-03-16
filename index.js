const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const fs = require("fs");
const fastcsv = require("fast-csv");
const port = 3000
const Pool = require('pg').Pool



// let stream = fs.createReadStream("student.csv");
// let csvData = [];
// let csvStream = fastcsv
//   .parse()
//   .on("data", function(data) {
//     csvData.push(data);
    
//   })
//   .on("end", function() {
//     // remove the first line: header
//     csvData.shift();
//     const pool = new Pool({
//         user: 'postgres',
//         host: '10.10.0.250',
//         database: 'erp',
//         password: 'ibm123$',
//         port: 5432,
//       })
//     //   console.log(pool)
//       const query =
//         `(id,MANID, student_name, regno, rollno, seat_type, quota_type, frequency, stay, candidate_name, candidate_initial, gender, dob, mobile1, mobile2, phone, aadhar_no, res_address, res_pincode, study_register_no, study_yearofpass, study_location, study_pincode, study_medium, mark, regular_lateral, blood_group, nationality, father_name, father_occupation, father_number, father_occupation_type, mother_name, mother_occupation, mother_number, mother_occupation_type, guardian_name, guardian_occupation, guardian_number, guardian_occupation_type, govt_scholarship, sc_st_sca_scholarship, first_graduate, scholarship_comment, "TNEA_no", consortium_no, "TANCET_no", "dateOf_admission", "hostelSS", typeof_counselling, "BoardofExam_id", admitted_status_id, branch_id_id, college_id_id, community_id_id, creference_id_id, degree_id_id, home_state_id, period_id, qualification_id_id, res_district_id, res_post_id, res_state_id, res_taluk_id, room_type_id_id, stage_id_id, study_district_id, study_school_id, study_state_id, study_taluk_id) 
        
//          VALUES('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);`
      
//       pool.connect((err, client, done) => {
//         if (err) throw err;
//         try {
//           csvData.forEach(row => {
//             //   console.log("sriram",row)
//             client.query(query, row, (err, res) => {
//               if (err) {
//                 console.log(err.stack);
//               } else {
//                 console.log("inserted " + res.rowCount + " row:", row);
//               }
//             });
//           });
//         } finally {
//           done();
//         }
//       });

//     // connect to the PostgreSQL database
//     // save csvData
//   });

// stream.pipe(csvStream);

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})