package com.example.student_market.controller;

import com.example.student_market.config.XmlUtils;
import com.example.student_market.dto.OrderDataDTO;
import com.example.student_market.service.FactureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/facture")
public class FactureController {

    private final FactureService factureService;
    @Autowired
    public FactureController(FactureService factureService) {
        this.factureService = factureService;
    }

    @PostMapping("/generate")
    public ResponseEntity<byte[]> generateFacturePdf(@RequestBody OrderDataDTO orderData) {
        try {
            byte[] pdfData = factureService.generateInvoicePdf(XmlUtils.serializeToXml(orderData));
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=facture.pdf")
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(pdfData);

        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.badRequest().build();
        }
    }
}
