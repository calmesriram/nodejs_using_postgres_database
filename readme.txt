api=#  GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO <me>;
GRANT
api=# GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO <me>;
GRANT


me means role of user

restful resference 
https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/





const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("test.csv");
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
     


        const query =`INSERT INTO ram (id,name,dept,item)  VALUES ($1,$2,$3,$4)`;

        pool.connect((err, client, done) => {
            if (err) throw err;

            try {
                csvData.forEach(async row => {
                    console.log(row)
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












CREATE TABLE sriram3 (
	id int NULL,
	MANID varchar(250) NULL,
	student_name varchar(250) NULL,
	regno varchar(250) NULL,
	rollno varchar(250) NULL,
	seat_type varchar(7) NOT NULL,
	quota_type varchar(50) NULL,
	frequency varchar(50) NULL,
	stay varchar(50) NULL,
	candidate_name varchar(150) NULL,
	candidate_initial varchar(50) NULL,
	gender varchar(15) NULL,
	dob date NULL,
	mobile1 varchar(50) NULL,
	mobile2 varchar(50) NULL,
	phone varchar(50) NULL,
	aadhar_no varchar(50) NULL,
	res_address varchar(250) NULL,
	res_pincode int4 NULL,
	study_register_no varchar(50) NULL,
	study_yearofpass varchar(10) NULL,
	study_location varchar(50) NULL,
	study_pincode int4 NULL,
	study_medium varchar(10) NULL,
	mark text NULL,
	regular_lateral varchar(15) NULL,
	blood_group varchar(10) NULL,
	nationality varchar(50) NULL,
	father_name varchar(50) NULL,
	father_occupation varchar(150) NULL,
	father_number varchar(150) NULL,
	father_occupation_type varchar(150) NULL,
	mother_name varchar(150) NULL,
	mother_occupation varchar(150) NULL,
	mother_number varchar(150) NULL,
	mother_occupation_type varchar(150) NULL,
	guardian_name varchar(150) NULL,
	guardian_occupation varchar(150) NULL,
	guardian_number varchar(150) NULL,
	guardian_occupation_type varchar(150) NULL,
	govt_scholarship varchar(150) NULL,
	sc_st_sca_scholarship varchar(5) NULL,
	first_graduate varchar(50) NULL,
	scholarship_comment varchar(250) NULL,
	TNEA_no varchar(250) NULL,
	consortium_no varchar(250) NULL,
	TANCET_no varchar(250) NULL,
	dateOf_admission int4 NULL,
	hostelSS date NULL,
	typeof_counselling varchar(50) NULL,
	BoardofExam_id int4 NULL,
	admitted_status_id int4 NULL,
	branch_id_id int4 NULL,
	college_id_id int4 NULL,
	community_id_id int4 NULL,
	creference_id_id int4 NULL,
	degree_id_id int4 NULL,
	home_state_id int4 NULL,
	period_id int4 NULL,
	qualification_id_id int4 NULL,
	res_district_id int4 NULL,
	res_post_id int4 NULL,
	res_state_id int4 NULL,
	res_taluk_id int4 NULL,
	room_type_id_id int4 NULL,
	stage_id_id int4 NULL,
	study_district_id int4 NULL,
	study_school_id int4 NULL,
	study_state_id int4 NULL,
	study_taluk_id int4 NULL);

select * from sriram3;
drop table sriram3;