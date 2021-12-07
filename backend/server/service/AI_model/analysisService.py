# -*- coding: utf-8 -*-
# 사용할때는 복사본으로 사용
from tensorflow.keras.models import load_model
from konlpy.tag import Okt
import fasttext
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np

# model_path
pretrain_model_path = "./model3_100.h5"
fasttext_model_path = "./cc.ko.100.bin"

okt = Okt()

emotion_list = ['공포' , '놀람', '분노', '슬픔', '중립', '행복', '혐오']

class LSTM_emotion:
    def __init__(self):
        self.ft_model=fasttext.load_model(fasttext_model_path)
        self.model = load_model(pretrain_model_path)
        self.emotion_return = [{'공포' : 0, '놀람': 0, '분노': 0, '슬픔': 0, '중립': 0, '행복': 0, '혐오': 0}]
    
    # 이 메소드로 사용하시면 됩니다.
    def split_send_data(self,input_data):

        split_data = input_data.split("\n")

        for split_data_number in split_data:
            
            data, one_sentence_data = self.predict_sentence(split_data_number)
                        
            for number in range(len(one_sentence_data)):
                self.emotion_return[0][emotion_list[number]] += one_sentence_data[number]
                
        return self.return_data()

    def return_data(self):
        for round_data in self.emotion_return[0].keys():
                emotion_return_round = round(self.emotion_return[0][round_data], 3)
                self.emotion_return[0][round_data] = emotion_return_round
                
        return self.emotion_return[0]
    
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
