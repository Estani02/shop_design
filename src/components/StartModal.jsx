'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

const StartModal = () => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalAlreadyOpened, setModalAlreadyOpened] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    // Si el modal aún no se ha abierto y han pasado 10 segundos
    if (!modalAlreadyOpened) {
      const timeoutId = setTimeout(() => {
        setIsOpen(true);
        setModalAlreadyOpened(true);
      }, 5000); 

      // Limpia el temporizador para evitar ejecuciones adicionales
      return () => clearTimeout(timeoutId);
    }
  }, [modalAlreadyOpened]);

  return (
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className='px-2 absolute right-0 top-0 font-bold text-xl text-red-500 hover:text-red-800 transition-colors duration-150' onClick={() => closeModal()}>
          X
        </button>
        <div className='flex flex-col gap-7 text-xs md:text-sm'>
          <h5 className='md:text-xl text-lg text-center font-bold uppercase'>I hope you like it!</h5>

          <div className='overflow-hidden'>
            <p>
              This is a logicless mockup created using the technologies <b>Next.js</b>, <b>Tailwind CSS</b>, and designed in <b>Figma</b>.<br /><br />
              If you are interested in exploring the code, I invite you to check out my GitHub repository:
            </p>
            <Link href={'https://github.com/Estani02/shop_design'} target='_blank' className='text-blue-500 hover:text-blue-800 hover:border-b-blue-800 border-b-2 border-transparent transition-colors duration-150 w-fit'>https://github.com/Estani02/shop_design</Link>
          </div>
          <div>
            <p>If you liked the mockup design, please feel free to contact me via email.</p>
            <a className='text-blue-500 hover:text-blue-800 hover:border-b-blue-800 hover:border-b-2 transition-colors duration-150' href="mailto:estaniolmedo@gmail.com" target='_blank'>estaniolmedo@gmail.com</a>
          </div>
        </div>
      </Modal>
  )
}

export default StartModal