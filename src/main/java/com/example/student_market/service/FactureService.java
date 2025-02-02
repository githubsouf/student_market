package com.example.student_market.service;


import com.example.student_market.config.XmlValidator;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import net.sf.saxon.s9api.*;
import javax.xml.transform.stream.StreamSource;
import java.io.*;
import com.itextpdf.html2pdf.HtmlConverter;





@Service
public class FactureService {

    @Value("${facture.xslt.path}")
    private String xsltPath;
    @Value("${facture.xsd.path}")
    private String xsdPath;

    public byte[] generateInvoicePdf(String xmlData) {
        try {
            if (XmlValidator.validate(xmlData,xsdPath)) {
                String htmlInvoice = transformXmlToHtml(xmlData, xsltPath);
                return convertHtmlToPdf(htmlInvoice);
            }
            return null;
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la génération du PDF : " + e.getMessage(), e);
        }
    }

    // Transforme le XML en HTML via XSLT
    private String transformXmlToHtml(String xmlData, String xsltPath) throws Exception {
        Processor processor = new Processor(false);
        XsltCompiler compiler = processor.newXsltCompiler();
        XsltExecutable executable = compiler.compile(new StreamSource(new File(xsltPath)));
        XdmNode source = processor.newDocumentBuilder().build(new StreamSource(new StringReader(xmlData)));
        XsltTransformer transformer = executable.load();
        transformer.setInitialContextNode(source);

        // Nouvelle approche pour capturer la sortie dans un `String`
        ByteArrayOutputStream outStream = new ByteArrayOutputStream();
        Serializer serializer = processor.newSerializer(outStream);
        serializer.setOutputProperty(Serializer.Property.METHOD, "html");

        transformer.setDestination(serializer);
        transformer.transform();
        System.out.println("HTML Final : " + outStream.toString());
        return outStream.toString("UTF-8");
    }


    public byte[] convertHtmlToPdf(String htmlInvoice) throws Exception {
        try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
             PdfWriter writer = new PdfWriter(outputStream);
             PdfDocument pdf = new PdfDocument(writer)) {
            HtmlConverter.convertToPdf(htmlInvoice, outputStream);
            return outputStream.toByteArray();
        } catch (Exception e) {
            throw new Exception("Erreur lors de la conversion HTML en PDF : " + e.getMessage());
        }
    }
}
