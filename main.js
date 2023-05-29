// var countryFilterParams = {
//   filterOptions: ['contains'],
//   textMatcher: ({ value, filterText }) => {
//     var aliases = {
//       usa: 'united states',
//       holland: 'netherlands',
//       niall: 'ireland',
//       sean: 'south africa',
//       alberto: 'mexico',
//       john: 'australia',
//       xi: 'china',
//     };
//     var literalMatch = contains(value, filterText || '');

//     return !!literalMatch || !!contains(value, aliases[filterText || '']);
//   },
//   trimInput: true,
//   debounceMs: 1000,
// };

// const gridOptions = {
//   columnDefs: [
//     {   
//       headerName: 'Athlete Details',
//       suppressSizeToFit: true,
//       enableRowGroup: true,
//       rowGroupIndex: 0,
//       children:[
//         {field: 'athlete', minWidth: 220,filter: 'agTextColumnFilter',width: 150,sortable: true,sort:'desc',hide:false  }
//       ]
//     },
//     { 
//       headerName: 'country Details',
//       enableRowGroup: true,


//       children:[
//         { field: 'country', minWidth: 200 },
//         { field: 'year'  , filter: countryFilterParams,} ,
//         { field: 'sport', minWidth: 200 },
//       ]
//     },
//     { 
//       headerName: 'country Details',
//       enableRowGroup: true,


//       children:[
//         { field: 'gold' },
//         { field: 'silver' },
//         { field: 'bronze' },
//       ]
//     },
//     // { field: 'country', minWidth: 200 },
//   ],

//   defaultColDef: {
//     flex: 1,
//     minWidth: 100,
//     sortable: true, 
//     animateRows: true,  
//     resizable: true,
//   },
//     // groupHeaderHeight: 58,

//     // Label columns
//     headerHeight: 50,

    
//   // use the server-side row model instead of the default 'client-side'
//   rowModelType: 'serverSide',
// };
// setTimeout(()=>{
//     const savedState = gridOptions.columnApi.getColumnState();
//     console.log(savedState);
//     gridOptions.columnApi.applyColumnState({ state: savedState });

// },2000)

// function columnState(){
//   // setTimeout(()=>{
//     const savedState = gridOptions.columnApi.getColumnState();
//     savedState[0].hide=true;

//     console.log(savedState);
//     gridOptions.columnApi.applyColumnState({ state: savedState });

// // },2000)
// }


//   // setup the grid after the page has finished loading
//   document.addEventListener('DOMContentLoaded', function () {
//     let gridDiv = document.querySelector('#myGrid');
//     new agGrid.Grid(gridDiv, gridOptions);
  
//     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//       .then((response) => response.json())
//       .then(function (data) {
//         console.log(data)
//         // setup the fake server with entire dataset
//         const fakeServer = createFakeServer(data);
  
//         // create datasource with a reference to the fake server
//         const datasource = createServerSideDatasource(fakeServer);
  
//         // register the datasource with the grid
//         gridOptions.api.setServerSideDatasource(datasource);
//         // gridOptions.api.setColumnDefs(data);
//       });
//   });


// ///////////////////////////////////////////////////////////////////////////////////
//   function createServerSideDatasource(server) {
//     return {
//       getRows: (params) => {
//         console.log('[Datasource] - rows requested by grid: ', params.request);
        
//         // get data for request from our fake server
//         const response = server.getData(params.request);
//         // simulating real server call with a 500ms delay
//         setTimeout(function () {
//           if (response.success) {
//             // supply rows for requested block to grid
//             console.log({ rowData: response.rows });
//             params.success({ rowData: response.rows });
//           } else {
//             params.fail();
//           }
//         }, 500);
//       },
//     };
//   }

// ///////////////////////////////////////////////////////////////////////////////////
//   function createFakeServer(allData) {
//     return {
//       getData: (request) => {
//         // in this simplified fake server all rows are contained in an array
//         const requestedRows = allData.slice(request.startRow, request.endRow);
//         console.log(request.startRow, request.endRow);
        
//         return {
//           success: true,
//           rows: requestedRows,
//         };
//       },
//     };
//   }
//   ///////////////////////////////////////////////////////////////////////////////////


//   // let url = "./file.json"; // ⚠️ whatever url that accept a post request
//   // let newUser = { username: username, xp: 0 };
//   // await fetch(url, { method: "POST", body: JSON.stringify(newUser) });
//   // renderUsers();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//##############################################################################################################


var filterParams = {
  comparator: (filterLocalDateAtMidnight, cellValue) => {

    console.log("==>filterLocalDateAtMidnight : " ,filterLocalDateAtMidnight)
    // console.log("==>filterLocalDateAtMidnight : " ,filterLocalDateAtMidnight.getTime())
    // console.log("==> cellValue : " ,cellValue)

    var dateAsString = cellValue;

    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split('/');
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );

    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }

    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
};

/** @type {(import('ag-grid-community').ColDef | import('ag-grid-community').ColGroupDef )[]} */
const columnDefs = [
  { field: 'athlete' },
  { field: 'age', filter: 'agNumberColumnFilter', maxWidth: 100 },
  {
    field: 'date',
    filter: 'agDateColumnFilter',
    filterParams: filterParams, 
  },
  { field: 'country', filter: 'agSetColumnFilter' },
  { field: 'sport', filter: 'agMultiColumnFilter' },
  { field: 'gold', filter: 'agNumberColumnFilter' },
  { field: 'silver', filter: 'agNumberColumnFilter' },
  { field: 'bronze', filter: 'agNumberColumnFilter' },
  { field: 'total', filter: false },
];

/** @type {import('ag-grid-community').GridOptions} */
const gridOptions = {
  columnDefs: columnDefs,
  defaultColDef: {
    flex: 1,
    minWidth: 150,
    filter: 'agTextColumnFilter',
    menuTabs: ['filterMenuTab'],
  },
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);

  fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then((response) => response.json())
    .then((data) => gridOptions.api.setRowData(data));
});


