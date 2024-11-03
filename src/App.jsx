import { useEffect, useState } from 'react'
import './App.css'
import logo from './assets/images/logos/logo1.png'
import headphones from './assets/images/headphones.png'
import { CiSearch } from "react-icons/ci";
import Mp3s from './components/mp3/Mp3';
import Playing from './components/playing/Playing';
import { FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { beats } from './components/db/db';



const PHONE = '09094379432'



const categories = ['all', 'In house. Dance hall', 'afro', 'amapiano', 'trap']



function App() {

  const [currentBeat, setCurrentBeat] = useState(beats[0])
  const [playing, setPlaying] = useState(true)
  const [filteredBeats, setFilteredBeats] = useState(beats)
  const [searchFilter, setSearchFilter] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const onPauseBeat = () => setPlaying(false)
  const onPlayBeat = () => setPlaying(true)

  useEffect(() => {
    if(currentBeat){
      onPlayBeat()
    }
  }, [currentBeat])

  useEffect(() => {
    if(searchFilter){

      setActiveCategory('all')

      const _filtered = beats.filter(beat => (
        beat.title.toLowerCase().includes(searchFilter)
        ||
        searchFilter.includes(beat.title.toLowerCase())
        
        ||
        beat.category.toLowerCase().includes(searchFilter)
        ||
        searchFilter.includes(beat.category.toLowerCase())
      ))

      setFilteredBeats(_filtered)
    
    } else{
      setFilteredBeats(beats)
    }

  }, [searchFilter])

  useEffect(() => {
    if(activeCategory){

      if(activeCategory == 'all'){
        setFilteredBeats(beats)
      
      } else{
        const filtered = beats.filter(beat => beat.category.toLowerCase() == activeCategory.toLowerCase())

        setFilteredBeats(filtered)
      }

    } else{
      setFilteredBeats(beats)
    }
  }, [activeCategory])


  const handleSearchInput = e => setSearchFilter(e.target.value.toLowerCase())


  const openWhatsapp = () => window.open("https://api.whatsapp.com/send?phone=" + PHONE, "blank")

  
  const displayCategories = categories.map((category, i) => {
    
    const isActive = category.toLowerCase() == activeCategory.toLowerCase()

    const selectCategory = () => setActiveCategory(category.toLowerCase())

    return (
      <div
        key={i}
        onClick={selectCategory}
        style={{
          opacity: isActive ? 1 : 0.5
        }}
        className='rounded-3 px-3 txt-000 bg-f7f7f7 py-2 clickable text-capitalize d-flex align-items-center justify-content-center'
      >
        <p className='m-0 p-0 open-sans fw-600 txt-15'>
          { category }
        </p>
      </div>
    )
  })

  return (
    <div
      style={{
        minWidth: '100%',
        minHeight: '100vh',
      }}
      className='bg-img app-container p-lg-5 p-md-3 p-3 d-lg-flex d-md-block d-block align-items-stretch justify-content-between'
    >
      <div className='col-lg-6 col-md-12 col-12 mb-lg-0 mb-md-0 mb-4'>
        <div className='d-flex align-items-center search-input col-lg-8 rounded-3 px-3 mb-3'>
          <CiSearch size={20} color='#000' className='col-lg-1' />
          <input 
            type='text' 
            placeholder='search'
            onChange={handleSearchInput}
            value={searchFilter}
            className='h-100 px-2 py-3 col-lg-11'
          />          
        </div>

        <div style={{ gap: '20px' }} className='d-flex align-items-center flex-wrap mb-5'>
          { displayCategories }
        </div>

        <div className='mp3-container'>
          <Mp3s 
            currentBeat={currentBeat} 
            setCurrentBeat={setCurrentBeat}
            filteredBeats={filteredBeats}
          />
        </div>
      </div>

      <div className='handles-container col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-between'>
        <div className='d-flex align-items-center justify-content-between'>
          <h3 className='m-0 p-0 txt-16 fw-600 openSans txt-F1E4C5 openSans'><span className='suiGeneris'>Immortal Beats</span></h3>
          <div className='col-lg-2 mb-4'>
            <img src={logo} className='col-lg-12 col-md-12 col-12 rounded-3' />
          </div>
        </div>
        <div className='d-flex align-items-center'>
          <p className='m-0 p-0 txt-15 txt-F1E4C5 openSans fw-600'>Lets chat: </p>
          <FaTwitter size={20} color='#FFF' className='mx-2 clickable hover-rotate' />
          <FaInstagram size={20} color='#FFF' className='mx-2 clickable hover-rotate' />
          <FaWhatsapp onClick={openWhatsapp} size={20} color='#FFF' className='mx-2 clickable hover-rotate' />
        </div>        
        <div className='col-lg-12 d-lg-block col-md-12 col-12'>
          <img src={headphones} className='col-lg-12 col-md-12 col-12' />
        </div>
      </div>


      <Playing 
        currentBeat={currentBeat} 
        setCurrentBeat={setCurrentBeat} 
        playing={playing} 
        setPlaying={setPlaying} 
        onPauseBeat={onPauseBeat}
        onPlayBeat={onPlayBeat}
      />
    </div>
  )
}

export default App
