package com.example.student_market.domain;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "forum_messages")
public class ForumMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "message_id")
    private Long id;

    private boolean me;
    private String contenu;
    private boolean deleted;
    private LocalDateTime sendDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "parent_message_id")
    private ForumMessage parentMessage;

    @OneToMany(mappedBy = "parentMessage", cascade = CascadeType.ALL)
    private List<ForumMessage> replies = new ArrayList<>();

}
