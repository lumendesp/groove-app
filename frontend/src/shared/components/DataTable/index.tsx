import React, { useEffect, useState } from 'react';
import { IconButton, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditModal from '../EditModal';
import Swal from 'sweetalert2'
import axios from 'axios';

interface Data {
    id: string;
    title: string;
    artist: string;
    genre: string;
    release_year: number;
    cover: string;
}

interface DataTableProps {
    contentType: 'songs' | 'albums'; // Prop to specify the content type
}

const DataTable: React.FC<DataTableProps> = ({contentType}) => {

  const [data, setData] = useState<Data[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditingAlbum, setIsEditingAlbum] = useState(false);

  // Add state to track the item being edited
  const [editItemId, setEditItemId] = useState<string | null>(null);

  useEffect(() => {
    let apiUrl: string;

    if (contentType === 'songs') {
        apiUrl = 'http://127.0.0.1:8000/songs/';

        axios.get(apiUrl).then((response) => {
            console.log(response.data);
            setData(response.data.songs);
        });
    } else if (contentType === 'albums') {
        apiUrl = 'http://127.0.0.1:8000/albums/';

        axios.get(apiUrl).then((response) => {
            console.log(response.data);
            setData(response.data.albums);
        });
    }
  }, [contentType]);


  const handleDelete = (id: string) => {
    let apiUrl: string;

    Swal.fire({
      title: 'Você tem certeza?',
      text: "Esta ação não é reversível!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'secondary',
      cancelButtonColor: '#d33',
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Sim, deletar!',
      
    }).then((result) => {
      if (result.isConfirmed) {
        
        // Determine the API route based on the contentType prop
        if (contentType === 'songs') {
          apiUrl = `http://127.0.0.1:8000/songs/${id}`;

          axios.delete(apiUrl).then((response) => {
            if(response.status === 200){
              // Remove the deleted item from the state
              setData((prevData) => prevData.filter((item) => item.id !== id));
              
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
            else{
              Swal.fire(
                'Error!',
                'Your file has not been deleted.',
                'error'
              )
            }
          });
        } else if (contentType === 'albums') {
          apiUrl = `http://127.0.0.1:8000/albums/${id}`;

          axios.delete(apiUrl).then((response) => {
              console.log(response.data);
              console.log(response);

              if(response.status === 200){
                // Remove the deleted item from the state
                setData((prevData) => prevData.filter((item) => item.id !== id));
                
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
              else{
                Swal.fire(
                  'Error!',
                  'Your file has not been deleted.',
                  'error'
                )
              }
          });
        }  
      }
    }) 
  };

  const handleEdit = (id: string) => {
    // Open the edit modal
    setIsEditModalOpen(true);
    setIsEditingAlbum(contentType === 'albums');
    setEditItemId(id);
  };

  const handleCloseEditModal = () => {
    // Close the edit modal
    setIsEditModalOpen(false);
    setEditItemId(null);
  };

  return (
    <TableContainer component={Paper} style={{ marginBottom: '20px', maxHeight: '50vh' }}>
      <Table>
        <TableHead style={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
          <TableRow>
            <TableCell align="center">Capa</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Artista</TableCell>
            <TableCell align="center">Gênero</TableCell>
            <TableCell align="center">Ano de lançamento</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0 ? ( // Check if there's no data
            <TableRow>
                <TableCell align="center" colSpan={6}>No data available</TableCell>
            </TableRow>
          ) : (
          data.map((row) => (
            <TableRow key={row.id} data-cy={row.id}>
              <TableCell align="center">
                <img
                  src={row.cover}
                  alt="Imagem"
                  style={{ width: '50px', height: 'auto', borderRadius: '15%' }}
                />
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.artist}</TableCell>
              <TableCell align="center">{row.genre}</TableCell>
              <TableCell align="center">{row.release_year}</TableCell>
              <TableCell align="center">
                <IconButton 
                    color="primary" 
                    onClick={() => handleEdit(row.id)}
                >
                    <EditIcon />
                </IconButton>

                <IconButton 
                    color="secondary" 
                    onClick={() => handleDelete(row.id)}
                    data-cy={`delete_${row.id}`}
                >
                    <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))
        )}
        </TableBody>
      </Table>
    
    <EditModal
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
        isEditingAlbum={isEditingAlbum}
        itemId={editItemId}
    />
    </TableContainer>

    
  );
};

export default DataTable;
