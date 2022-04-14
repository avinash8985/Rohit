const express = require('express');
const Course = require("../models/courses");

const router = express.Router();


router.post("/addCourse",async(req,res) => {
    try {
        if(req.isAuth){
            if(req.admin){
                const data = await Course.create({
                    name: req.body.name,
                    description: req.body.description,
                    timings: req.body.timings,
                    duration: req.body.duration,
                    fees: req.body.fees,
                    techStack: req.body.techStack,
                    tags: req.body.tags,
                })
            }
            else{
                res.send("Unauthorized Access")
                return;
            }
        }
        else{
            res.send("Please Login");
            return;
        }
    }
    catch(err) {
        res.send(err);
        return;
    }
})


router.post("/modify/:courseId", async(req,res)=>{
    try{
        if(req.isAuth){
            if(req.admin){
           const data = await email.course.findByIdAndUpdate(req.param.courseId,{
                  name: req.body.name,
                  description: req.body.description,
                  timings: req.body.timings,
                  duration: req.body.duration,
                  fees: req.body.fees,
                  techStack: req.body.techStack,
                  tags: req.body.tags,
           
           })
           res.send(data);
           return;
        }
        else{
            res.send("unauthorized Access")
        }
    }
        
        else{
            res.send("please login");
            return;
        }
    }

    catch(err){
        res.send(err);
        return;
    }
  
})

router.get("/filterCourse", async(req,res)=>{
    try{
        const data=[];
        const data2={};
        const filters = req.query;
        if(filters){
                const timings= filters.timings;
                const duration= filters.duration;
                const fees= filters.fees;
                const tags= filters.tags;
                const techStack= filters.techStack;
                let temp;

                if(timings){
                     temp= await Course.find({timings})
                    data.push(...temp);
                    data2.timings=temp;
                    data2.fees=temp;
                }
                if(fees){
                    temp= await Course.find({fees})
                    data.push(...temp);

                }
                if(tags){
                    temp = await Course.find({
                        tags:{$in:tags}
                    });
                    data.push(...temp);
                    data2.tags=temp;
                }
                if(techStack){
                    temp = await Course.find({
                        techStack:{$in:tags}
                    });
                    data.push(...temp);
                    data2.techStack=temp;
                }
        }else{
           data= await Course.find({});
           res.send(data);
           return;
        }
    }
    catch(err){
        res.send(err);
        return;
    }
})


module.exports = router;