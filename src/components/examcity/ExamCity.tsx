import { Link } from 'react-router-dom'

function ExamCity() {
  return (
    <div className='services-container'>
        <div className='service-heading'>Exam Cities</div>
        <div className='service-para'>Little text about Cities </div>
        <div className='services-items'>
            
            <Link to="/allahabad">
            <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className="h-[300px] w-auto rounded-[25px] p-2 service-image" src="./public/images/allahabad.png" alt="dummy-image"/>
                <a href="" className='absolute top-1 ml-2 text-2xl font-semibold text-neutral-50 pt-6 pl-4'></a>
                <button className="absolute bottom-2 left-3 bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">Allahabad..</button>
            </div>
            </Link>
          
            

            <Link to="/lucknow">
            <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className="h-[300px] w-auto rounded-[25px] p-2 service-image" src="./public/images/lucknow.png" alt="dummy-image"/>
                <a href="" className='absolute top-1 ml-2 text-2xl font-semibold uppercase text-neutral-50 pt-6 pl-4'></a>
            <button className="absolute bottom-2 left-3 bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">Lucknow..</button>
            </div>
            </Link>

            <Link to="/kanpur">
            <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className="h-[300px] w-auto rounded-[25px] p-2 service-image" src="./public/images/kanpur.png" alt="dummy-image"/>
                <a href="" className='absolute top-1 ml-2 text-2xl font-semibold text-neutral-50 pt-6 pl-4'></a>
                <button className="absolute bottom-2 left-3 bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">Kanpur..</button>
            </div>
            </Link>
        </div>
    
</div>
  )
}

export default ExamCity