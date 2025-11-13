import React, { useState, useEffect } from 'react';
import { Film, Sparkles, Share2, RotateCcw, Music, Heart } from 'lucide-react';

const MovieTasteTest = () => {
  const [step, setStep] = useState('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const questions = [
    {
      id: 1,
      question: "영화를 보고 난 후, 어떤 순간이 가장 오래 기억에 남나요?",
      options: [
        { text: "대사 하나하나가 마음에 새겨지는 순간", value: "dialogue", emoji: "💬" },
        { text: "숨막히는 액션과 긴장감 넘치는 장면", value: "action", emoji: "🔥" },
        { text: "아름다운 영상미와 색감", value: "visual", emoji: "🎨" },
        { text: "캐릭터의 감정에 공감되는 순간", value: "emotion", emoji: "❤️" }
      ]
    },
    {
      id: 2,
      question: "영화를 선택할 때 가장 중요하게 생각하는 것은?",
      options: [
        { text: "몰입도 높은 스토리", value: "story", emoji: "📖" },
        { text: "유명한 감독이나 배우", value: "creator", emoji: "⭐" },
        { text: "평론가들의 높은 평가", value: "rating", emoji: "🏆" },
        { text: "친구들의 추천", value: "social", emoji: "👥" }
      ]
    },
    {
      id: 3,
      question: "어떤 분위기의 영화를 더 선호하시나요?",
      options: [
        { text: "밝고 경쾌한 분위기", value: "bright", emoji: "☀️" },
        { text: "어둡고 무거운 분위기", value: "dark", emoji: "🌙" },
        { text: "잔잔하고 서정적인 분위기", value: "calm", emoji: "🍃" },
        { text: "긴장감 넘치는 분위기", value: "tension", emoji: "⚡" }
      ]
    },
    {
      id: 4,
      question: "영화의 전개 속도는 어떤 것을 선호하시나요?",
      options: [
        { text: "빠르게 전개되는 영화", value: "fast", emoji: "🚀" },
        { text: "천천히 몰입하며 보는 영화", value: "slow", emoji: "🐌" },
        { text: "적절한 완급 조절이 있는 영화", value: "balanced", emoji: "⚖️" },
        { text: "예측 불가능한 반전이 있는 영화", value: "twist", emoji: "🎭" }
      ]
    },
    {
      id: 5,
      question: "영화 속 캐릭터는 어떤 타입을 좋아하시나요?",
      options: [
        { text: "성장하고 변화하는 캐릭터", value: "growth", emoji: "🌱" },
        { text: "카리스마 넘치는 강한 캐릭터", value: "strong", emoji: "💪" },
        { text: "복잡한 내면을 가진 캐릭터", value: "complex", emoji: "🧩" },
        { text: "공감 가는 평범한 캐릭터", value: "relatable", emoji: "🙋" }
      ]
    },
    {
      id: 6,
      question: "영화를 보는 이유는 주로 무엇인가요?",
      options: [
        { text: "현실에서 벗어나 힐링하기 위해", value: "healing", emoji: "🌈" },
        { text: "새로운 세계와 이야기를 경험하기 위해", value: "explore", emoji: "🌍" },
        { text: "감정을 느끼고 공감하기 위해", value: "feel", emoji: "💭" },
        { text: "지적 자극과 생각할 거리를 위해", value: "think", emoji: "🤔" }
      ]
    },
    {
      id: 7,
      question: "영화 OST나 음악에 대한 당신의 생각은?",
      options: [
        { text: "OST가 영화의 반이다", value: "music-essential", emoji: "🎵" },
        { text: "좋은 OST는 플러스 요소", value: "music-plus", emoji: "🎶" },
        { text: "음악보다 스토리가 중요", value: "story-first", emoji: "📝" },
        { text: "영화 후에도 OST를 자주 듣는다", value: "music-fan", emoji: "🎧" }
      ]
    },
    {
      id: 8,
      question: "가장 끌리는 영화 장르는?",
      options: [
        { text: "드라마/멜로", value: "drama", emoji: "💕" },
        { text: "스릴러/미스터리", value: "thriller", emoji: "🔍" },
        { text: "SF/판타지", value: "scifi", emoji: "🚀" },
        { text: "코미디/로맨틱코미디", value: "comedy", emoji: "😄" }
      ]
    }
  ];

  const personalityTypes = {
    "감성 서사형": {
      description: "당신은 영화 속 깊은 감정과 서사에 몰입하는 타입입니다. 캐릭터의 내면과 대사 하나하나에 의미를 부여하며, 영화가 끝난 후에도 오랫동안 여운을 느낍니다.",
      traits: ["감정 공감력", "서사 몰입도", "대사 기억력"],
      directors: ["박찬욱", "이창동", "봉준호"],
      color: "bg-gradient-to-br from-purple-400 to-pink-400",
      movies: [
        { title: "기생충", year: "2019", mood: "사회적 메시지", ott: "넷플릭스" },
        { title: "리틀 포레스트", year: "2018", mood: "치유와 성장", ott: "넷플릭스" },
        { title: "어바웃 타임", year: "2013", mood: "감성 로맨스", ott: "넷플릭스" }
      ],
      playlist: ["시간을 달려서 - 아이유", "봄날 - BTS", "첫 눈 - EXO"]
    },
    "논리 서스펜스형": {
      description: "당신은 치밀한 구성과 반전을 즐기는 타입입니다. 복잡한 플롯을 분석하고 추리하는 것을 좋아하며, 예측 불가능한 전개에 쾌감을 느낍니다.",
      traits: ["분석력", "집중력", "추리력"],
      directors: ["크리스토퍼 놀란", "데이빗 핀처", "박찬욱"],
      color: "bg-gradient-to-br from-gray-700 to-blue-900",
      movies: [
        { title: "인셉션", year: "2010", mood: "복잡한 구조", ott: "넷플릭스" },
        { title: "살인의 추억", year: "2003", mood: "미스터리", ott: "넷플릭스" },
        { title: "샤터 아일랜드", year: "2010", mood: "심리 스릴러", ott: "넷플릭스" }
      ],
      playlist: ["Time - Hans Zimmer", "Lux Aeterna - Clint Mansell", "Experience - Ludovico Einaudi"]
    },
    "비주얼 감각형": {
      description: "당신은 영화의 시각적 아름다움에 매료되는 타입입니다. 색감, 구도, 촬영 기법 등 영상미에 민감하며, 예술적 표현을 높이 평가합니다.",
      traits: ["심미안", "감각", "예술성"],
      directors: ["웨스 앤더슨", "테렌스 말릭", "박찬욱"],
      color: "bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400",
      movies: [
        { title: "그랜드 부다페스트 호텔", year: "2014", mood: "독특한 미장센", ott: "넷플릭스" },
        { title: "라라랜드", year: "2016", mood: "화려한 색채", ott: "넷플릭스" },
        { title: "아가씨", year: "2016", mood: "탐미적 영상", ott: "넷플릭스" }
      ],
      playlist: ["City of Stars - La La Land OST", "Claire de Lune - Debussy", "River Flows in You - Yiruma"]
    },
    "감정 공감형": {
      description: "당신은 캐릭터의 감정에 깊이 공감하는 타입입니다. 등장인물의 기쁨과 슬픔을 함께 느끼며, 영화를 통해 카타르시스를 경험합니다.",
      traits: ["공감 능력", "감수성", "정서적 교감"],
      directors: ["리처드 링클레이터", "그레타 거윅", "이창동"],
      color: "bg-gradient-to-br from-rose-400 to-orange-300",
      movies: [
        { title: "비포 선라이즈", year: "1995", mood: "진솔한 대화", ott: "넷플릭스" },
        { title: "레이디 버드", year: "2017", mood: "성장 이야기", ott: "넷플릭스" },
        { title: "벌새", year: "2018", mood: "감성 드라마", ott: "넷플릭스" }
      ],
      playlist: ["Someone Like You - Adele", "Let It Be - The Beatles", "가을 타나봐 - 바이브"]
    },
    "모험 탐험형": {
      description: "당신은 새로운 세계와 이야기를 탐험하는 것을 좋아하는 타입입니다. SF, 판타지 등 상상력이 풍부한 영화에 끌리며, 현실을 벗어난 경험을 즐깁니다.",
      traits: ["상상력", "호기심", "개방성"],
      directors: ["크리스토퍼 놀란", "제임스 카메론", "봉준호"],
      color: "bg-gradient-to-br from-cyan-400 to-blue-500",
      movies: [
        { title: "인터스텔라", year: "2014", mood: "우주 탐험", ott: "넷플릭스" },
        { title: "괴물", year: "2006", mood: "독특한 세계관", ott: "넷플릭스" },
        { title: "아바타", year: "2009", mood: "판타지 세계", ott: "디즈니+" }
      ],
      playlist: ["Cornfield Chase - Hans Zimmer", "Main Theme - Interstellar", "Test Drive - How to Train Your Dragon"]
    },
    "유머 힐링형": {
      description: "당신은 영화를 통해 웃음과 힐링을 찾는 타입입니다. 밝고 경쾌한 분위기를 좋아하며, 영화가 주는 긍정적 에너지를 중요하게 생각합니다.",
      traits: ["낙천성", "유머 감각", "긍정 에너지"],
      directors: ["나홍진", "강형철", "주드 아파토우"],
      color: "bg-gradient-to-br from-yellow-300 to-green-400",
      movies: [
        { title: "써니", year: "2011", mood: "유쾌한 우정", ott: "넷플릭스" },
        { title: "극한직업", year: "2019", mood: "코믹 액션", ott: "넷플릭스" },
        { title: "미드나잇 인 파리", year: "2011", mood: "로맨틱 코미디", ott: "넷플릭스" }
      ],
      playlist: ["Happy - Pharrell Williams", "Walking on Sunshine - Katrina", "좋은 날 - 아이유"]
    }
  };

  const analyzePersonality = (answers) => {
    const scores = {
      "감성 서사형": 0,
      "논리 서스펜스형": 0,
      "비주얼 감각형": 0,
      "감정 공감형": 0,
      "모험 탐험형": 0,
      "유머 힐링형": 0
    };

    Object.values(answers).forEach(answer => {
      switch(answer) {
        case "dialogue":
        case "story":
        case "slow":
          scores["감성 서사형"] += 2;
          break;
        case "tension":
        case "twist":
        case "think":
          scores["논리 서스펜스형"] += 2;
          break;
        case "visual":
        case "music-essential":
        case "music-fan":
          scores["비주얼 감각형"] += 2;
          break;
        case "emotion":
        case "feel":
        case "relatable":
          scores["감정 공감형"] += 2;
          break;
        case "explore":
        case "scifi":
        case "fast":
          scores["모험 탐험형"] += 2;
          break;
        case "bright":
        case "healing":
        case "comedy":
          scores["유머 힐링형"] += 2;
          break;
      }
    });

    const sortedTypes = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return sortedTypes[0][0];
  };

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setLoading(true);
      setTimeout(() => {
        const personalityType = analyzePersonality(newAnswers);
        setResult(personalityTypes[personalityType]);
        setLoading(false);
        setStep('result');
      }, 2000);
    }
  };

  const resetTest = () => {
    setStep('intro');
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };

  const shareResult = () => {
    if (navigator.share) {
      navigator.share({
        title: '미루어보자 - 내 영화 취향은?',
        text: `나의 영화 취향은 "${Object.keys(personalityTypes).find(key => personalityTypes[key] === result)}"!`,
        url: window.location.href
      });
    } else {
      alert('공유 기능은 모바일에서 지원됩니다!');
    }
  };

  if (step === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <div className="mb-6">
            <Film className="w-20 h-20 mx-auto text-purple-600 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              미루어보자
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              AI가 분석하는 나의 영화 취향
            </p>
            <p className="text-sm text-gray-500">
              8개의 질문으로 당신만의 영화 DNA를 찾아드립니다
            </p>
          </div>

          <div className="my-8 space-y-4">
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span>AI 기반 취향 분석</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <Film className="w-5 h-5 text-purple-500" />
              <span>맞춤 영화 추천</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <Music className="w-5 h-5 text-pink-500" />
              <span>영화 OST 플레이리스트</span>
            </div>
          </div>

          <button
            onClick={() => setStep('test')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            테스트 시작하기
          </button>

          <p className="mt-6 text-sm text-gray-500">
            소요시간: 약 2분 | 총 8문항
          </p>
        </div>
      </div>