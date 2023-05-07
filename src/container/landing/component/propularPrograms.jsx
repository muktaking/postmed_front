import React from 'react'
import { facultyToString, pgProgramme } from '../../../utils/faculty'
import { NavLink } from 'react-router-dom'

export default function PropularPrograms() {
  return (
    <div className={' popular-programs-wrapper py-4'}>
      <h3 className='heading text-center'>Popular Programs</h3>
      <div className='heading-underline'></div>
      {/* only for sm size screen */}
      {/* <Carousel interval={6000} className='mx-2 hideInMd'> */}
      <div className='d-flex justify-content-center flex-wrap'>
        {pgProgramme.map(
          (program, ind) =>
            // <Carousel.Item>
            //   <Card className='bg-light' text='white' style={{ height: '16rem' }}>
            //     <Card.Body>
            //       <LazyLoadComponent>
            //         <img
            //           height='120'
            //           className='d-block w-100'
            //           src={'/assets/image/hero/' + program.imageName}
            //           alt='First slide'
            //         />
            //       </LazyLoadComponent>

            program.courseIds.map((key) => (
              <NavLink
                key={program.name + key}
                to={'/courses?pgCourseType=' + program.id + '&faculty=' + key}
                className='popular-programs-link'
              >
                <p
                  className='shadow text-white mx-2 px-1 text-center justify-content-center d-flex align-items-center rounded-circle'
                  style={{
                    width: '110px',
                    height: '110px',
                    backgroundColor: '#3C486B'
                  }}
                >
                  {program.name + ' ' + facultyToString(key)}
                </p>

                {/* <Button variant='primary' className='mb-2 mr-2'>
               
              </Button> */}
              </NavLink>
            ))

          //     </Card.Body>
          //   </Card>
          // </Carousel.Item>
        )}
      </div>
    </div>
  )
}
