import React, { useState } from "react";
import { Document, Page,pdfjs     } from "react-pdf";

import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
export default function PdfViewer(props) {
  const [numPages, setNumPages] = useState(null);


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  const { pdf } = props;

  return (
    <Document
      file={pdf}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page  scale={1.0} key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}