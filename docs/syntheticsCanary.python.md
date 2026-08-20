# `syntheticsCanary` Submodule <a name="`syntheticsCanary` Submodule" id="@cdktn/provider-awscc.syntheticsCanary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsCanary <a name="SyntheticsCanary" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary awscc_synthetics_canary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanary(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  artifact_s3_location: str,
  code: SyntheticsCanaryCode,
  execution_role_arn: str,
  name: str,
  runtime_version: str,
  schedule: SyntheticsCanarySchedule,
  artifact_config: SyntheticsCanaryArtifactConfig = None,
  browser_configs: IResolvable | typing.List[SyntheticsCanaryBrowserConfigs] = None,
  delete_lambda_resources_on_canary_deletion: bool | IResolvable = None,
  dry_run_and_update: bool | IResolvable = None,
  failure_retention_period: typing.Union[int, float] = None,
  provisioned_resource_cleanup: str = None,
  resources_to_replicate_tags: typing.List[str] = None,
  run_config: SyntheticsCanaryRunConfig = None,
  start_canary_after_creation: bool | IResolvable = None,
  success_retention_period: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[SyntheticsCanaryTags] = None,
  visual_reference: SyntheticsCanaryVisualReference = None,
  visual_references: IResolvable | typing.List[SyntheticsCanaryVisualReferences] = None,
  vpc_config: SyntheticsCanaryVpcConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.artifactS3Location">artifact_s3_location</a></code> | <code>str</code> | Provide the s3 bucket output location for test results. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | Provide the canary script source. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Lambda Execution role used to run your canaries. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.runtimeVersion">runtime_version</a></code> | <code>str</code> | Runtime version of Synthetics Library. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | Frequency to run your canaries. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.artifactConfig">artifact_config</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | Provide artifact configuration. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.browserConfigs">browser_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>]</code> | List of browser configurations for the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.deleteLambdaResourcesOnCanaryDeletion">delete_lambda_resources_on_canary_deletion</a></code> | <code>bool \| cdktn.IResolvable</code> | Deletes associated lambda resources created by Synthetics if set to True. Default is False. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.dryRunAndUpdate">dry_run_and_update</a></code> | <code>bool \| cdktn.IResolvable</code> | Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.failureRetentionPeriod">failure_retention_period</a></code> | <code>typing.Union[int, float]</code> | Retention period of failed canary runs represented in number of days. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provisionedResourceCleanup">provisioned_resource_cleanup</a></code> | <code>str</code> | Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.resourcesToReplicateTags">resources_to_replicate_tags</a></code> | <code>typing.List[str]</code> | List of resources which canary tags should be replicated to. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.runConfig">run_config</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | Provide canary run configuration. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.startCanaryAfterCreation">start_canary_after_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Runs canary if set to True. Default is False. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.successRetentionPeriod">success_retention_period</a></code> | <code>typing.Union[int, float]</code> | Retention period of successful canary runs represented in number of days. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.visualReference">visual_reference</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | Visual reference configuration for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.visualReferences">visual_references</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>]</code> | List of visual references for the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | Provide VPC Configuration if enabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_s3_location`<sup>Required</sup> <a name="artifact_s3_location" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.artifactS3Location"></a>

- *Type:* str

Provide the s3 bucket output location for test results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.code"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

Provide the canary script source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#code SyntheticsCanary#code}

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

Lambda Execution role used to run your canaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.name"></a>

- *Type:* str

Name of the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#name SyntheticsCanary#name}

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.runtimeVersion"></a>

- *Type:* str

Runtime version of Synthetics Library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

Frequency to run your canaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#schedule SyntheticsCanary#schedule}

---

##### `artifact_config`<sup>Optional</sup> <a name="artifact_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.artifactConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

Provide artifact configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#artifact_config SyntheticsCanary#artifact_config}

---

##### `browser_configs`<sup>Optional</sup> <a name="browser_configs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.browserConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>]

List of browser configurations for the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#browser_configs SyntheticsCanary#browser_configs}

---

##### `delete_lambda_resources_on_canary_deletion`<sup>Optional</sup> <a name="delete_lambda_resources_on_canary_deletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.deleteLambdaResourcesOnCanaryDeletion"></a>

- *Type:* bool | cdktn.IResolvable

Deletes associated lambda resources created by Synthetics if set to True. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#delete_lambda_resources_on_canary_deletion SyntheticsCanary#delete_lambda_resources_on_canary_deletion}

---

##### `dry_run_and_update`<sup>Optional</sup> <a name="dry_run_and_update" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.dryRunAndUpdate"></a>

- *Type:* bool | cdktn.IResolvable

Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update.

Default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#dry_run_and_update SyntheticsCanary#dry_run_and_update}

---

##### `failure_retention_period`<sup>Optional</sup> <a name="failure_retention_period" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.failureRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

Retention period of failed canary runs represented in number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}

---

##### `provisioned_resource_cleanup`<sup>Optional</sup> <a name="provisioned_resource_cleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provisionedResourceCleanup"></a>

- *Type:* str

Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#provisioned_resource_cleanup SyntheticsCanary#provisioned_resource_cleanup}

---

##### `resources_to_replicate_tags`<sup>Optional</sup> <a name="resources_to_replicate_tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.resourcesToReplicateTags"></a>

- *Type:* typing.List[str]

List of resources which canary tags should be replicated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#resources_to_replicate_tags SyntheticsCanary#resources_to_replicate_tags}

---

##### `run_config`<sup>Optional</sup> <a name="run_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.runConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

Provide canary run configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#run_config SyntheticsCanary#run_config}

---

##### `start_canary_after_creation`<sup>Optional</sup> <a name="start_canary_after_creation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.startCanaryAfterCreation"></a>

- *Type:* bool | cdktn.IResolvable

Runs canary if set to True. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#start_canary_after_creation SyntheticsCanary#start_canary_after_creation}

---

##### `success_retention_period`<sup>Optional</sup> <a name="success_retention_period" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.successRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

Retention period of successful canary runs represented in number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}.

---

##### `visual_reference`<sup>Optional</sup> <a name="visual_reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.visualReference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

Visual reference configuration for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#visual_reference SyntheticsCanary#visual_reference}

---

##### `visual_references`<sup>Optional</sup> <a name="visual_references" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.visualReferences"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>]

List of visual references for the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#visual_references SyntheticsCanary#visual_references}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

Provide VPC Configuration if enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#vpc_config SyntheticsCanary#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig">put_artifact_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs">put_browser_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode">put_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig">put_run_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference">put_visual_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences">put_visual_references</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetArtifactConfig">reset_artifact_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetBrowserConfigs">reset_browser_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDeleteLambdaResourcesOnCanaryDeletion">reset_delete_lambda_resources_on_canary_deletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDryRunAndUpdate">reset_dry_run_and_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod">reset_failure_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetProvisionedResourceCleanup">reset_provisioned_resource_cleanup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetResourcesToReplicateTags">reset_resources_to_replicate_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetRunConfig">reset_run_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetStartCanaryAfterCreation">reset_start_canary_after_creation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod">reset_success_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReference">reset_visual_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReferences">reset_visual_references</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_artifact_config` <a name="put_artifact_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig"></a>

