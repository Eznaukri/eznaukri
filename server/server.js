const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

// Mock data
const users = [
  { _id: "1", name: "Alice", role: "jobseeker" },
  { _id: "2", name: "Bob", role: "recruiter" }
];
const jobs = [
  { _id: "101", title: "Electrician", description: "Experienced in industrial wiring" },
  { _id: "102", title: "Plumber", description: "Knowledge of pipe fitting" }
];

// Resume generator
app.post("/api/generate-resume", async (req, res) => {
  const { name, experience, skills } = req.body;
  const prompt = `Create a professional resume for:
Name: ${name}
Experience: ${experience}
Skills: ${skills}`;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 500
    });
    res.json({ resume: completion.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Resume screening
app.post("/api/screen-resume", async (req, res) => {
  const { resumeText, jobDescription } = req.body;
  const prompt = `You are an AI recruiter. Compare the following resume and job description. Evaluate suitability, highlight strengths/weaknesses, and give a score out of 100.

Resume:
${resumeText}

Job Description:
${jobDescription}`;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 500
    });
    res.json({ analysis: completion.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin routes
app.get("/api/users", (req, res) => res.json(users));
app.get("/api/jobs", (req, res) => res.json(jobs));
app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const index = users.findIndex(u => u._id === id);
  if (index !== -1) users.splice(index, 1);
  res.json({ success: true });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
