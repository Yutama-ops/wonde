import React from 'react';
import { useFetchTeacher } from './hooks/useFetchTeacher';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import Table from './components/Table/Table';

const MyApp = () => {
  const { data, meta, error, currentPage, goToNextPage, goToPreviousPage } = useFetchTeacher();

  if (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <div className='mt-4 container'>

      <h1 className='text-center'>Teacher Information</h1>
      <h2 className='text-center'>School: Wonde Testing School / A1930499544</h2>

      <Divider />

      <div className='row justify-content-center'>
        <div className='col-md-12'>
          <Table teacherData={data} />
        </div>
      </div>

      <div className='mt-3 row d-flex justify-content-between'>
        <div className='col-md-3'>
          <Button label="Previous" onClick={goToPreviousPage} disabled={!meta?.pagination?.previous} />
        </div>
        <div className='col-md-3 text-end'>
          <Button label="Next" onClick={goToNextPage} disabled={!meta?.pagination?.next} />
        </div>
      </div>

      <div className='mt-3 row'>
        <div className='col-md-12 text-end'>
          <span className='mx-2'>Page {currentPage}</span>
        </div>
      </div>

      <Divider />
    </div>
  );
}

export default MyApp;
