package com.example.student_market.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
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
//    @Value("${facture.xml.path}")
    private static final String xmlPath = "xml/facture/facture.xml";

    public static boolean validate(String xmlObject, String xsdPath) {
        try {
            System.out.println(xmlObject);
            createXmlFile(xmlObject, xmlPath);
            System.out.println("Hello, c'est SYLLA");
            SchemaFactory factory = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
            URL xsdURL = Objects.requireNonNull(XmlValidator.class.getClassLoader().getResource(xsdPath));
            Schema schema = factory.newSchema(new File(xsdURL.getFile()));
            Validator validator = schema.newValidator();
            URL xmlURL = Objects.requireNonNull(XmlValidator.class.getClassLoader().getResource(xmlPath));
            Source source = new StreamSource(new File(xmlURL.getFile()));
            validator.validate(source);
            deleteXmlFile(xmlPath);
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

    private static void deleteXmlFile(String filePath) {
        try {
            java.io.File file = new java.io.File(XmlValidator.class.getClassLoader().getResource(".").getFile() + filePath);
            if (file.delete()) {
                System.out.println(filePath + " supprimé avec succès.");
            } else {
                System.out.println("Impossible de supprimer le fichier " + filePath);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    private static void createXmlFile(String xml, String filePath) {
        try {
            String basePath = XmlValidator.class.getClassLoader().getResource(".").getFile();
            java.io.File file = new java.io.File(basePath + filePath);
            java.io.File parentDir = file.getParentFile();
            if (parentDir != null && !parentDir.exists()) {
                System.out.println("Le fichier parent n'existe pas");
                parentDir.mkdirs();
            }
            java.io.BufferedWriter writer = new java.io.BufferedWriter(new java.io.FileWriter(file));
            writer.write(xml);
            writer.close();
            System.out.println("Créé avec succès : " + file.getAbsolutePath());
        } catch (java.io.IOException e) {
            e.printStackTrace();
        }
    }


}

