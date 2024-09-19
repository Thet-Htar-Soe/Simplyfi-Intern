import { useState } from "react";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, Table, TableCell, TableRow } from "docx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaFileWord, FaFilePdf } from "react-icons/fa"; // Import icons

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const data = [
    { name: "John Doe", age: 28.0, job: "Developer" },
    { name: "Jane Smith", age: 34.506, job: "Designer" },
    { name: "Mark Johnson", age: 45.34, job: "Manager" },
  ];

  console.log("this si format");

  const generateDocx = () => {
    const tableRows = data.map(
      (item) =>
        new TableRow({
          children: [
            new TableCell({ children: [new Paragraph(item.name)] }),
            new TableCell({ children: [new Paragraph(item.age.toString())] }),
            new TableCell({ children: [new Paragraph(item.job)] }),
          ],
        })
    );

    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({ text: "Employee Table", heading: "Heading1" }),
            new Table({
              rows: [
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph("Name")] }),
                    new TableCell({ children: [new Paragraph("Age")] }),
                    new TableCell({ children: [new Paragraph("Job")] }),
                  ],
                }),
                ...tableRows,
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "EmployeeTable.docx");
    });
  };

  const generatePdf = () => {
    const input = document.getElementById("table-to-pdf");
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 10, 10, 100, 100);
        pdf.save("EmployeeTable.pdf");
      });
    } else {
      console.error("input cannot be found");
    }
  };

  const handleDownload = (option: any) => {
    if (option === "docx") {
      generateDocx();
    } else if (option === "pdf") {
      generatePdf();
    }
    setShowModal(false);
    console.log("heyy");
  };

  return (
    <div style={{ margin: "0px 30px" }}>
      <h1>Employee Table</h1>
      <button onClick={() => setShowModal(true)} style={{ margin: "30px 0px" }}>
        Download Table
      </button>
      <table border={1} id="table-to-pdf">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.job}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h2>Select Format to Download</h2>
            <div style={iconContainer}>
              <div style={iconWrapper} onClick={() => handleDownload("docx")}>
                <FaFileWord size={60} color="blue" />
                <p>Download as .docx</p>
              </div>
              <div style={iconWrapper} onClick={() => handleDownload("pdf")}>
                <FaFilePdf size={60} color="red" />
                <p>Download as .pdf</p>
              </div>
            </div>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for modal box
const modalOverlay: any = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};
const modalContent: any = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
};

const iconContainer: any = {
  display: "flex",
  justifyContent: "space-around",
  margin: "20px 0",
};

const iconWrapper: any = {
  cursor: "pointer",
  textAlign: "center",
};

export default App;
