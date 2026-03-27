import QuestionWrapper from '../../components/QuestionWrapper/QuestionWrapper';
import QuestionText from '../../components/QuestionText/QuestionText';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import SummaryText from '../../components/SummaryText/SummaryText';
import SummaryTable from '../../components/SummaryTable/SummaryTable';
import util from '../../Utility/Utility';
import { ResultType } from '../../types/questions';

interface SummaryContainerProps {
  sumData: ResultType[][];
  resetHandler: () => void;
}

const SummaryContainer = (props: SummaryContainerProps) => {
  const submitHandler = () => {
    props.resetHandler();
  };
  return (
    <QuestionWrapper>
      <QuestionText>
        <SummaryText>
          <SummaryTable summaryObject={util.createSummaryObject(props.sumData)} />
        </SummaryText>
      </QuestionText>
      <SubmitButton submitHandler={submitHandler} disableButton={false}>
        Start Again
      </SubmitButton>
    </QuestionWrapper>
  );
};
export default SummaryContainer;
