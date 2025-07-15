import { ChapterRecap } from '@/lib/books'

interface ChapterRecapsSectionProps {
  chapterRecaps: ChapterRecap[]
}

export default function ChapterRecapsSection({ chapterRecaps }: ChapterRecapsSectionProps) {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Chapter Recaps</h2>
      
      <div className="space-y-6">
        {chapterRecaps.map((chapter, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {chapter.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span>Chapter {chapter.index}</span>
                    <span>Duration: {formatDuration(chapter.duration)}</span>
                    <span>Compression: {chapter.statistics.compression_ratio.toFixed(1)}x</span>
                  </div>
                </div>
                
                {chapter.audio && (
                  <div className="flex-shrink-0 ml-4">
                    <audio controls className="w-64">
                      <source src={chapter.audio} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {chapter.content}
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>Source words: {chapter.statistics.source_words.toLocaleString()}</span>
                    <span>Recap words: {chapter.statistics.recap_words.toLocaleString()}</span>
                  </div>
                  
                  {chapter.timeCodesUrl && (
                    <a 
                      href={chapter.timeCodesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View Time Codes
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}