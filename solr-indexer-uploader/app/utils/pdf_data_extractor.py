import pdfplumber
import re


class PdfDataExtractor:

    def __remove_white_space(self, raw_text):
        textUnWhiteSPace = " ".join(re.split(r"\s+", raw_text))
        return textUnWhiteSPace

    def get_text_content(self, Path_File):
        content = ""
        with pdfplumber.open(Path_File) as pdf:
            pages = pdf.pages
            for page in pages:
                content = content + page.extract_text()

        return content

    def get_text_content_no_white_space(self, Path_File):
        content = ""
        with pdfplumber.open(Path_File) as pdf:
            pages = pdf.pages
            for page in pages:
                content = content + page.extract_text()

        content = self.__remove_white_space(content)
        return content