```python
def put_artifact_config(
  s3_encryption: SyntheticsCanaryArtifactConfigS3Encryption = None
) -> None
```

###### `s3_encryption`<sup>Optional</sup> <a name="s3_encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig.parameter.s3Encryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

Encryption configuration for uploading artifacts to S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#s3_encryption SyntheticsCanary#s3_encryption}

---

##### `put_browser_configs` <a name="put_browser_configs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs"></a>

```python
def put_browser_configs(
  value: IResolvable | typing.List[SyntheticsCanaryBrowserConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>]

---

##### `put_code` <a name="put_code" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode"></a>

```python
def put_code(
  blueprint_types: typing.List[str] = None,
  dependencies: IResolvable | typing.List[SyntheticsCanaryCodeDependencies] = None,
  handler: str = None,
  s3_bucket: str = None,
  s3_key: str = None,
  s3_object_version: str = None,
  script: str = None
) -> None
```

###### `blueprint_types`<sup>Optional</sup> <a name="blueprint_types" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode.parameter.blueprintTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#blueprint_types SyntheticsCanary#blueprint_types}.

---

###### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode.parameter.dependencies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>]

List of Lambda layers to attach to the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#dependencies SyntheticsCanary#dependencies}

---

###### `handler`<sup>Optional</sup> <a name="handler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode.parameter.handler"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}.

---

###### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}.

---

###### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode.parameter.s3Key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}.

---

###### `s3_object_version`<sup>Optional</sup> <a name="s3_object_version" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode.parameter.s3ObjectVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#s3_object_version SyntheticsCanary#s3_object_version}.

---

###### `script`<sup>Optional</sup> <a name="script" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode.parameter.script"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#script SyntheticsCanary#script}.

---

##### `put_run_config` <a name="put_run_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig"></a>

```python
def put_run_config(
  active_tracing: bool | IResolvable = None,
  environment_variables: typing.Mapping[str] = None,
  ephemeral_storage: typing.Union[int, float] = None,
  memory_in_mb: typing.Union[int, float] = None,
  timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `active_tracing`<sup>Optional</sup> <a name="active_tracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig.parameter.activeTracing"></a>

- *Type:* bool | cdktn.IResolvable

Enable active tracing if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}

---

###### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Environment variable key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#environment_variables SyntheticsCanary#environment_variables}

---

###### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig.parameter.ephemeralStorage"></a>

- *Type:* typing.Union[int, float]

Provide ephemeralStorage available for canary in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#ephemeral_storage SyntheticsCanary#ephemeral_storage}

---

###### `memory_in_mb`<sup>Optional</sup> <a name="memory_in_mb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig.parameter.memoryInMb"></a>

- *Type:* typing.Union[int, float]

Provide maximum memory available for canary in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}

---

###### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Provide maximum canary timeout per run in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}

---

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule"></a>

```python
def put_schedule(
  expression: str,
  duration_in_seconds: str = None,
  retry_config: SyntheticsCanaryScheduleRetryConfig = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}.

---

###### `duration_in_seconds`<sup>Optional</sup> <a name="duration_in_seconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule.parameter.durationInSeconds"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}.

---

###### `retry_config`<sup>Optional</sup> <a name="retry_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule.parameter.retryConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

Provide canary auto retry configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#retry_config SyntheticsCanary#retry_config}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SyntheticsCanaryTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>]

---

##### `put_visual_reference` <a name="put_visual_reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference"></a>

```python
def put_visual_reference(
  base_canary_run_id: str = None,
  base_screenshots: IResolvable | typing.List[SyntheticsCanaryVisualReferenceBaseScreenshots] = None,
  browser_type: str = None
) -> None
```

###### `base_canary_run_id`<sup>Optional</sup> <a name="base_canary_run_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference.parameter.baseCanaryRunId"></a>

- *Type:* str

Canary run id to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#base_canary_run_id SyntheticsCanary#base_canary_run_id}

---

###### `base_screenshots`<sup>Optional</sup> <a name="base_screenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference.parameter.baseScreenshots"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>]

List of screenshots used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#base_screenshots SyntheticsCanary#base_screenshots}

---

###### `browser_type`<sup>Optional</sup> <a name="browser_type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference.parameter.browserType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

##### `put_visual_references` <a name="put_visual_references" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences"></a>

```python
def put_visual_references(
  value: IResolvable | typing.List[SyntheticsCanaryVisualReferences]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>]

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig"></a>

```python
def put_vpc_config(
  ipv6_allowed_for_dual_stack: bool | IResolvable = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  vpc_id: str = None
) -> None
```

###### `ipv6_allowed_for_dual_stack`<sup>Optional</sup> <a name="ipv6_allowed_for_dual_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig.parameter.ipv6AllowedForDualStack"></a>

- *Type:* bool | cdktn.IResolvable

Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#ipv_6_allowed_for_dual_stack SyntheticsCanary#ipv_6_allowed_for_dual_stack}

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}.

---

###### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#vpc_id SyntheticsCanary#vpc_id}.

---

##### `reset_artifact_config` <a name="reset_artifact_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetArtifactConfig"></a>

```python
def reset_artifact_config() -> None
```

##### `reset_browser_configs` <a name="reset_browser_configs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetBrowserConfigs"></a>

```python
def reset_browser_configs() -> None
```

##### `reset_delete_lambda_resources_on_canary_deletion` <a name="reset_delete_lambda_resources_on_canary_deletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDeleteLambdaResourcesOnCanaryDeletion"></a>

```python
def reset_delete_lambda_resources_on_canary_deletion() -> None
```

##### `reset_dry_run_and_update` <a name="reset_dry_run_and_update" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDryRunAndUpdate"></a>

```python
def reset_dry_run_and_update() -> None
```

##### `reset_failure_retention_period` <a name="reset_failure_retention_period" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod"></a>

```python
def reset_failure_retention_period() -> None
```

##### `reset_provisioned_resource_cleanup` <a name="reset_provisioned_resource_cleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetProvisionedResourceCleanup"></a>

```python
def reset_provisioned_resource_cleanup() -> None
```

##### `reset_resources_to_replicate_tags` <a name="reset_resources_to_replicate_tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetResourcesToReplicateTags"></a>

```python
def reset_resources_to_replicate_tags() -> None
```

##### `reset_run_config` <a name="reset_run_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetRunConfig"></a>

```python
def reset_run_config() -> None
```

##### `reset_start_canary_after_creation` <a name="reset_start_canary_after_creation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetStartCanaryAfterCreation"></a>

```python
def reset_start_canary_after_creation() -> None
```

##### `reset_success_retention_period` <a name="reset_success_retention_period" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod"></a>

```python
def reset_success_retention_period() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_visual_reference` <a name="reset_visual_reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReference"></a>

```python
def reset_visual_reference() -> None
```

##### `reset_visual_references` <a name="reset_visual_references" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReferences"></a>

