import Image from 'next/image'
import React from 'react'

const ImageSection = () => {
  return (
    <div className='flex gap-8 mt-12'>
        <div className='w-2/3'>
            <Image
              src="/img/Me.jpg"
              alt='Mon profil'
              width={720}
              height={1280}
              className='w-full h-full rounded-2xl'
            />
        </div>
        <div className='w-full pt-10'>
          <h4 className='text-3xl text-color_bali'>
            Je suis <span className='spans text-3xl'>Ivan NTEUMI</span>
          </h4>
          <p className='py-3 text-justify'>
            Etudiant en Génie Logiciel passionné par le développement informatique et la création de solutions innovantes. Mon parcours académique, combiné à mes projets personnels, m&lsquo;a permis d&lsquo;acquérir des compétences solides en conception logicielle, développement web et mobile, ainsi qu&lsquo;en gestion de données.
            Ce portfolio est une vitrine de mon travail, où je partage mes projets, mes compétences et ma passion pour l&lsquo;univers du développement. N&lsquo;hésitez pas à explorer mes réalisations et à me contacter pour toute question ou collaboration.
            Merci de votre visite et bonne découverte !
          </p>
          <div className='flex pb-6'>
            <div className='pr-8'>
              <p className='font-semibold py-3'>Nom</p>
              <p className='font-semibold py-3'>Age</p>
              <p className='font-semibold py-3'>Nationalité</p>
              <p className='font-semibold py-3'>Langue</p>
              <p className='font-semibold py-3'>Localisation</p>
            </div>
            <div>
              <p className='py-3'>: Ivan NTEUMI</p>
              <p className='py-3'>: 19</p>
              <p className='py-3'>: Camerounais</p>
              <p className='py-3'>: Français, Anglais</p>
              <p className='py-3'>: Douala-Yassa, Cameroun</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ImageSection