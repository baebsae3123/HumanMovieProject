import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { TestPage } from './components/TestPage';
import { LoadingPage } from './components/LoadingPage';
import { ResultPage } from './components/ResultPage';

type Page = 'home' | 'test' | 'loading' | 'result';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<any>(null);

  const handleStartTest = () => {
    setCurrentPage('test');
    setAnswers([]);
  };

  const handleTestComplete = (testAnswers: number[]) => {
    setAnswers(testAnswers);
    setCurrentPage('loading');
    
    // 로딩 후 결과 페이지로 이동 (3초)
    setTimeout(() => {
      // 간단한 결과 분석 로직
      const averageScore = testAnswers.reduce((a, b) => a + b, 0) / testAnswers.length;
      const resultType = analyzeResult(testAnswers);
      setResult(resultType);
      setCurrentPage('result');
    }, 3000);
  };

  const handleRetakeTest = () => {
    setCurrentPage('home');
    setAnswers([]);
    setResult(null);
  };

  const analyzeResult = (answers: number[]) => {
    // 간단한 분석 로직 (실제로는 AI 분석)
    const emotional = answers.slice(0, 3).reduce((a, b) => a + b, 0);
    const visual = answers.slice(3, 6).reduce((a, b) => a + b, 0);
    const pace = answers.slice(6, 9).reduce((a, b) => a + b, 0);

    const types = [
      {
        id: 'emotional-narrative',
        name: '감성 서사형',
        description: '깊은 여운과 감정선이 중요한 당신. 영화를 통해 삶의 의미를 찾고, 인간의 내면을 탐구하는 것을 좋아합니다.',
        keywords: ['감동', '여운', '인간 드라마', '성장'],
        color: '#E8B4F9',
        scores: {
          emotional: 85,
          visual: 60,
          pace: 45,
          action: 30,
          depth: 90
        },
        movies: [
          { title: '비포 선라이즈', year: 1995, genre: '로맨스/드라마', poster: 'romance drama' },
          { title: '아무도 모른다', year: 2004, genre: '드라마', poster: 'family drama' },
          { title: '라라랜드', year: 2016, genre: '뮤지컬/로맨스', poster: 'musical romance' }
        ],
        playlist: '잔잔하고 감성적인 피아노와 어쿠스틱 사운드'
      },
      {
        id: 'visual-sensory',
        name: '비주얼 감각형',
        description: '영상미와 색감에 민감한 당신. 아름다운 화면 구성과 독특한 연출이 영화의 중요한 요소입니다.',
        keywords: ['영상미', '색감', '예술성', '감각적'],
        color: '#FFB84D',
        scores: {
          emotional: 60,
          visual: 95,
          pace: 55,
          action: 50,
          depth: 70
        },
        movies: [
          { title: '그랜드 부다페스트 호텔', year: 2014, genre: '코미디/드라마', poster: 'colorful hotel' },
          { title: '블레이드 러너 2049', year: 2017, genre: 'SF', poster: 'cyberpunk future' },
          { title: '미드나잇 인 파리', year: 2011, genre: '로맨스/판타지', poster: 'paris night' }
        ],
        playlist: '몽환적이고 감각적인 신스팝과 앰비언트'
      },
      {
        id: 'suspense-logic',
        name: '논리 서스펜스형',
        description: '치밀한 전개와 반전을 사랑하는 당신. 퍼즐 같은 스토리를 풀어가며 긴장감을 즐깁니다.',
        keywords: ['반전', '긴장감', '미스터리', '논리'],
        color: '#4ECDC4',
        scores: {
          emotional: 50,
          visual: 65,
          pace: 80,
          action: 75,
          depth: 85
        },
        movies: [
          { title: '인셉션', year: 2010, genre: 'SF/스릴러', poster: 'dream thriller' },
          { title: '기생충', year: 2019, genre: '드라마/스릴러', poster: 'social thriller' },
          { title: '메멘토', year: 2000, genre: '미스터리/스릴러', poster: 'mystery noir' }
        ],
        playlist: '긴장감 넘치는 오케스트라와 일렉트로닉'
      },
      {
        id: 'action-dynamic',
        name: '액션 역동형',
        description: '빠른 전개와 박진감을 즐기는 당신. 화려한 액션과 스펙터클한 장면에서 카타르시스를 느낍니다.',
        keywords: ['액션', '속도감', '스릴', '에너지'],
        color: '#FF6B6B',
        scores: {
          emotional: 40,
          visual: 80,
          pace: 95,
          action: 90,
          depth: 50
        },
        movies: [
          { title: '매드맥스: 분노의 도로', year: 2015, genre: '액션', poster: 'desert action' },
          { title: '존 윅', year: 2014, genre: '액션/스릴러', poster: 'action thriller' },
          { title: '미션 임파서블: 폴아웃', year: 2018, genre: '액션', poster: 'spy action' }
        ],
        playlist: '강렬한 비트의 록과 일렉트로닉 댄스'
      }
    ];

    // 점수 기반으로 타입 결정
    if (emotional > 18) return types[0];
    if (visual > 18) return types[1];
    if (pace > 18) return types[2];
    return types[3];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 max-w-md mx-auto">
      {currentPage === 'home' && <HomePage onStart={handleStartTest} />}
      {currentPage === 'test' && <TestPage onComplete={handleTestComplete} />}
      {currentPage === 'loading' && <LoadingPage />}
      {currentPage === 'result' && result && (
        <ResultPage result={result} onRetake={handleRetakeTest} />
      )}
    </div>
  );
}