```python
def reset_visual_references() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SyntheticsCanary resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isConstruct"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanary.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanary.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanary.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanary.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SyntheticsCanary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SyntheticsCanary to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SyntheticsCanary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SyntheticsCanary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfig">artifact_config</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigs">browser_configs</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList">SyntheticsCanaryBrowserConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.canaryId">canary_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference">SyntheticsCanaryCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfig">run_config</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList">SyntheticsCanaryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReference">visual_reference</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference">SyntheticsCanaryVisualReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferences">visual_references</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList">SyntheticsCanaryVisualReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput">artifact_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput">artifact_s3_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigsInput">browser_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.codeInput">code_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletionInput">delete_lambda_resources_on_canary_deletion_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdateInput">dry_run_and_update_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput">failure_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanupInput">provisioned_resource_cleanup_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTagsInput">resources_to_replicate_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfigInput">run_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreationInput">start_canary_after_creation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput">success_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferenceInput">visual_reference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferencesInput">visual_references_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3Location">artifact_s3_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion">delete_lambda_resources_on_canary_deletion</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdate">dry_run_and_update</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod">failure_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanup">provisioned_resource_cleanup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTags">resources_to_replicate_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreation">start_canary_after_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod">success_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_config`<sup>Required</sup> <a name="artifact_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfig"></a>

```python
artifact_config: SyntheticsCanaryArtifactConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a>

---

##### `browser_configs`<sup>Required</sup> <a name="browser_configs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigs"></a>

```python
browser_configs: SyntheticsCanaryBrowserConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList">SyntheticsCanaryBrowserConfigsList</a>

---

##### `canary_id`<sup>Required</sup> <a name="canary_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.canaryId"></a>

```python
canary_id: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.code"></a>

```python
code: SyntheticsCanaryCodeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference">SyntheticsCanaryCodeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `run_config`<sup>Required</sup> <a name="run_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfig"></a>

```python
run_config: SyntheticsCanaryRunConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.schedule"></a>

```python
schedule: SyntheticsCanaryScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tags"></a>

```python
tags: SyntheticsCanaryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList">SyntheticsCanaryTagsList</a>

---

##### `visual_reference`<sup>Required</sup> <a name="visual_reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReference"></a>

```python
visual_reference: SyntheticsCanaryVisualReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference">SyntheticsCanaryVisualReferenceOutputReference</a>

---

##### `visual_references`<sup>Required</sup> <a name="visual_references" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferences"></a>

```python
visual_references: SyntheticsCanaryVisualReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList">SyntheticsCanaryVisualReferencesList</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfig"></a>

```python
vpc_config: SyntheticsCanaryVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a>

---

##### `artifact_config_input`<sup>Optional</sup> <a name="artifact_config_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput"></a>

```python
artifact_config_input: IResolvable | SyntheticsCanaryArtifactConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---

##### `artifact_s3_location_input`<sup>Optional</sup> <a name="artifact_s3_location_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput"></a>

```python
artifact_s3_location_input: str
```

- *Type:* str

---

##### `browser_configs_input`<sup>Optional</sup> <a name="browser_configs_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigsInput"></a>

```python
browser_configs_input: IResolvable | typing.List[SyntheticsCanaryBrowserConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>]

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.codeInput"></a>

```python
code_input: IResolvable | SyntheticsCanaryCode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

---

##### `delete_lambda_resources_on_canary_deletion_input`<sup>Optional</sup> <a name="delete_lambda_resources_on_canary_deletion_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletionInput"></a>

```python
delete_lambda_resources_on_canary_deletion_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dry_run_and_update_input`<sup>Optional</sup> <a name="dry_run_and_update_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdateInput"></a>

```python
dry_run_and_update_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `failure_retention_period_input`<sup>Optional</sup> <a name="failure_retention_period_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput"></a>

```python
failure_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provisioned_resource_cleanup_input`<sup>Optional</sup> <a name="provisioned_resource_cleanup_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanupInput"></a>

```python
provisioned_resource_cleanup_input: str
```

- *Type:* str

---

##### `resources_to_replicate_tags_input`<sup>Optional</sup> <a name="resources_to_replicate_tags_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTagsInput"></a>

```python
resources_to_replicate_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `run_config_input`<sup>Optional</sup> <a name="run_config_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfigInput"></a>

```python
run_config_input: IResolvable | SyntheticsCanaryRunConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.scheduleInput"></a>

```python
schedule_input: IResolvable | SyntheticsCanarySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---

##### `start_canary_after_creation_input`<sup>Optional</sup> <a name="start_canary_after_creation_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreationInput"></a>

```python
start_canary_after_creation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `success_retention_period_input`<sup>Optional</sup> <a name="success_retention_period_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput"></a>

```python
success_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SyntheticsCanaryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>]

---

##### `visual_reference_input`<sup>Optional</sup> <a name="visual_reference_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferenceInput"></a>

```python
visual_reference_input: IResolvable | SyntheticsCanaryVisualReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

---

##### `visual_references_input`<sup>Optional</sup> <a name="visual_references_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferencesInput"></a>

```python
visual_references_input: IResolvable | typing.List[SyntheticsCanaryVisualReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>]

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | SyntheticsCanaryVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---

##### `artifact_s3_location`<sup>Required</sup> <a name="artifact_s3_location" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3Location"></a>

```python
artifact_s3_location: str
```

- *Type:* str

---

##### `delete_lambda_resources_on_canary_deletion`<sup>Required</sup> <a name="delete_lambda_resources_on_canary_deletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion"></a>

```python
delete_lambda_resources_on_canary_deletion: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dry_run_and_update`<sup>Required</sup> <a name="dry_run_and_update" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdate"></a>

```python
dry_run_and_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `failure_retention_period`<sup>Required</sup> <a name="failure_retention_period" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod"></a>

```python
failure_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provisioned_resource_cleanup`<sup>Required</sup> <a name="provisioned_resource_cleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanup"></a>

```python
provisioned_resource_cleanup: str
```

- *Type:* str

---

##### `resources_to_replicate_tags`<sup>Required</sup> <a name="resources_to_replicate_tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTags"></a>

```python
resources_to_replicate_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `start_canary_after_creation`<sup>Required</sup> <a name="start_canary_after_creation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreation"></a>

```python
start_canary_after_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `success_retention_period`<sup>Required</sup> <a name="success_retention_period" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod"></a>

```python
success_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsCanaryArtifactConfig <a name="SyntheticsCanaryArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryArtifactConfig(
  s3_encryption: SyntheticsCanaryArtifactConfigS3Encryption = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption">s3_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | Encryption configuration for uploading artifacts to S3. |

---

##### `s3_encryption`<sup>Optional</sup> <a name="s3_encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption"></a>

```python
s3_encryption: SyntheticsCanaryArtifactConfigS3Encryption
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

Encryption configuration for uploading artifacts to S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#s3_encryption SyntheticsCanary#s3_encryption}

---

### SyntheticsCanaryArtifactConfigS3Encryption <a name="SyntheticsCanaryArtifactConfigS3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption(
  encryption_mode: str = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode">encryption_mode</a></code> | <code>str</code> | Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | KMS key Arn for encrypting artifacts when uploading to S3. |

