import React from 'react';
import './Couple.css';
// import couple from '../Couple/Wedding.jpg';
import couple from '../Cover/bgimage.jpg';
import bismillah from '../../Assets/image/bismillah.png';
import dinda from '../../Assets/image/dinda.PNG';
import bambang from '../../Assets/image/bambang.PNG';
import list from '../../Assets/image/list.png';
import IG from '../../Assets/image/IG.png';


const Couple =()=>{
    return(
        <div className='wrapcover'>
           <img className='imgcouple' src={couple}/>
           <div className='htopbsmlh'>
                <label className='txtbsmlh'>Bismillahirrahmanirrahim</label>
            </div>
           <div className='htopasslm'>
                <label className='txtasslm'>Assalaamu’alaikum Warahmatullaahi Wabarakaatuh</label>
            </div>
            <div className='htopudg'>
                <label className='txtudg'>DENGAN MEMOHON RAHMAT ALLAH SWT, KAMI MENGUNDANG</label>
            </div>
            <div className='htopbpk'>
                <label className='txtbpk'>BAPAK/IBU/SAUDARA/I ACARA RESEPSI PERNIKAHAN</label>
            </div>
            <div className='htopb'>
            <img className='htopimg' src={bismillah}/>
            </div>
            
            <div className='wrappingimg'>
            <a className='linkig' href='https://www.instagram.com/adindarfitrianisa/'>
                <img className='imgw'  src={dinda}/>
                </a>
            </div>
            
            <div className='animasitext'>
            <div className='htopw'>
                <label className='txtw'>ADINDA RIZKI FITRIANISA,S.Tr.Keb.</label>
            </div>
            <div className='htoplistw'>
            <img className='imglistw' src={list}/>
            </div>
            <div className='htopwptk'>
                <label className='txtptk'>PUTRI KEDUA</label>
            </div>
            <div className='htopwbpk'>
                <label className='txtwbpk'>Bapak Agus Heryanto,Bc.Ip.,S.H.,MH</label>
            </div>
            <div className='htopwibu'>
                <label className='txtwibu'>Ibu Ita Deswita</label>
            </div>
            </div>
            <div className='wrapIG'>
            <div className='imgig'>
            <img className='imglistig' src={IG}/>
            </div>
            <div className='namaig'>
                <label className='txtwig'>Adindarfitrianisa</label>
            </div>
            </div>
            <div className='htopand'>
                <label className='txtand'>&amp;</label>
            </div>

             <div className='wrappingimgl'>
             <a className='linkig' href='https://www.instagram.com/bembengggg/'>
                <img alt='nama' className='imgl' src={bambang}/>
                </a> 
            </div>
            
            <div className='animasitextl'>
            <div className='htoplptk'>
                <label className='txtlptk'>PUTRA KEEMPAT</label>
            </div>
            <div className='htopl'>
                <label className='txtl'>BAMBANG KURNIAWAN WIBOWO,S.Kom</label>
            </div>
            <div className='htoplistl'>
            <img className='imglistl' src={list}/>
            </div>
            <div className='htoplbpk'>
                <label className='txtlbpk'>Bapak Supriyanto(Alm)</label>
            </div>
            <div className='htoplibu'>
                <label className='txtlibu'>Ibu Nurwilis</label>
            </div> 
            </div>
            <div className='wraplIG'>
            <div className='imglig'>
            <img className='imglistlig'  src={IG}/>
            </div>
            <div className='namalig'>
                <label className='txtlig'>Bembengggg</label>
            </div>
            </div>
         </div>



    

    )
}

export default Couple;