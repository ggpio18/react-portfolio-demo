import React from 'react'
import { StoreContext } from '../../../../../store/StoreContext';
import { setIsShow } from '../../../../../store/StoreAction';
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

    const handleShowProject = (item) => {
      dispatch(setIsShow(true));
      setInfo(item);

  }
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
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center  "
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"  />
          {/* ))} */}
      </div>
      <div className="w-1/2 p-1 md:p-2 hover:bg-[#09090979]  hover:opacity-45 ">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
      </div>
      <div className="w-full p-1 md:p-2 hover:bg-[#09090979]  hover:opacity-45 ">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
      </div>
    </div>

    <div className="flex w-1/2 flex-wrap"  data-aos="fade-down"
     data-aos-anchor-placement="bottom-bottom">
      <div className="w-full p-1 md:p-2 hover:bg-[#09090979]  hover:opacity-45 ">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
      </div>
      <div className="w-1/2 p-1 md:p-2 hover:bg-[#09090979]  hover:opacity-45 ">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
      </div>
      <div className="w-1/2 p-1 md:p-2 hover:bg-[#09090979]  hover:opacity-45 ">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
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
