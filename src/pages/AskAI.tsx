import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const AskAI: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API anahtarı bulunamadı');
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `Meyve bilgi merkezi için bir asistan olarak davran. Şu soruyu cevapla: ${question}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      setAnswer(text);
    } catch (error) {
      console.error('Error fetching answer:', error);
      setAnswer('Üzgünüm, bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Yapay Zekaya Sor</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex items-center border-2 border-green-500 rounded-lg overflow-hidden">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Meyveler hakkında bir soru sorun..."
            className="flex-grow p-3 outline-none"
          />
          <button
            type="submit"
            disabled={loading || !question.trim()}
            className="bg-green-500 text-white p-3 hover:bg-green-600 transition-colors disabled:bg-green-300"
          >
            {loading ? 'Yükleniyor...' : <Send size={20} />}
          </button>
        </div>
      </form>
      {answer && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <MessageCircle size={24} className="mr-2 text-green-500" />
            Yapay Zeka Yanıtı
          </h2>
          <p className="whitespace-pre-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AskAI;