---

##### `encryption_mode`<sup>Optional</sup> <a name="encryption_mode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode"></a>

```python
encryption_mode: str
```

- *Type:* str

Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

KMS key Arn for encrypting artifacts when uploading to S3.

You must specify KMS key Arn for SSE_KMS encryption mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}

---

### SyntheticsCanaryBrowserConfigs <a name="SyntheticsCanaryBrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryBrowserConfigs(
  browser_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.property.browserType">browser_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `browser_type`<sup>Optional</sup> <a name="browser_type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.property.browserType"></a>

```python
browser_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryCode <a name="SyntheticsCanaryCode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryCode(
  blueprint_types: typing.List[str] = None,
  dependencies: IResolvable | typing.List[SyntheticsCanaryCodeDependencies] = None,
  handler: str = None,
  s3_bucket: str = None,
  s3_key: str = None,
  s3_object_version: str = None,
  script: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.blueprintTypes">blueprint_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#blueprint_types SyntheticsCanary#blueprint_types}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.dependencies">dependencies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>]</code> | List of Lambda layers to attach to the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.handler">handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Key">s3_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#s3_object_version SyntheticsCanary#s3_object_version}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.script">script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#script SyntheticsCanary#script}. |

---

##### `blueprint_types`<sup>Optional</sup> <a name="blueprint_types" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.blueprintTypes"></a>

```python
blueprint_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#blueprint_types SyntheticsCanary#blueprint_types}.

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.dependencies"></a>

```python
dependencies: IResolvable | typing.List[SyntheticsCanaryCodeDependencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>]

List of Lambda layers to attach to the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#dependencies SyntheticsCanary#dependencies}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.handler"></a>

```python
handler: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}.

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}.

---

##### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}.

---

##### `s3_object_version`<sup>Optional</sup> <a name="s3_object_version" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3ObjectVersion"></a>

```python
s3_object_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#s3_object_version SyntheticsCanary#s3_object_version}.

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.script"></a>

```python
script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#script SyntheticsCanary#script}.

---

### SyntheticsCanaryCodeDependencies <a name="SyntheticsCanaryCodeDependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryCodeDependencies(
  reference: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.reference">reference</a></code> | <code>str</code> | ARN of the Lambda layer. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.type">type</a></code> | <code>str</code> | Type of dependency. |

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.reference"></a>

```python
reference: str
```

- *Type:* str

ARN of the Lambda layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#reference SyntheticsCanary#reference}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.type"></a>

```python
type: str
```

- *Type:* str

Type of dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#type SyntheticsCanary#type}

---

### SyntheticsCanaryConfig <a name="SyntheticsCanaryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  artifact_s3_location: str,
  code: SyntheticsCanaryCode,
  execution_role_arn: str,
  name: str,
  runtime_version: str,
  schedule: SyntheticsCanarySchedule,
  artifact_config: SyntheticsCanaryArtifactConfig = None,
  browser_configs: IResolvable | typing.List[SyntheticsCanaryBrowserConfigs] = None,
  delete_lambda_resources_on_canary_deletion: bool | IResolvable = None,
  dry_run_and_update: bool | IResolvable = None,
  failure_retention_period: typing.Union[int, float] = None,
  provisioned_resource_cleanup: str = None,
  resources_to_replicate_tags: typing.List[str] = None,
  run_config: SyntheticsCanaryRunConfig = None,
  start_canary_after_creation: bool | IResolvable = None,
  success_retention_period: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[SyntheticsCanaryTags] = None,
  visual_reference: SyntheticsCanaryVisualReference = None,
  visual_references: IResolvable | typing.List[SyntheticsCanaryVisualReferences] = None,
  vpc_config: SyntheticsCanaryVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location">artifact_s3_location</a></code> | <code>str</code> | Provide the s3 bucket output location for test results. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | Provide the canary script source. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Lambda Execution role used to run your canaries. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.name">name</a></code> | <code>str</code> | Name of the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | Runtime version of Synthetics Library. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | Frequency to run your canaries. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig">artifact_config</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | Provide artifact configuration. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.browserConfigs">browser_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>]</code> | List of browser configurations for the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.deleteLambdaResourcesOnCanaryDeletion">delete_lambda_resources_on_canary_deletion</a></code> | <code>bool \| cdktn.IResolvable</code> | Deletes associated lambda resources created by Synthetics if set to True. Default is False. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dryRunAndUpdate">dry_run_and_update</a></code> | <code>bool \| cdktn.IResolvable</code> | Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod">failure_retention_period</a></code> | <code>typing.Union[int, float]</code> | Retention period of failed canary runs represented in number of days. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisionedResourceCleanup">provisioned_resource_cleanup</a></code> | <code>str</code> | Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.resourcesToReplicateTags">resources_to_replicate_tags</a></code> | <code>typing.List[str]</code> | List of resources which canary tags should be replicated to. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig">run_config</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | Provide canary run configuration. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.startCanaryAfterCreation">start_canary_after_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Runs canary if set to True. Default is False. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod">success_retention_period</a></code> | <code>typing.Union[int, float]</code> | Retention period of successful canary runs represented in number of days. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReference">visual_reference</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | Visual reference configuration for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReferences">visual_references</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>]</code> | List of visual references for the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | Provide VPC Configuration if enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_s3_location`<sup>Required</sup> <a name="artifact_s3_location" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location"></a>

```python
artifact_s3_location: str
```

- *Type:* str

Provide the s3 bucket output location for test results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.code"></a>

```python
code: SyntheticsCanaryCode
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

Provide the canary script source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#code SyntheticsCanary#code}

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Lambda Execution role used to run your canaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#name SyntheticsCanary#name}

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

Runtime version of Synthetics Library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.schedule"></a>

```python
schedule: SyntheticsCanarySchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

Frequency to run your canaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#schedule SyntheticsCanary#schedule}

---

##### `artifact_config`<sup>Optional</sup> <a name="artifact_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig"></a>

```python
artifact_config: SyntheticsCanaryArtifactConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

Provide artifact configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#artifact_config SyntheticsCanary#artifact_config}

---

##### `browser_configs`<sup>Optional</sup> <a name="browser_configs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.browserConfigs"></a>

```python
browser_configs: IResolvable | typing.List[SyntheticsCanaryBrowserConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>]

List of browser configurations for the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#browser_configs SyntheticsCanary#browser_configs}

---

##### `delete_lambda_resources_on_canary_deletion`<sup>Optional</sup> <a name="delete_lambda_resources_on_canary_deletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.deleteLambdaResourcesOnCanaryDeletion"></a>

```python
delete_lambda_resources_on_canary_deletion: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Deletes associated lambda resources created by Synthetics if set to True. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#delete_lambda_resources_on_canary_deletion SyntheticsCanary#delete_lambda_resources_on_canary_deletion}

---

##### `dry_run_and_update`<sup>Optional</sup> <a name="dry_run_and_update" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dryRunAndUpdate"></a>

