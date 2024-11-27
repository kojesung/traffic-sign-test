import { useEffect, useState } from 'react';
import 도시부수정본 from './assets/인공실도시부수정본.png';
import 갓길주차수정본 from './assets/인공실갓길주차수정본.png';
import 우측차로수정본 from './assets/인공실우측차로없어짐수정본.png';
import 노면울퉁불퉁수정본 from './assets/인공실노면울퉁불퉁함수정본.png';
import 위험물적재수정본 from './assets/인공실위험물적재차량출입금지수정본.png';
import styled from 'styled-components';

const Test = () => {
    const [stage, setStage] = useState(0);
    const [showSign, setShowSign] = useState(true);
    const [startTime, setStartTime] = useState(null);
    const [results, setResults] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const DISPLAY_TIME = 2000;

    const handleStage = () => {
        setStage((prev) => prev + 1);
        setShowSign(true);
        setStartTime(Date.now());
        setInputValue('');
    };

    const handleSubmit = () => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;

        setResults((prev) => [
            ...prev,
            {
                stage,
                userAnswer: inputValue,
                responseTime,
                type: getSignType(stage),
            },
        ]);

        handleStage();
    };
    const getSignType = (stage) => {
        switch (stage) {
            case 1:
                return '도시부_원본';
            case 2:
                return '도시부_수정';
            case 3:
                return '갓길주차_원본';
            case 4:
                return '갓길주차_수정';
            case 5:
                return '노면울퉁불퉁_원본';
            case 6:
                return '노면울퉁불퉁_수정';
            case 7:
                return '표지판7_원본';
            case 8:
                return '표지판8_수정';
            case 9:
                return '표지판9_원본';
            case 10:
                return '표지판10_수정';
            case 11:
                return '표지판11_원본';
            case 12:
                return '표지판12_수정';
            default:
                return '알수없음';
        }
    };

    useEffect(() => {
        if (stage > 0) {
            const timer = setTimeout(() => {
                setShowSign(false);
            }, DISPLAY_TIME);

            return () => clearTimeout(timer);
        }
    }, [stage]);

    useEffect(() => {
        if (stage > 2) {
            console.log('실험 결과:', results);
        }
    }, [stage]);

    switch (stage) {
        case 0:
            return (
                <Container>
                    <Title>인공실 실험</Title>
                    <Description>
                        표지판이 2초 뒤에 사라집니다.
                        <br />
                        표지판의 의미를 맞춰주세요.
                    </Description>
                    <StartButton onClick={handleStage}>실험 시작</StartButton>
                </Container>
            );
        case 1:
            return (
                <Container>
                    <ImageContainer>
                        {showSign ? (
                            <div>도시부 원본 사진</div>
                        ) : (
                            <Description>표지판이 의미하는 바에 대해서 적어주세요</Description>
                        )}
                    </ImageContainer>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="답변을 입력하세요"
                        />
                        <SubmitButton type="submit">제출</SubmitButton>
                    </Form>
                </Container>
            );
        case 2:
            return (
                <Container>
                    <ImageContainer>
                        {showSign ? (
                            <img src={도시부수정본} style={{ width: '300px' }} />
                        ) : (
                            <Description>표지판이 의미하는 바에 대해서 적어주세요</Description>
                        )}
                    </ImageContainer>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="답변을 입력하세요"
                        />
                        <SubmitButton type="submit">제출</SubmitButton>
                    </Form>
                </Container>
            );
        case 3:
            return (
                <Container>
                    <ImageContainer>
                        {showSign ? (
                            <img src={도시부수정본} style={{ width: '300px' }} />
                        ) : (
                            <Description>표지판이 의미하는 바에 대해서 적어주세요</Description>
                        )}
                    </ImageContainer>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="답변을 입력하세요"
                        />
                        <SubmitButton type="submit">제출</SubmitButton>
                    </Form>
                </Container>
            );
        case 4:
            return (
                <Container>
                    <ImageContainer>
                        {showSign ? (
                            <img src={갓길주차수정본} style={{ width: '300px' }} />
                        ) : (
                            <Description>표지판이 의미하는 바에 대해서 적어주세요</Description>
                        )}
                    </ImageContainer>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="답변을 입력하세요"
                        />
                        <SubmitButton type="submit">제출</SubmitButton>
                    </Form>
                </Container>
            );
        case 5:
            return (
                <Container>
                    <ImageContainer>
                        {showSign ? (
                            <img src={도시부수정본} style={{ width: '300px' }} />
                        ) : (
                            <Description>표지판이 의미하는 바에 대해서 적어주세요</Description>
                        )}
                    </ImageContainer>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="답변을 입력하세요"
                        />
                        <SubmitButton type="submit">제출</SubmitButton>
                    </Form>
                </Container>
            );
        case 6:
            return (
                <Container>
                    <ImageContainer>
                        {showSign ? (
                            <img src={우측차로수정본} style={{ width: '300px' }} />
                        ) : (
                            <Description>표지판이 의미하는 바에 대해서 적어주세요</Description>
                        )}
                    </ImageContainer>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="답변을 입력하세요"
                        />
                        <SubmitButton type="submit">제출</SubmitButton>
                    </Form>
                </Container>
            );
        case 7:
            return (
                <Container>
                    <ImageContainer>
                        {showSign ? (
                            <img src={도시부수정본} style={{ width: '300px' }} />
                        ) : (
                            <Description>표지판이 의미하는 바에 대해서 적어주세요</Description>
                        )}
                    </ImageContainer>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="답변을 입력하세요"
                        />
                        <SubmitButton type="submit">제출</SubmitButton>
                    </Form>
                </Container>
            );
        case 8:
            return (
                <Container>
                    <ImageContainer>
                        {showSign ? (
                            <img src={노면울퉁불퉁수정본} style={{ width: '300px' }} />
                        ) : (
                            <Description>표지판이 의미하는 바에 대해서 적어주세요</Description>
                        )}
                    </ImageContainer>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="답변을 입력하세요"
                        />
                        <SubmitButton type="submit">제출</SubmitButton>
                    </Form>
                </Container>
            );
        case 9:
            return (
                <Container>
                    <ImageContainer>
                        {showSign ? (
                            <img src={도시부수정본} style={{ width: '300px' }} />
                        ) : (
                            <Description>표지판이 의미하는 바에 대해서 적어주세요</Description>
                        )}
                    </ImageContainer>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="답변을 입력하세요"
                        />
                        <SubmitButton type="submit">제출</SubmitButton>
                    </Form>
                </Container>
            );
        case 10:
            return (
                <Container>
                    <ImageContainer>
                        {showSign ? (
                            <img src={위험물적재수정본} style={{ width: '300px' }} />
                        ) : (
                            <Description>표지판이 의미하는 바에 대해서 적어주세요</Description>
                        )}
                    </ImageContainer>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="답변을 입력하세요"
                        />
                        <SubmitButton type="submit">제출</SubmitButton>
                    </Form>
                </Container>
            );
        case 11:
            return (
                <Container>
                    <ImageContainer>
                        {showSign ? (
                            <img src={도시부수정본} style={{ width: '300px' }} />
                        ) : (
                            <Description>표지판이 의미하는 바에 대해서 적어주세요</Description>
                        )}
                    </ImageContainer>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="답변을 입력하세요"
                        />
                        <SubmitButton type="submit">제출</SubmitButton>
                    </Form>
                </Container>
            );
        case 12:
            return (
                <Container>
                    <ImageContainer>
                        {showSign ? (
                            <img src={도시부수정본} style={{ width: '300px' }} />
                        ) : (
                            <Description>표지판이 의미하는 바에 대해서 적어주세요</Description>
                        )}
                    </ImageContainer>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="답변을 입력하세요"
                        />
                        <SubmitButton type="submit">제출</SubmitButton>
                    </Form>
                </Container>
            );
        case 13:
            return (
                <Container>
                    <Title>실험 완료</Title>
                    <ResultsContainer>
                        {results.map((result, index) => (
                            <ResultCard key={index}>
                                <ResultText>단계: {result.type}</ResultText>
                                <ResultText>답변: {result.userAnswer}</ResultText>
                                <ResultText>응답 시간: {(result.responseTime / 1000).toFixed(2)}초</ResultText>
                            </ResultCard>
                        ))}
                    </ResultsContainer>
                </Container>
            );
    }
    return <div></div>;
};

export default Test;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f5f7fa;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    color: #2d3748;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
`;

const Description = styled.p`
    color: #4a5568;
    font-size: 1.1rem;
    margin-bottom: 2rem;
    text-align: center;
    line-height: 1.5;
`;

const StartButton = styled.button`
    background-color: #4299e1;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #3182ce;
    }
`;

const ImageContainer = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Form = styled.form`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Input = styled.input`
    padding: 12px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    width: 100%;
    transition: border-color 0.2s;

    &:focus {
        outline: none;
        border-color: #4299e1;
    }
`;

const SubmitButton = styled.button`
    background-color: #48bb78;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #38a169;
    }
`;

const ResultsContainer = styled.div`
    width: 100%;
    max-width: 600px;
`;

const ResultCard = styled.div`
    background-color: white;
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const ResultText = styled.p`
    color: #4a5568;
    margin: 0.5rem 0;
    font-size: 1rem;
`;
