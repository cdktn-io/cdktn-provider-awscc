# `codedeployDeploymentGroup` Submodule <a name="`codedeployDeploymentGroup` Submodule" id="@cdktn/provider-awscc.codedeployDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodedeployDeploymentGroup <a name="CodedeployDeploymentGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group awscc_codedeploy_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_name: str,
  service_role_arn: str,
  alarm_configuration: CodedeployDeploymentGroupAlarmConfiguration = None,
  auto_rollback_configuration: CodedeployDeploymentGroupAutoRollbackConfiguration = None,
  auto_scaling_groups: typing.List[str] = None,
  blue_green_deployment_configuration: CodedeployDeploymentGroupBlueGreenDeploymentConfiguration = None,
  deployment: CodedeployDeploymentGroupDeployment = None,
  deployment_config_name: str = None,
  deployment_group_name: str = None,
  deployment_style: CodedeployDeploymentGroupDeploymentStyle = None,
  ec2_tag_filters: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagFilters] = None,
  ec2_tag_set: CodedeployDeploymentGroupEc2TagSet = None,
  ecs_services: IResolvable | typing.List[CodedeployDeploymentGroupEcsServices] = None,
  load_balancer_info: CodedeployDeploymentGroupLoadBalancerInfo = None,
  on_premises_instance_tag_filters: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesInstanceTagFilters] = None,
  on_premises_tag_set: CodedeployDeploymentGroupOnPremisesTagSet = None,
  outdated_instances_strategy: str = None,
  tags: IResolvable | typing.List[CodedeployDeploymentGroupTags] = None,
  termination_hook_enabled: bool | IResolvable = None,
  trigger_configurations: IResolvable | typing.List[CodedeployDeploymentGroupTriggerConfigurations] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.applicationName">application_name</a></code> | <code>str</code> | The name of an existing CodeDeploy application to associate this deployment group with. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.alarmConfiguration">alarm_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | Information about the Amazon CloudWatch alarms that are associated with the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.autoRollbackConfiguration">auto_rollback_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | Information about the automatic rollback configuration that is associated with the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.autoScalingGroups">auto_scaling_groups</a></code> | <code>typing.List[str]</code> | A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.blueGreenDeploymentConfiguration">blue_green_deployment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a></code> | Information about blue/green deployment options for a deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a></code> | The application revision to deploy to this deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.deploymentConfigName">deployment_config_name</a></code> | <code>str</code> | A deployment configuration name or a predefined configuration name. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.deploymentGroupName">deployment_group_name</a></code> | <code>str</code> | A name for the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.deploymentStyle">deployment_style</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.ec2TagFilters">ec2_tag_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>]</code> | The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.ec2TagSet">ec2_tag_set</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a></code> | Information about groups of tags applied to Amazon EC2 instances. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.ecsServices">ecs_services</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>]</code> | The target Amazon ECS services in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.loadBalancerInfo">load_balancer_info</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | Information about the load balancer to use in a deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.onPremisesInstanceTagFilters">on_premises_instance_tag_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>]</code> | The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.onPremisesTagSet">on_premises_tag_set</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a></code> | Information about groups of tags applied to on-premises instances. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.outdatedInstancesStrategy">outdated_instances_strategy</a></code> | <code>str</code> | Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>]</code> | The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.terminationHookEnabled">termination_hook_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.triggerConfigurations">trigger_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>]</code> | Information about triggers associated with the deployment group. Duplicates are not allowed. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.applicationName"></a>

- *Type:* str

The name of an existing CodeDeploy application to associate this deployment group with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#application_name CodedeployDeploymentGroup#application_name}

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.serviceRoleArn"></a>

- *Type:* str

A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf.

For more information, see 'Create a Service Role for AWS CodeDeploy' in the AWS CodeDeploy User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}

---

##### `alarm_configuration`<sup>Optional</sup> <a name="alarm_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.alarmConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

Information about the Amazon CloudWatch alarms that are associated with the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#alarm_configuration CodedeployDeploymentGroup#alarm_configuration}

---

##### `auto_rollback_configuration`<sup>Optional</sup> <a name="auto_rollback_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.autoRollbackConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

Information about the automatic rollback configuration that is associated with the deployment group.

If you specify this property, don't specify the Deployment property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#auto_rollback_configuration CodedeployDeploymentGroup#auto_rollback_configuration}

---

##### `auto_scaling_groups`<sup>Optional</sup> <a name="auto_scaling_groups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.autoScalingGroups"></a>

- *Type:* typing.List[str]

A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created.

Duplicates are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#auto_scaling_groups CodedeployDeploymentGroup#auto_scaling_groups}

---

##### `blue_green_deployment_configuration`<sup>Optional</sup> <a name="blue_green_deployment_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.blueGreenDeploymentConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

Information about blue/green deployment options for a deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#blue_green_deployment_configuration CodedeployDeploymentGroup#blue_green_deployment_configuration}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a>

The application revision to deploy to this deployment group.

If you specify this property, your target application revision is deployed as soon as the provisioning process is complete. If you specify this property, don't specify the AutoRollbackConfiguration property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment CodedeployDeploymentGroup#deployment}

---

##### `deployment_config_name`<sup>Optional</sup> <a name="deployment_config_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.deploymentConfigName"></a>

- *Type:* str

A deployment configuration name or a predefined configuration name.

With predefined configurations, you can deploy application revisions to one instance at a time (CodeDeployDefault.OneAtATime), half of the instances at a time (CodeDeployDefault.HalfAtATime), or all the instances at once (CodeDeployDefault.AllAtOnce).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}

---

##### `deployment_group_name`<sup>Optional</sup> <a name="deployment_group_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.deploymentGroupName"></a>

- *Type:* str

A name for the deployment group.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}

---

##### `deployment_style`<sup>Optional</sup> <a name="deployment_style" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.deploymentStyle"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer.

If you specify this property with a blue/green deployment type, don't specify the AutoScalingGroups, LoadBalancerInfo, or Deployment properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_style CodedeployDeploymentGroup#deployment_style}

---

##### `ec2_tag_filters`<sup>Optional</sup> <a name="ec2_tag_filters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.ec2TagFilters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>]

The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group.

CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify EC2TagFilters or Ec2TagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ec_2_tag_filters CodedeployDeploymentGroup#ec_2_tag_filters}

---

##### `ec2_tag_set`<sup>Optional</sup> <a name="ec2_tag_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.ec2TagSet"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>

Information about groups of tags applied to Amazon EC2 instances.

Use when the deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ec_2_tag_set CodedeployDeploymentGroup#ec_2_tag_set}

---

##### `ecs_services`<sup>Optional</sup> <a name="ecs_services" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.ecsServices"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>]

The target Amazon ECS services in the deployment group.

This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <clustername>:<servicename>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ecs_services CodedeployDeploymentGroup#ecs_services}

---

##### `load_balancer_info`<sup>Optional</sup> <a name="load_balancer_info" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.loadBalancerInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

Information about the load balancer to use in a deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#load_balancer_info CodedeployDeploymentGroup#load_balancer_info}

---

##### `on_premises_instance_tag_filters`<sup>Optional</sup> <a name="on_premises_instance_tag_filters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.onPremisesInstanceTagFilters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>]

The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group.

CodeDeploy includes all on-premises instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#on_premises_instance_tag_filters CodedeployDeploymentGroup#on_premises_instance_tag_filters}

---

##### `on_premises_tag_set`<sup>Optional</sup> <a name="on_premises_tag_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.onPremisesTagSet"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a>

Information about groups of tags applied to on-premises instances.

The deployment group includes only on-premises instances identified by all the tag groups. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#on_premises_tag_set CodedeployDeploymentGroup#on_premises_tag_set}

---

##### `outdated_instances_strategy`<sup>Optional</sup> <a name="outdated_instances_strategy" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.outdatedInstancesStrategy"></a>

- *Type:* str

Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision.

If this option is set to UPDATE or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances. If this option is set to IGNORE, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#outdated_instances_strategy CodedeployDeploymentGroup#outdated_instances_strategy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>]

The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them.

Each tag consists of a key and an optional value, both of which you define.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}

---

##### `termination_hook_enabled`<sup>Optional</sup> <a name="termination_hook_enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.terminationHookEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#termination_hook_enabled CodedeployDeploymentGroup#termination_hook_enabled}

---

##### `trigger_configurations`<sup>Optional</sup> <a name="trigger_configurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.triggerConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>]

Information about triggers associated with the deployment group. Duplicates are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#trigger_configurations CodedeployDeploymentGroup#trigger_configurations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration">put_alarm_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration">put_auto_rollback_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfiguration">put_blue_green_deployment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeployment">put_deployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle">put_deployment_style</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilters">put_ec2_tag_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet">put_ec2_tag_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsServices">put_ecs_services</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo">put_load_balancer_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilters">put_on_premises_instance_tag_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesTagSet">put_on_premises_tag_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfigurations">put_trigger_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAlarmConfiguration">reset_alarm_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoRollbackConfiguration">reset_auto_rollback_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoScalingGroups">reset_auto_scaling_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetBlueGreenDeploymentConfiguration">reset_blue_green_deployment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeployment">reset_deployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentConfigName">reset_deployment_config_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentGroupName">reset_deployment_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentStyle">reset_deployment_style</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagFilters">reset_ec2_tag_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagSet">reset_ec2_tag_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEcsServices">reset_ecs_services</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetLoadBalancerInfo">reset_load_balancer_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesInstanceTagFilters">reset_on_premises_instance_tag_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesTagSet">reset_on_premises_tag_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOutdatedInstancesStrategy">reset_outdated_instances_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTerminationHookEnabled">reset_termination_hook_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTriggerConfigurations">reset_trigger_configurations</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_alarm_configuration` <a name="put_alarm_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration"></a>

```python
def put_alarm_configuration(
  alarms: IResolvable | typing.List[CodedeployDeploymentGroupAlarmConfigurationAlarms] = None,
  enabled: bool | IResolvable = None,
  ignore_poll_alarm_failure: bool | IResolvable = None
) -> None
```

###### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration.parameter.alarms"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>]

A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#alarms CodedeployDeploymentGroup#alarms}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the alarm configuration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}

---

###### `ignore_poll_alarm_failure`<sup>Optional</sup> <a name="ignore_poll_alarm_failure" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration.parameter.ignorePollAlarmFailure"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}

---

##### `put_auto_rollback_configuration` <a name="put_auto_rollback_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration"></a>

