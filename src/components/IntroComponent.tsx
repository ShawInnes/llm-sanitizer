export function IntroComponent() {
    return <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Data Sanitizer for LLM Submissions
        </h1>
        <p className="text-lg text-gray-600 mb-2">
            This tool helps protect your sensitive data when working with Large Language Models. It automatically
            detects and tokenizes personal information, credentials, and other sensitive content.
        </p>
        <p className="text-md text-gray-500">
            Each piece of sensitive data is replaced with a reversible token, allowing you to safely process your text
            with LLMs while maintaining the ability to restore the original information later.
        </p>
    </div>;
}