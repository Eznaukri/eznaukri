import React, { useState } from "react";

export default function Profile() {
  const [form, setForm] = useState({
    name: "", gender: "", phone: "", city: "", state: "",
    education: "", experience: "", category: "", specialization: "",
    salary: "", notice: "", cv: null
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFile = e => {
    setForm(prev => ({ ...prev, cv: e.target.files[0] }));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Create Your Profile</h2>
      <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="phone" placeholder="Phone" onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="city" placeholder="City" onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="state" placeholder="State" onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="education" placeholder="Highest Education" onChange={handleChange} className="border p-2 w-full mb-2" />
      <textarea name="experience" placeholder="Experience" onChange={handleChange} className="border p-2 w-full mb-2" />
      <select name="category" onChange={handleChange} className="border p-2 w-full mb-2">
        <option value="">Select Category</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Sales">Sales</option>
        <option value="Developer">Developer</option>
      </select>
      <select name="specialization" onChange={handleChange} className="border p-2 w-full mb-2">
        <option value="">Select Specialization</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="B2B Sales">B2B Sales</option>
        <option value="Payroll">Payroll</option>
      </select>
      <input name="salary" placeholder="Expected Salary" onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="notice" placeholder="Notice Period" onChange={handleChange} className="border p-2 w-full mb-2" />
      <input type="file" onChange={handleFile} className="mb-2" />
      <button className="bg-green-600 text-white p-2 w-full">Save Profile</button>
    </div>
  );
}