```python
def put_auto_rollback_configuration(
  enabled: bool | IResolvable = None,
  events: typing.List[str] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether a defined automatic rollback configuration is currently enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}

---

###### `events`<sup>Optional</sup> <a name="events" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration.parameter.events"></a>

- *Type:* typing.List[str]

The event type or types that trigger a rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#events CodedeployDeploymentGroup#events}

---

##### `put_blue_green_deployment_configuration` <a name="put_blue_green_deployment_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfiguration"></a>

```python
def put_blue_green_deployment_configuration(
  deployment_ready_option: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption = None,
  green_fleet_provisioning_option: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption = None,
  terminate_blue_instances_on_deployment_success: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess = None
) -> None
```

###### `deployment_ready_option`<sup>Optional</sup> <a name="deployment_ready_option" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfiguration.parameter.deploymentReadyOption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_ready_option CodedeployDeploymentGroup#deployment_ready_option}

---

###### `green_fleet_provisioning_option`<sup>Optional</sup> <a name="green_fleet_provisioning_option" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfiguration.parameter.greenFleetProvisioningOption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

Information about how instances are provisioned for a replacement environment in a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#green_fleet_provisioning_option CodedeployDeploymentGroup#green_fleet_provisioning_option}

---

###### `terminate_blue_instances_on_deployment_success`<sup>Optional</sup> <a name="terminate_blue_instances_on_deployment_success" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfiguration.parameter.terminateBlueInstancesOnDeploymentSuccess"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

Information about whether to terminate instances in the original fleet during a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#terminate_blue_instances_on_deployment_success CodedeployDeploymentGroup#terminate_blue_instances_on_deployment_success}

---

##### `put_deployment` <a name="put_deployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeployment"></a>

```python
def put_deployment(
  description: str = None,
  ignore_application_stop_failures: bool | IResolvable = None,
  revision: CodedeployDeploymentGroupDeploymentRevision = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeployment.parameter.description"></a>

- *Type:* str

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#description CodedeployDeploymentGroup#description}

---

###### `ignore_application_stop_failures`<sup>Optional</sup> <a name="ignore_application_stop_failures" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeployment.parameter.ignoreApplicationStopFailures"></a>

- *Type:* bool | cdktn.IResolvable

If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event.

If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ignore_application_stop_failures CodedeployDeploymentGroup#ignore_application_stop_failures}

---

###### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeployment.parameter.revision"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a>

Information about the location of stored application artifacts and the service from which to retrieve them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#revision CodedeployDeploymentGroup#revision}

---

##### `put_deployment_style` <a name="put_deployment_style" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle"></a>

```python
def put_deployment_style(
  deployment_option: str = None,
  deployment_type: str = None
) -> None
```

###### `deployment_option`<sup>Optional</sup> <a name="deployment_option" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle.parameter.deploymentOption"></a>

- *Type:* str

Indicates whether to route deployment traffic behind a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_option CodedeployDeploymentGroup#deployment_option}

---

###### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle.parameter.deploymentType"></a>

- *Type:* str

Indicates whether to run an in-place or blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_type CodedeployDeploymentGroup#deployment_type}

---

##### `put_ec2_tag_filters` <a name="put_ec2_tag_filters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilters"></a>

```python
def put_ec2_tag_filters(
  value: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>]

---

##### `put_ec2_tag_set` <a name="put_ec2_tag_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet"></a>

```python
def put_ec2_tag_set(
  ec2_tag_set_list: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct] = None
) -> None
```

###### `ec2_tag_set_list`<sup>Optional</sup> <a name="ec2_tag_set_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet.parameter.ec2TagSetList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>]

The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group.

CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ec_2_tag_set_list CodedeployDeploymentGroup#ec_2_tag_set_list}

---

##### `put_ecs_services` <a name="put_ecs_services" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsServices"></a>

```python
def put_ecs_services(
  value: IResolvable | typing.List[CodedeployDeploymentGroupEcsServices]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsServices.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>]

---

##### `put_load_balancer_info` <a name="put_load_balancer_info" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo"></a>

```python
def put_load_balancer_info(
  elb_info_list: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct] = None,
  target_group_info_list: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct] = None,
  target_group_pair_info_list: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct] = None
) -> None
```

###### `elb_info_list`<sup>Optional</sup> <a name="elb_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo.parameter.elbInfoList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>]

An array that contains information about the load balancers to use for load balancing in a deployment.

If you're using Classic Load Balancers, specify those load balancers in this array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#elb_info_list CodedeployDeploymentGroup#elb_info_list}

---

###### `target_group_info_list`<sup>Optional</sup> <a name="target_group_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo.parameter.targetGroupInfoList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>]

An array that contains information about the target groups to use for load balancing in a deployment.

If you're using Application Load Balancers and Network Load Balancers, specify their associated target groups in this array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#target_group_info_list CodedeployDeploymentGroup#target_group_info_list}

---

###### `target_group_pair_info_list`<sup>Optional</sup> <a name="target_group_pair_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo.parameter.targetGroupPairInfoList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>]

The target group pair information. This is an array of TargeGroupPairInfo objects with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#target_group_pair_info_list CodedeployDeploymentGroup#target_group_pair_info_list}

---

##### `put_on_premises_instance_tag_filters` <a name="put_on_premises_instance_tag_filters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilters"></a>

