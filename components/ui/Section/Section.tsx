import s from './Section.module.css'

const Section = () => {
  return (
    <div className={s.container}>
      <div>
        <h2>Why should you have a cat?</h2>
        <p>
          Having a cat around you can actually trigger the release of calming chemicals in your body
          which lower your stress and anxiety levels
        </p>
        <a href="https://wwww.google.com.pe" target="_blank" rel="noopener noreferrer">
          Read More -{'>'}
        </a>
      </div>

      <div>image</div>
    </div>
  )
}

export default Section
