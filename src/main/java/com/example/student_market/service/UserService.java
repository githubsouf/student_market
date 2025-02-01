package com.example.student_market.service;

import com.example.student_market.dto.UserDTO;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.student_market.domain.User;
import com.example.student_market.repository.UserRepository;
import org.springframework.mail.javamail.MimeMessageHelper;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private PasswordEncoder passwordEncoder;



    public User createUser(User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new IllegalArgumentException("Username already exists");
        }
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Encrypt password
        return userRepository.save(user);
    }
    /**
     * Register a new user.
     *
     * @param userDTO Data Transfer Object containing user details.
     * @return The saved User entity.
     */
    public User registerUser(UserDTO userDTO) {
        if (userRepository.findByUsername(userDTO.getUsername()).isPresent()) {
            throw new IllegalArgumentException("Username already exists");
        }
        if (userRepository.findByEmail(userDTO.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email already exists");
        }

        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setEmail(userDTO.getEmail());
        user.setFirstname(userDTO.getFirstname());
        user.setLastname(userDTO.getLastname());
        user.setRole(userDTO.getRole());
        User savedUser = userRepository.save(user);

        try {
            sendVerificationEmail(
                    userDTO.getEmail(),
                    "Verify Your Email",
                    "Thank you for registering! Please verify your email by clicking this link: <verification_link>"
            );
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send verification email", e);
        }

        return savedUser;
    }

    /**
     * Send a verification email to the user.
     *
     * @param to      Recipient's email address.
     * @param subject Email subject.
     * @param content Email content (HTML or plain text).
     * @throws MessagingException If there is an error in email sending.
     */
    public void sendVerificationEmail(String to, String subject, String content) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(content, true);

        mailSender.send(message);
    }

    /**
     * Retrieve all users.
     *
     * @return A list of all users.
     */
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    /**
     * Retrieve a user by their ID.
     *
     * @param id The ID of the user.
     * @return An optional User object.
     */
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
    /**
     * Delete a user by their ID.
     *
     * @param id The ID of the user.
     */
    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
    public User updateUser(Long id, User userDetails) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(userDetails.getUsername());
            user.setEmail(userDetails.getEmail());
            user.setFirstname(userDetails.getFirstname());
            user.setLastname(userDetails.getLastname());
            user.setRole(userDetails.getRole());
            return userRepository.save(user);
        }).orElse(null);}
    /**
     * Retrieve a user by their username.
     *
     * @param username The username of the user.
     * @return An optional User object.
     */
    public Optional<User> loadUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
