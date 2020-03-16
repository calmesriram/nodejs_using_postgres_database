const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("student.csv");
// let stream = fs.createReadStream("test.csv");
let csvData = [];
let csvStream = fastcsv
    .parse()
    .on("data", function (data) {
        csvData.push(data);
    })
    .on("end", function () {
        // remove the first line: header
        csvData.shift();

        // create a new connection to the database
        // const pool = new Pool({
        //     user: 'me',
        //     host: 'localhost',
        //     database: 'api',
        //     password: 'password',
        //     port: 5432,
        //   })

        const pool = new Pool({
            user: 'postgres',
            host: '10.10.0.250',
            database: 'erp',
            password: 'ibm123$',
            port: 5432,
        })
        var a = new Date(Date.now())
         var mydate = a.toISOString()        
        //  working
        //  const query =`INSERT INTO sriram3 (id,MANID,student_name,regno,rollno,seat_type,quota_type,frequency,stay,candidate_name,candidate_initial,gender,dob,mobile1,mobile2,phone,aadhar_no,res_address)  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)`;        
        // const query =`INSERT INTO sriram3 (id,MANID,student_name,regno,rollno,seat_type,quota_type,frequency,stay,candidate_name,candidate_initial,gender,dob,mobile1,mobile2,phone,aadhar_no,res_address,res_pincode,study_register_no,study_yearofpass,study_location,study_pincode,study_medium,mark,regular_lateral,blood_group,nationality,father_name)  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29)`;        

        // const query =`INSERT INTO sriram3 (id,MANID,student_name,regno,rollno,seat_type,quota_type,frequency,stay,candidate_name,candidate_initial,gender,dob,mobile1,mobile2,phone,aadhar_no,res_address,res_pincode,study_register_no,study_yearofpass,study_location,study_pincode,study_medium,mark,regular_lateral,blood_group,nationality,father_name,father_occupation,father_number,father_occupation_type,mother_name,mother_occupation,mother_number,mother_occupation_type,guardian_name,guardian_occupation,guardian_number)  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39)`;     

         const query =`INSERT INTO sriram3 (

            id,MANID,student_name,regno,rollno,seat_type,quota_type,frequency,stay,candidate_name,
            candidate_initial,gender,dob,mobile1,mobile2,phone,aadhar_no,res_address,res_pincode,study_register_no,
            study_yearofpass,study_location,study_pincode,study_medium,mark,regular_lateral,blood_group,nationality,father_name,father_occupation,
            father_number,father_occupation_type,mother_name,mother_occupation,mother_number,mother_occupation_type,guardian_name,guardian_occupation,guardian_number,guardian_occupation_type,
            govt_scholarship,sc_st_sca_scholarship,first_graduate,scholarship_comment,TNEA_no,consortium_no,TANCET_no,dateOf_admission,hostelSS,typeof_counselling,
            BoardofExam_id,admitted_status_id,branch_id_id,college_id_id,community_id_id,creference_id_id,degree_id_id,home_state_id,period_id,qualification_id_id,
            res_district_id,res_post_id,res_state_id,res_taluk_id,room_type_id_id,stage_id_id,study_district_id,study_school_id,study_state_id,study_taluk_id)             
            VALUES (
                $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,
                $11,$12,$13,$14,$15,$16,$17,$18,$19,$20,
                $21,$22,$23,$24,$25,$26,$27,$28,$29,$30,
                $31,$32,$33,$34,$35,$36,$37,$38,$39,$40,
                $41,$42,$43,$44,$45,$46,$47,$48,$49,$50,
                $51,$52,$53,$54,$55,$56,$57,$58,$59,$60,
                $61,$62,$63,$64,$65,$66,$67,$68,$69,$70)`;

                // ,$31,$32,$33,$34,$35,$36,$37,$38,$39
        //  const query =`INSERT INTO sriram3 (id,MANID,student_name,regno,rollno,seat_type,quota_type,frequency,stay,candidate_name,candidate_initial,gender,dob,mobile1,mobile2,phone,aadhar_no,res_address,res_pincode,study_register_no,study_yearofpass,study_location,study_pincode,study_medium,mark,regular_lateral)  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26)`;
        //  const query =`INSERT INTO sriram3 (id, MANID, student_name, regno, rollno, seat_type, quota_type, frequency, stay, candidate_name, candidate_initial, gender, dob, mobile1, mobile2, phone, aadhar_no, res_address, res_pincode, study_register_no, study_yearofpass, study_location, study_pincode, study_medium, mark, regular_lateral, blood_group, nationality, father_name, father_occupation, father_number, father_occupation_type, mother_name, mother_occupation, mother_number, mother_occupation_type, guardian_name, guardian_occupation, guardian_number, guardian_occupation_type, govt_scholarship, sc_st_sca_scholarship, first_graduate, scholarship_comment, TNEA_no, consortium_no, TANCET_no, dateOf_admission, hostelSS, typeof_counselling, BoardofExam_id, admitted_status_id, branch_id_id, college_id_id, community_id_id, creference_id_id, degree_id_id, home_state_id, period_id, qualification_id_id, res_district_id, res_post_id, res_state_id, res_taluk_id, room_type_id_id, stage_id_id, study_district_id, study_school_id, study_state_id, study_taluk_id)  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58,$59,$60,$61,$62,$63,$64,$65,$66,$67,$68,$69,$70)`;

        // const query =`INSERT INTO ram (id,testdate,name,dept,item,mydate)  VALUES ($1,CURRENT_TIMESTAMP,$2,$3,$4,now())`;        
        // const query =`INSERT INTO ram (id,testdate,name,dept,item,mydate)  VALUES ($1,$2,$3,$4,$5,now())`;        
        
        pool.connect((err, client, done) => {
            if (err){
            //    throw err;
               console.log(err)
               return;
            }


            try {
                csvData.forEach(async row => {
                    // console.log(row)
                  await client.query(query, row, (err, res) => {
                        if (err) {
                            console.log(err.stack);
                        } else {
                            console.log("inserted " + res.rowCount + " row:", row);
                        }
                    });
                });
            } finally {
                done();
            }
        });
    });

stream.pipe(csvStream);







