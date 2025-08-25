import React from 'react'

// Convert Google Drive shareable link to embeddable link
const getEmbedUrl = (url: string) => {
    const fileIdMatch = url.match(/\/d\/(.*)\/view/);
    if (fileIdMatch && fileIdMatch[1]) {
        return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
    }
    return url; // Fallback if the URL does not match expected pattern
};

const PdfViewer = ({ pdfUrl }: { pdfUrl: any }) => {
    const embedUrl = getEmbedUrl(pdfUrl);

    return (
        <>
        <div className=' w-full below-500:hidden '>
            <iframe
                src={embedUrl}
                width="100%"
                height="600px"
                title="PDF Viewer"
                style={{ border: 'none',display: 'block'  }}
            />
            
        </div>
        <div className=' w-full hidden below-500:block '>
        <iframe
            src={embedUrl}
            width="100%"
            height="400px"
            title="PDF Viewer"
            style={{ border: 'none',display: 'block'  }}
        />
        
    </div>
    </>
    );
}

export default PdfViewer
