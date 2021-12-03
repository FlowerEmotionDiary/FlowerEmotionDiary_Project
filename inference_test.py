# 사용할때는 복사본으로 사용
from tensorflow.keras.models import load_model
from konlpy.tag import Okt
import fasttext
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np

okt = Okt()

emotion_list = ['공포' , '놀람', '분노', '슬픔', '중립', '행복', '혐오']

class LSTM_emotion:
    def __init__(self):
        self.ft_model=fasttext.load_model('./cc.ko.100.bin')
        self.model = load_model('model3_100.h5')
        self.emotion_dict = [{'공포' : 0, '놀람': 0, '분노': 0, '슬픔': 0, '중립': 0, '행복': 0, '혐오': 0}]
        self.emotion_dict_floater = [{'공포' : 0, '놀람': 0, '분노': 0, '슬픔': 0, '중립': 0, '행복': 0, '혐오': 0}]
        
    def split_send_data(self,input_data):
        
        split_data = input_data.split("\n")
        # print(split_data)

        for split_data_number in split_data:
            
            data, one_sentence_data = self.predict_sentence(split_data_number)
            
            if data in self.emotion_dict[0].keys():
                self.emotion_dict[0][data] += 1
                
            for number in range(len(one_sentence_data)):
                self.emotion_dict_floater[0][emotion_list[number]] += one_sentence_data[number]

            for round_data in self.emotion_dict_floater[0].keys():
                a = round(self.emotion_dict_floater[0][round_data], 2)
                self.emotion_dict_floater[0][round_data] = a
            # 임시 출력 코드
            print(split_data_number, end ="")

            
            for temporary_data in range(len(one_sentence_data)):
                one_sentence_data[temporary_data] = round(one_sentence_data[temporary_data],2)

            print("=>",one_sentence_data)
            ##
            # print("=>",self.emotion_dict_floater[0]) # 감정 수치화된 거 보여주기
        return self.emotion_dict_floater

    # def return_data(self): # 나중에 반환 코드로 바꾸기
    #     for round_data in self.emotion_dict_floater[0].keys():
    #         a = round(self.emotion_dict_floater[0][round_data], 1)
    #         self.emotion_dict_floater[0][round_data] = a
    #     print(self.emotion_dict_floater[0])
    #     return 

    def predict_sentence(self,input_sentence):
        
        sentence = okt.morphs(input_sentence)# 하나의 문장으로 와야 한다.
        tokens = []
        
        for i in sentence:
            tokens.append(self.ft_model.get_word_vector(i))
        
        pad_tokens = pad_sequences([tokens], maxlen=30, padding='post', dtype='float32')
        
        predict_arr = self.model.predict(pad_tokens)[0]
        max1 = predict_arr.argmax() #최대값
        max1_emotion = emotion_list[max1] #최대값
        return max1_emotion, predict_arr


function = LSTM_emotion()

test_input_data = input() # 프론트에서 textarea를 사용했을때 \n 으로 enter키값도 같이 오는지 아직 확인 X
print(function.split_send_data(test_input_data))
