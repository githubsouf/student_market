package com.example.student_market.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.xml.sax.SAXException;
import javax.xml.XMLConstants;
import javax.xml.transform.Source;
import javax.xml.transform.stream.StreamSource;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;
import javax.xml.validation.Validator;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.Objects;


public class XmlValidator {
    private static final Logger logger = LoggerFactory.getLogger(XmlValidator.class);

    public boolean validate(String xmlPath, String xsdPath) {
        try {
            SchemaFactory factory = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
            URL xsdURL = Objects.requireNonNull(getClass().getClassLoader().getResource(xsdPath));
            System.out.println("Helloooo");
            Schema schema = factory.newSchema(new File(xsdURL.getFile()));
            System.out.println("Helloooo");
            Validator validator = schema.newValidator();
            URL xmlURL = Objects.requireNonNull(getClass().getClassLoader().getResource(xmlPath));
            Source source = new StreamSource(new File(xmlURL.getFile()));
            System.out.println("Helloooo");
            validator.validate(source);
            logger.info("Validation réussie : le document XML est valide.");
            return true;


        } catch (SAXException e) {
            logger.error("Erreur de validation XML : {}", e.getMessage());
            return false;
        }
        catch (IOException e){
            logger.error("Erreur lors de la lecture des fichiers XML ou XSD : {}", e.getMessage());
            return false;
        }
        catch (NullPointerException e){
            logger.error("Fichier XML ou XSD non trouvé : {}", e.getMessage());
            return false;
        }
    }

//    public static void main(String[] args) {
//        XmlValidator validator = new XmlValidator();
//        String xmlFile = "xml/products.xml";
//        String xsdFile = "xml/product.xsd";
//
//        boolean isValid = validator.validate(xmlFile, xsdFile);
//        if (isValid) {
//            System.out.println("Le document XML est valide.");
//        } else {
//            System.out.println("Le document XML n'est pas valide.");
//        }
//    }
}

