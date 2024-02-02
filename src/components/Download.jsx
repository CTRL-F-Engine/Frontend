import React from 'react';

export const Download = ({ pdfUrl }) => {
    const handleDownload = async () => {
        try {
            const response = await fetch(pdfUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'article.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

    return (
        <button
            className={`sm:w-[120px] w-fit box-border xs:h-[38px] h-[30px] text-neutral-50 text-[13px] sm:text-[15px] font-medium sm:font-bold bg-filter font-['TT Commons'] sm:px-4 px-2 sm:rounded-[5px] rounded-[3px]`}
            onClick={handleDownload}
        >
            Download PDF
        </button>
    );
};