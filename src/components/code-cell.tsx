import CodeEditor from './code-editor';
import { useState } from 'react';
import Preview from './preview';
import bundle from '../bundler';

const CodeCell = () => {
    const [code, setCode] = useState('');
    const [input, setInput] = useState('');

    const onClick = async () => {
        const output = await bundle(input);
        setCode(output);
    };

    return (
        <div>
            <CodeEditor
                initialVaule={'console.log(\'hi there\');'}
                onChange={(value) => setInput(value)}
            />
            <div>
                <button onClick={onClick}>Submit</button>
            </div>
            <Preview code={code} />
        </div>
    );
};

export default CodeCell;
