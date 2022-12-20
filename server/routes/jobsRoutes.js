const {
  getAllJobs,
  postJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobsController");
const express = require("express");
const router = express.Router();
router.route("/postJob").post(postJob);
router.route("/getAllJobs").get(getAllJobs);
router.route("/deleteJob").delete(deleteJob);
router.route("/updateJob").patch(updateJob);
module.exports = router;
