import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as pipelines from 'aws-cdk-lib/pipelines';
import { CodePipeline } from 'aws-cdk-lib/aws-events-targets';
import { CodePipelineSource } from 'aws-cdk-lib/pipelines';

export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
  const pipeline = new pipelines.CodePipeline(this, 'Pipeline', {
    pipelineName:'demopipeline',
    synth: new pipelines.ShellStep('Synth', {
    input: CodePipelineSource.gitHub('Rahul1981/test01', 'main'),
    commands: ['npm ci','npm run build','npx cdk synth'],
  }),
});

  }
}
