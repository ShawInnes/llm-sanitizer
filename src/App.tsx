import {useState} from 'react'
import {TokenMappingComponent} from "./components/TokenMappingComponent.tsx"
import {IntroComponent} from "./components/IntroComponent.tsx"
import {TokenMapping} from "./services/TokenMapping.ts";
import {sanitiseInputText} from "./services/SanitiseInputText.ts";

function App() {
    const [inputText, setInputText] = useState('')
    const [sanitizedText, setSanitizedText] = useState('')
    const [tokenMappings, setTokenMappings] = useState<TokenMapping[]>([])

    const handleSubmit = () => {
        const {mappings, sanitizedText} = sanitiseInputText(inputText);

        setSanitizedText(sanitizedText)
        setTokenMappings(mappings)
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto space-y-8">
                <IntroComponent/>

                <div className="relative">
                    <div className="absolute -top-8 right-0">
                        <div className="group relative">
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                            <div
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-sm text-white rounded-lg py-2 px-3 absolute right-0 w-72 mt-2 z-10">
                                Example input:
                                <br/>
                                Contact john.doe@example.com or call +1 (555) 123-4567.
                                <br/>
                                SSN: 123-45-6789
                                <br/>
                                ABN: 51 824 753 556
                            </div>
                        </div>
                    </div>

                    <textarea
                        className="w-full h-64 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your text here..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                </div>

                <div className="text-center space-x-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-200"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button
                        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-200"
                        onClick={() => {
                            setInputText('')
                            setSanitizedText('')
                            setTokenMappings([])
                        }}
                    >
                        Clear
                    </button>
                </div>
                <TokenMappingComponent mappings={tokenMappings}/>

                <textarea
                    className="w-full h-64 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50 cursor-not-allowed"
                    placeholder="Sanitised output..."
                    value={sanitizedText}
                    readOnly
                />
            </div>
        </div>
    )
}

export default App