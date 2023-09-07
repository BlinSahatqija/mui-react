import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow , TableCell, Paper, Tab } from '@mui/material'

const tableData =[{
    "id": 1,
  "first_name": "Isabeau",
  "last_name": "Garmans",
  "email": "igarmans0@google.ca",
  "gender": "Female",
  "ip_address": "82.209.28.194"
}, {
  "id": 2,
  "first_name": "Callida",
  "last_name": "Scholl",
  "email": "cscholl1@wikispaces.com",
  "gender": "Female",
  "ip_address": "194.37.90.158"
}, {
  "id": 3,
  "first_name": "Conway",
  "last_name": "Christal",
  "email": "cchristal2@sina.com.cn",
  "gender": "Male",
  "ip_address": "152.172.145.62"
}, {
  "id": 4,
  "first_name": "Nanine",
  "last_name": "Yurenev",
  "email": "nyurenev3@ameblo.jp",
  "gender": "Female",
  "ip_address": "73.105.76.31"
}, {
  "id": 5,
  "first_name": "Dannie",
  "last_name": "Imbrey",
  "email": "dimbrey4@digg.com",
  "gender": "Female",
  "ip_address": "217.170.138.138"
}, {
  "id": 6,
  "first_name": "Easter",
  "last_name": "Endicott",
  "email": "eendicott5@hostgator.com",
  "gender": "Female",
  "ip_address": "250.118.50.26"
}, {
  "id": 7,
  "first_name": "Orin",
  "last_name": "Gellert",
  "email": "ogellert6@macromedia.com",
  "gender": "Male",
  "ip_address": "77.173.52.78"
}, {
  "id": 8,
  "first_name": "Reuven",
  "last_name": "Onraet",
  "email": "ronraet7@phoca.cz",
  "gender": "Male",
  "ip_address": "51.217.46.238"
}, {
  "id": 9,
  "first_name": "Sapphire",
  "last_name": "Grocutt",
  "email": "sgrocutt8@blogspot.com",
  "gender": "Female",
  "ip_address": "149.10.219.53"
}, {
  "id": 10,
  "first_name": "Jeanna",
  "last_name": "Ciccotti",
  "email": "jciccotti9@mapy.cz",
  "gender": "Female",
  "ip_address": "101.80.137.14"

}]

const MuiTable = () => {
  return (
    <TableContainer component = {Paper} sx ={{maxHeight: '300px'}}>
        <Table arial-label = 'simple table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align = 'center'>Email</TableCell>
                </TableRow>
                <TableBody>
                </TableBody>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row => (
                        <TableRow key = {row.id} sx = {{'&: last-child td, &:last-child th':{ border: 0} }}>
                        <TableCell>{row.id} </TableCell>
                        <TableCell>{row.first_name} </TableCell>
                        <TableCell>{row.last_name} </TableCell>
                        <TableCell align = 'center'>{row.email} </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>    

    </TableContainer>
    )
}

export default MuiTable