```python
def put_on_premises_instance_tag_filters(
  value: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesInstanceTagFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>]

---

##### `put_on_premises_tag_set` <a name="put_on_premises_tag_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesTagSet"></a>

```python
def put_on_premises_tag_set(
  on_premises_tag_set_list: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct] = None
) -> None
```

###### `on_premises_tag_set_list`<sup>Optional</sup> <a name="on_premises_tag_set_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesTagSet.parameter.onPremisesTagSetList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>]

A list that contains other lists of on-premises instance tag groups.

For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#on_premises_tag_set_list CodedeployDeploymentGroup#on_premises_tag_set_list}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CodedeployDeploymentGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>]

---

##### `put_trigger_configurations` <a name="put_trigger_configurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfigurations"></a>

```python
def put_trigger_configurations(
  value: IResolvable | typing.List[CodedeployDeploymentGroupTriggerConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>]

---

##### `reset_alarm_configuration` <a name="reset_alarm_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAlarmConfiguration"></a>

```python
def reset_alarm_configuration() -> None
```

##### `reset_auto_rollback_configuration` <a name="reset_auto_rollback_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoRollbackConfiguration"></a>

```python
def reset_auto_rollback_configuration() -> None
```

##### `reset_auto_scaling_groups` <a name="reset_auto_scaling_groups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoScalingGroups"></a>

```python
def reset_auto_scaling_groups() -> None
```

##### `reset_blue_green_deployment_configuration` <a name="reset_blue_green_deployment_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetBlueGreenDeploymentConfiguration"></a>

```python
def reset_blue_green_deployment_configuration() -> None
```

##### `reset_deployment` <a name="reset_deployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeployment"></a>

```python
def reset_deployment() -> None
```

##### `reset_deployment_config_name` <a name="reset_deployment_config_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentConfigName"></a>

```python
def reset_deployment_config_name() -> None
```

##### `reset_deployment_group_name` <a name="reset_deployment_group_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentGroupName"></a>

```python
def reset_deployment_group_name() -> None
```

##### `reset_deployment_style` <a name="reset_deployment_style" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentStyle"></a>

```python
def reset_deployment_style() -> None
```

##### `reset_ec2_tag_filters` <a name="reset_ec2_tag_filters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagFilters"></a>

```python
def reset_ec2_tag_filters() -> None
```

##### `reset_ec2_tag_set` <a name="reset_ec2_tag_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagSet"></a>

```python
def reset_ec2_tag_set() -> None
```

##### `reset_ecs_services` <a name="reset_ecs_services" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEcsServices"></a>

```python
def reset_ecs_services() -> None
```

##### `reset_load_balancer_info` <a name="reset_load_balancer_info" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetLoadBalancerInfo"></a>

```python
def reset_load_balancer_info() -> None
```

##### `reset_on_premises_instance_tag_filters` <a name="reset_on_premises_instance_tag_filters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesInstanceTagFilters"></a>

```python
def reset_on_premises_instance_tag_filters() -> None
```

##### `reset_on_premises_tag_set` <a name="reset_on_premises_tag_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesTagSet"></a>

```python
def reset_on_premises_tag_set() -> None
```

##### `reset_outdated_instances_strategy` <a name="reset_outdated_instances_strategy" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOutdatedInstancesStrategy"></a>

```python
def reset_outdated_instances_strategy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_termination_hook_enabled` <a name="reset_termination_hook_enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTerminationHookEnabled"></a>

```python
def reset_termination_hook_enabled() -> None
```

##### `reset_trigger_configurations` <a name="reset_trigger_configurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTriggerConfigurations"></a>

```python
def reset_trigger_configurations() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CodedeployDeploymentGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroup.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CodedeployDeploymentGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodedeployDeploymentGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodedeployDeploymentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodedeployDeploymentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfiguration">alarm_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference">CodedeployDeploymentGroupAlarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfiguration">auto_rollback_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfiguration">blue_green_deployment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deployment">deployment</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference">CodedeployDeploymentGroupDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyle">deployment_style</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference">CodedeployDeploymentGroupDeploymentStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilters">ec2_tag_filters</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList">CodedeployDeploymentGroupEc2TagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSet">ec2_tag_set</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference">CodedeployDeploymentGroupEc2TagSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServices">ecs_services</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList">CodedeployDeploymentGroupEcsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfo">load_balancer_info</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilters">on_premises_instance_tag_filters</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList">CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSet">on_premises_tag_set</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference">CodedeployDeploymentGroupOnPremisesTagSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList">CodedeployDeploymentGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurations">trigger_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList">CodedeployDeploymentGroupTriggerConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfigurationInput">alarm_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationNameInput">application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfigurationInput">auto_rollback_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroupsInput">auto_scaling_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfigurationInput">blue_green_deployment_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigNameInput">deployment_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupNameInput">deployment_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentInput">deployment_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyleInput">deployment_style_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFiltersInput">ec2_tag_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSetInput">ec2_tag_set_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServicesInput">ecs_services_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfoInput">load_balancer_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFiltersInput">on_premises_instance_tag_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSetInput">on_premises_tag_set_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategyInput">outdated_instances_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArnInput">service_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabledInput">termination_hook_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurationsInput">trigger_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroups">auto_scaling_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigName">deployment_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupName">deployment_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategy">outdated_instances_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabled">termination_hook_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alarm_configuration`<sup>Required</sup> <a name="alarm_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfiguration"></a>

```python
alarm_configuration: CodedeployDeploymentGroupAlarmConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference">CodedeployDeploymentGroupAlarmConfigurationOutputReference</a>

---

##### `auto_rollback_configuration`<sup>Required</sup> <a name="auto_rollback_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfiguration"></a>

```python
auto_rollback_configuration: CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a>

---

##### `blue_green_deployment_configuration`<sup>Required</sup> <a name="blue_green_deployment_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfiguration"></a>

```python
blue_green_deployment_configuration: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference</a>

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deployment"></a>

```python
deployment: CodedeployDeploymentGroupDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference">CodedeployDeploymentGroupDeploymentOutputReference</a>

---

##### `deployment_style`<sup>Required</sup> <a name="deployment_style" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyle"></a>

```python
deployment_style: CodedeployDeploymentGroupDeploymentStyleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference">CodedeployDeploymentGroupDeploymentStyleOutputReference</a>

---

##### `ec2_tag_filters`<sup>Required</sup> <a name="ec2_tag_filters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilters"></a>

```python
ec2_tag_filters: CodedeployDeploymentGroupEc2TagFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList">CodedeployDeploymentGroupEc2TagFiltersList</a>

---

##### `ec2_tag_set`<sup>Required</sup> <a name="ec2_tag_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSet"></a>

```python
ec2_tag_set: CodedeployDeploymentGroupEc2TagSetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference">CodedeployDeploymentGroupEc2TagSetOutputReference</a>

---

##### `ecs_services`<sup>Required</sup> <a name="ecs_services" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServices"></a>

```python
ecs_services: CodedeployDeploymentGroupEcsServicesList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList">CodedeployDeploymentGroupEcsServicesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_info`<sup>Required</sup> <a name="load_balancer_info" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfo"></a>

```python
load_balancer_info: CodedeployDeploymentGroupLoadBalancerInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoOutputReference</a>

---

##### `on_premises_instance_tag_filters`<sup>Required</sup> <a name="on_premises_instance_tag_filters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilters"></a>

```python
on_premises_instance_tag_filters: CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList">CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList</a>

---

##### `on_premises_tag_set`<sup>Required</sup> <a name="on_premises_tag_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSet"></a>

```python
on_premises_tag_set: CodedeployDeploymentGroupOnPremisesTagSetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference">CodedeployDeploymentGroupOnPremisesTagSetOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tags"></a>

```python
tags: CodedeployDeploymentGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList">CodedeployDeploymentGroupTagsList</a>

---

##### `trigger_configurations`<sup>Required</sup> <a name="trigger_configurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurations"></a>

```python
trigger_configurations: CodedeployDeploymentGroupTriggerConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList">CodedeployDeploymentGroupTriggerConfigurationsList</a>

---

##### `alarm_configuration_input`<sup>Optional</sup> <a name="alarm_configuration_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfigurationInput"></a>

```python
alarm_configuration_input: IResolvable | CodedeployDeploymentGroupAlarmConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---

##### `application_name_input`<sup>Optional</sup> <a name="application_name_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationNameInput"></a>

```python
application_name_input: str
```

- *Type:* str

---

##### `auto_rollback_configuration_input`<sup>Optional</sup> <a name="auto_rollback_configuration_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfigurationInput"></a>

```python
auto_rollback_configuration_input: IResolvable | CodedeployDeploymentGroupAutoRollbackConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---

##### `auto_scaling_groups_input`<sup>Optional</sup> <a name="auto_scaling_groups_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroupsInput"></a>

```python
auto_scaling_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blue_green_deployment_configuration_input`<sup>Optional</sup> <a name="blue_green_deployment_configuration_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfigurationInput"></a>

```python
blue_green_deployment_configuration_input: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

---

##### `deployment_config_name_input`<sup>Optional</sup> <a name="deployment_config_name_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigNameInput"></a>

```python
deployment_config_name_input: str
```

- *Type:* str

---

##### `deployment_group_name_input`<sup>Optional</sup> <a name="deployment_group_name_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupNameInput"></a>

```python
deployment_group_name_input: str
```

- *Type:* str

---

##### `deployment_input`<sup>Optional</sup> <a name="deployment_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentInput"></a>

```python
deployment_input: IResolvable | CodedeployDeploymentGroupDeployment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a>

---

##### `deployment_style_input`<sup>Optional</sup> <a name="deployment_style_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyleInput"></a>

```python
deployment_style_input: IResolvable | CodedeployDeploymentGroupDeploymentStyle
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---

##### `ec2_tag_filters_input`<sup>Optional</sup> <a name="ec2_tag_filters_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFiltersInput"></a>

```python
ec2_tag_filters_input: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>]

---

##### `ec2_tag_set_input`<sup>Optional</sup> <a name="ec2_tag_set_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSetInput"></a>

```python
ec2_tag_set_input: IResolvable | CodedeployDeploymentGroupEc2TagSet
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>

---

##### `ecs_services_input`<sup>Optional</sup> <a name="ecs_services_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServicesInput"></a>

```python
ecs_services_input: IResolvable | typing.List[CodedeployDeploymentGroupEcsServices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>]

---

##### `load_balancer_info_input`<sup>Optional</sup> <a name="load_balancer_info_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfoInput"></a>

```python
load_balancer_info_input: IResolvable | CodedeployDeploymentGroupLoadBalancerInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---

##### `on_premises_instance_tag_filters_input`<sup>Optional</sup> <a name="on_premises_instance_tag_filters_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFiltersInput"></a>

```python
on_premises_instance_tag_filters_input: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesInstanceTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>]

---

##### `on_premises_tag_set_input`<sup>Optional</sup> <a name="on_premises_tag_set_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSetInput"></a>

```python
on_premises_tag_set_input: IResolvable | CodedeployDeploymentGroupOnPremisesTagSet
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a>

---

##### `outdated_instances_strategy_input`<sup>Optional</sup> <a name="outdated_instances_strategy_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategyInput"></a>

```python
outdated_instances_strategy_input: str
```

- *Type:* str

---

##### `service_role_arn_input`<sup>Optional</sup> <a name="service_role_arn_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArnInput"></a>

```python
service_role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CodedeployDeploymentGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>]

---

##### `termination_hook_enabled_input`<sup>Optional</sup> <a name="termination_hook_enabled_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabledInput"></a>

```python
termination_hook_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `trigger_configurations_input`<sup>Optional</sup> <a name="trigger_configurations_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurationsInput"></a>

```python
trigger_configurations_input: IResolvable | typing.List[CodedeployDeploymentGroupTriggerConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>]

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `auto_scaling_groups`<sup>Required</sup> <a name="auto_scaling_groups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroups"></a>

```python
auto_scaling_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_config_name`<sup>Required</sup> <a name="deployment_config_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigName"></a>

```python
deployment_config_name: str
```

- *Type:* str

---

##### `deployment_group_name`<sup>Required</sup> <a name="deployment_group_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupName"></a>

```python
deployment_group_name: str
```

- *Type:* str

---

##### `outdated_instances_strategy`<sup>Required</sup> <a name="outdated_instances_strategy" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategy"></a>

```python
outdated_instances_strategy: str
```

- *Type:* str

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

---

##### `termination_hook_enabled`<sup>Required</sup> <a name="termination_hook_enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabled"></a>

```python
termination_hook_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodedeployDeploymentGroupAlarmConfiguration <a name="CodedeployDeploymentGroupAlarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration(
  alarms: IResolvable | typing.List[CodedeployDeploymentGroupAlarmConfigurationAlarms] = None,
  enabled: bool | IResolvable = None,
  ignore_poll_alarm_failure: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.alarms">alarms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>]</code> | A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the alarm configuration is enabled. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.ignorePollAlarmFailure">ignore_poll_alarm_failure</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.alarms"></a>

```python
alarms: IResolvable | typing.List[CodedeployDeploymentGroupAlarmConfigurationAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>]

A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#alarms CodedeployDeploymentGroup#alarms}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the alarm configuration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}

---

##### `ignore_poll_alarm_failure`<sup>Optional</sup> <a name="ignore_poll_alarm_failure" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.ignorePollAlarmFailure"></a>

```python
ignore_poll_alarm_failure: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}

---

### CodedeployDeploymentGroupAlarmConfigurationAlarms <a name="CodedeployDeploymentGroupAlarmConfigurationAlarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms.property.name">name</a></code> | <code>str</code> | The name of the alarm. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the alarm.

Maximum length is 255 characters. Each alarm name can be used only once in a list of alarms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupAutoRollbackConfiguration <a name="CodedeployDeploymentGroupAutoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration(
  enabled: bool | IResolvable = None,
  events: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether a defined automatic rollback configuration is currently enabled. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.events">events</a></code> | <code>typing.List[str]</code> | The event type or types that trigger a rollback. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether a defined automatic rollback configuration is currently enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

The event type or types that trigger a rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#events CodedeployDeploymentGroup#events}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfiguration <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration(
  deployment_ready_option: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption = None,
  green_fleet_provisioning_option: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption = None,
  terminate_blue_instances_on_deployment_success: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.deploymentReadyOption">deployment_ready_option</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a></code> | Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.greenFleetProvisioningOption">green_fleet_provisioning_option</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a></code> | Information about how instances are provisioned for a replacement environment in a blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.terminateBlueInstancesOnDeploymentSuccess">terminate_blue_instances_on_deployment_success</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a></code> | Information about whether to terminate instances in the original fleet during a blue/green deployment. |

---

##### `deployment_ready_option`<sup>Optional</sup> <a name="deployment_ready_option" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.deploymentReadyOption"></a>

```python
deployment_ready_option: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_ready_option CodedeployDeploymentGroup#deployment_ready_option}

---

##### `green_fleet_provisioning_option`<sup>Optional</sup> <a name="green_fleet_provisioning_option" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.greenFleetProvisioningOption"></a>

```python
green_fleet_provisioning_option: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

Information about how instances are provisioned for a replacement environment in a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#green_fleet_provisioning_option CodedeployDeploymentGroup#green_fleet_provisioning_option}

---

##### `terminate_blue_instances_on_deployment_success`<sup>Optional</sup> <a name="terminate_blue_instances_on_deployment_success" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```python
terminate_blue_instances_on_deployment_success: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

Information about whether to terminate instances in the original fleet during a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#terminate_blue_instances_on_deployment_success CodedeployDeploymentGroup#terminate_blue_instances_on_deployment_success}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption(
  action_on_timeout: str = None,
  wait_time_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.actionOnTimeout">action_on_timeout</a></code> | <code>str</code> | Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.waitTimeInMinutes">wait_time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually. |

---

##### `action_on_timeout`<sup>Optional</sup> <a name="action_on_timeout" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.actionOnTimeout"></a>

```python
action_on_timeout: str
```

- *Type:* str

Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment.

CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment. STOP_DEPLOYMENT: Do not register new instances with a load balancer unless traffic rerouting is started using ContinueDeployment . If traffic rerouting is not started before the end of the specified wait period, the deployment status is changed to Stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}

---

##### `wait_time_in_minutes`<sup>Optional</sup> <a name="wait_time_in_minutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.waitTimeInMinutes"></a>

```python
wait_time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually.

Applies only to the STOP_DEPLOYMENT option for actionOnTimeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption(
  action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.property.action">action</a></code> | <code>str</code> | The method used to add instances to a replacement environment. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.property.action"></a>

```python
action: str
```

- *Type:* str

The method used to add instances to a replacement environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess(
  action: str = None,
  termination_wait_time_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.action">action</a></code> | <code>str</code> | The action to take on instances in the original environment after a successful blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes">termination_wait_time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.action"></a>

```python
action: str
```

- *Type:* str

The action to take on instances in the original environment after a successful blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}

---

##### `termination_wait_time_in_minutes`<sup>Optional</sup> <a name="termination_wait_time_in_minutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes"></a>

```python
termination_wait_time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.

