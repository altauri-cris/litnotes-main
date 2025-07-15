import { KeyIdea } from '@/lib/books'

interface KeyIdeasSectionProps {
  keyIdeas: KeyIdea[]
}

export default function KeyIdeasSection({ keyIdeas }: KeyIdeasSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Ideas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {keyIdeas.map((idea, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {idea.title}
              </h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              {idea.description}
            </p>
            
            {idea.audioOffset && (
              <div className="mt-4 text-sm text-gray-500">
                Audio offset: {Math.floor(idea.audioOffset / 60)}:{String(Math.floor(idea.audioOffset % 60)).padStart(2, '0')}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}