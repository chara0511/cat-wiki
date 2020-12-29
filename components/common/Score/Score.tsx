import { FC } from 'react'
import s from './Score.module.scss'

const Score: FC<{ currentScore: number }> = ({ currentScore }) => {
  const scores: object[] = []
  const total: number = 5

  for (let index = 1; index <= total; index += 1) {
    const className = index <= currentScore ? `${s.scored}` : `${s.score}`
    scores.push(<span key={index} className={className} />)
  }

  return <div className={s.content}>{scores}</div>
}

export default Score