For an Amazon ECS deployment, the number of minutes before deleting the original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts traffic from the original (blue) task set to a replacement (green) task set. The maximum setting is 2880 minutes (2 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}

---

### CodedeployDeploymentGroupConfig <a name="CodedeployDeploymentGroupConfig" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_name: str,
  service_role_arn: str,
  alarm_configuration: CodedeployDeploymentGroupAlarmConfiguration = None,
  auto_rollback_configuration: CodedeployDeploymentGroupAutoRollbackConfiguration = None,
  auto_scaling_groups: typing.List[str] = None,
  blue_green_deployment_configuration: CodedeployDeploymentGroupBlueGreenDeploymentConfiguration = None,
  deployment: CodedeployDeploymentGroupDeployment = None,
  deployment_config_name: str = None,
  deployment_group_name: str = None,
  deployment_style: CodedeployDeploymentGroupDeploymentStyle = None,
  ec2_tag_filters: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagFilters] = None,
  ec2_tag_set: CodedeployDeploymentGroupEc2TagSet = None,
  ecs_services: IResolvable | typing.List[CodedeployDeploymentGroupEcsServices] = None,
  load_balancer_info: CodedeployDeploymentGroupLoadBalancerInfo = None,
  on_premises_instance_tag_filters: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesInstanceTagFilters] = None,
  on_premises_tag_set: CodedeployDeploymentGroupOnPremisesTagSet = None,
  outdated_instances_strategy: str = None,
  tags: IResolvable | typing.List[CodedeployDeploymentGroupTags] = None,
  termination_hook_enabled: bool | IResolvable = None,
  trigger_configurations: IResolvable | typing.List[CodedeployDeploymentGroupTriggerConfigurations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.applicationName">application_name</a></code> | <code>str</code> | The name of an existing CodeDeploy application to associate this deployment group with. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.alarmConfiguration">alarm_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | Information about the Amazon CloudWatch alarms that are associated with the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoRollbackConfiguration">auto_rollback_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | Information about the automatic rollback configuration that is associated with the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoScalingGroups">auto_scaling_groups</a></code> | <code>typing.List[str]</code> | A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.blueGreenDeploymentConfiguration">blue_green_deployment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a></code> | Information about blue/green deployment options for a deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deployment">deployment</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a></code> | The application revision to deploy to this deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentConfigName">deployment_config_name</a></code> | <code>str</code> | A deployment configuration name or a predefined configuration name. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentGroupName">deployment_group_name</a></code> | <code>str</code> | A name for the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentStyle">deployment_style</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagFilters">ec2_tag_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>]</code> | The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagSet">ec2_tag_set</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a></code> | Information about groups of tags applied to Amazon EC2 instances. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ecsServices">ecs_services</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>]</code> | The target Amazon ECS services in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.loadBalancerInfo">load_balancer_info</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | Information about the load balancer to use in a deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesInstanceTagFilters">on_premises_instance_tag_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>]</code> | The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesTagSet">on_premises_tag_set</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a></code> | Information about groups of tags applied to on-premises instances. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.outdatedInstancesStrategy">outdated_instances_strategy</a></code> | <code>str</code> | Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>]</code> | The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.terminationHookEnabled">termination_hook_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.triggerConfigurations">trigger_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>]</code> | Information about triggers associated with the deployment group. Duplicates are not allowed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

The name of an existing CodeDeploy application to associate this deployment group with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#application_name CodedeployDeploymentGroup#application_name}

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf.

For more information, see 'Create a Service Role for AWS CodeDeploy' in the AWS CodeDeploy User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}

---

##### `alarm_configuration`<sup>Optional</sup> <a name="alarm_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.alarmConfiguration"></a>

```python
alarm_configuration: CodedeployDeploymentGroupAlarmConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

Information about the Amazon CloudWatch alarms that are associated with the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#alarm_configuration CodedeployDeploymentGroup#alarm_configuration}

---

##### `auto_rollback_configuration`<sup>Optional</sup> <a name="auto_rollback_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoRollbackConfiguration"></a>

```python
auto_rollback_configuration: CodedeployDeploymentGroupAutoRollbackConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

Information about the automatic rollback configuration that is associated with the deployment group.

If you specify this property, don't specify the Deployment property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#auto_rollback_configuration CodedeployDeploymentGroup#auto_rollback_configuration}

---

##### `auto_scaling_groups`<sup>Optional</sup> <a name="auto_scaling_groups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoScalingGroups"></a>

```python
auto_scaling_groups: typing.List[str]
```

- *Type:* typing.List[str]

A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created.

Duplicates are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#auto_scaling_groups CodedeployDeploymentGroup#auto_scaling_groups}

---

##### `blue_green_deployment_configuration`<sup>Optional</sup> <a name="blue_green_deployment_configuration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.blueGreenDeploymentConfiguration"></a>

```python
blue_green_deployment_configuration: CodedeployDeploymentGroupBlueGreenDeploymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

Information about blue/green deployment options for a deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#blue_green_deployment_configuration CodedeployDeploymentGroup#blue_green_deployment_configuration}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deployment"></a>

```python
deployment: CodedeployDeploymentGroupDeployment
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a>

The application revision to deploy to this deployment group.

If you specify this property, your target application revision is deployed as soon as the provisioning process is complete. If you specify this property, don't specify the AutoRollbackConfiguration property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment CodedeployDeploymentGroup#deployment}

---

##### `deployment_config_name`<sup>Optional</sup> <a name="deployment_config_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentConfigName"></a>

```python
deployment_config_name: str
```

- *Type:* str

A deployment configuration name or a predefined configuration name.

With predefined configurations, you can deploy application revisions to one instance at a time (CodeDeployDefault.OneAtATime), half of the instances at a time (CodeDeployDefault.HalfAtATime), or all the instances at once (CodeDeployDefault.AllAtOnce).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}

---

##### `deployment_group_name`<sup>Optional</sup> <a name="deployment_group_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentGroupName"></a>

```python
deployment_group_name: str
```

- *Type:* str

A name for the deployment group.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}

---

##### `deployment_style`<sup>Optional</sup> <a name="deployment_style" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentStyle"></a>

```python
deployment_style: CodedeployDeploymentGroupDeploymentStyle
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer.

If you specify this property with a blue/green deployment type, don't specify the AutoScalingGroups, LoadBalancerInfo, or Deployment properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_style CodedeployDeploymentGroup#deployment_style}

---

##### `ec2_tag_filters`<sup>Optional</sup> <a name="ec2_tag_filters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagFilters"></a>

```python
ec2_tag_filters: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>]

The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group.

CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify EC2TagFilters or Ec2TagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ec_2_tag_filters CodedeployDeploymentGroup#ec_2_tag_filters}

---

##### `ec2_tag_set`<sup>Optional</sup> <a name="ec2_tag_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagSet"></a>

```python
ec2_tag_set: CodedeployDeploymentGroupEc2TagSet
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>

Information about groups of tags applied to Amazon EC2 instances.

Use when the deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ec_2_tag_set CodedeployDeploymentGroup#ec_2_tag_set}

---

##### `ecs_services`<sup>Optional</sup> <a name="ecs_services" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ecsServices"></a>

```python
ecs_services: IResolvable | typing.List[CodedeployDeploymentGroupEcsServices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>]

The target Amazon ECS services in the deployment group.

This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <clustername>:<servicename>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ecs_services CodedeployDeploymentGroup#ecs_services}

---

##### `load_balancer_info`<sup>Optional</sup> <a name="load_balancer_info" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.loadBalancerInfo"></a>

```python
load_balancer_info: CodedeployDeploymentGroupLoadBalancerInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

Information about the load balancer to use in a deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#load_balancer_info CodedeployDeploymentGroup#load_balancer_info}

---

##### `on_premises_instance_tag_filters`<sup>Optional</sup> <a name="on_premises_instance_tag_filters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesInstanceTagFilters"></a>

```python
on_premises_instance_tag_filters: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesInstanceTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>]

The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group.

CodeDeploy includes all on-premises instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#on_premises_instance_tag_filters CodedeployDeploymentGroup#on_premises_instance_tag_filters}

---

##### `on_premises_tag_set`<sup>Optional</sup> <a name="on_premises_tag_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesTagSet"></a>

```python
on_premises_tag_set: CodedeployDeploymentGroupOnPremisesTagSet
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a>

Information about groups of tags applied to on-premises instances.

The deployment group includes only on-premises instances identified by all the tag groups. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#on_premises_tag_set CodedeployDeploymentGroup#on_premises_tag_set}

---

##### `outdated_instances_strategy`<sup>Optional</sup> <a name="outdated_instances_strategy" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.outdatedInstancesStrategy"></a>

```python
outdated_instances_strategy: str
```

- *Type:* str

Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision.

If this option is set to UPDATE or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances. If this option is set to IGNORE, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#outdated_instances_strategy CodedeployDeploymentGroup#outdated_instances_strategy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CodedeployDeploymentGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>]

The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them.

Each tag consists of a key and an optional value, both of which you define.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}

---

##### `termination_hook_enabled`<sup>Optional</sup> <a name="termination_hook_enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.terminationHookEnabled"></a>

```python
termination_hook_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#termination_hook_enabled CodedeployDeploymentGroup#termination_hook_enabled}

---

##### `trigger_configurations`<sup>Optional</sup> <a name="trigger_configurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.triggerConfigurations"></a>

```python
trigger_configurations: IResolvable | typing.List[CodedeployDeploymentGroupTriggerConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>]

Information about triggers associated with the deployment group. Duplicates are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#trigger_configurations CodedeployDeploymentGroup#trigger_configurations}

---

### CodedeployDeploymentGroupDeployment <a name="CodedeployDeploymentGroupDeployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment(
  description: str = None,
  ignore_application_stop_failures: bool | IResolvable = None,
  revision: CodedeployDeploymentGroupDeploymentRevision = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.description">description</a></code> | <code>str</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.ignoreApplicationStopFailures">ignore_application_stop_failures</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.revision">revision</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a></code> | Information about the location of stored application artifacts and the service from which to retrieve them. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#description CodedeployDeploymentGroup#description}

---

##### `ignore_application_stop_failures`<sup>Optional</sup> <a name="ignore_application_stop_failures" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.ignoreApplicationStopFailures"></a>

```python
ignore_application_stop_failures: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event.

If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ignore_application_stop_failures CodedeployDeploymentGroup#ignore_application_stop_failures}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.revision"></a>

