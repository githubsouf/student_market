package com.example.student_market.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
import java.io.File;
import java.io.StringWriter;
import java.net.URL;
import java.util.Objects;


public class XsltTransformer {

    private static final Logger logger = LoggerFactory.getLogger(XsltTransformer.class);

    public String transform(String xmlPath, String xslPath) {
        try {
            TransformerFactory factory = TransformerFactory.newInstance();
            URL xslURL = Objects.requireNonNull(getClass().getClassLoader().getResource(xslPath));
            Transformer transformer = factory.newTransformer(new StreamSource(new File(xslURL.getFile())));
            URL xmlURL = Objects.requireNonNull(getClass().getClassLoader().getResource(xmlPath));
            StreamSource source = new StreamSource(new File(xmlURL.getFile()));
            StringWriter writer = new StringWriter();
            transformer.transform(source, new StreamResult(writer));
            return writer.toString();
        } catch (TransformerException e) {
            logger.error("Erreur lors de la transformation XSLT : {}", e.getMessage());
            return null;
        }
        catch (NullPointerException e){
            logger.error("Fichier XML ou XSL non trouvé : {}", e.getMessage());
            return null;
        }
    }
}

