import { GiRank1 as EasyIcon, GiRank2 as MediumIcon, GiRank3 as HardIcon } from 'react-icons/gi' 


export const easyData = [
    {
      id: 'easy1',
      desc: 'Can you resist that tempting coffee shop visit for a week? Save ₹100 to complete this challenge.',
      coinValue: '100',
      isCompleted: false
    },
    {
      id: 'easy2',
      desc: 'Opt for homemade meals for three days straight and save ₹500 to conquer this challenge.',
      coinValue: '100',
      isCompleted: true
    }, 
    {
      id: 'easy3',
      desc: 'Log all your daily expenses for a week to successfully complete this challenge.',
      coinValue: '100',
      isCompleted: false
    },  
]
  
  export const medData = [
      {
        id: 'med1',
        desc: 'Negotiate and reduce one of your monthly bills (like internet or cable) to save ₹1,000 and conquer this challenge.',
        coinValue: '160',
        isCompleted: false
      },
      {
        id: 'med2',
        desc: 'Pay off an extra ₹2,000 towards your credit card debt this month to complete this challenge.',
        coinValue: '160',
        isCompleted: false
      }, 
      {
        id: 'med3',
        desc: 'Learn about a new investment strategy or opportunity and invest ₹5,000 wisely to successfully complete this challenge.',
        coinValue: '160',
        isCompleted: true
      },  
]
  
  export const hardData = [
      {
        id: 'hard1',
        desc: 'Plan a vacation on a tight budget and save ₹10,000 to conquer this challenging feat."',
        coinValue: '240',
        isCompleted: true
      },
      {
        id: 'hard2',
        desc: 'Build up your emergency fund by saving ₹20,000 to successfully complete this vital challenge.',
        coinValue: '240',
        isCompleted: false
      }, 
      {
        id: 'hard3',
        desc: 'Increase your retirement contributions by 2% for the next six months, saving ₹50,000 to become a retirement hero.',
        coinValue: '240',
        isCompleted: false
      },  
]

export const challengesData = [
    {
      label: "Easy",
      value: "easy",
      icon: EasyIcon,
      desc: easyData,
    },
    {
      label: "Medium",
      value: "medium",
      icon: MediumIcon,
      desc: medData,
    },
    {
      label: "Hard",
      value: "hard",
      icon: HardIcon,
      desc: hardData,
    },
]
