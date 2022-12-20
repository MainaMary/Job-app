const postJob = (req, res) => {
  res.status(200).send("Job created");
};
const getAllJobs = (req, res) => {
  res.status(200).send("Job fetched");
};
const deleteJob = (req, res) => {
  res.status(200).send("Job deleted");
};
const updateJob = (req, res) => {
  res.status(200).send("Job updated");
};
module.exports = { postJob, getAllJobs, deleteJob, updateJob };