```python
dry_run_and_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update.

Default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#dry_run_and_update SyntheticsCanary#dry_run_and_update}

---

##### `failure_retention_period`<sup>Optional</sup> <a name="failure_retention_period" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod"></a>

```python
failure_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Retention period of failed canary runs represented in number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}

---

##### `provisioned_resource_cleanup`<sup>Optional</sup> <a name="provisioned_resource_cleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisionedResourceCleanup"></a>

```python
provisioned_resource_cleanup: str
```

- *Type:* str

Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#provisioned_resource_cleanup SyntheticsCanary#provisioned_resource_cleanup}

---

##### `resources_to_replicate_tags`<sup>Optional</sup> <a name="resources_to_replicate_tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.resourcesToReplicateTags"></a>

```python
resources_to_replicate_tags: typing.List[str]
```

- *Type:* typing.List[str]

List of resources which canary tags should be replicated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#resources_to_replicate_tags SyntheticsCanary#resources_to_replicate_tags}

---

##### `run_config`<sup>Optional</sup> <a name="run_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig"></a>

```python
run_config: SyntheticsCanaryRunConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

Provide canary run configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#run_config SyntheticsCanary#run_config}

---

##### `start_canary_after_creation`<sup>Optional</sup> <a name="start_canary_after_creation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.startCanaryAfterCreation"></a>

```python
start_canary_after_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Runs canary if set to True. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#start_canary_after_creation SyntheticsCanary#start_canary_after_creation}

---

##### `success_retention_period`<sup>Optional</sup> <a name="success_retention_period" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod"></a>

```python
success_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Retention period of successful canary runs represented in number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SyntheticsCanaryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}.

---

##### `visual_reference`<sup>Optional</sup> <a name="visual_reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReference"></a>

```python
visual_reference: SyntheticsCanaryVisualReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

Visual reference configuration for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#visual_reference SyntheticsCanary#visual_reference}

---

##### `visual_references`<sup>Optional</sup> <a name="visual_references" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReferences"></a>

```python
visual_references: IResolvable | typing.List[SyntheticsCanaryVisualReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>]

List of visual references for the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#visual_references SyntheticsCanary#visual_references}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig"></a>

```python
vpc_config: SyntheticsCanaryVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

Provide VPC Configuration if enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#vpc_config SyntheticsCanary#vpc_config}

---

### SyntheticsCanaryRunConfig <a name="SyntheticsCanaryRunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryRunConfig(
  active_tracing: bool | IResolvable = None,
  environment_variables: typing.Mapping[str] = None,
  ephemeral_storage: typing.Union[int, float] = None,
  memory_in_mb: typing.Union[int, float] = None,
  timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing">active_tracing</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable active tracing if set to true. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Environment variable key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.ephemeralStorage">ephemeral_storage</a></code> | <code>typing.Union[int, float]</code> | Provide ephemeralStorage available for canary in MB. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb">memory_in_mb</a></code> | <code>typing.Union[int, float]</code> | Provide maximum memory available for canary in MB. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Provide maximum canary timeout per run in seconds. |

---

##### `active_tracing`<sup>Optional</sup> <a name="active_tracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing"></a>

```python
active_tracing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enable active tracing if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variable key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#environment_variables SyntheticsCanary#environment_variables}

---

##### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.ephemeralStorage"></a>

```python
ephemeral_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Provide ephemeralStorage available for canary in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#ephemeral_storage SyntheticsCanary#ephemeral_storage}

---

##### `memory_in_mb`<sup>Optional</sup> <a name="memory_in_mb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb"></a>

```python
memory_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Provide maximum memory available for canary in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Provide maximum canary timeout per run in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}

---

### SyntheticsCanarySchedule <a name="SyntheticsCanarySchedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanarySchedule(
  expression: str,
  duration_in_seconds: str = None,
  retry_config: SyntheticsCanaryScheduleRetryConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds">duration_in_seconds</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.retryConfig">retry_config</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a></code> | Provide canary auto retry configuration. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}.

---

##### `duration_in_seconds`<sup>Optional</sup> <a name="duration_in_seconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds"></a>

```python
duration_in_seconds: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}.

---

##### `retry_config`<sup>Optional</sup> <a name="retry_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.retryConfig"></a>

```python
retry_config: SyntheticsCanaryScheduleRetryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

Provide canary auto retry configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#retry_config SyntheticsCanary#retry_config}

---

### SyntheticsCanaryScheduleRetryConfig <a name="SyntheticsCanaryScheduleRetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryScheduleRetryConfig(
  max_retries: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | maximum times the canary will be retried upon the scheduled run failure. |

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

maximum times the canary will be retried upon the scheduled run failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#max_retries SyntheticsCanary#max_retries}

---

### SyntheticsCanaryTags <a name="SyntheticsCanaryTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#key SyntheticsCanary#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#value SyntheticsCanary#value}

---

### SyntheticsCanaryVisualReference <a name="SyntheticsCanaryVisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryVisualReference(
  base_canary_run_id: str = None,
  base_screenshots: IResolvable | typing.List[SyntheticsCanaryVisualReferenceBaseScreenshots] = None,
  browser_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseCanaryRunId">base_canary_run_id</a></code> | <code>str</code> | Canary run id to be used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseScreenshots">base_screenshots</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>]</code> | List of screenshots used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.browserType">browser_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `base_canary_run_id`<sup>Optional</sup> <a name="base_canary_run_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseCanaryRunId"></a>

```python
base_canary_run_id: str
```

- *Type:* str

Canary run id to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#base_canary_run_id SyntheticsCanary#base_canary_run_id}

---

##### `base_screenshots`<sup>Optional</sup> <a name="base_screenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseScreenshots"></a>

```python
base_screenshots: IResolvable | typing.List[SyntheticsCanaryVisualReferenceBaseScreenshots]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>]

List of screenshots used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#base_screenshots SyntheticsCanary#base_screenshots}

---

##### `browser_type`<sup>Optional</sup> <a name="browser_type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.browserType"></a>

```python
browser_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryVisualReferenceBaseScreenshots <a name="SyntheticsCanaryVisualReferenceBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots(
  ignore_coordinates: typing.List[str] = None,
  screenshot_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.ignoreCoordinates">ignore_coordinates</a></code> | <code>typing.List[str]</code> | List of coordinates of rectangles to be ignored during visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.screenshotName">screenshot_name</a></code> | <code>str</code> | Name of the screenshot to be used as base reference for visual testing. |

---

##### `ignore_coordinates`<sup>Optional</sup> <a name="ignore_coordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.ignoreCoordinates"></a>

```python
ignore_coordinates: typing.List[str]
```

- *Type:* typing.List[str]

List of coordinates of rectangles to be ignored during visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#ignore_coordinates SyntheticsCanary#ignore_coordinates}

---

##### `screenshot_name`<sup>Optional</sup> <a name="screenshot_name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.screenshotName"></a>

```python
screenshot_name: str
```

- *Type:* str

Name of the screenshot to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#screenshot_name SyntheticsCanary#screenshot_name}

---

### SyntheticsCanaryVisualReferences <a name="SyntheticsCanaryVisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryVisualReferences(
  base_canary_run_id: str = None,
  base_screenshots: IResolvable | typing.List[SyntheticsCanaryVisualReferencesBaseScreenshots] = None,
  browser_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseCanaryRunId">base_canary_run_id</a></code> | <code>str</code> | Canary run id to be used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseScreenshots">base_screenshots</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>]</code> | List of screenshots used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.browserType">browser_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `base_canary_run_id`<sup>Optional</sup> <a name="base_canary_run_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseCanaryRunId"></a>

```python
base_canary_run_id: str
```

- *Type:* str

Canary run id to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#base_canary_run_id SyntheticsCanary#base_canary_run_id}

---

##### `base_screenshots`<sup>Optional</sup> <a name="base_screenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseScreenshots"></a>

```python
base_screenshots: IResolvable | typing.List[SyntheticsCanaryVisualReferencesBaseScreenshots]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>]