```python
revision: CodedeployDeploymentGroupDeploymentRevision
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a>

Information about the location of stored application artifacts and the service from which to retrieve them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#revision CodedeployDeploymentGroup#revision}

---

### CodedeployDeploymentGroupDeploymentRevision <a name="CodedeployDeploymentGroupDeploymentRevision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision(
  git_hub_location: CodedeployDeploymentGroupDeploymentRevisionGitHubLocation = None,
  revision_type: str = None,
  s3_location: CodedeployDeploymentGroupDeploymentRevisionS3Location = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.gitHubLocation">git_hub_location</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a></code> | Specifies the location of an application revision that is stored in GitHub. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.revisionType">revision_type</a></code> | <code>str</code> | The type of application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a></code> | Information about the location of application artifacts stored in Amazon S3. |

---

##### `git_hub_location`<sup>Optional</sup> <a name="git_hub_location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.gitHubLocation"></a>

```python
git_hub_location: CodedeployDeploymentGroupDeploymentRevisionGitHubLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

Specifies the location of an application revision that is stored in GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#git_hub_location CodedeployDeploymentGroup#git_hub_location}

---

##### `revision_type`<sup>Optional</sup> <a name="revision_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.revisionType"></a>

```python
revision_type: str
```

- *Type:* str

The type of application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#revision_type CodedeployDeploymentGroup#revision_type}

---

##### `s3_location`<sup>Optional</sup> <a name="s3_location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.s3Location"></a>

```python
s3_location: CodedeployDeploymentGroupDeploymentRevisionS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a>

Information about the location of application artifacts stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#s3_location CodedeployDeploymentGroup#s3_location}

---

### CodedeployDeploymentGroupDeploymentRevisionGitHubLocation <a name="CodedeployDeploymentGroupDeploymentRevisionGitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation(
  commit_id: str = None,
  repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.commitId">commit_id</a></code> | <code>str</code> | The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.repository">repository</a></code> | <code>str</code> | The GitHub account and repository pair that stores the application revision to be deployed. |

---

##### `commit_id`<sup>Optional</sup> <a name="commit_id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.commitId"></a>

```python
commit_id: str
```

- *Type:* str

The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#commit_id CodedeployDeploymentGroup#commit_id}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.repository"></a>

```python
repository: str
```

- *Type:* str

The GitHub account and repository pair that stores the application revision to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#repository CodedeployDeploymentGroup#repository}

---

### CodedeployDeploymentGroupDeploymentRevisionS3Location <a name="CodedeployDeploymentGroupDeploymentRevisionS3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location(
  bucket: str = None,
  bundle_type: str = None,
  e_tag: str = None,
  key: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bucket">bucket</a></code> | <code>str</code> | The name of the Amazon S3 bucket where the application revision is stored. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bundleType">bundle_type</a></code> | <code>str</code> | The file type of the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.eTag">e_tag</a></code> | <code>str</code> | The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.key">key</a></code> | <code>str</code> | The name of the Amazon S3 object that represents the bundled artifacts for the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.version">version</a></code> | <code>str</code> | A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the Amazon S3 bucket where the application revision is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#bucket CodedeployDeploymentGroup#bucket}

---

##### `bundle_type`<sup>Optional</sup> <a name="bundle_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bundleType"></a>

```python
bundle_type: str
```

- *Type:* str

The file type of the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#bundle_type CodedeployDeploymentGroup#bundle_type}

---

##### `e_tag`<sup>Optional</sup> <a name="e_tag" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.eTag"></a>

```python
e_tag: str
```

- *Type:* str

The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision.

If the ETag is not specified as an input parameter, ETag validation of the object is skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#e_tag CodedeployDeploymentGroup#e_tag}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.key"></a>

```python
key: str
```

- *Type:* str

The name of the Amazon S3 object that represents the bundled artifacts for the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.version"></a>

```python
version: str
```

- *Type:* str

A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision.

If the version is not specified, the system uses the most recent version by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#version CodedeployDeploymentGroup#version}

---

### CodedeployDeploymentGroupDeploymentStyle <a name="CodedeployDeploymentGroupDeploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle(
  deployment_option: str = None,
  deployment_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentOption">deployment_option</a></code> | <code>str</code> | Indicates whether to route deployment traffic behind a load balancer. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentType">deployment_type</a></code> | <code>str</code> | Indicates whether to run an in-place or blue/green deployment. |

---

##### `deployment_option`<sup>Optional</sup> <a name="deployment_option" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentOption"></a>

```python
deployment_option: str
```

- *Type:* str

Indicates whether to route deployment traffic behind a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_option CodedeployDeploymentGroup#deployment_option}

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

Indicates whether to run an in-place or blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_type CodedeployDeploymentGroup#deployment_type}

---

### CodedeployDeploymentGroupEc2TagFilters <a name="CodedeployDeploymentGroupEc2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters(
  key: str = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.key">key</a></code> | <code>str</code> | The tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.type">type</a></code> | <code>str</code> | The tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.value">value</a></code> | <code>str</code> | The tag filter value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.key"></a>

```python
key: str
```

- *Type:* str

The tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.type"></a>

```python
type: str
```

- *Type:* str

The tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.value"></a>

```python
value: str
```

- *Type:* str

The tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupEc2TagSet <a name="CodedeployDeploymentGroupEc2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet(
  ec2_tag_set_list: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.property.ec2TagSetList">ec2_tag_set_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>]</code> | The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. |

---

##### `ec2_tag_set_list`<sup>Optional</sup> <a name="ec2_tag_set_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.property.ec2TagSetList"></a>

```python
ec2_tag_set_list: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>]

The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group.

CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ec_2_tag_set_list CodedeployDeploymentGroup#ec_2_tag_set_list}

---

### CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup(
  key: str = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.key">key</a></code> | <code>str</code> | The tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.type">type</a></code> | <code>str</code> | The tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.value">value</a></code> | <code>str</code> | The tag filter value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.key"></a>

```python
key: str
```

- *Type:* str

The tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.type"></a>

```python
type: str
```

- *Type:* str

The tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.value"></a>

```python
value: str
```

- *Type:* str

The tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct(
  ec2_tag_group: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct.property.ec2TagGroup">ec2_tag_group</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>]</code> | A list that contains other lists of Amazon EC2 instance tag groups. |

---

##### `ec2_tag_group`<sup>Optional</sup> <a name="ec2_tag_group" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct.property.ec2TagGroup"></a>

```python
ec2_tag_group: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>]

A list that contains other lists of Amazon EC2 instance tag groups.

For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ec_2_tag_group CodedeployDeploymentGroup#ec_2_tag_group}

---

### CodedeployDeploymentGroupEcsServices <a name="CodedeployDeploymentGroupEcsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices(
  cluster_name: str = None,
  service_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.clusterName">cluster_name</a></code> | <code>str</code> | The name of the cluster that the Amazon ECS service is associated with. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.serviceName">service_name</a></code> | <code>str</code> | The name of the target Amazon ECS service. |

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The name of the cluster that the Amazon ECS service is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#cluster_name CodedeployDeploymentGroup#cluster_name}

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The name of the target Amazon ECS service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#service_name CodedeployDeploymentGroup#service_name}

---

### CodedeployDeploymentGroupLoadBalancerInfo <a name="CodedeployDeploymentGroupLoadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo(
  elb_info_list: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct] = None,
  target_group_info_list: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct] = None,
  target_group_pair_info_list: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.elbInfoList">elb_info_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>]</code> | An array that contains information about the load balancers to use for load balancing in a deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupInfoList">target_group_info_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>]</code> | An array that contains information about the target groups to use for load balancing in a deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupPairInfoList">target_group_pair_info_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>]</code> | The target group pair information. This is an array of TargeGroupPairInfo objects with a maximum size of one. |

---

##### `elb_info_list`<sup>Optional</sup> <a name="elb_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.elbInfoList"></a>

```python
elb_info_list: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>]

An array that contains information about the load balancers to use for load balancing in a deployment.

If you're using Classic Load Balancers, specify those load balancers in this array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#elb_info_list CodedeployDeploymentGroup#elb_info_list}

---

##### `target_group_info_list`<sup>Optional</sup> <a name="target_group_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupInfoList"></a>

```python
target_group_info_list: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>]

An array that contains information about the target groups to use for load balancing in a deployment.

If you're using Application Load Balancers and Network Load Balancers, specify their associated target groups in this array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#target_group_info_list CodedeployDeploymentGroup#target_group_info_list}

---

##### `target_group_pair_info_list`<sup>Optional</sup> <a name="target_group_pair_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupPairInfoList"></a>

```python
target_group_pair_info_list: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>]

The target group pair information. This is an array of TargeGroupPairInfo objects with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#target_group_pair_info_list CodedeployDeploymentGroup#target_group_pair_info_list}

---

### CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct.property.name">name</a></code> | <code>str</code> | For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct.property.name"></a>

```python
name: str
```

- *Type:* str

For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment.

For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct.property.name">name</a></code> | <code>str</code> | For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct.property.name"></a>

```python
name: str
```

- *Type:* str

For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with.

For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. No duplicates allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute(
  listener_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute.property.listenerArns">listener_arns</a></code> | <code>typing.List[str]</code> | The Amazon Resource Name (ARN) of one listener. |

---

##### `listener_arns`<sup>Optional</sup> <a name="listener_arns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute.property.listenerArns"></a>

```python
listener_arns: typing.List[str]
```

- *Type:* typing.List[str]

The Amazon Resource Name (ARN) of one listener.

The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct(
  prod_traffic_route: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute = None,
  target_groups: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups] = None,
  test_traffic_route: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.prodTrafficRoute">prod_traffic_route</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a></code> | The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.targetGroups">target_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>]</code> | One pair of target groups. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.testTrafficRoute">test_traffic_route</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a></code> | An optional path used by a load balancer to route test traffic after an Amazon ECS deployment. |

---

##### `prod_traffic_route`<sup>Optional</sup> <a name="prod_traffic_route" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.prodTrafficRoute"></a>

```python
prod_traffic_route: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a>

The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#prod_traffic_route CodedeployDeploymentGroup#prod_traffic_route}

---

##### `target_groups`<sup>Optional</sup> <a name="target_groups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.targetGroups"></a>

```python
target_groups: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>]

One pair of target groups.

One is associated with the original task set. The second is associated with the task set that serves traffic after the deployment is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#target_groups CodedeployDeploymentGroup#target_groups}

---

##### `test_traffic_route`<sup>Optional</sup> <a name="test_traffic_route" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.testTrafficRoute"></a>

