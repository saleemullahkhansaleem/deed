import React from "react";
import Container from "../Container";

const emergencyNumbers = [
  { name: "Police Helpline", number: "15" },
  { name: "Terrorism Helpline", number: "1717" },
  { name: "Electricity Complaint", number: "119" },
  { name: "Fire Brigade", number: "16" },
  { name: "ISPR Helpline", number: "1135" },
  { name: "SUI Gas Complaint", number: "1199" },
  { name: "Rescue Services", number: "1122" },
  { name: "Motorway Police", number: "130" },
  { name: "PIA Inquiry", number: "114" },
  { name: "Edhi Ambulance", number: "115" },
  { name: "Cyber Rescue", number: "9911" },
  { name: "Bomb Disposal Squad", number: "109" },
];

const EmergencyNumbers = () => {
  // Split the array into chunks of 4
  const splitArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const emergencyGroups = splitArray(emergencyNumbers, 4);

  return (
    <Container className="px-4 py-8">
      <h1 className="text-3xl text-center py-4 font-bold text-secondary">
        Emergency Numbers
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {emergencyGroups.map((group, index) => (
          <div
            key={index}
            className="table bg-background p-6 rounded-md shadow-md"
          >
            {group.map((item, idx) => (
              <div key={idx} className="grid-item py-2 flex justify-between">
                <strong>{item.name}:</strong> <span>{item.number}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default EmergencyNumbers;
