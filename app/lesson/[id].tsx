import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import AITeacherLessonView from "@/components/AITeacherLessonView";
import LessonQuizView from "@/components/LessonQuizView";
import { getLessonById } from "@/data/lessons";

export default function LessonDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [showAITeacher, setShowAITeacher] = useState(false);

  const lesson = id ? getLessonById(id) : null;
  const isAITeacherLesson = lesson?.type === "audio_ai";

  // If this lesson is explicitly an audio_ai lesson, or user toggled AI Teacher mode
  if (isAITeacherLesson || showAITeacher) {
    return (
      <AITeacherLessonView
        lessonId={id}
        activeTab="learn"
        onClose={() => {
          if (showAITeacher && !isAITeacherLesson) {
            setShowAITeacher(false);
          } else {
            router.back();
          }
        }}
      />
    );
  }

  // Standard interactive lesson quiz
  return (
    <LessonQuizView
      lessonId={id || ""}
      onClose={() => router.back()}
      onOpenAITeacher={() => setShowAITeacher(true)}
    />
  );
}