```python
test_traffic_route: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a>

An optional path used by a load balancer to route test traffic after an Amazon ECS deployment.

Validation can occur while test traffic is served during a deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#test_traffic_route CodedeployDeploymentGroup#test_traffic_route}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups.property.name">name</a></code> | <code>str</code> | For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups.property.name"></a>

```python
name: str
```

- *Type:* str

For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with.

For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. No duplicates allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute(
  listener_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute.property.listenerArns">listener_arns</a></code> | <code>typing.List[str]</code> | The Amazon Resource Name (ARN) of one listener. |

---

##### `listener_arns`<sup>Optional</sup> <a name="listener_arns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute.property.listenerArns"></a>

```python
listener_arns: typing.List[str]
```

- *Type:* typing.List[str]

The Amazon Resource Name (ARN) of one listener.

The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}

---

### CodedeployDeploymentGroupOnPremisesInstanceTagFilters <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters(
  key: str = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.key">key</a></code> | <code>str</code> | The on-premises instance tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.type">type</a></code> | <code>str</code> | The on-premises instance tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.value">value</a></code> | <code>str</code> | The on-premises instance tag filter value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.key"></a>

```python
key: str
```

- *Type:* str

The on-premises instance tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.type"></a>

```python
type: str
```

- *Type:* str

The on-premises instance tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.value"></a>

```python
value: str
```

- *Type:* str

The on-premises instance tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupOnPremisesTagSet <a name="CodedeployDeploymentGroupOnPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet(
  on_premises_tag_set_list: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet.property.onPremisesTagSetList">on_premises_tag_set_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>]</code> | A list that contains other lists of on-premises instance tag groups. |

---

##### `on_premises_tag_set_list`<sup>Optional</sup> <a name="on_premises_tag_set_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet.property.onPremisesTagSetList"></a>

```python
on_premises_tag_set_list: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>]

A list that contains other lists of on-premises instance tag groups.

For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#on_premises_tag_set_list CodedeployDeploymentGroup#on_premises_tag_set_list}

---

### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup(
  key: str = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.key">key</a></code> | <code>str</code> | The on-premises instance tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.type">type</a></code> | <code>str</code> | The on-premises instance tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.value">value</a></code> | <code>str</code> | The on-premises instance tag filter value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.key"></a>

```python
key: str
```

- *Type:* str

The on-premises instance tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.type"></a>

```python
type: str
```

- *Type:* str

The on-premises instance tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.value"></a>

```python
value: str
```

- *Type:* str

