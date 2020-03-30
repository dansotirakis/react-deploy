import React, { forwardRef } from 'react';
import { useRouter } from 'next/router';
import 'isomorphic-fetch';
import { Box } from '@material-ui/core';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Home from '../../commons/Icons/Home';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};


const Coronavirus = () => {
  const router = useRouter();
  return (
    <Box align="center" mt={2}>
      <Box onClick={() => router.push('/index')}>
        <Home/>
      </Box>
      <h1>Coronavírus</h1>
      <Box>
        <MaterialTable
          title="Coronavírus"
          icons={tableIcons}
          options={{
            paging: false,
            search: true
          }}
          columns={[
            { title: 'País', field: 'Country' },
            { title: 'Novos Confirmados', field: 'NewConfirmed' },
            { title: 'Total de Confirmados', field: 'TotalConfirmed' },
            { title: 'Total de Mortos', field: 'TotalDeaths' },
            { title: 'Sobreviventes', field: 'TotalRecovered' }
          ]}
          data={() =>
            new Promise((resolve) => {
              let url = 'https://api.covid19api.com/summary';
              fetch(url)
                .then(response => response.json())
                .then(result => {
                  resolve({
                    data: result.Countries
                  });
                });
            })
          }
        />
      </Box>
    </Box>
  );
};

export default Coronavirus;
