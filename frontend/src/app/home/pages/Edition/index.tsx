import React, { useEffect, useState } from 'react';
import { Stack, IconButton, Button, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddIcon from '@mui/icons-material/Add';  
import { Wallpaper, TableDiv, LabelDiv, MusicListContainer } from './style';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MuiButton from '../../../../shared/components/MuiButton';
import DataTable from '../../../../shared/components/DataTable';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import EditModal from '../../../../shared/components/EditModal';
import MusicForm from '../../components/MusicFromsRegister';
import AlbumForm from '../../components/AlbumFormsRegister';
import ReviewForm from '../../components/ReviewFormsRegister';
import DataTableReview from '../../../../shared/components/DataTableReview';

const ListContent: React.FC = () => {

    interface Data {
      id: number;
      name: string;
      description: string;
    }

    interface TabPanelProps {
      children?: React.ReactNode;
      index: number;
      value: number;
    }
    
    function CustomTabPanel(props: TabPanelProps) {
      const { children, value, index, ...other } = props;
    
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }
    
    function a11yProps(index: number) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }
    
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    // =====================================================================

    interface Data {
      id: number;
      title: string;
      artist: string;
      genre: string;
    }

    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
      // Fetch data from the backend using Axios (replace with your API endpoint)
      axios.get('http://127.0.0.1:8000/songs/').then((response) => {
        console.log(response.data);
        setData(response.data.songs);
      });
    }, []);

    const handleDelete = (id: number) => {
      // Implement delete functionality (send a DELETE request to your API)
      axios.delete(`/api/data/${id}`).then(() => {
        // Remove the deleted item from the state
        setData((prevData) => prevData.filter((item) => item.id !== id));
      });
    };

    const [isOpenMusic, setIsOpenMusic] = useState(false);
    const [isOpenAlbum, setIsOpenAlbum] = useState(false);
    const [isOpenReview, setIsOpenReview] = useState(false);
    
    return (
        <Wallpaper>
          <LabelDiv />
               
          <TableDiv>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} centered textColor="inherit" indicatorColor="secondary" >
                  <Tab data-cy="Album" label="Albuns" {...a11yProps(0)} />
                  <Tab data-cy="music" label="Músicas" {...a11yProps(1)} />
                  <Tab  data-cy="review" label="Avaliações" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <DataTable contentType="albums"/>
                <Stack direction="row" spacing={2}>
                  <Button data-cy="add_album" onClick={() => setIsOpenAlbum(true)}  variant="contained" color="secondary" startIcon={<AddIcon />}>Adicionar Album</Button>
                </Stack>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                <DataTable contentType="songs"/>
                <Stack direction="row" spacing={2}>
                  <Button data-cy="add_musica" onClick={() => setIsOpenMusic(true)} variant="contained" color="secondary" startIcon={<AddIcon />}>Adicionar Música</Button>
                </Stack>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={2}>
                <DataTableReview/>
                <Stack direction="row" spacing={2}>
                  <Button data-cy="add_review" onClick={() => setIsOpenReview(true)}  variant="contained" color="secondary" startIcon={<AddIcon />}>Adicionar Avaliação</Button>
                </Stack>
              </CustomTabPanel>
            </Box>
          </TableDiv>

          <MusicListContainer>
            <MusicForm isOpen={isOpenMusic} setIsOpen={setIsOpenMusic}/>
            <AlbumForm isOpen={isOpenAlbum} setIsOpen={setIsOpenAlbum}/>
            <ReviewForm isOpen={isOpenReview} setIsOpen={setIsOpenReview}/>
          </MusicListContainer>
        </Wallpaper>
    );
};

export default ListContent;