List of screenshots used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#base_screenshots SyntheticsCanary#base_screenshots}

---

##### `browser_type`<sup>Optional</sup> <a name="browser_type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.browserType"></a>

```python
browser_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryVisualReferencesBaseScreenshots <a name="SyntheticsCanaryVisualReferencesBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots(
  ignore_coordinates: typing.List[str] = None,
  screenshot_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.ignoreCoordinates">ignore_coordinates</a></code> | <code>typing.List[str]</code> | List of coordinates of rectangles to be ignored during visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.screenshotName">screenshot_name</a></code> | <code>str</code> | Name of the screenshot to be used as base reference for visual testing. |

---

##### `ignore_coordinates`<sup>Optional</sup> <a name="ignore_coordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.ignoreCoordinates"></a>

```python
ignore_coordinates: typing.List[str]
```

- *Type:* typing.List[str]

List of coordinates of rectangles to be ignored during visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#ignore_coordinates SyntheticsCanary#ignore_coordinates}

---

##### `screenshot_name`<sup>Optional</sup> <a name="screenshot_name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.screenshotName"></a>

```python
screenshot_name: str
```

- *Type:* str

Name of the screenshot to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#screenshot_name SyntheticsCanary#screenshot_name}

---

### SyntheticsCanaryVpcConfig <a name="SyntheticsCanaryVpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryVpcConfig(
  ipv6_allowed_for_dual_stack: bool | IResolvable = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.ipv6AllowedForDualStack">ipv6_allowed_for_dual_stack</a></code> | <code>bool \| cdktn.IResolvable</code> | Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#vpc_id SyntheticsCanary#vpc_id}. |

---

##### `ipv6_allowed_for_dual_stack`<sup>Optional</sup> <a name="ipv6_allowed_for_dual_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.ipv6AllowedForDualStack"></a>

```python
ipv6_allowed_for_dual_stack: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#ipv_6_allowed_for_dual_stack SyntheticsCanary#ipv_6_allowed_for_dual_stack}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#vpc_id SyntheticsCanary#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsCanaryArtifactConfigOutputReference <a name="SyntheticsCanaryArtifactConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption">put_s3_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption">reset_s3_encryption</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_encryption` <a name="put_s3_encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption"></a>

```python
def put_s3_encryption(
  encryption_mode: str = None,
  kms_key_arn: str = None
) -> None
```

###### `encryption_mode`<sup>Optional</sup> <a name="encryption_mode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption.parameter.encryptionMode"></a>

- *Type:* str

Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption.parameter.kmsKeyArn"></a>

- *Type:* str

KMS key Arn for encrypting artifacts when uploading to S3.

You must specify KMS key Arn for SSE_KMS encryption mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}

---

##### `reset_s3_encryption` <a name="reset_s3_encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption"></a>

```python
def reset_s3_encryption() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption">s3_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput">s3_encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_encryption`<sup>Required</sup> <a name="s3_encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption"></a>

```python
s3_encryption: SyntheticsCanaryArtifactConfigS3EncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a>

---

##### `s3_encryption_input`<sup>Optional</sup> <a name="s3_encryption_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput"></a>

```python
s3_encryption_input: IResolvable | SyntheticsCanaryArtifactConfigS3Encryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsCanaryArtifactConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---


### SyntheticsCanaryArtifactConfigS3EncryptionOutputReference <a name="SyntheticsCanaryArtifactConfigS3EncryptionOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode">reset_encryption_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_mode` <a name="reset_encryption_mode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode"></a>

```python
def reset_encryption_mode() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput">encryption_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode">encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_mode_input`<sup>Optional</sup> <a name="encryption_mode_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput"></a>

```python
encryption_mode_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `encryption_mode`<sup>Required</sup> <a name="encryption_mode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode"></a>

```python
encryption_mode: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsCanaryArtifactConfigS3Encryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---


### SyntheticsCanaryBrowserConfigsList <a name="SyntheticsCanaryBrowserConfigsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryBrowserConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SyntheticsCanaryBrowserConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SyntheticsCanaryBrowserConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>]

---


### SyntheticsCanaryBrowserConfigsOutputReference <a name="SyntheticsCanaryBrowserConfigsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resetBrowserType">reset_browser_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_browser_type` <a name="reset_browser_type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resetBrowserType"></a>

```python
def reset_browser_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserTypeInput">browser_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserType">browser_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `browser_type_input`<sup>Optional</sup> <a name="browser_type_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserTypeInput"></a>

```python
browser_type_input: str
```

- *Type:* str

---

##### `browser_type`<sup>Required</sup> <a name="browser_type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserType"></a>

```python
browser_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsCanaryBrowserConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>

---


### SyntheticsCanaryCodeDependenciesList <a name="SyntheticsCanaryCodeDependenciesList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryCodeDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SyntheticsCanaryCodeDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SyntheticsCanaryCodeDependencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>]

---


### SyntheticsCanaryCodeDependenciesOutputReference <a name="SyntheticsCanaryCodeDependenciesOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetReference">reset_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_reference` <a name="reset_reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetReference"></a>

```python
def reset_reference() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.referenceInput">reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.reference">reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reference_input`<sup>Optional</sup> <a name="reference_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.referenceInput"></a>

```python
reference_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.reference"></a>

```python
reference: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsCanaryCodeDependencies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>

---


### SyntheticsCanaryCodeOutputReference <a name="SyntheticsCanaryCodeOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryCodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies">put_dependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetBlueprintTypes">reset_blueprint_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetDependencies">reset_dependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetHandler">reset_handler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Key">reset_s3_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3ObjectVersion">reset_s3_object_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetScript">reset_script</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dependencies` <a name="put_dependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies"></a>

```python
def put_dependencies(
  value: IResolvable | typing.List[SyntheticsCanaryCodeDependencies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>]

---

##### `reset_blueprint_types` <a name="reset_blueprint_types" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetBlueprintTypes"></a>

```python
def reset_blueprint_types() -> None
```

##### `reset_dependencies` <a name="reset_dependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetDependencies"></a>

```python
def reset_dependencies() -> None
```

##### `reset_handler` <a name="reset_handler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetHandler"></a>

```python
def reset_handler() -> None
```

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```

