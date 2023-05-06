import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const SideBarData = [
    {
        title: "All Questions",
        icon: <SearchIcon/>,
        link: "/allQuestions"
    },
    {
        title: "Add",
        icon: <AddIcon/>,
        link: "/add",
    }
    // {
    //     title: "Delete",
    //     icon: <DeleteIcon/>,
    //     link: "/delete"
    // },
    // {
    //     title: "Modify",
    //     icon: <EditIcon/>,
    //     link: "/modify"
    // }
]