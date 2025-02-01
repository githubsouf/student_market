package com.example.student_market.controller;

import com.example.student_market.domain.Product;
import com.example.student_market.service.ProductService;
import com.example.student_market.util.JwtUtil;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

@Endpoint
public class ProductEndpoint {

    private static final String NAMESPACE_URI = "http://www.example.com/student_market";
    private final ProductService productService;
    private final JwtUtil jwtUtil;
    private final UserDetailsService userDetailsService;

    public ProductEndpoint(ProductService productService, JwtUtil jwtUtil, UserDetailsService userDetailsService) {
        this.productService = productService;
        this.jwtUtil = jwtUtil;
        this.userDetailsService = userDetailsService;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "ProductRequest")
    @ResponsePayload
    public ResponseEntity<String> createProduct(@RequestPayload Product product, HttpServletRequest request) {
        String token = extractBearerToken(request);
        if (token == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Missing token");
        }

        String username = jwtUtil.extractUsername(token);
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);

        if (!jwtUtil.validateToken(token, userDetails)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token");
        }

        Product savedProduct = productService.createProduct(product);
        return ResponseEntity.ok("Product created successfully with ID: " + savedProduct.getId());
    }

    private String extractBearerToken(HttpServletRequest request) {
        String header = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (header != null && header.startsWith("Bearer ")) {
            return header.substring(7);
        }
        return null;
    }
}
