import React, { useState, useEffect } from "react";
import Layout from "@/components/eduSkills/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download, RefreshCw } from "lucide-react";
import axios from "axios";

const Enrolled= () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "fullName", direction: "ascending" });

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:9090/enrolls");
      setEnrollments(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching enrollments:", err);
      setError("Failed to load enrollment data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedEnrollments = React.useMemo(() => {
    const sortableEnrollments = [...enrollments];
    if (sortConfig.key) {
      sortableEnrollments.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableEnrollments;
  }, [enrollments, sortConfig]);

  const filteredEnrollments = sortedEnrollments.filter(
    enrollment =>
      enrollment.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrollment.emailAddress?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrollment.phoneNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrollment.educationLevel?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrollment.experiance?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrollment.learningGoals?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToCSV = () => {
    const headers = ["Full Name", "Email Address", "Phone Number", "Education Level", "Experience", "Learning Goals"];
    const data = filteredEnrollments.map(enrollment => [
      enrollment.fullName,
      enrollment.emailAddress,
      enrollment.phoneNumber,
      enrollment.educationLevel,
      enrollment.experiance,
      enrollment.learningGoals
    ]);
    
    const csvContent = [
      headers.join(","),
      ...data.map(row => row.map(cell => `"${cell || ""}"`).join(","))
    ].join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "enrolled_students.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Card className="shadow-md">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <CardTitle className="text-2xl">Enrolled Students</CardTitle>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search enrollments..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={fetchEnrollments}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
                <Button onClick={exportToCSV}>
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                  <p className="mt-2 text-gray-500">Loading enrollments...</p>
                </div>
              </div>
            ) : error ? (
              <div className="text-center py-8 text-red-500">
                <p>{error}</p>
                <Button variant="outline" onClick={fetchEnrollments} className="mt-4">
                  Try Again
                </Button>
              </div>
            ) : filteredEnrollments.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No enrollments found{searchTerm ? " matching your search" : ""}.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th 
                        className="px-4 py-3 text-left font-medium text-gray-600 cursor-pointer"
                        onClick={() => handleSort("fullName")}
                      >
                        Full Name
                        {sortConfig.key === "fullName" && (
                          <span className="ml-1">{sortConfig.direction === "ascending" ? "↑" : "↓"}</span>
                        )}
                      </th>
                      <th 
                        className="px-4 py-3 text-left font-medium text-gray-600 cursor-pointer"
                        onClick={() => handleSort("emailAddress")}
                      >
                        Email Address
                        {sortConfig.key === "emailAddress" && (
                          <span className="ml-1">{sortConfig.direction === "ascending" ? "↑" : "↓"}</span>
                        )}
                      </th>
                      <th 
                        className="px-4 py-3 text-left font-medium text-gray-600 cursor-pointer"
                        onClick={() => handleSort("phoneNumber")}
                      >
                        Phone Number
                        {sortConfig.key === "phoneNumber" && (
                          <span className="ml-1">{sortConfig.direction === "ascending" ? "↑" : "↓"}</span>
                        )}
                      </th>
                      <th 
                        className="px-4 py-3 text-left font-medium text-gray-600 cursor-pointer"
                        onClick={() => handleSort("educationLevel")}
                      >
                        Education Level
                        {sortConfig.key === "educationLevel" && (
                          <span className="ml-1">{sortConfig.direction === "ascending" ? "↑" : "↓"}</span>
                        )}
                      </th>
                      <th 
                        className="px-4 py-3 text-left font-medium text-gray-600 cursor-pointer"
                        onClick={() => handleSort("experiance")}
                      >
                        Experience
                        {sortConfig.key === "experiance" && (
                          <span className="ml-1">{sortConfig.direction === "ascending" ? "↑" : "↓"}</span>
                        )}
                      </th>
                      <th 
                        className="px-4 py-3 text-left font-medium text-gray-600 cursor-pointer"
                        onClick={() => handleSort("learningGoals")}
                      >
                        Learning Goals
                        {sortConfig.key === "learningGoals" && (
                          <span className="ml-1">{sortConfig.direction === "ascending" ? "↑" : "↓"}</span>
                        )}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEnrollments.map((enrollment, index) => (
                      <tr 
                        key={index} 
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="px-4 py-3">{enrollment.fullName}</td>
                        <td className="px-4 py-3">{enrollment.emailAddress}</td>
                        <td className="px-4 py-3">{enrollment.phoneNumber}</td>
                        <td className="px-4 py-3">{enrollment.educationLevel}</td>
                        <td className="px-4 py-3">{enrollment.experiance}</td>
                        <td className="px-4 py-3 max-w-xs truncate">{enrollment.learningGoals}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div className="mt-4 text-sm text-gray-500 text-right">
              Showing {filteredEnrollments.length} of {enrollments.length} enrollments
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Enrolled;