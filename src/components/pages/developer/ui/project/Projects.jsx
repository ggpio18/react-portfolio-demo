import React from 'react';
import { setIsShow } from '../../../../../store/StoreAction';
import { StoreContext } from '../../../../../store/StoreContext';
import useQueryData from '../../../../custom-hook/useQueryData';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ModalProject from './ModalProject';
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching';
import { devBaseImgUrl } from '../../../../helpers/functions-general';

const Projects = () => {
    const {store, dispatch} = React.useContext(StoreContext);
    const [info, setInfo] = React.useState(null);

    const {
        isLoading,
        isFetching,
        error,
        data: project,
      } = useQueryData(
        "/v1/project", // endpointO
        "get", // method
      );

      const handleShowProject = (item) => {
        dispatch(setIsShow(true));
        setInfo(item);

    }
  return (
    <>
    <Header/>

      {/* <section className=''>
        <div className='max-w-[1200px] mx-auto px-4'>
        <h1 className='text-center mb-5 text-content'>projects</h1>

        <div className='relative'>
            {isLoading ? <SpinnerFetching/> : (
                <div className='grid grid-cols-2 gap-5'>
                    {portfolio?.data.map((item, key)=>(
                        <div className="project_card" key={key}>
        
                        <img src={`${devBaseImgUrl}/${item.portfolio_image}`} alt=""  className='w-full h-[300px] object-cover'/>
                        <h4 className='text-center pt-5 pb-2 mb-0'>{item.portfolio_title}</h4>
                        <ul className='flex justify-between opacity-55 mb-10'>
                            <li><small>{item.portfolio_category}</small></li>
                            <li><small>{item.portfolio_publish_date}</small></li>
                        </ul>
                        <p className='line-clamp-2'>{item.portfolio_description}</p>
                        <button className='btn btn--accent w-full justify-center py-3' onClick={()=>handleShowProject(item)}>View</button>
                    </div>
                    ))}
                
                </div>
            )}
        </div>
    
        </div>
      </section>
      {store.isShow && <ModalProject position="center" info={info}/>} */}

      {/* Projects */}
      <div className='text-center mt-[8rem]' data-aos="fade-down">
            <div className='flex justify-center gap-5'>
            <img src="../../../public/img/projectlogo.png" alt="" className='size-[30px]'/>
            <h1 className='text-black text-3xl'>PROJECTS</h1>
            </div>
            <p className='flex justify-center text-black px-[50rem] mt-3'>Here you will find some of the personal and clients projects 
            that I created with each project containing its own case study</p>
        </div>
<div className="lg:px-[20rem] mt-10">
<ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-10 gap-x-6 items-start p-8">
{project?.data.map((item, key)=>(
     item.project_is_active === 1 && (
        <li className="relative flex flex-col sm:flex-row xl:flex-row items-start " key={key}>
        <div className="order-1 sm:ml-6 xl:ml-6 w-[495px]" data-aos="fade-down-left">
            <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="mb-1 block text-sm leading-6 text-indigo-500">{item.project_pl}</span>{item.project_title}
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
                <p>{item.project_description}</p>
                {/* <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                </ul> */}
            </div>
            <button className="btnui inline-flex items-center  text-sm font-semibold whitespace-nowrap  mt-2" onClick={()=>handleShowProject(item)}>Visit here</button>
        </div>
        <img src={`${devBaseImgUrl}/${item.project_img}`} alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-[500px] h-[314px] w-[597px] object-contain border-2 border-black hover:border-[30px] transition-all" width="1216" height="640" data-aos="flip-left"/>
    </li>
     )
    
    ))}
</ul>
</div>
{store.isShow && <ModalProject position="center" info={info}/>} 


<Footer/>
    </>
  )
}

export default Projects
