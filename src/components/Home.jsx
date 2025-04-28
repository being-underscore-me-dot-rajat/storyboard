import React, { useState } from 'react';
import '../styles/App.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Nav';

export default function Home() {
  const [scenes, setScenes] = useState(['']);
  const [response, setResponse] = useState('');
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    const updatedScenes = [...scenes];
    updatedScenes[index] = value;
    setScenes(updatedScenes);
  };

  const addScene = () => {
    if (scenes.length < 6) {
      setScenes([...scenes, '']);
    } else {
      alert('You can only add up to 6 scenes!');
    }
  };
  const deleteScene = (index) => {
    const updatedScenes = scenes.filter((_, i) => i !== index);
    setScenes(updatedScenes);
  };

  const handleSubmit = async () => {
    const hasEmptyScene = scenes.some(scene => scene.trim() === '');
    if (hasEmptyScene) {
      alert('Empty scene not allowed!');
      return;
    }

    try {
      const res = await fetch('/api/prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompts: scenes,
          style: selectedStyle,
          theme: selectedTheme
        }),
      });

      const data = await res.json();
      if (res.ok) {
        navigate('/result', { state: { result: data.result } });
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error('Error sending prompts:', err);
      alert('Error processing prompts.');
    }
  };
  const [selectedStyle, setSelectedStyle] = useState('normal');
  const [selectedTheme, setSelectedTheme] = useState('random');


  return (
    <div>

      <Navbar />
      <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-start py-5">
        <h1 className="display-4 fw-bold text-center mb-4">🎬 Storyboard Builder</h1>

        <div className="w-100" style={{ maxWidth: '800px' }}>
          {scenes.map((scene, index) => (
            <div className="mb-3" key={index}>
              <textarea
                className="form-control bg-secondary text-white border-0"
                rows="3"
                value={scene}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder={`Scene ${index + 1}`}
              />
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteScene(index)}
                disabled={scenes.length === 1}
                title="Delete this scene"
              >
                Delete 🗑️
              </button>
            </div>
          ))}

          <div className="d-flex gap-2 flex-wrap">
            <button
              className="submit btn btn-success"
              onClick={addScene}
            >
              ➕ Add Scene
            </button>

            <button
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div className="mb-4">
            <label className="form-label">Choose a Style/Effect:</label>
            <select
              className="form-select"
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="cinematic">Cinematic</option>
              <option value="anime">Anime</option>
              <option value="pastel">Pastel</option>
              <option value="crayon">Crayon</option>
              <option value="realistic">Realistic</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="form-label">Choose a Theme:</label>
            <select
              className="form-select"
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
            >
              <option value="random">Random</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="noir">Noir</option>
              <option value="fantasy">Fantasy</option>
              <option value="horror">Horror</option>
              <option value="western">Western</option>
            </select>
          </div>
          {response && (
            <div className="alert alert-success mt-3" role="alert">
              {response}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
