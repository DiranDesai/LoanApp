import AsyncHandler from "express-async-handler";
import Loan from "../models/Loan.js";
import User from "../models/User.js"
import EmployementInfo from "../models/EmployementInfo.js"

const applyLoan = AsyncHandler(async(req, res) => {
    const {personalInfo, loanInfo, employmentInfo} = req.body

    const currentUser = await User.findOne({where: {id: req.user.id}})

    if (!currentUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    let nrc = ""

    for(let nrcPart in personalInfo.nrc){
        nrc += personalInfo.nrc[nrcPart]
    }

    currentUser.nationalId = nrc
    currentUser.gender = personalInfo.gender
    currentUser.birthDay = personalInfo.dob
    currentUser.province = personalInfo.province
    currentUser.district = personalInfo.district

    await currentUser.save()

    




    res.status(200).json({ message: 'Application submitted successfully', currentUser });
    // console.log(loanInfo)
    // console.log(req.user)
})



export {applyLoan}