##### `reset_s3_key` <a name="reset_s3_key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Key"></a>

```python
def reset_s3_key() -> None
```

##### `reset_s3_object_version` <a name="reset_s3_object_version" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3ObjectVersion"></a>

```python
def reset_s3_object_version() -> None
```

##### `reset_script` <a name="reset_script" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetScript"></a>

```python
def reset_script() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependencies">dependencies</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList">SyntheticsCanaryCodeDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.sourceLocationArn">source_location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypesInput">blueprint_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependenciesInput">dependencies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handlerInput">handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersionInput">s3_object_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.scriptInput">script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypes">blueprint_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handler">handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.script">script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependencies"></a>

```python
dependencies: SyntheticsCanaryCodeDependenciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList">SyntheticsCanaryCodeDependenciesList</a>

---

##### `source_location_arn`<sup>Required</sup> <a name="source_location_arn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.sourceLocationArn"></a>

```python
source_location_arn: str
```

- *Type:* str

---

##### `blueprint_types_input`<sup>Optional</sup> <a name="blueprint_types_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypesInput"></a>

```python
blueprint_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dependencies_input`<sup>Optional</sup> <a name="dependencies_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependenciesInput"></a>

```python
dependencies_input: IResolvable | typing.List[SyntheticsCanaryCodeDependencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>]

---

##### `handler_input`<sup>Optional</sup> <a name="handler_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handlerInput"></a>

```python
handler_input: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `s3_object_version_input`<sup>Optional</sup> <a name="s3_object_version_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersionInput"></a>

```python
s3_object_version_input: str
```

- *Type:* str

---

##### `script_input`<sup>Optional</sup> <a name="script_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.scriptInput"></a>

```python
script_input: str
```

- *Type:* str

---

##### `blueprint_types`<sup>Required</sup> <a name="blueprint_types" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypes"></a>

```python
blueprint_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handler"></a>

```python
handler: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `s3_object_version`<sup>Required</sup> <a name="s3_object_version" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersion"></a>

```python
s3_object_version: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.script"></a>

```python
script: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsCanaryCode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

---


### SyntheticsCanaryRunConfigOutputReference <a name="SyntheticsCanaryRunConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryRunConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing">reset_active_tracing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEphemeralStorage">reset_ephemeral_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb">reset_memory_in_mb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_active_tracing` <a name="reset_active_tracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing"></a>

```python
def reset_active_tracing() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_ephemeral_storage` <a name="reset_ephemeral_storage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEphemeralStorage"></a>

```python
def reset_ephemeral_storage() -> None
```

##### `reset_memory_in_mb` <a name="reset_memory_in_mb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb"></a>

```python
def reset_memory_in_mb() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput">active_tracing_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorageInput">ephemeral_storage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput">memory_in_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing">active_tracing</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage">ephemeral_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb">memory_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_tracing_input`<sup>Optional</sup> <a name="active_tracing_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput"></a>

```python
active_tracing_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ephemeral_storage_input`<sup>Optional</sup> <a name="ephemeral_storage_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorageInput"></a>

```python
ephemeral_storage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_mb_input`<sup>Optional</sup> <a name="memory_in_mb_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput"></a>

```python
memory_in_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `active_tracing`<sup>Required</sup> <a name="active_tracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing"></a>

```python
active_tracing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ephemeral_storage`<sup>Required</sup> <a name="ephemeral_storage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage"></a>

```python
ephemeral_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_mb`<sup>Required</sup> <a name="memory_in_mb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb"></a>

```python
memory_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsCanaryRunConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---


### SyntheticsCanaryScheduleOutputReference <a name="SyntheticsCanaryScheduleOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig">put_retry_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds">reset_duration_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetRetryConfig">reset_retry_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_retry_config` <a name="put_retry_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig"></a>

```python
def put_retry_config(
  max_retries: typing.Union[int, float] = None
) -> None
```

###### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

maximum times the canary will be retried upon the scheduled run failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/synthetics_canary#max_retries SyntheticsCanary#max_retries}

---

##### `reset_duration_in_seconds` <a name="reset_duration_in_seconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds"></a>

```python
def reset_duration_in_seconds() -> None
```

##### `reset_retry_config` <a name="reset_retry_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetRetryConfig"></a>

```python
def reset_retry_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfig">retry_config</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference">SyntheticsCanaryScheduleRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput">duration_in_seconds_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfigInput">retry_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds">duration_in_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retry_config`<sup>Required</sup> <a name="retry_config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfig"></a>

```python
retry_config: SyntheticsCanaryScheduleRetryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference">SyntheticsCanaryScheduleRetryConfigOutputReference</a>

---

##### `duration_in_seconds_input`<sup>Optional</sup> <a name="duration_in_seconds_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput"></a>

```python
duration_in_seconds_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `retry_config_input`<sup>Optional</sup> <a name="retry_config_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfigInput"></a>

```python
retry_config_input: IResolvable | SyntheticsCanaryScheduleRetryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

---

##### `duration_in_seconds`<sup>Required</sup> <a name="duration_in_seconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds"></a>

```python
duration_in_seconds: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsCanarySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---


### SyntheticsCanaryScheduleRetryConfigOutputReference <a name="SyntheticsCanaryScheduleRetryConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resetMaxRetries">reset_max_retries</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsCanaryScheduleRetryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

---


### SyntheticsCanaryTagsList <a name="SyntheticsCanaryTagsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SyntheticsCanaryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SyntheticsCanaryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>]

---


### SyntheticsCanaryTagsOutputReference <a name="SyntheticsCanaryTagsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsCanaryTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>

---


### SyntheticsCanaryVisualReferenceBaseScreenshotsList <a name="SyntheticsCanaryVisualReferenceBaseScreenshotsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SyntheticsCanaryVisualReferenceBaseScreenshots]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>]

---


### SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference <a name="SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetIgnoreCoordinates">reset_ignore_coordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetScreenshotName">reset_screenshot_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ignore_coordinates` <a name="reset_ignore_coordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetIgnoreCoordinates"></a>

```python
def reset_ignore_coordinates() -> None
```

##### `reset_screenshot_name` <a name="reset_screenshot_name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetScreenshotName"></a>

```python
def reset_screenshot_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinatesInput">ignore_coordinates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotNameInput">screenshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates">ignore_coordinates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName">screenshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ignore_coordinates_input`<sup>Optional</sup> <a name="ignore_coordinates_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinatesInput"></a>

```python
ignore_coordinates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `screenshot_name_input`<sup>Optional</sup> <a name="screenshot_name_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotNameInput"></a>

```python
screenshot_name_input: str
```

- *Type:* str

---

##### `ignore_coordinates`<sup>Required</sup> <a name="ignore_coordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```python
ignore_coordinates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `screenshot_name`<sup>Required</sup> <a name="screenshot_name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName"></a>

