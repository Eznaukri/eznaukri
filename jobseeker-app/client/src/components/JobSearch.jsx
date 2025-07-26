import React, { useState } from "react";

export default function JobSearch() {
  const [filter, setFilter] = useState({ category: "", specialization: "", city: "" });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search Jobs</h2>
      <input placeholder="City" className="border p-2 w-full mb-2" onChange={e => setFilter({ ...filter, city: e.target.value })} />
      <select className="border p-2 w-full mb-2" onChange={e => setFilter({ ...filter, category: e.target.value })}>
        <option value="">Select Category</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Sales">Sales</option>
        <option value="Developer">Developer</option>
      </select>
      <select className="border p-2 w-full mb-2" onChange={e => setFilter({ ...filter, specialization: e.target.value })}>
        <option value="">Select Specialization</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="B2B Sales">B2B Sales</option>
        <option value="Payroll">Payroll</option>
      </select>
      <button className="bg-blue-600 text-white p-2 w-full">Search</button>
    </div>
  );
}
