import { Hero } from '../components/Hero'

const mockDataAPI = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquet vulputate, diam nisl molestie ipsum, nec aliqua',
}

const mockDataImages = []

export const Marketing = () => {
  return <Hero infos={mockDataAPI} images={[]}></Hero>
}
