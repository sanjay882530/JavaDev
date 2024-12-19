import { useState } from 'react';
import axios from 'axios';

const JavaCompiler = () => {
  const [code, setCode] = useState(`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`);
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRunCode = async () => {
    setIsLoading(true);
    setOutput(''); // Clear previous output
    try {
      const { data } = await axios.post('/api/v1/execute', {
        script: code,
        language: 'java',
        versionIndex: '4',
        clientId: import.meta.env.VITE_APP_CLIENT_ID, 
        clientSecret: import.meta.env.VITE_APP_CLIENT_SECRET,
        compileOnly: false,
      });
      setOutput(data.output);
    } catch (error) {
      console.error('API Error:', error);
      setOutput('Error: Unable to execute code. Please check your setup.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 m-20">
      <h1 className='text-3xl font-bold'>Online Java Compiler</h1>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="10"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleRunCode}
        disabled={isLoading}
      >
        {isLoading ? 'Running...' : 'Run Code'}
      </button>
      <h2 className="mt-4">Output:</h2>
      <pre className="bg-gray-100 p-2 rounded">{output}</pre>
    </div>
  );
};

export default JavaCompiler;