The on-premises instance tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct(
  on_premises_tag_group: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct.property.onPremisesTagGroup">on_premises_tag_group</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>]</code> | Information about groups of on-premises instance tags. |

---

##### `on_premises_tag_group`<sup>Optional</sup> <a name="on_premises_tag_group" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct.property.onPremisesTagGroup"></a>

```python
on_premises_tag_group: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>]

Information about groups of on-premises instance tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#on_premises_tag_group CodedeployDeploymentGroup#on_premises_tag_group}

---

### CodedeployDeploymentGroupTags <a name="CodedeployDeploymentGroupTags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.key">key</a></code> | <code>str</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.value">value</a></code> | <code>str</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupTriggerConfigurations <a name="CodedeployDeploymentGroupTriggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations(
  trigger_events: typing.List[str] = None,
  trigger_name: str = None,
  trigger_target_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerEvents">trigger_events</a></code> | <code>typing.List[str]</code> | The event type or types that trigger notifications. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerName">trigger_name</a></code> | <code>str</code> | The name of the notification trigger. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerTargetArn">trigger_target_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent. |

---

##### `trigger_events`<sup>Optional</sup> <a name="trigger_events" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerEvents"></a>

```python
trigger_events: typing.List[str]
```

- *Type:* typing.List[str]

The event type or types that trigger notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#trigger_events CodedeployDeploymentGroup#trigger_events}

---

##### `trigger_name`<sup>Optional</sup> <a name="trigger_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerName"></a>

```python
trigger_name: str
```

- *Type:* str

The name of the notification trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#trigger_name CodedeployDeploymentGroup#trigger_name}

---

##### `trigger_target_arn`<sup>Optional</sup> <a name="trigger_target_arn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerTargetArn"></a>

```python
trigger_target_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### CodedeployDeploymentGroupAlarmConfigurationAlarmsList <a name="CodedeployDeploymentGroupAlarmConfigurationAlarmsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodedeployDeploymentGroupAlarmConfigurationAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>]

---


### CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference <a name="CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupAlarmConfigurationAlarms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>

---


### CodedeployDeploymentGroupAlarmConfigurationOutputReference <a name="CodedeployDeploymentGroupAlarmConfigurationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.putAlarms">put_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetIgnorePollAlarmFailure">reset_ignore_poll_alarm_failure</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_alarms` <a name="put_alarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.putAlarms"></a>

```python
def put_alarms(
  value: IResolvable | typing.List[CodedeployDeploymentGroupAlarmConfigurationAlarms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.putAlarms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>]

---

##### `reset_alarms` <a name="reset_alarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_ignore_poll_alarm_failure` <a name="reset_ignore_poll_alarm_failure" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetIgnorePollAlarmFailure"></a>

```python
def reset_ignore_poll_alarm_failure() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList">CodedeployDeploymentGroupAlarmConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarmsInput">alarms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailureInput">ignore_poll_alarm_failure_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure">ignore_poll_alarm_failure</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms"></a>

```python
alarms: CodedeployDeploymentGroupAlarmConfigurationAlarmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList">CodedeployDeploymentGroupAlarmConfigurationAlarmsList</a>

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarmsInput"></a>

```python
alarms_input: IResolvable | typing.List[CodedeployDeploymentGroupAlarmConfigurationAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_poll_alarm_failure_input`<sup>Optional</sup> <a name="ignore_poll_alarm_failure_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailureInput"></a>

```python
ignore_poll_alarm_failure_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_poll_alarm_failure`<sup>Required</sup> <a name="ignore_poll_alarm_failure" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure"></a>

```python
ignore_poll_alarm_failure: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupAlarmConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---


### CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference <a name="CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEvents">reset_events</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_events` <a name="reset_events" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEvents"></a>

```python
def reset_events() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupAutoRollbackConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetActionOnTimeout">reset_action_on_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetWaitTimeInMinutes">reset_wait_time_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_on_timeout` <a name="reset_action_on_timeout" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetActionOnTimeout"></a>

```python
def reset_action_on_timeout() -> None
```

##### `reset_wait_time_in_minutes` <a name="reset_wait_time_in_minutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetWaitTimeInMinutes"></a>

```python
def reset_wait_time_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeoutInput">action_on_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutesInput">wait_time_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeout">action_on_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutes">wait_time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_on_timeout_input`<sup>Optional</sup> <a name="action_on_timeout_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeoutInput"></a>

```python
action_on_timeout_input: str
```

- *Type:* str

---

##### `wait_time_in_minutes_input`<sup>Optional</sup> <a name="wait_time_in_minutes_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutesInput"></a>

```python
wait_time_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action_on_timeout`<sup>Required</sup> <a name="action_on_timeout" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeout"></a>

```python
action_on_timeout: str
```

- *Type:* str

---

##### `wait_time_in_minutes`<sup>Required</sup> <a name="wait_time_in_minutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutes"></a>

```python
wait_time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resetAction">reset_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putDeploymentReadyOption">put_deployment_ready_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putGreenFleetProvisioningOption">put_green_fleet_provisioning_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putTerminateBlueInstancesOnDeploymentSuccess">put_terminate_blue_instances_on_deployment_success</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetDeploymentReadyOption">reset_deployment_ready_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetGreenFleetProvisioningOption">reset_green_fleet_provisioning_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetTerminateBlueInstancesOnDeploymentSuccess">reset_terminate_blue_instances_on_deployment_success</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_deployment_ready_option` <a name="put_deployment_ready_option" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putDeploymentReadyOption"></a>

```python
def put_deployment_ready_option(
  action_on_timeout: str = None,
  wait_time_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `action_on_timeout`<sup>Optional</sup> <a name="action_on_timeout" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putDeploymentReadyOption.parameter.actionOnTimeout"></a>

- *Type:* str

Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment.

CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment. STOP_DEPLOYMENT: Do not register new instances with a load balancer unless traffic rerouting is started using ContinueDeployment . If traffic rerouting is not started before the end of the specified wait period, the deployment status is changed to Stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}

---

###### `wait_time_in_minutes`<sup>Optional</sup> <a name="wait_time_in_minutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putDeploymentReadyOption.parameter.waitTimeInMinutes"></a>

- *Type:* typing.Union[int, float]

The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually.

Applies only to the STOP_DEPLOYMENT option for actionOnTimeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}

---

##### `put_green_fleet_provisioning_option` <a name="put_green_fleet_provisioning_option" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putGreenFleetProvisioningOption"></a>

```python
def put_green_fleet_provisioning_option(
  action: str = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putGreenFleetProvisioningOption.parameter.action"></a>

- *Type:* str

The method used to add instances to a replacement environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}

---

##### `put_terminate_blue_instances_on_deployment_success` <a name="put_terminate_blue_instances_on_deployment_success" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putTerminateBlueInstancesOnDeploymentSuccess"></a>

```python
def put_terminate_blue_instances_on_deployment_success(
  action: str = None,
  termination_wait_time_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putTerminateBlueInstancesOnDeploymentSuccess.parameter.action"></a>

- *Type:* str

The action to take on instances in the original environment after a successful blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}

---

###### `termination_wait_time_in_minutes`<sup>Optional</sup> <a name="termination_wait_time_in_minutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putTerminateBlueInstancesOnDeploymentSuccess.parameter.terminationWaitTimeInMinutes"></a>

- *Type:* typing.Union[int, float]

For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.

For an Amazon ECS deployment, the number of minutes before deleting the original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts traffic from the original (blue) task set to a replacement (green) task set. The maximum setting is 2880 minutes (2 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}

---

##### `reset_deployment_ready_option` <a name="reset_deployment_ready_option" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetDeploymentReadyOption"></a>

```python
def reset_deployment_ready_option() -> None
```

##### `reset_green_fleet_provisioning_option` <a name="reset_green_fleet_provisioning_option" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetGreenFleetProvisioningOption"></a>

```python
def reset_green_fleet_provisioning_option() -> None
```

##### `reset_terminate_blue_instances_on_deployment_success` <a name="reset_terminate_blue_instances_on_deployment_success" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetTerminateBlueInstancesOnDeploymentSuccess"></a>

```python
def reset_terminate_blue_instances_on_deployment_success() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOption">deployment_ready_option</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOption">green_fleet_provisioning_option</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccess">terminate_blue_instances_on_deployment_success</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOptionInput">deployment_ready_option_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOptionInput">green_fleet_provisioning_option_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccessInput">terminate_blue_instances_on_deployment_success_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_ready_option`<sup>Required</sup> <a name="deployment_ready_option" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOption"></a>

```python
deployment_ready_option: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference</a>

---

##### `green_fleet_provisioning_option`<sup>Required</sup> <a name="green_fleet_provisioning_option" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOption"></a>

```python
green_fleet_provisioning_option: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference</a>

---

##### `terminate_blue_instances_on_deployment_success`<sup>Required</sup> <a name="terminate_blue_instances_on_deployment_success" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```python
terminate_blue_instances_on_deployment_success: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference</a>

---

##### `deployment_ready_option_input`<sup>Optional</sup> <a name="deployment_ready_option_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOptionInput"></a>

```python
deployment_ready_option_input: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

---

##### `green_fleet_provisioning_option_input`<sup>Optional</sup> <a name="green_fleet_provisioning_option_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOptionInput"></a>

```python
green_fleet_provisioning_option_input: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

---

##### `terminate_blue_instances_on_deployment_success_input`<sup>Optional</sup> <a name="terminate_blue_instances_on_deployment_success_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccessInput"></a>

```python
terminate_blue_instances_on_deployment_success_input: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetTerminationWaitTimeInMinutes">reset_termination_wait_time_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_termination_wait_time_in_minutes` <a name="reset_termination_wait_time_in_minutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetTerminationWaitTimeInMinutes"></a>

```python
def reset_termination_wait_time_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutesInput">termination_wait_time_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes">termination_wait_time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `termination_wait_time_in_minutes_input`<sup>Optional</sup> <a name="termination_wait_time_in_minutes_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutesInput"></a>

```python
termination_wait_time_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `termination_wait_time_in_minutes`<sup>Required</sup> <a name="termination_wait_time_in_minutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes"></a>

```python
termination_wait_time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

---


### CodedeployDeploymentGroupDeploymentOutputReference <a name="CodedeployDeploymentGroupDeploymentOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.putRevision">put_revision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetIgnoreApplicationStopFailures">reset_ignore_application_stop_failures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetRevision">reset_revision</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_revision` <a name="put_revision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.putRevision"></a>

```python
def put_revision(
  git_hub_location: CodedeployDeploymentGroupDeploymentRevisionGitHubLocation = None,
  revision_type: str = None,
  s3_location: CodedeployDeploymentGroupDeploymentRevisionS3Location = None
) -> None
```

###### `git_hub_location`<sup>Optional</sup> <a name="git_hub_location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.putRevision.parameter.gitHubLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

Specifies the location of an application revision that is stored in GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#git_hub_location CodedeployDeploymentGroup#git_hub_location}

---

###### `revision_type`<sup>Optional</sup> <a name="revision_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.putRevision.parameter.revisionType"></a>

- *Type:* str

The type of application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#revision_type CodedeployDeploymentGroup#revision_type}

---

###### `s3_location`<sup>Optional</sup> <a name="s3_location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.putRevision.parameter.s3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a>

Information about the location of application artifacts stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#s3_location CodedeployDeploymentGroup#s3_location}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_ignore_application_stop_failures` <a name="reset_ignore_application_stop_failures" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetIgnoreApplicationStopFailures"></a>

```python
def reset_ignore_application_stop_failures() -> None
```

##### `reset_revision` <a name="reset_revision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetRevision"></a>

```python
def reset_revision() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revision">revision</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference">CodedeployDeploymentGroupDeploymentRevisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailuresInput">ignore_application_stop_failures_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revisionInput">revision_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailures">ignore_application_stop_failures</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revision"></a>

```python
revision: CodedeployDeploymentGroupDeploymentRevisionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference">CodedeployDeploymentGroupDeploymentRevisionOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ignore_application_stop_failures_input`<sup>Optional</sup> <a name="ignore_application_stop_failures_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailuresInput"></a>

```python
ignore_application_stop_failures_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revisionInput"></a>

```python
revision_input: IResolvable | CodedeployDeploymentGroupDeploymentRevision
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ignore_application_stop_failures`<sup>Required</sup> <a name="ignore_application_stop_failures" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailures"></a>

```python
ignore_application_stop_failures: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupDeployment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a>

---


### CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference <a name="CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetCommitId">reset_commit_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetRepository">reset_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_commit_id` <a name="reset_commit_id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetCommitId"></a>

```python
def reset_commit_id() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetRepository"></a>

```python
def reset_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitIdInput">commit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitId">commit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commit_id_input`<sup>Optional</sup> <a name="commit_id_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitIdInput"></a>

```python
commit_id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `commit_id`<sup>Required</sup> <a name="commit_id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitId"></a>

```python
commit_id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupDeploymentRevisionGitHubLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

---


### CodedeployDeploymentGroupDeploymentRevisionOutputReference <a name="CodedeployDeploymentGroupDeploymentRevisionOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putGitHubLocation">put_git_hub_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location">put_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetGitHubLocation">reset_git_hub_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetRevisionType">reset_revision_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetS3Location">reset_s3_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_git_hub_location` <a name="put_git_hub_location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putGitHubLocation"></a>

```python
def put_git_hub_location(
  commit_id: str = None,
  repository: str = None
) -> None
```

###### `commit_id`<sup>Optional</sup> <a name="commit_id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putGitHubLocation.parameter.commitId"></a>

- *Type:* str

The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#commit_id CodedeployDeploymentGroup#commit_id}

---

###### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putGitHubLocation.parameter.repository"></a>

- *Type:* str

The GitHub account and repository pair that stores the application revision to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#repository CodedeployDeploymentGroup#repository}

---

##### `put_s3_location` <a name="put_s3_location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location"></a>

```python
def put_s3_location(
  bucket: str = None,
  bundle_type: str = None,
  e_tag: str = None,
  key: str = None,
  version: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location.parameter.bucket"></a>

- *Type:* str

The name of the Amazon S3 bucket where the application revision is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#bucket CodedeployDeploymentGroup#bucket}

---

###### `bundle_type`<sup>Optional</sup> <a name="bundle_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location.parameter.bundleType"></a>

- *Type:* str

The file type of the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#bundle_type CodedeployDeploymentGroup#bundle_type}

---

###### `e_tag`<sup>Optional</sup> <a name="e_tag" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location.parameter.eTag"></a>

- *Type:* str

The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision.

If the ETag is not specified as an input parameter, ETag validation of the object is skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#e_tag CodedeployDeploymentGroup#e_tag}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location.parameter.key"></a>

- *Type:* str

The name of the Amazon S3 object that represents the bundled artifacts for the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location.parameter.version"></a>

- *Type:* str

A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision.

If the version is not specified, the system uses the most recent version by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#version CodedeployDeploymentGroup#version}

---

##### `reset_git_hub_location` <a name="reset_git_hub_location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetGitHubLocation"></a>

```python
def reset_git_hub_location() -> None
```

##### `reset_revision_type` <a name="reset_revision_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetRevisionType"></a>

```python
def reset_revision_type() -> None
```

##### `reset_s3_location` <a name="reset_s3_location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetS3Location"></a>

```python
def reset_s3_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocation">git_hub_location</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocationInput">git_hub_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionTypeInput">revision_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3LocationInput">s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionType">revision_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git_hub_location`<sup>Required</sup> <a name="git_hub_location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocation"></a>

```python
git_hub_location: CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference</a>

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3Location"></a>

```python
s3_location: CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference</a>

---

##### `git_hub_location_input`<sup>Optional</sup> <a name="git_hub_location_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocationInput"></a>

```python
git_hub_location_input: IResolvable | CodedeployDeploymentGroupDeploymentRevisionGitHubLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

---

##### `revision_type_input`<sup>Optional</sup> <a name="revision_type_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionTypeInput"></a>

```python
revision_type_input: str
```

- *Type:* str

---

##### `s3_location_input`<sup>Optional</sup> <a name="s3_location_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3LocationInput"></a>

```python
s3_location_input: IResolvable | CodedeployDeploymentGroupDeploymentRevisionS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a>

---

##### `revision_type`<sup>Required</sup> <a name="revision_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionType"></a>

```python
revision_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupDeploymentRevision
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a>

---


### CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference <a name="CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBundleType">reset_bundle_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetETag">reset_e_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_bundle_type` <a name="reset_bundle_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBundleType"></a>

```python
def reset_bundle_type() -> None
```

##### `reset_e_tag` <a name="reset_e_tag" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetETag"></a>

```python
def reset_e_tag() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleTypeInput">bundle_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTagInput">e_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleType">bundle_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTag">e_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bundle_type_input`<sup>Optional</sup> <a name="bundle_type_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleTypeInput"></a>

```python
bundle_type_input: str
```

- *Type:* str

---

##### `e_tag_input`<sup>Optional</sup> <a name="e_tag_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTagInput"></a>

```python
e_tag_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bundle_type`<sup>Required</sup> <a name="bundle_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleType"></a>

```python
bundle_type: str
```

- *Type:* str

---

##### `e_tag`<sup>Required</sup> <a name="e_tag" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTag"></a>

```python
e_tag: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupDeploymentRevisionS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a>

---


### CodedeployDeploymentGroupDeploymentStyleOutputReference <a name="CodedeployDeploymentGroupDeploymentStyleOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentOption">reset_deployment_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentType">reset_deployment_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deployment_option` <a name="reset_deployment_option" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentOption"></a>

```python
def reset_deployment_option() -> None
```

##### `reset_deployment_type` <a name="reset_deployment_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentType"></a>

```python
def reset_deployment_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOptionInput">deployment_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentTypeInput">deployment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption">deployment_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_option_input`<sup>Optional</sup> <a name="deployment_option_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOptionInput"></a>

```python
deployment_option_input: str
```

- *Type:* str

---

##### `deployment_type_input`<sup>Optional</sup> <a name="deployment_type_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentTypeInput"></a>

```python
deployment_type_input: str
```

- *Type:* str

---

##### `deployment_option`<sup>Required</sup> <a name="deployment_option" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption"></a>

```python
deployment_option: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupDeploymentStyle
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---


### CodedeployDeploymentGroupEc2TagFiltersList <a name="CodedeployDeploymentGroupEc2TagFiltersList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodedeployDeploymentGroupEc2TagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>]

---


### CodedeployDeploymentGroupEc2TagFiltersOutputReference <a name="CodedeployDeploymentGroupEc2TagFiltersOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupEc2TagFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>]

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>]

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.putEc2TagGroup">put_ec2_tag_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resetEc2TagGroup">reset_ec2_tag_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ec2_tag_group` <a name="put_ec2_tag_group" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.putEc2TagGroup"></a>

```python
def put_ec2_tag_group(
  value: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.putEc2TagGroup.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>]

---

##### `reset_ec2_tag_group` <a name="reset_ec2_tag_group" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resetEc2TagGroup"></a>

```python
def reset_ec2_tag_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroup">ec2_tag_group</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroupInput">ec2_tag_group_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ec2_tag_group`<sup>Required</sup> <a name="ec2_tag_group" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroup"></a>

```python
ec2_tag_group: CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList</a>

---

##### `ec2_tag_group_input`<sup>Optional</sup> <a name="ec2_tag_group_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroupInput"></a>

```python
ec2_tag_group_input: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>

---


### CodedeployDeploymentGroupEc2TagSetOutputReference <a name="CodedeployDeploymentGroupEc2TagSetOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagSetList">put_ec2_tag_set_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resetEc2TagSetList">reset_ec2_tag_set_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ec2_tag_set_list` <a name="put_ec2_tag_set_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagSetList"></a>

```python
def put_ec2_tag_set_list(
  value: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagSetList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>]

---

##### `reset_ec2_tag_set_list` <a name="reset_ec2_tag_set_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resetEc2TagSetList"></a>

```python
def reset_ec2_tag_set_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetList">ec2_tag_set_list</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetListInput">ec2_tag_set_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ec2_tag_set_list`<sup>Required</sup> <a name="ec2_tag_set_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetList"></a>

```python
ec2_tag_set_list: CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList</a>

---

##### `ec2_tag_set_list_input`<sup>Optional</sup> <a name="ec2_tag_set_list_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetListInput"></a>

```python
ec2_tag_set_list_input: IResolvable | typing.List[CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupEc2TagSet
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>

---


### CodedeployDeploymentGroupEcsServicesList <a name="CodedeployDeploymentGroupEcsServicesList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodedeployDeploymentGroupEcsServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodedeployDeploymentGroupEcsServices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>]

---


### CodedeployDeploymentGroupEcsServicesOutputReference <a name="CodedeployDeploymentGroupEcsServicesOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupEcsServices
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>]

---


### CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfoList">put_elb_info_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfoList">put_target_group_info_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfoList">put_target_group_pair_info_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetElbInfoList">reset_elb_info_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupInfoList">reset_target_group_info_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupPairInfoList">reset_target_group_pair_info_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_elb_info_list` <a name="put_elb_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfoList"></a>

```python
def put_elb_info_list(
  value: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfoList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>]

---

##### `put_target_group_info_list` <a name="put_target_group_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfoList"></a>

```python
def put_target_group_info_list(
  value: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfoList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>]

---

##### `put_target_group_pair_info_list` <a name="put_target_group_pair_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfoList"></a>

```python
def put_target_group_pair_info_list(
  value: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfoList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>]

---

##### `reset_elb_info_list` <a name="reset_elb_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetElbInfoList"></a>

```python
def reset_elb_info_list() -> None
```

##### `reset_target_group_info_list` <a name="reset_target_group_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupInfoList"></a>

```python
def reset_target_group_info_list() -> None
```

##### `reset_target_group_pair_info_list` <a name="reset_target_group_pair_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupPairInfoList"></a>

```python
def reset_target_group_pair_info_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoList">elb_info_list</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoList">target_group_info_list</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoList">target_group_pair_info_list</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoListInput">elb_info_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoListInput">target_group_info_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoListInput">target_group_pair_info_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `elb_info_list`<sup>Required</sup> <a name="elb_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoList"></a>

```python
elb_info_list: CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList</a>

---

##### `target_group_info_list`<sup>Required</sup> <a name="target_group_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoList"></a>

```python
target_group_info_list: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList</a>

---

##### `target_group_pair_info_list`<sup>Required</sup> <a name="target_group_pair_info_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoList"></a>

```python
target_group_pair_info_list: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList</a>

---

##### `elb_info_list_input`<sup>Optional</sup> <a name="elb_info_list_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoListInput"></a>

```python
elb_info_list_input: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>]

