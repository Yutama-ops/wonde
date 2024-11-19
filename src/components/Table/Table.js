import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './Table.css';


const Table = (props) => {
  console.log('props', props);

  // Extract work email from contact details.
  const emailTemplate = (rowData) => {
    return rowData.contact_details?.data?.emails?.work || 'N/A';
  };

  // Convert starting date to sydney timezone.
  const employmentStartDateTemplate = rowData => {
    const dateStr = rowData.employment_details?.data?.employment_start_date?.date;
    if (!dateStr) return 'N/A';

    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-AU', {
      timeZone: 'Australia/Sydney',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(date);
  };

  // Count the number of classes.
  const classesTemplate = rowData => rowData.classes?.data?.length || 0;

  // Filter out non-teaching staff.
  const filteredData = props.teacherData?.filter(item => item.employment_details?.data?.teaching_staff === true);


  return (
    <div>
      {filteredData && (
        <DataTable value={filteredData} className="p-datatable-lg custom-datatable">
          <Column field="title" header="Title" />
          <Column field="surname" header="Surname" />
          <Column field="forename" header="Forename" />
          <Column field="legal_surname" header="Legal Surname" />
          <Column field="legal_forename" header="Legal Forename" />
          <Column header="Work Email" body={emailTemplate} />
          <Column header="Employment Start Date" body={employmentStartDateTemplate} />
          <Column header="Number of Classes" body={classesTemplate} />
        </DataTable>
      )}
    </div>
  );
}

export default Table;
