import { team } from "../Model/teamModel.js";

export const getTeam = async (req, res) => {
  const teamdata = await team.find({ _id: req.params.id });
  const fullTeamDetails = await team
    .findOne({ _id: req.params.id })
    .populate("teamMembers");
  res.send(fullTeamDetails);
};

export const allTeams = async (req, res) => {
  const teamdata = await team.find();
  res.send(teamdata);
};

export const postTeam = async (req, res) => {
  const data = req.body;
  if (!data.teamName || !data.teamMembers) {
    return res.status(400).send({ message: "please Fill all the feilds" });
  }
  var users = JSON.parse(req.body.teamMembers);
  if (users.length < 1) {
    return res
      .status(400)
      .send("More than 1 users are required to form a group chat");
  }

  try {
    const newTeam = await team.create({
      teamName: req.body.teamName,
      teamMembers: users,
    });

    const fullTeamDetails = await team
      .findOne({ _id: newTeam._id })
      .populate("teamMembers");
    res.send(fullTeamDetails);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
};
