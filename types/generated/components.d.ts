import type { Schema, Attribute } from '@strapi/strapi';

export interface QuestionFroQuizesChapiter extends Schema.Component {
  collectionName: 'components_question_fro_quizes_chapiters';
  info: {
    displayName: 'chapiter';
    icon: 'layer';
    description: '';
  };
  attributes: {
    chapiter_video: Attribute.Media;
    isComplted: Attribute.Boolean & Attribute.DefaultTo<false>;
    chapiter_title: Attribute.String;
  };
}

export interface QuestionFroQuizesQuestion extends Schema.Component {
  collectionName: 'components_question_fro_quizes_questions';
  info: {
    displayName: 'question';
    icon: 'apps';
    description: '';
  };
  attributes: {
    questions_text: Attribute.String;
    option_01: Attribute.String;
    option_02: Attribute.String;
    option_03: Attribute.String;
    correct_option: Attribute.Enumeration<
      ['option_01', 'option_02', 'option_03']
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'question-fro-quizes.chapiter': QuestionFroQuizesChapiter;
      'question-fro-quizes.question': QuestionFroQuizesQuestion;
    }
  }
}
