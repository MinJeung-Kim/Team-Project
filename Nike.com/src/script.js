
      new gridjs.Grid({
      columns: [{
                  name: 'No',
                  width: '20px'
                },
                '이름',
                '등급',
                '아이디',
                  { 
                    name : '전화번호',
                    sort: {
                      enabled: false
                    }
                  },
                '성별', 
                '유형'],
      sort: true,
      search: true,
      pagination: {
        limit: 5,
      },
      language: {
        'search': {
          'placeholder': '관련 검색어 입력'
        },
        'pagination': {
          'previous': '⬅',
          'next': '➡',
          'showing': ' ',
          'results': () => 'Records'
        }
      },
      style: {
        table: {
          'text-align': 'center'
        },
      },
      data: [
        ['10', 'bom', 'VIP', 'bmbm1', '010-4464-7124', '여', '정상'],
        ['09', '김민정', 'GOLD', 'mj114', '010-0011-4468', '여', '정상'],
        ['08', '통붕이', 'FAMILY', 'tb991', '', '남', '탈퇴'],
        ['07', '김예담', 'FAMILY', '', '', '여', '휴면'],
        ['06', '박서윤', 'SILVER', 'sysy66', '010-9977-4687', '여', '휴면'],
        ['05', '산타', 'VIP', 'stst32', '010-8765-1234', '남', '탈퇴']
      ]
    }).render(document.getElementById("wrapper"));
