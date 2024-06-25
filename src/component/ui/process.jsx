import styled from "styled-components";
import gif from './s.gif';

const Process = () => {
    return (
        <Section>
            <Wrapper>
                <Title className='text-cyan-700'>Process</Title>
                <Holder>
                    <Text>
                        <H1>Our Process</H1>
                    </Text>
                    <Cards>
                        <SingleCard>
                            <Image src={gif} alt="Process GIF" />
                        </SingleCard>
                    </Cards>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Process;

const Image = styled.img`
    height:300px;
    width:300px;
    object-fit:contain;
    margin-bottom:20px;
`

const SingleCard = styled.div`
    width:100%;
    max-width:450px;
    min-height:350px;
    height:auto;
    border:1px solid lightgray;
    border-radius:10px; 
    margin:5px;
    box-shadow:0px 0px 10px lightgray;  
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:20px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    @media (min-width:1024px){
        width:450px;
        padding:20px;
        margin:10px;
    }
`

const Text = styled.div`
    text-align: left;
    width: 100%;
    padding-left: 20px;
`

const H1 = styled.h1`
    margin:0;
    font-size:17px;

    @media (min-width:1024px){
        font-size:35px;
    }
`

const Holder = styled.div`
    width:100%;
    align-self:center;

    @media (min-width:1024px){
        width:95%;
    }
`

const Title = styled.h1`
    font-size:40px;
    margin:0;
    text-align: left;
    width: 100%;
    padding-left: 20px;

    @media (min-width:1024px){
        font-size:65px;
    }
`

const Wrapper = styled.div`
    width:95%;
    display:flex;
    flex-direction:column;
`

const Section = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px 0px;
    color:#006400;
`

const Cards = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px 0px;
`
