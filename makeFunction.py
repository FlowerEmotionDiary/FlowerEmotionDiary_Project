#!/usr/bin/env python
# coding: utf-8

# In[1]:


from tensorflow.keras.models import load_model
from konlpy.tag import Okt
import fasttext
# import fasttext.util
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np


ft_model = fasttext.load_model('./cc.ko.100.bin')


def predict_sentence(input_sentence):
    okt = Okt()
    sentence = okt.morphs(input_sentence)
    tokens = []
    temp = []
    max_len = 30

    emotion = ['공포', '놀람', '분노', '슬픔', '중립', '행복', '혐오']

    for i in sentence:
        tokens.append(ft_model.get_word_vector(i))
    temp.append(tokens)
    pad_tokens = pad_sequences(
        temp, maxlen=max_len, padding='post', dtype='float32')

    model = load_model('model3_100.h5')
    predict_arr = model.predict(pad_tokens)[0]
    max1 = predict_arr.argmax()
    max1_emotion = emotion[max1]  # 최대값

    return max1_emotion


print(predict_sentence('신기하다 진짜로'))
print(predict_sentence('오늘은 우울하다'))
print(predict_sentence('밥이 맛있었음ㅎㅎ'))
print(predict_sentence("아무것도 하지 않아도 지적당하지 않는 아침이 평화롭다.쌓인 피로를 날려버리기 위해 나는 아침을 걸렀다.눈을 뜨니 많은 시간이 지나 건너편에 서성이고 있었다. 빛은 있어도 세상의 것이지 내 소유는 아니었다. "))
print(predict_sentence(" 나는 뻔하지만 깔끔한 스타벅스 커피를 좋아한다. 수혈하는 기분. 나는 커피 콩을 다 태워 쓴 맛이 나는 듯한 맛은 별로 좋아하지 않는다. 일부 많이 볶기만한 커피를 좋아하지 않는 까닭이다. 과일 향이 있는 산미가 있는 커피도 좋지만, 조금 더 바디감 있고 무거운 맛을 더 선호한다. 이는 탄맛에서 느껴지는 무거움과는 사뭇 다르다. 물론 정말 다양한 원두를 잘 내려주시는 곳도 있고, 그런 곳은 당연히 더 좋다. 하지만 스타벅스를 찾게 되는건 그만큼 꽝도 많이 경험했기 때문이다. 구석진 나만의 카페를 발견하는 것도 좋지만, 표준화되고 일관된 맛이 스타벅스를 좋아하는 이유다. 두번째는 차별화된 시스템이다. 스타벅스의 사이렌 오더는 굉장히 불편한 제도다. App에서 주문을 마치면, 제품이 나옴과 동시에 음성으로 불러준다. 어플을 통한 알림이나 진동벨을 쓰면 될 것을 굳이 설정한 닉네임을 불러준다니, 간편함과 편리함으로 무장한 요즘 시대에 어울리지 않는 아날로그적 감성이다. 사이렌 오더를 보며 사람들은 사실 아날로그를 좋아할지도 모른다고 생각했다. 불러주고, 만져주고, 직접 느낄 수 있는 무언가는 퇴근하는 길 도중 발견한 귀여운 고양이 같은 느낌이다. 엄청나게 획기적인 시스템는 아니지만, 굳이 나쁘진 않은 이 주문 시스템도 나는 좋다.마지막으로 프리퀀시. 프리퀀시를 모으는 것은 굉장히 비합리적인 소비인데, 그럼에도 불구하고 모으게 된다. 프리퀀시 제품을 사는 것이 배 이상 저렴할 뿐더러, 한정된 기념품이라는 의 스트레스도 받지 않게 되지만 어차피 스타벅스 가는 김에 먹다보면 몇 잔 더 마시면 받을 수 있을 것 같은데.. 라고 생각이 든다. 이건 좋다기 보단, 상술이지만 재밌으면 그만이다. 그리고 프리퀀시를 지인에게 선물하는 것도 덩달아 좋다."))
a = '오늘 점심부터 고기가 나와서 기부니가 좋다.😀 근데 파가 너무 매워서 흑흑 속이 너무 아파ㅠㅠ 힝힝'
print(predict_sentence(a))
print(predict_sentence('언른 애기 데리구 강동와서 둘은 맛있는 고기먹고 난 식단^^ 요새 살 빠지는 중이라 기분이 업업업 꼬맹이가 애기 씻겨주고셋이 누워있다가 둘이 잠들면슬금슬금 기어나가운동하면서 블로그 쓰는 나여유롭지만 바빴던 오늘이 좋고저녁먹고 조는 날 위해 애기 봐주는 꼬맹도 좋고다들 굿밤 되세요 오늘도 S2했다'))
