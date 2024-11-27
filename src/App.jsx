import Test from './Test';
import styled from 'styled-components';

const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    text-align: center;
`;

function App() {
    return (
        <CenterContainer>
            <ContentWrapper>
                <Test />
            </ContentWrapper>
        </CenterContainer>
    );
}

export default App;
