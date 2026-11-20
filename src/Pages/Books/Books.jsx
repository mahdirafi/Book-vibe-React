import React, { useContext, useState } from 'react';
import { BookContext } from '../../Components/Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../Components/listedBooks/ListedReadList'
import ListedWishList from '../../Components/listedBooks/ListedWishList'

const Books = () => {

    const [sortingType, setSortingType] = useState('');
    console.log(sortingType , "sortingType");

     
    const {readList, wishList} = useContext(BookContext);
    console.log('readList & wishList:', readList, wishList);

    return (
        <div className='container mx-auto my-3'>

        <div className='flex justify-center items-center my-4'>
             <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">Sort by ⬇️</div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={() => setSortingType("Pages")}><a>Pages</a></li>
                <li onClick={() => setSortingType("Rating")}><a>Rating</a></li>
            </ul>
            </div>
        </div>

            <Tabs>
                <TabList>
                <Tab><h2 className='text-xl font-bold '> Read List</h2></Tab>
                <Tab><h2 className='text-xl font-bold'>Wish List</h2></Tab>
                </TabList>
                <TabPanel>
                     <ListedReadList sortingType={sortingType} />
                </TabPanel>
                <TabPanel>
                    <ListedWishList sortingType={sortingType} />
                </TabPanel>
            </Tabs>
            
        </div>
    );
};

export default Books;