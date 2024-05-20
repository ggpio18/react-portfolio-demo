import React, { useEffect } from 'react';
import { StoreContext } from '../../../../../store/StoreContext';
import useQueryData from '../../../../custom-hook/useQueryData';
import { devBaseImgUrl } from '../../../../helpers/functions-general';

const Projectg = () => {
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
    useEffect(() => {
      // Check if project data is available and store it in local storage
      if (project && project.data) {
        localStorage.setItem("projectData", JSON.stringify(project.data));
      }
    }, [project]);
  // const data = project?.data || [];

  return (
    <>
      {/* projects gallery  MUST FINISHED*/}
      <section className='projectG bg-primary2 py-10 bg-portprimary'>
        <div className="project__wrapper">
          <div className='block-header text-center mb-5' data-aos="fade-down-left">
            <h2 className='text-white text-3xl mb-3'>PROJECT GALLERY</h2>
            <p className='text-lg'>Here are some of my projects</p>
          </div>
            {/* gallery */}
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-5 mb-5">
              
  <div className="-m-1 flex flex-wrap md:-m-2">
    
    <div className="flex w-1/2 flex-wrap" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
      
      
      <div className="w-1/2 p-1 md:p-2 hover:bg-[#09090979]  hover:opacity-45 ">
      {/* {project?.data.map((item, key)=>( */}
      {/* {project?.data.slice(0,1).map((item, key)=>( */}
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center" 
          src="../../../public/img/proj1.jpg" />
          {/* {`${devBaseImgUrl}/${item.project_img}`} */}
        {/* ))} */}
      </div>


      <div className="w-1/2 p-1 md:p-2 hover:bg-[#09090979]  hover:opacity-45 ">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="../../../public/img/proj9.jpg" />
      </div>
      <div className="w-full p-1 md:p-2 hover:bg-[#09090979]  hover:opacity-45 ">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="../../../public/img/proj13.png" />
      </div>
    </div>

    <div className="flex w-1/2 flex-wrap"  data-aos="fade-down"
     data-aos-anchor-placement="bottom-bottom">
      <div className="w-full p-1 md:p-2 hover:bg-[#09090979]  hover:opacity-45 ">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="../../../public/img/proj11.png" />
      </div>
      <div className="w-1/2 p-1 md:p-2 hover:bg-[#09090979]  hover:opacity-45 ">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="../../../public/img/proj4.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2 hover:bg-[#09090979]  hover:opacity-45 ">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="../../../public/img/proj6.png" />
      </div>
    </div>
  </div>
</div>
        </div>
      </section>
    </>
  )
}

export default Projectg