---

##### `target_group_info_list_input`<sup>Optional</sup> <a name="target_group_info_list_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoListInput"></a>

```python
target_group_info_list_input: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>]

---

##### `target_group_pair_info_list_input`<sup>Optional</sup> <a name="target_group_pair_info_list_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoListInput"></a>

```python
target_group_pair_info_list_input: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupLoadBalancerInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>]

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resetListenerArns">reset_listener_arns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_listener_arns` <a name="reset_listener_arns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resetListenerArns"></a>

```python
def reset_listener_arns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArnsInput">listener_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArns">listener_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `listener_arns_input`<sup>Optional</sup> <a name="listener_arns_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArnsInput"></a>

```python
listener_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listener_arns`<sup>Required</sup> <a name="listener_arns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArns"></a>

```python
listener_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>]

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putProdTrafficRoute">put_prod_traffic_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTargetGroups">put_target_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTestTrafficRoute">put_test_traffic_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetProdTrafficRoute">reset_prod_traffic_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTargetGroups">reset_target_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTestTrafficRoute">reset_test_traffic_route</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_prod_traffic_route` <a name="put_prod_traffic_route" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putProdTrafficRoute"></a>

```python
def put_prod_traffic_route(
  listener_arns: typing.List[str] = None
) -> None
```

###### `listener_arns`<sup>Optional</sup> <a name="listener_arns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putProdTrafficRoute.parameter.listenerArns"></a>

- *Type:* typing.List[str]

The Amazon Resource Name (ARN) of one listener.

The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}

---

##### `put_target_groups` <a name="put_target_groups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTargetGroups"></a>

```python
def put_target_groups(
  value: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>]

---

##### `put_test_traffic_route` <a name="put_test_traffic_route" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTestTrafficRoute"></a>

```python
def put_test_traffic_route(
  listener_arns: typing.List[str] = None
) -> None
```

###### `listener_arns`<sup>Optional</sup> <a name="listener_arns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTestTrafficRoute.parameter.listenerArns"></a>

- *Type:* typing.List[str]

The Amazon Resource Name (ARN) of one listener.

The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}

---

##### `reset_prod_traffic_route` <a name="reset_prod_traffic_route" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetProdTrafficRoute"></a>

```python
def reset_prod_traffic_route() -> None
```

##### `reset_target_groups` <a name="reset_target_groups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTargetGroups"></a>

```python
def reset_target_groups() -> None
```

##### `reset_test_traffic_route` <a name="reset_test_traffic_route" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTestTrafficRoute"></a>

```python
def reset_test_traffic_route() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRoute">prod_traffic_route</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroups">target_groups</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRoute">test_traffic_route</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRouteInput">prod_traffic_route_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroupsInput">target_groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRouteInput">test_traffic_route_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prod_traffic_route`<sup>Required</sup> <a name="prod_traffic_route" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRoute"></a>

```python
prod_traffic_route: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference</a>

---

##### `target_groups`<sup>Required</sup> <a name="target_groups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroups"></a>

```python
target_groups: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList</a>

---

##### `test_traffic_route`<sup>Required</sup> <a name="test_traffic_route" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRoute"></a>

```python
test_traffic_route: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference</a>

---

##### `prod_traffic_route_input`<sup>Optional</sup> <a name="prod_traffic_route_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRouteInput"></a>

```python
prod_traffic_route_input: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a>

---

##### `target_groups_input`<sup>Optional</sup> <a name="target_groups_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroupsInput"></a>

```python
target_groups_input: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>]

---

##### `test_traffic_route_input`<sup>Optional</sup> <a name="test_traffic_route_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRouteInput"></a>

```python
test_traffic_route_input: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>]

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resetListenerArns">reset_listener_arns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_listener_arns` <a name="reset_listener_arns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resetListenerArns"></a>

```python
def reset_listener_arns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArnsInput">listener_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArns">listener_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `listener_arns_input`<sup>Optional</sup> <a name="listener_arns_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArnsInput"></a>

```python
listener_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listener_arns`<sup>Required</sup> <a name="listener_arns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArns"></a>

```python
listener_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a>

---


### CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesInstanceTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>]

---


### CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupOnPremisesInstanceTagFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>]

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>]

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.putOnPremisesTagGroup">put_on_premises_tag_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resetOnPremisesTagGroup">reset_on_premises_tag_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_premises_tag_group` <a name="put_on_premises_tag_group" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.putOnPremisesTagGroup"></a>

```python
def put_on_premises_tag_group(
  value: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.putOnPremisesTagGroup.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>]

---

##### `reset_on_premises_tag_group` <a name="reset_on_premises_tag_group" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resetOnPremisesTagGroup"></a>

```python
def reset_on_premises_tag_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroup">on_premises_tag_group</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroupInput">on_premises_tag_group_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_premises_tag_group`<sup>Required</sup> <a name="on_premises_tag_group" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroup"></a>

```python
on_premises_tag_group: CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList</a>

---

##### `on_premises_tag_group_input`<sup>Optional</sup> <a name="on_premises_tag_group_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroupInput"></a>

```python
on_premises_tag_group_input: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>

---


### CodedeployDeploymentGroupOnPremisesTagSetOutputReference <a name="CodedeployDeploymentGroupOnPremisesTagSetOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.putOnPremisesTagSetList">put_on_premises_tag_set_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resetOnPremisesTagSetList">reset_on_premises_tag_set_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_premises_tag_set_list` <a name="put_on_premises_tag_set_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.putOnPremisesTagSetList"></a>

```python
def put_on_premises_tag_set_list(
  value: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.putOnPremisesTagSetList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>]

---

##### `reset_on_premises_tag_set_list` <a name="reset_on_premises_tag_set_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resetOnPremisesTagSetList"></a>

```python
def reset_on_premises_tag_set_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetList">on_premises_tag_set_list</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetListInput">on_premises_tag_set_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_premises_tag_set_list`<sup>Required</sup> <a name="on_premises_tag_set_list" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetList"></a>

```python
on_premises_tag_set_list: CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList</a>

---

##### `on_premises_tag_set_list_input`<sup>Optional</sup> <a name="on_premises_tag_set_list_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetListInput"></a>

```python
on_premises_tag_set_list_input: IResolvable | typing.List[CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupOnPremisesTagSet
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a>

---


### CodedeployDeploymentGroupTagsList <a name="CodedeployDeploymentGroupTagsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodedeployDeploymentGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodedeployDeploymentGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>]

---


### CodedeployDeploymentGroupTagsOutputReference <a name="CodedeployDeploymentGroupTagsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>

---


### CodedeployDeploymentGroupTriggerConfigurationsList <a name="CodedeployDeploymentGroupTriggerConfigurationsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodedeployDeploymentGroupTriggerConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodedeployDeploymentGroupTriggerConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>]

---


### CodedeployDeploymentGroupTriggerConfigurationsOutputReference <a name="CodedeployDeploymentGroupTriggerConfigurationsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_group

codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerEvents">reset_trigger_events</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerName">reset_trigger_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerTargetArn">reset_trigger_target_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_trigger_events` <a name="reset_trigger_events" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerEvents"></a>

```python
def reset_trigger_events() -> None
```

##### `reset_trigger_name` <a name="reset_trigger_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerName"></a>

```python
def reset_trigger_name() -> None
```

##### `reset_trigger_target_arn` <a name="reset_trigger_target_arn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerTargetArn"></a>

```python
def reset_trigger_target_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEventsInput">trigger_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerNameInput">trigger_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArnInput">trigger_target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEvents">trigger_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerName">trigger_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArn">trigger_target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trigger_events_input`<sup>Optional</sup> <a name="trigger_events_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEventsInput"></a>

```python
trigger_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trigger_name_input`<sup>Optional</sup> <a name="trigger_name_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerNameInput"></a>

```python
trigger_name_input: str
```

- *Type:* str

---

##### `trigger_target_arn_input`<sup>Optional</sup> <a name="trigger_target_arn_input" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArnInput"></a>

```python
trigger_target_arn_input: str
```

- *Type:* str

---

##### `trigger_events`<sup>Required</sup> <a name="trigger_events" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEvents"></a>

```python
trigger_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trigger_name`<sup>Required</sup> <a name="trigger_name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerName"></a>

```python
trigger_name: str
```

- *Type:* str

---

##### `trigger_target_arn`<sup>Required</sup> <a name="trigger_target_arn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArn"></a>

```python
trigger_target_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentGroupTriggerConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>

---



