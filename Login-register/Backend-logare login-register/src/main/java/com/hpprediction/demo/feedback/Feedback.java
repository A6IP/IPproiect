package com.hpprediction.demo.feedback;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class Feedback {
    private final String emailFrom;

    private final String emailTo;

    private final String message;

}
