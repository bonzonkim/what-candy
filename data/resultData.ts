interface resultDataProps {
  fruit: string;
  resultName: string;
  resultExplanation: string;
}

export const results: resultDataProps[] = [
    {
        fruit: 'shinemuscat',
        resultName: '샤인머스켓',
        resultExplanation: '샤인머스켓 성격 타입은 자신감 넘치고 사교적입니다. 당신은 항상 밝고 활기차게 주변과 어울리며 긍정적인 에너지를 퍼뜨립니다. 사람들이 당신과 함께 있을 때, 그들은 상쾌함과 활력을 느낍니다. 당신은 목표를 달성하고 더 나은 세계를 만들기 위해 끊임없이 노력합니다.'
    },
    {
        fruit: 'orange',
        resultName: '귤',
        resultExplanation: '귤 성격 타입은 따뜻하고 친근한 성향을 가지고 있습니다. 당신은 다른 사람에게 따뜻한 관심과 돌봄을 제공하며, 사회적으로 매력적입니다. 당신은 인간 관계를 중요하게 생각하고, 친구와 가족을 위해 항상 지지자가 되어줍니다.'
    },
    {
        fruit: 'strawberry',
        resultName: '딸기',
        resultExplanation: '딸기 성격 타입은 창의적이며 로맨틱한 면이 강합니다. 당신은 예술적으로 감각적이며 자신만의 독특한 방식으로 세상을 바라봅니다. 사랑과 아름다움을 중요시하며, 항상 새로운 경험을 찾아 다니며 자유로운 영혼입니다.'
    },
    {
        fruit: 'tomato',
        resultName: '토마토',
        resultExplanation: '토마토 성격 타입은 결단력 있고 열정적인 성향을 가지고 있습니다. 당신은 목표를 달성하기 위해 끈기와 열정으로 무장하고, 다른 이들에게 영감을 줍니다. 문제에 직면할 때 당신은 항상 해결책을 찾아내며 일을 끝내는 데 탁월한 능력을 지녔습니다.'
    },
    {
        fruit: 'blacksapphire',
        resultName: '블랙사파이어',
        resultExplanation: '블랙사파이어 성격 타입은 신비로운 퍼스널리티를 가지고 있습니다. 당신은 다른 이들에게 어려운 문제를 해결하는 데 도움이 되는 지혜와 창의성을 제공합니다. 당신은 언제나 미지의 영역을 탐험하고 새로운 것을 발견하기를 즐깁니다.'
    },
    {
        fruit: 'error',
        resultName: '오류가 발생했습니다. 테스트를 다시 진행해주세요.',
        resultExplanation: '오류가 발생했습니다. 테스트를 다시 진행해주세요.'
    }
];

export const getResult = ({ fruit }: { fruit: string }, { type }: { type: string } ) => {
    const result = results.find(item => item.fruit === fruit);
    let returnValue: string | undefined = '';

      switch(type) {
        case 'name':
          returnValue = result?.resultName;
          break;
        case 'explanation':
          returnValue = result?.resultExplanation;
          break;
        default:
          return;
      }

    return returnValue
};
