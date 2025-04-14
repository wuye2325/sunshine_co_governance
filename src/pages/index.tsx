import { useState } from 'react';
import { Box, Typography, Button, Container, Stepper, Step, StepLabel } from '@mui/material';
import { motion } from 'framer-motion';
import CaseContent, { caseSteps } from '../components/CaseContent';

// 定义流程步骤
const steps = caseSteps.map(step => step.title);

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
    setCompleted((prev) => ({ ...prev, [activeStep]: true }));
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
          阳光共治流程体验
        </Typography>
        
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
          通过小区健身器材维修案例，体验阳光共治的完整流程
        </Typography>
      </motion.div>

      <Box sx={{ mb: 4 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <CaseContent activeStep={activeStep} />

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="outlined"
          size="large"
        >
          上一步
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          size="large"
        >
          {activeStep === steps.length - 1 ? '完成' : '下一步'}
        </Button>
      </Box>
    </Container>
  );
} 