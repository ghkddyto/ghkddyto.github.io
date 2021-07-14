# 슬라이드 메뉴 루프
제이쿼리와
[carouFredSel](https://github.com/DivaVocals/carouFredSel) 라이브러리를 사용해 슬라이드 무한루프 갤러리를 구현.

## [데모 홈페이지 이동](https://ghkddyto.github.io/Loop_menu/index.html)


## 메인 코드
![예시](example.jpg)
$('.loop_menu ul').carouFredSel({
            direction: 'left', //방향
            items:{minimum:6}, //메뉴 갯수
            width:'100%',
            auto:true, //오토슬라이드
            prev:{ button:'.left_arrow' }, //이전 버튼 지정
            next:{ button:'.right_arrow' }, //다음 버튼 지정
            scroll:1
        });



### 참고
#### [carouFredSel Github](https://github.com/DivaVocals/carouFredSel)
#### [http://caroufredsel.falsecode.ru/advanced.html](http://caroufredsel.falsecode.ru/advanced.html)
