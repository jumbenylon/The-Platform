import styled from 'styled-components'

const Wrapper = styled.div`
  background: #FCB400;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
`

const OpenNote = () => {
  return (
    <Wrapper>
      <Container>
        <p className='mb-4 font-bold'>An open note to all project owners and talent</p>
        <h2 className='text-4xl font-bold text-[#333]'>"We're dedicated to promoting diversity, equality, and inclusivity, and creating a better future where work is a source of joy and fulfilment rather than uncertainty for everyone regardless of location, race or gender. Join us in making work better for all."</h2>
      </Container>
    </Wrapper>
  )
}

export default OpenNote;