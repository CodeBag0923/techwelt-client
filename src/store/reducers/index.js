import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import settingReducer from './setting';
import counterReducer from './counter';
import articleGeneratorReducer from './article_generator';
import QADocReducer from './qa_doc';
import contractReviewReducer from './contract_review';
import contractGeneratorReducer from './contract_generator';
import depositionPrepReducer from "./deposition_prep";
import DemandLetterReducer from "./demand_letter";
import LegalMemoReducer from "./legal_memo";
import emailReplyReducer from "./email_reply";
import adversarialDialogReducer from "./adversarial_dialog";
import stateLawsReducer from './state_laws';
import fedLawsReducer from './fed_laws';
import LegalTermReducer from './legal_term';
import dialogDataReducer from './dialog_data';
import historyReducer from './history';
import buildYourOwnReducer from "./build_your_own";

import OntroGTPReducer  from './ontro-gpt';
import ChatHistorySlice  from './chat_history';
import PrecedentCaseReducer from './precedent_case';
import CommonToolsReducer from './common_tools';
import HelpCenterReducer from './help_center';

const rootReducer = combineReducers({
  _user: userReducer,
  _setting: settingReducer,
  counter: counterReducer,

  article_generator: articleGeneratorReducer,
  contract_review: contractReviewReducer,
  contract_generator: contractGeneratorReducer,
  deposition_prep: depositionPrepReducer,
  demand_letter: DemandLetterReducer,
  legal_memo: LegalMemoReducer,
  email_reply: emailReplyReducer,
  adversarial_dialog: adversarialDialogReducer,
  state_laws: stateLawsReducer,
  fed_laws: fedLawsReducer,
  legal_term: LegalTermReducer,
  qa_doc: QADocReducer,
  dialog_data: dialogDataReducer,
  build_your_own: buildYourOwnReducer,
  history: historyReducer,
  precedent_case: PrecedentCaseReducer,
  ontro_gpt: OntroGTPReducer,
  chat_history: ChatHistorySlice,
  common_tools: CommonToolsReducer,
  help_center: HelpCenterReducer
});

export default rootReducer;