```python
screenshot_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsCanaryVisualReferenceBaseScreenshots
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>

---


### SyntheticsCanaryVisualReferenceOutputReference <a name="SyntheticsCanaryVisualReferenceOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots">put_base_screenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseCanaryRunId">reset_base_canary_run_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseScreenshots">reset_base_screenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBrowserType">reset_browser_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_base_screenshots` <a name="put_base_screenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots"></a>

```python
def put_base_screenshots(
  value: IResolvable | typing.List[SyntheticsCanaryVisualReferenceBaseScreenshots]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>]

---

##### `reset_base_canary_run_id` <a name="reset_base_canary_run_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseCanaryRunId"></a>

```python
def reset_base_canary_run_id() -> None
```

##### `reset_base_screenshots` <a name="reset_base_screenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseScreenshots"></a>

```python
def reset_base_screenshots() -> None
```

##### `reset_browser_type` <a name="reset_browser_type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBrowserType"></a>

```python
def reset_browser_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots">base_screenshots</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList">SyntheticsCanaryVisualReferenceBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunIdInput">base_canary_run_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshotsInput">base_screenshots_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserTypeInput">browser_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId">base_canary_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserType">browser_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_screenshots`<sup>Required</sup> <a name="base_screenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots"></a>

```python
base_screenshots: SyntheticsCanaryVisualReferenceBaseScreenshotsList
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList">SyntheticsCanaryVisualReferenceBaseScreenshotsList</a>

---

##### `base_canary_run_id_input`<sup>Optional</sup> <a name="base_canary_run_id_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunIdInput"></a>

```python
base_canary_run_id_input: str
```

- *Type:* str

---

##### `base_screenshots_input`<sup>Optional</sup> <a name="base_screenshots_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshotsInput"></a>

```python
base_screenshots_input: IResolvable | typing.List[SyntheticsCanaryVisualReferenceBaseScreenshots]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>]

---

##### `browser_type_input`<sup>Optional</sup> <a name="browser_type_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserTypeInput"></a>

```python
browser_type_input: str
```

- *Type:* str

---

##### `base_canary_run_id`<sup>Required</sup> <a name="base_canary_run_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId"></a>

```python
base_canary_run_id: str
```

- *Type:* str

---

##### `browser_type`<sup>Required</sup> <a name="browser_type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserType"></a>

```python
browser_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsCanaryVisualReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

---


### SyntheticsCanaryVisualReferencesBaseScreenshotsList <a name="SyntheticsCanaryVisualReferencesBaseScreenshotsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SyntheticsCanaryVisualReferencesBaseScreenshots]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>]

---


### SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference <a name="SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetIgnoreCoordinates">reset_ignore_coordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetScreenshotName">reset_screenshot_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ignore_coordinates` <a name="reset_ignore_coordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetIgnoreCoordinates"></a>

```python
def reset_ignore_coordinates() -> None
```

##### `reset_screenshot_name` <a name="reset_screenshot_name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetScreenshotName"></a>

```python
def reset_screenshot_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinatesInput">ignore_coordinates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotNameInput">screenshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates">ignore_coordinates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName">screenshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ignore_coordinates_input`<sup>Optional</sup> <a name="ignore_coordinates_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinatesInput"></a>

```python
ignore_coordinates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `screenshot_name_input`<sup>Optional</sup> <a name="screenshot_name_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotNameInput"></a>

```python
screenshot_name_input: str
```

- *Type:* str

---

##### `ignore_coordinates`<sup>Required</sup> <a name="ignore_coordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```python
ignore_coordinates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `screenshot_name`<sup>Required</sup> <a name="screenshot_name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName"></a>

```python
screenshot_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsCanaryVisualReferencesBaseScreenshots
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>

---


### SyntheticsCanaryVisualReferencesList <a name="SyntheticsCanaryVisualReferencesList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryVisualReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SyntheticsCanaryVisualReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SyntheticsCanaryVisualReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>]

---


### SyntheticsCanaryVisualReferencesOutputReference <a name="SyntheticsCanaryVisualReferencesOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots">put_base_screenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseCanaryRunId">reset_base_canary_run_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseScreenshots">reset_base_screenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBrowserType">reset_browser_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_base_screenshots` <a name="put_base_screenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots"></a>

```python
def put_base_screenshots(
  value: IResolvable | typing.List[SyntheticsCanaryVisualReferencesBaseScreenshots]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>]

---

##### `reset_base_canary_run_id` <a name="reset_base_canary_run_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseCanaryRunId"></a>

```python
def reset_base_canary_run_id() -> None
```

##### `reset_base_screenshots` <a name="reset_base_screenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseScreenshots"></a>

```python
def reset_base_screenshots() -> None
```

##### `reset_browser_type` <a name="reset_browser_type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBrowserType"></a>

```python
def reset_browser_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots">base_screenshots</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList">SyntheticsCanaryVisualReferencesBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunIdInput">base_canary_run_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshotsInput">base_screenshots_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserTypeInput">browser_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId">base_canary_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserType">browser_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_screenshots`<sup>Required</sup> <a name="base_screenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots"></a>

```python
base_screenshots: SyntheticsCanaryVisualReferencesBaseScreenshotsList
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList">SyntheticsCanaryVisualReferencesBaseScreenshotsList</a>

---

##### `base_canary_run_id_input`<sup>Optional</sup> <a name="base_canary_run_id_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunIdInput"></a>

```python
base_canary_run_id_input: str
```

- *Type:* str

---

##### `base_screenshots_input`<sup>Optional</sup> <a name="base_screenshots_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshotsInput"></a>

```python
base_screenshots_input: IResolvable | typing.List[SyntheticsCanaryVisualReferencesBaseScreenshots]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>]

---

##### `browser_type_input`<sup>Optional</sup> <a name="browser_type_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserTypeInput"></a>

```python
browser_type_input: str
```

- *Type:* str

---

##### `base_canary_run_id`<sup>Required</sup> <a name="base_canary_run_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId"></a>

```python
base_canary_run_id: str
```

- *Type:* str

---

##### `browser_type`<sup>Required</sup> <a name="browser_type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserType"></a>

```python
browser_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsCanaryVisualReferences
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>

---


### SyntheticsCanaryVpcConfigOutputReference <a name="SyntheticsCanaryVpcConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import synthetics_canary

syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetIpv6AllowedForDualStack">reset_ipv6_allowed_for_dual_stack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv6_allowed_for_dual_stack` <a name="reset_ipv6_allowed_for_dual_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetIpv6AllowedForDualStack"></a>

```python
def reset_ipv6_allowed_for_dual_stack() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStackInput">ipv6_allowed_for_dual_stack_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack">ipv6_allowed_for_dual_stack</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_allowed_for_dual_stack_input`<sup>Optional</sup> <a name="ipv6_allowed_for_dual_stack_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStackInput"></a>

```python
ipv6_allowed_for_dual_stack_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `ipv6_allowed_for_dual_stack`<sup>Required</sup> <a name="ipv6_allowed_for_dual_stack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack"></a>

```python
ipv6_allowed_for_dual_stack: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsCanaryVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---



