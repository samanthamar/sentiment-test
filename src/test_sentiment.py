from textblob import TextBlob

text = "johnny sucks i hate him"

# import nltk
# nltk.download('punkt')


blob = TextBlob(text)
blob.tags           # [(u'The', u'DT'), (u'titular', u'JJ'),
                    #  (u'threat', u'NN'), (u'of', u'IN'), ...]

blob.noun_phrases   # WordList(['titular threat', 'blob',
                    #            'ultimate movie monster',
                    #            'amoeba-like mass', ...])

for sentence in blob.sentences:
    print(sentence.sentiment.polarity)  # returns (polarity, subjectivity)
# (0.060, 0.605)
# (-0.341, 0.767)