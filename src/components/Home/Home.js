import React,{useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux';
import { ref,onValue } from 'firebase/database';

import db from '../../firebase';
import { setMovies } from '../../store/features/movie/movieSlice';
import { selectUserName } from '../../store/features/user/userSlice';

import backgroundImg from '../../assets/images/home-background.png';
import ImgSlider from '../ImgSlider/ImgSlider';
import NewDisney from '../NewDisney/NewDisney';
import Originals from '../Originals/Originals';
import Recommends from '../Recommends/Recommends';
import Trending from '../Trending/Trending';
import Viewers from '../Viewers/Viewers';

const Home = props => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        const dbRef=ref(db,'/movies');

        onValue(dbRef,snapshot => {
            snapshot.forEach((data) =>{
                switch(data.val().type){
                    case 'recommend':
                        recommends=[...recommends,{id:data.key,...data.val()}];
                        break;
                    case 'new':
                        newDisney=[...newDisney,{id:data.key,...data.val()}];
                        break;
                    case 'original':
                        originals=[...originals,{id:data.key,...data.val()}];
                        break;
                    case 'trending':
                        trending=[...trending,{id:data.key,...data.val()}];
                        break;
                    default:
                        
                }                
            });
            dispatch(setMovies({
                recommend:recommends,
                newDisney:newDisney,
                original:originals,
                trending:trending,
            }));
        });
        
    },[userName]);

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommends/>
            <NewDisney/>
            <Originals/>
            <Trending/>
        </Container>
    );
}

const Container = styled.main`
    position:relative;
    min-height:calc(100vh - 250px);
    overflow-x:hidden;
    display:block;
    background:url(${backgroundImg});
    top:72px;
    padding: 0 calc(3.5vw - 5px);

    &:after {
        background:url(${backgroundImg}) center center / cover no-repeat fixed;
        content:'';
        position:absolute;
        inset:0;
        opacity:1;
        z-index:-1;
    }
`;

export default Home;