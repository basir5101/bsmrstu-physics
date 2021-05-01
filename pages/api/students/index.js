import Students from '../../../models/students';
import dbConnect from "../../../utils/dbConnect";



dbConnect();


export default async (req, res) =>{

    const {method} = req;

    switch(method){
        case 'GET':
            try {
                const students = await Students.find({});
                res.status(200).json({
                    success: true,
                    data: students
                })
            } catch (error) {
                res.status(500).json({
                    success: false,
                    error: error,
                    message: 'Students not found'
                })
            }
        break;
        case 'POST': 
            try {
                const student = await Students.create(req.body);
                res.status(201).json({
                    success: true,
                    data: student
                })
            } catch (error) {
                res.status(500).json({
                    success: false,
                    error: error,
                    message: 'Student is not created or This student Id is already created'
                })
            }
        break;
        default: 
            res.send(500).json({
                success: false,
                error: error,
                message: 'Internal error'
            })
    }
}
