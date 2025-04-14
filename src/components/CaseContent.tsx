import { FC } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

// 完整的案例步骤内容
export const caseSteps = [
  {
    title: "业主发起议题",
    content: "2022年5月25日，37#702业主实名提议'将36架空层外空地改造成非机动车停车棚'。当满足39人联名发起则该议题判断为共性问题，依据合同金地物业将制定解决方案与业主大会协商讨论。",
    action: "业主需要：填写房号、选择是否联名发起、提供意见建议"
  },
  {
    title: "议题成功发起",
    content: "2022年10月29日，已有超过39名业主参与联名，根据5%动议制度成功发起本议题。业委会函复金地协助制定解决方案后交与业主大会协商。",
    action: "业委会需要：发送沟通函给物业，要求制定解决方案"
  },
  {
    title: "物业制定方案",
    content: "2023年3月17日，金地制作了方案及三家报价。经查询相关图纸及咨询相关部门，确认36梯楼栋架空层旁空地该处属于红线内，不属于消防登高面。",
    action: "物业需要：提供施工方案和三方报价单"
  },
  {
    title: "方案优化",
    content: "2023年5月31日，金地发来一家第三方公司的新方案：费用为1000元/扇门，但有带广告（合同5年）。",
    action: "物业需要：持续寻找更优方案并提交业主大会"
  },
  {
    title: "快速咨询",
    content: "2023年6月8日，收到异议：'5年合同期太长，5年中出现纠纷还要支付8000元，5年后设备所有权也依然属于乙方'。金地针对异议进行回应并提供了详细分析。",
    action: "业主需要：参与快速咨询，选择外包方案或自建方案"
  },
  {
    title: "快速咨询结果",
    content: "2023年6月20日，快速咨询结果为'外包方案'。该事项需改建共有区域属于民法典278规定由业主共同决定事项，因此根据议事规则上述事项公示15天后于7月5日召开业主大会会议由专有部分业主表决。",
    action: "业委会需要：发布业主大会会议启动公告"
  },
  {
    title: "业主大会表决",
    content: "2023年7月5日至7月7日进行表决。表决方式包括线上（使用'家住厦门'APP）和线下（签署纸制书面意见征求表）两种形式。",
    action: "业主需要：参与表决，选择同意、反对、从众或弃权"
  },
  {
    title: "表决结果",
    content: "2023年7月20日，公示期结束，最终结果为：反对44票，赞同43票，从众3票。其中反对票的业主占某梯业主总数的40%，赞同票的业主只占全小区剩余业主总数的1%。议案未通过。",
    action: "业委会需要：公示表决结果，结束本次议题"
  },
  {
    title: "总结",
    content: "本次业主大会会议经过就很有趣，37#702业主提议把36外属于全体的空地改非机动车停车场，经过联名发起、制作方案，最终进入表决阶段。表决过程中异议者和关心者来回拉锯反转多次，每次都是差一两票，三次反转后最终才形成决议。",
    action: "总结：业主参与度高，决策过程充分体现了民主协商的特点"
  }
];

interface CaseContentProps {
  activeStep: number;
}

const CaseContent: FC<CaseContentProps> = ({ activeStep }) => {
  const currentStep = caseSteps[activeStep];
  const isLastStep = activeStep === caseSteps.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="card-transition">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom color="primary">
            {currentStep.title}
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" paragraph>
              {currentStep.content}
            </Typography>
          </Box>
          {!isLastStep ? (
            <Box sx={{ 
              p: 2, 
              bgcolor: 'primary.light',
              borderRadius: 1,
              color: 'white'
            }}>
              <Typography variant="subtitle1" fontWeight="bold">
                下一步行动：
              </Typography>
              <Typography variant="body2">
                {currentStep.action}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ 
              p: 2, 
              background: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
              borderRadius: 1,
              color: 'white'
            }}>
              <Typography variant="body1">
                {currentStep.action.replace('总结：', '')}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CaseContent; 