const express = require("express");
const { getWorkouts,getWorkout,createWorkout,deleteWorkout,updateWorkout} = require("./../controllers/workoutController.js")
const Workout = require("./../models/Workout.js")
const router = express.Router();

//Get all workouts
//*before adding controllers*
// router.get('/',(req,res)=>{
//     res.json({msg: "Get All workouts"});
// })
//*after adding controller*
router.get('/',getWorkouts)

//GET a single workout
//*before adding controllers*
// router.get('/:id',(req,res) => {
//     res.json({msg: "Get a single workout"});
// })
//*after adding controller*
router.get('/:id',getWorkout)

//POST a new workout
//*before adding controllers*
// router.post('/',async (req,res) => {
//     const {title,load,reps} = req.body
//     try {
//         const workout = await Workout.create({title,load,reps})
//         res.status(200).json(workout)
//     }catch(error){
//         res.status(400).json({error: error.message})
//     }
//     res.json({msg: "POS a new workout"});
// })
//*after adding controller*
router.post('/',createWorkout)

//DELETE a workout 
//*before adding controller*
// router.delete('/:id',(req,res)=>{
//     res.json({msg: 'DELETE a workout'})
// })
//*after adding controller*
router.delete('/:id',deleteWorkout)

//UPDATE a workout
//*before adding controller*
// router.patch('/:id',(req,res) => {
//     res.json({msg: 'UPDATE  a workout'})
// })
//*after adding controller*
router.patch('/:id',updateWorkout)

module.exports = router