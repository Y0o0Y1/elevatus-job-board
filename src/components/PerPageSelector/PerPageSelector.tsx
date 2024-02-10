import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { SelectChangeEvent } from '@mui/material/Select'; // Import SelectChangeEvent

interface Props {
    itemsPerPage: number;
    onChange: (perPage: number) => void;
}

const PerPageSelector: React.FC<Props> = ({ itemsPerPage, onChange }) => {
    const handlePerPageChange = (event: SelectChangeEvent<number>) => { // Use SelectChangeEvent<number>
        onChange(event.target.value as number); // Cast event.target.value to number
    };

    return (
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="per-page-label">Items Per Page</InputLabel>
            <Select
                labelId="per-page-label"
                id="per-page-select"
                value={itemsPerPage}
                onChange={handlePerPageChange}
            >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                {/* Add more options as needed */}
            </Select>
        </FormControl>
    );
};

export default PerPageSelector;
