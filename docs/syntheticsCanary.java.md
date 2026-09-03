# `syntheticsCanary` Submodule <a name="`syntheticsCanary` Submodule" id="@cdktn/provider-awscc.syntheticsCanary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsCanary <a name="SyntheticsCanary" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary awscc_synthetics_canary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanary;

SyntheticsCanary.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .artifactS3Location(java.lang.String)
    .code(SyntheticsCanaryCode)
    .executionRoleArn(java.lang.String)
    .name(java.lang.String)
    .runtimeVersion(java.lang.String)
    .schedule(SyntheticsCanarySchedule)
//  .artifactConfig(SyntheticsCanaryArtifactConfig)
//  .browserConfigs(IResolvable|java.util.List<SyntheticsCanaryBrowserConfigs>)
//  .deleteLambdaResourcesOnCanaryDeletion(java.lang.Boolean|IResolvable)
//  .dryRunAndUpdate(java.lang.Boolean|IResolvable)
//  .failureRetentionPeriod(java.lang.Number)
//  .provisionedResourceCleanup(java.lang.String)
//  .resourcesToReplicateTags(java.util.List<java.lang.String>)
//  .runConfig(SyntheticsCanaryRunConfig)
//  .startCanaryAfterCreation(java.lang.Boolean|IResolvable)
//  .successRetentionPeriod(java.lang.Number)
//  .tags(IResolvable|java.util.List<SyntheticsCanaryTags>)
//  .visualReference(SyntheticsCanaryVisualReference)
//  .visualReferences(IResolvable|java.util.List<SyntheticsCanaryVisualReferences>)
//  .vpcConfig(SyntheticsCanaryVpcConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.artifactS3Location">artifactS3Location</a></code> | <code>java.lang.String</code> | Provide the s3 bucket output location for test results. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | Provide the canary script source. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Lambda Execution role used to run your canaries. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | Runtime version of Synthetics Library. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | Frequency to run your canaries. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.artifactConfig">artifactConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | Provide artifact configuration. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.browserConfigs">browserConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>></code> | List of browser configurations for the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.deleteLambdaResourcesOnCanaryDeletion">deleteLambdaResourcesOnCanaryDeletion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deletes associated lambda resources created by Synthetics if set to True. Default is False. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.dryRunAndUpdate">dryRunAndUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.failureRetentionPeriod">failureRetentionPeriod</a></code> | <code>java.lang.Number</code> | Retention period of failed canary runs represented in number of days. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provisionedResourceCleanup">provisionedResourceCleanup</a></code> | <code>java.lang.String</code> | Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.resourcesToReplicateTags">resourcesToReplicateTags</a></code> | <code>java.util.List<java.lang.String></code> | List of resources which canary tags should be replicated to. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.runConfig">runConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | Provide canary run configuration. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.startCanaryAfterCreation">startCanaryAfterCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Runs canary if set to True. Default is False. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.successRetentionPeriod">successRetentionPeriod</a></code> | <code>java.lang.Number</code> | Retention period of successful canary runs represented in number of days. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.visualReference">visualReference</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | Visual reference configuration for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.visualReferences">visualReferences</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>></code> | List of visual references for the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | Provide VPC Configuration if enabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `artifactS3Location`<sup>Required</sup> <a name="artifactS3Location" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.artifactS3Location"></a>

- *Type:* java.lang.String

Provide the s3 bucket output location for test results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.code"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

Provide the canary script source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#code SyntheticsCanary#code}

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.executionRoleArn"></a>

- *Type:* java.lang.String

Lambda Execution role used to run your canaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#name SyntheticsCanary#name}

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.runtimeVersion"></a>

- *Type:* java.lang.String

Runtime version of Synthetics Library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

Frequency to run your canaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#schedule SyntheticsCanary#schedule}

---

##### `artifactConfig`<sup>Optional</sup> <a name="artifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.artifactConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

Provide artifact configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#artifact_config SyntheticsCanary#artifact_config}

---

##### `browserConfigs`<sup>Optional</sup> <a name="browserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.browserConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>>

List of browser configurations for the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#browser_configs SyntheticsCanary#browser_configs}

---

##### `deleteLambdaResourcesOnCanaryDeletion`<sup>Optional</sup> <a name="deleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.deleteLambdaResourcesOnCanaryDeletion"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deletes associated lambda resources created by Synthetics if set to True. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#delete_lambda_resources_on_canary_deletion SyntheticsCanary#delete_lambda_resources_on_canary_deletion}

---

##### `dryRunAndUpdate`<sup>Optional</sup> <a name="dryRunAndUpdate" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.dryRunAndUpdate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update.

Default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#dry_run_and_update SyntheticsCanary#dry_run_and_update}

---

##### `failureRetentionPeriod`<sup>Optional</sup> <a name="failureRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.failureRetentionPeriod"></a>

- *Type:* java.lang.Number

Retention period of failed canary runs represented in number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}

---

##### `provisionedResourceCleanup`<sup>Optional</sup> <a name="provisionedResourceCleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.provisionedResourceCleanup"></a>

- *Type:* java.lang.String

Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#provisioned_resource_cleanup SyntheticsCanary#provisioned_resource_cleanup}

---

##### `resourcesToReplicateTags`<sup>Optional</sup> <a name="resourcesToReplicateTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.resourcesToReplicateTags"></a>

- *Type:* java.util.List<java.lang.String>

List of resources which canary tags should be replicated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#resources_to_replicate_tags SyntheticsCanary#resources_to_replicate_tags}

---

##### `runConfig`<sup>Optional</sup> <a name="runConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.runConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

Provide canary run configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#run_config SyntheticsCanary#run_config}

---

##### `startCanaryAfterCreation`<sup>Optional</sup> <a name="startCanaryAfterCreation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.startCanaryAfterCreation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Runs canary if set to True. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#start_canary_after_creation SyntheticsCanary#start_canary_after_creation}

---

##### `successRetentionPeriod`<sup>Optional</sup> <a name="successRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.successRetentionPeriod"></a>

- *Type:* java.lang.Number

Retention period of successful canary runs represented in number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}.

---

##### `visualReference`<sup>Optional</sup> <a name="visualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.visualReference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

Visual reference configuration for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#visual_reference SyntheticsCanary#visual_reference}

---

##### `visualReferences`<sup>Optional</sup> <a name="visualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.visualReferences"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>>

List of visual references for the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#visual_references SyntheticsCanary#visual_references}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

Provide VPC Configuration if enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#vpc_config SyntheticsCanary#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig">putArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs">putBrowserConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode">putCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig">putRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference">putVisualReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences">putVisualReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetArtifactConfig">resetArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetBrowserConfigs">resetBrowserConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDeleteLambdaResourcesOnCanaryDeletion">resetDeleteLambdaResourcesOnCanaryDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDryRunAndUpdate">resetDryRunAndUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod">resetFailureRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetProvisionedResourceCleanup">resetProvisionedResourceCleanup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetResourcesToReplicateTags">resetResourcesToReplicateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetRunConfig">resetRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetStartCanaryAfterCreation">resetStartCanaryAfterCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod">resetSuccessRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReference">resetVisualReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReferences">resetVisualReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArtifactConfig` <a name="putArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig"></a>

```java
public void putArtifactConfig(SyntheticsCanaryArtifactConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---

##### `putBrowserConfigs` <a name="putBrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs"></a>

```java
public void putBrowserConfigs(IResolvable|java.util.List<SyntheticsCanaryBrowserConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>>

---

##### `putCode` <a name="putCode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode"></a>

```java
public void putCode(SyntheticsCanaryCode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

---

##### `putRunConfig` <a name="putRunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig"></a>

```java
public void putRunConfig(SyntheticsCanaryRunConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule"></a>

```java
public void putSchedule(SyntheticsCanarySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SyntheticsCanaryTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>>

---

##### `putVisualReference` <a name="putVisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference"></a>

```java
public void putVisualReference(SyntheticsCanaryVisualReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

---

##### `putVisualReferences` <a name="putVisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences"></a>

```java
public void putVisualReferences(IResolvable|java.util.List<SyntheticsCanaryVisualReferences> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig"></a>

```java
public void putVpcConfig(SyntheticsCanaryVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---

##### `resetArtifactConfig` <a name="resetArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetArtifactConfig"></a>

```java
public void resetArtifactConfig()
```

##### `resetBrowserConfigs` <a name="resetBrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetBrowserConfigs"></a>

```java
public void resetBrowserConfigs()
```

##### `resetDeleteLambdaResourcesOnCanaryDeletion` <a name="resetDeleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDeleteLambdaResourcesOnCanaryDeletion"></a>

```java
public void resetDeleteLambdaResourcesOnCanaryDeletion()
```

##### `resetDryRunAndUpdate` <a name="resetDryRunAndUpdate" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDryRunAndUpdate"></a>

```java
public void resetDryRunAndUpdate()
```

##### `resetFailureRetentionPeriod` <a name="resetFailureRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod"></a>

```java
public void resetFailureRetentionPeriod()
```

##### `resetProvisionedResourceCleanup` <a name="resetProvisionedResourceCleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetProvisionedResourceCleanup"></a>

```java
public void resetProvisionedResourceCleanup()
```

##### `resetResourcesToReplicateTags` <a name="resetResourcesToReplicateTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetResourcesToReplicateTags"></a>

```java
public void resetResourcesToReplicateTags()
```

##### `resetRunConfig` <a name="resetRunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetRunConfig"></a>

```java
public void resetRunConfig()
```

##### `resetStartCanaryAfterCreation` <a name="resetStartCanaryAfterCreation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetStartCanaryAfterCreation"></a>

```java
public void resetStartCanaryAfterCreation()
```

##### `resetSuccessRetentionPeriod` <a name="resetSuccessRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod"></a>

```java
public void resetSuccessRetentionPeriod()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetTags"></a>

```java
public void resetTags()
```

##### `resetVisualReference` <a name="resetVisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReference"></a>

```java
public void resetVisualReference()
```

##### `resetVisualReferences` <a name="resetVisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReferences"></a>

```java
public void resetVisualReferences()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SyntheticsCanary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isConstruct"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanary;

SyntheticsCanary.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanary;

SyntheticsCanary.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanary;

SyntheticsCanary.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanary;

SyntheticsCanary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SyntheticsCanary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SyntheticsCanary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SyntheticsCanary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SyntheticsCanary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SyntheticsCanary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfig">artifactConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigs">browserConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList">SyntheticsCanaryBrowserConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.canaryId">canaryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference">SyntheticsCanaryCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfig">runConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList">SyntheticsCanaryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReference">visualReference</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference">SyntheticsCanaryVisualReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferences">visualReferences</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList">SyntheticsCanaryVisualReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput">artifactConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput">artifactS3LocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigsInput">browserConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.codeInput">codeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletionInput">deleteLambdaResourcesOnCanaryDeletionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdateInput">dryRunAndUpdateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput">failureRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanupInput">provisionedResourceCleanupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTagsInput">resourcesToReplicateTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfigInput">runConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.scheduleInput">scheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreationInput">startCanaryAfterCreationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput">successRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferenceInput">visualReferenceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferencesInput">visualReferencesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput">vpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3Location">artifactS3Location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion">deleteLambdaResourcesOnCanaryDeletion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdate">dryRunAndUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod">failureRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanup">provisionedResourceCleanup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTags">resourcesToReplicateTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreation">startCanaryAfterCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod">successRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `artifactConfig`<sup>Required</sup> <a name="artifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfig"></a>

```java
public SyntheticsCanaryArtifactConfigOutputReference getArtifactConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a>

---

##### `browserConfigs`<sup>Required</sup> <a name="browserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigs"></a>

```java
public SyntheticsCanaryBrowserConfigsList getBrowserConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList">SyntheticsCanaryBrowserConfigsList</a>

---

##### `canaryId`<sup>Required</sup> <a name="canaryId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.canaryId"></a>

```java
public java.lang.String getCanaryId();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.code"></a>

```java
public SyntheticsCanaryCodeOutputReference getCode();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference">SyntheticsCanaryCodeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `runConfig`<sup>Required</sup> <a name="runConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfig"></a>

```java
public SyntheticsCanaryRunConfigOutputReference getRunConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.schedule"></a>

```java
public SyntheticsCanaryScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tags"></a>

```java
public SyntheticsCanaryTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList">SyntheticsCanaryTagsList</a>

---

##### `visualReference`<sup>Required</sup> <a name="visualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReference"></a>

```java
public SyntheticsCanaryVisualReferenceOutputReference getVisualReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference">SyntheticsCanaryVisualReferenceOutputReference</a>

---

##### `visualReferences`<sup>Required</sup> <a name="visualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferences"></a>

```java
public SyntheticsCanaryVisualReferencesList getVisualReferences();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList">SyntheticsCanaryVisualReferencesList</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfig"></a>

```java
public SyntheticsCanaryVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a>

---

##### `artifactConfigInput`<sup>Optional</sup> <a name="artifactConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput"></a>

```java
public IResolvable|SyntheticsCanaryArtifactConfig getArtifactConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---

##### `artifactS3LocationInput`<sup>Optional</sup> <a name="artifactS3LocationInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput"></a>

```java
public java.lang.String getArtifactS3LocationInput();
```

- *Type:* java.lang.String

---

##### `browserConfigsInput`<sup>Optional</sup> <a name="browserConfigsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigsInput"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryBrowserConfigs> getBrowserConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>>

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.codeInput"></a>

```java
public IResolvable|SyntheticsCanaryCode getCodeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

---

##### `deleteLambdaResourcesOnCanaryDeletionInput`<sup>Optional</sup> <a name="deleteLambdaResourcesOnCanaryDeletionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeleteLambdaResourcesOnCanaryDeletionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dryRunAndUpdateInput`<sup>Optional</sup> <a name="dryRunAndUpdateInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getDryRunAndUpdateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `failureRetentionPeriodInput`<sup>Optional</sup> <a name="failureRetentionPeriodInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput"></a>

```java
public java.lang.Number getFailureRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `provisionedResourceCleanupInput`<sup>Optional</sup> <a name="provisionedResourceCleanupInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanupInput"></a>

```java
public java.lang.String getProvisionedResourceCleanupInput();
```

- *Type:* java.lang.String

---

##### `resourcesToReplicateTagsInput`<sup>Optional</sup> <a name="resourcesToReplicateTagsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTagsInput"></a>

```java
public java.util.List<java.lang.String> getResourcesToReplicateTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `runConfigInput`<sup>Optional</sup> <a name="runConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfigInput"></a>

```java
public IResolvable|SyntheticsCanaryRunConfig getRunConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.scheduleInput"></a>

```java
public IResolvable|SyntheticsCanarySchedule getScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---

##### `startCanaryAfterCreationInput`<sup>Optional</sup> <a name="startCanaryAfterCreationInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreationInput"></a>

```java
public java.lang.Boolean|IResolvable getStartCanaryAfterCreationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `successRetentionPeriodInput`<sup>Optional</sup> <a name="successRetentionPeriodInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput"></a>

```java
public java.lang.Number getSuccessRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>>

---

##### `visualReferenceInput`<sup>Optional</sup> <a name="visualReferenceInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferenceInput"></a>

```java
public IResolvable|SyntheticsCanaryVisualReference getVisualReferenceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

---

##### `visualReferencesInput`<sup>Optional</sup> <a name="visualReferencesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferencesInput"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryVisualReferences> getVisualReferencesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput"></a>

```java
public IResolvable|SyntheticsCanaryVpcConfig getVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---

##### `artifactS3Location`<sup>Required</sup> <a name="artifactS3Location" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3Location"></a>

```java
public java.lang.String getArtifactS3Location();
```

- *Type:* java.lang.String

---

##### `deleteLambdaResourcesOnCanaryDeletion`<sup>Required</sup> <a name="deleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion"></a>

```java
public java.lang.Boolean|IResolvable getDeleteLambdaResourcesOnCanaryDeletion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dryRunAndUpdate`<sup>Required</sup> <a name="dryRunAndUpdate" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdate"></a>

```java
public java.lang.Boolean|IResolvable getDryRunAndUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `failureRetentionPeriod`<sup>Required</sup> <a name="failureRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod"></a>

```java
public java.lang.Number getFailureRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `provisionedResourceCleanup`<sup>Required</sup> <a name="provisionedResourceCleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanup"></a>

```java
public java.lang.String getProvisionedResourceCleanup();
```

- *Type:* java.lang.String

---

##### `resourcesToReplicateTags`<sup>Required</sup> <a name="resourcesToReplicateTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTags"></a>

```java
public java.util.List<java.lang.String> getResourcesToReplicateTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `startCanaryAfterCreation`<sup>Required</sup> <a name="startCanaryAfterCreation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreation"></a>

```java
public java.lang.Boolean|IResolvable getStartCanaryAfterCreation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `successRetentionPeriod`<sup>Required</sup> <a name="successRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod"></a>

```java
public java.lang.Number getSuccessRetentionPeriod();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsCanaryArtifactConfig <a name="SyntheticsCanaryArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryArtifactConfig;

SyntheticsCanaryArtifactConfig.builder()
//  .s3Encryption(SyntheticsCanaryArtifactConfigS3Encryption)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption">s3Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | Encryption configuration for uploading artifacts to S3. |

---

##### `s3Encryption`<sup>Optional</sup> <a name="s3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption"></a>

```java
public SyntheticsCanaryArtifactConfigS3Encryption getS3Encryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

Encryption configuration for uploading artifacts to S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#s3_encryption SyntheticsCanary#s3_encryption}

---

### SyntheticsCanaryArtifactConfigS3Encryption <a name="SyntheticsCanaryArtifactConfigS3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryArtifactConfigS3Encryption;

SyntheticsCanaryArtifactConfigS3Encryption.builder()
//  .encryptionMode(java.lang.String)
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | KMS key Arn for encrypting artifacts when uploading to S3. |

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

KMS key Arn for encrypting artifacts when uploading to S3.

You must specify KMS key Arn for SSE_KMS encryption mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}

---

### SyntheticsCanaryBrowserConfigs <a name="SyntheticsCanaryBrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryBrowserConfigs;

SyntheticsCanaryBrowserConfigs.builder()
//  .browserType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.property.browserType">browserType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `browserType`<sup>Optional</sup> <a name="browserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.property.browserType"></a>

```java
public java.lang.String getBrowserType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryCode <a name="SyntheticsCanaryCode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryCode;

SyntheticsCanaryCode.builder()
//  .blueprintTypes(java.util.List<java.lang.String>)
//  .dependencies(IResolvable|java.util.List<SyntheticsCanaryCodeDependencies>)
//  .handler(java.lang.String)
//  .s3Bucket(java.lang.String)
//  .s3Key(java.lang.String)
//  .s3ObjectVersion(java.lang.String)
//  .script(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.blueprintTypes">blueprintTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#blueprint_types SyntheticsCanary#blueprint_types}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.dependencies">dependencies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>></code> | List of Lambda layers to attach to the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.handler">handler</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#s3_object_version SyntheticsCanary#s3_object_version}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.script">script</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#script SyntheticsCanary#script}. |

---

##### `blueprintTypes`<sup>Optional</sup> <a name="blueprintTypes" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.blueprintTypes"></a>

```java
public java.util.List<java.lang.String> getBlueprintTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#blueprint_types SyntheticsCanary#blueprint_types}.

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.dependencies"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryCodeDependencies> getDependencies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>>

List of Lambda layers to attach to the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#dependencies SyntheticsCanary#dependencies}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.handler"></a>

```java
public java.lang.String getHandler();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}.

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}.

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="s3ObjectVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3ObjectVersion"></a>

```java
public java.lang.String getS3ObjectVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#s3_object_version SyntheticsCanary#s3_object_version}.

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#script SyntheticsCanary#script}.

---

### SyntheticsCanaryCodeDependencies <a name="SyntheticsCanaryCodeDependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryCodeDependencies;

SyntheticsCanaryCodeDependencies.builder()
//  .reference(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.reference">reference</a></code> | <code>java.lang.String</code> | ARN of the Lambda layer. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.type">type</a></code> | <code>java.lang.String</code> | Type of dependency. |

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.reference"></a>

```java
public java.lang.String getReference();
```

- *Type:* java.lang.String

ARN of the Lambda layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#reference SyntheticsCanary#reference}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#type SyntheticsCanary#type}

---

### SyntheticsCanaryConfig <a name="SyntheticsCanaryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryConfig;

SyntheticsCanaryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .artifactS3Location(java.lang.String)
    .code(SyntheticsCanaryCode)
    .executionRoleArn(java.lang.String)
    .name(java.lang.String)
    .runtimeVersion(java.lang.String)
    .schedule(SyntheticsCanarySchedule)
//  .artifactConfig(SyntheticsCanaryArtifactConfig)
//  .browserConfigs(IResolvable|java.util.List<SyntheticsCanaryBrowserConfigs>)
//  .deleteLambdaResourcesOnCanaryDeletion(java.lang.Boolean|IResolvable)
//  .dryRunAndUpdate(java.lang.Boolean|IResolvable)
//  .failureRetentionPeriod(java.lang.Number)
//  .provisionedResourceCleanup(java.lang.String)
//  .resourcesToReplicateTags(java.util.List<java.lang.String>)
//  .runConfig(SyntheticsCanaryRunConfig)
//  .startCanaryAfterCreation(java.lang.Boolean|IResolvable)
//  .successRetentionPeriod(java.lang.Number)
//  .tags(IResolvable|java.util.List<SyntheticsCanaryTags>)
//  .visualReference(SyntheticsCanaryVisualReference)
//  .visualReferences(IResolvable|java.util.List<SyntheticsCanaryVisualReferences>)
//  .vpcConfig(SyntheticsCanaryVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location">artifactS3Location</a></code> | <code>java.lang.String</code> | Provide the s3 bucket output location for test results. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | Provide the canary script source. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Lambda Execution role used to run your canaries. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | Runtime version of Synthetics Library. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | Frequency to run your canaries. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig">artifactConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | Provide artifact configuration. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.browserConfigs">browserConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>></code> | List of browser configurations for the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.deleteLambdaResourcesOnCanaryDeletion">deleteLambdaResourcesOnCanaryDeletion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deletes associated lambda resources created by Synthetics if set to True. Default is False. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dryRunAndUpdate">dryRunAndUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod">failureRetentionPeriod</a></code> | <code>java.lang.Number</code> | Retention period of failed canary runs represented in number of days. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisionedResourceCleanup">provisionedResourceCleanup</a></code> | <code>java.lang.String</code> | Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.resourcesToReplicateTags">resourcesToReplicateTags</a></code> | <code>java.util.List<java.lang.String></code> | List of resources which canary tags should be replicated to. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig">runConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | Provide canary run configuration. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.startCanaryAfterCreation">startCanaryAfterCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Runs canary if set to True. Default is False. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod">successRetentionPeriod</a></code> | <code>java.lang.Number</code> | Retention period of successful canary runs represented in number of days. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReference">visualReference</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | Visual reference configuration for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReferences">visualReferences</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>></code> | List of visual references for the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | Provide VPC Configuration if enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `artifactS3Location`<sup>Required</sup> <a name="artifactS3Location" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location"></a>

```java
public java.lang.String getArtifactS3Location();
```

- *Type:* java.lang.String

Provide the s3 bucket output location for test results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.code"></a>

```java
public SyntheticsCanaryCode getCode();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

Provide the canary script source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#code SyntheticsCanary#code}

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

Lambda Execution role used to run your canaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#name SyntheticsCanary#name}

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

Runtime version of Synthetics Library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.schedule"></a>

```java
public SyntheticsCanarySchedule getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

Frequency to run your canaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#schedule SyntheticsCanary#schedule}

---

##### `artifactConfig`<sup>Optional</sup> <a name="artifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig"></a>

```java
public SyntheticsCanaryArtifactConfig getArtifactConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

Provide artifact configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#artifact_config SyntheticsCanary#artifact_config}

---

##### `browserConfigs`<sup>Optional</sup> <a name="browserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.browserConfigs"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryBrowserConfigs> getBrowserConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>>

List of browser configurations for the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#browser_configs SyntheticsCanary#browser_configs}

---

##### `deleteLambdaResourcesOnCanaryDeletion`<sup>Optional</sup> <a name="deleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.deleteLambdaResourcesOnCanaryDeletion"></a>

```java
public java.lang.Boolean|IResolvable getDeleteLambdaResourcesOnCanaryDeletion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deletes associated lambda resources created by Synthetics if set to True. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#delete_lambda_resources_on_canary_deletion SyntheticsCanary#delete_lambda_resources_on_canary_deletion}

---

##### `dryRunAndUpdate`<sup>Optional</sup> <a name="dryRunAndUpdate" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dryRunAndUpdate"></a>

```java
public java.lang.Boolean|IResolvable getDryRunAndUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update.

Default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#dry_run_and_update SyntheticsCanary#dry_run_and_update}

---

##### `failureRetentionPeriod`<sup>Optional</sup> <a name="failureRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod"></a>

```java
public java.lang.Number getFailureRetentionPeriod();
```

- *Type:* java.lang.Number

Retention period of failed canary runs represented in number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}

---

##### `provisionedResourceCleanup`<sup>Optional</sup> <a name="provisionedResourceCleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisionedResourceCleanup"></a>

```java
public java.lang.String getProvisionedResourceCleanup();
```

- *Type:* java.lang.String

Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#provisioned_resource_cleanup SyntheticsCanary#provisioned_resource_cleanup}

---

##### `resourcesToReplicateTags`<sup>Optional</sup> <a name="resourcesToReplicateTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.resourcesToReplicateTags"></a>

```java
public java.util.List<java.lang.String> getResourcesToReplicateTags();
```

- *Type:* java.util.List<java.lang.String>

List of resources which canary tags should be replicated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#resources_to_replicate_tags SyntheticsCanary#resources_to_replicate_tags}

---

##### `runConfig`<sup>Optional</sup> <a name="runConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig"></a>

```java
public SyntheticsCanaryRunConfig getRunConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

Provide canary run configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#run_config SyntheticsCanary#run_config}

---

##### `startCanaryAfterCreation`<sup>Optional</sup> <a name="startCanaryAfterCreation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.startCanaryAfterCreation"></a>

```java
public java.lang.Boolean|IResolvable getStartCanaryAfterCreation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Runs canary if set to True. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#start_canary_after_creation SyntheticsCanary#start_canary_after_creation}

---

##### `successRetentionPeriod`<sup>Optional</sup> <a name="successRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod"></a>

```java
public java.lang.Number getSuccessRetentionPeriod();
```

- *Type:* java.lang.Number

Retention period of successful canary runs represented in number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}.

---

##### `visualReference`<sup>Optional</sup> <a name="visualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReference"></a>

```java
public SyntheticsCanaryVisualReference getVisualReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

Visual reference configuration for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#visual_reference SyntheticsCanary#visual_reference}

---

##### `visualReferences`<sup>Optional</sup> <a name="visualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReferences"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryVisualReferences> getVisualReferences();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>>

List of visual references for the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#visual_references SyntheticsCanary#visual_references}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig"></a>

```java
public SyntheticsCanaryVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

Provide VPC Configuration if enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#vpc_config SyntheticsCanary#vpc_config}

---

### SyntheticsCanaryRunConfig <a name="SyntheticsCanaryRunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryRunConfig;

SyntheticsCanaryRunConfig.builder()
//  .activeTracing(java.lang.Boolean|IResolvable)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .ephemeralStorage(java.lang.Number)
//  .memoryInMb(java.lang.Number)
//  .timeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing">activeTracing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable active tracing if set to true. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variable key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.ephemeralStorage">ephemeralStorage</a></code> | <code>java.lang.Number</code> | Provide ephemeralStorage available for canary in MB. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb">memoryInMb</a></code> | <code>java.lang.Number</code> | Provide maximum memory available for canary in MB. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Provide maximum canary timeout per run in seconds. |

---

##### `activeTracing`<sup>Optional</sup> <a name="activeTracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing"></a>

```java
public java.lang.Boolean|IResolvable getActiveTracing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable active tracing if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variable key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#environment_variables SyntheticsCanary#environment_variables}

---

##### `ephemeralStorage`<sup>Optional</sup> <a name="ephemeralStorage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.ephemeralStorage"></a>

```java
public java.lang.Number getEphemeralStorage();
```

- *Type:* java.lang.Number

Provide ephemeralStorage available for canary in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#ephemeral_storage SyntheticsCanary#ephemeral_storage}

---

##### `memoryInMb`<sup>Optional</sup> <a name="memoryInMb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb"></a>

```java
public java.lang.Number getMemoryInMb();
```

- *Type:* java.lang.Number

Provide maximum memory available for canary in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Provide maximum canary timeout per run in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}

---

### SyntheticsCanarySchedule <a name="SyntheticsCanarySchedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanarySchedule;

SyntheticsCanarySchedule.builder()
    .expression(java.lang.String)
//  .durationInSeconds(java.lang.String)
//  .retryConfig(SyntheticsCanaryScheduleRetryConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds">durationInSeconds</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a></code> | Provide canary auto retry configuration. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}.

---

##### `durationInSeconds`<sup>Optional</sup> <a name="durationInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds"></a>

```java
public java.lang.String getDurationInSeconds();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}.

---

##### `retryConfig`<sup>Optional</sup> <a name="retryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.retryConfig"></a>

```java
public SyntheticsCanaryScheduleRetryConfig getRetryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

Provide canary auto retry configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#retry_config SyntheticsCanary#retry_config}

---

### SyntheticsCanaryScheduleRetryConfig <a name="SyntheticsCanaryScheduleRetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryScheduleRetryConfig;

SyntheticsCanaryScheduleRetryConfig.builder()
//  .maxRetries(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | maximum times the canary will be retried upon the scheduled run failure. |

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

maximum times the canary will be retried upon the scheduled run failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#max_retries SyntheticsCanary#max_retries}

---

### SyntheticsCanaryTags <a name="SyntheticsCanaryTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryTags;

SyntheticsCanaryTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#key SyntheticsCanary#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#value SyntheticsCanary#value}

---

### SyntheticsCanaryVisualReference <a name="SyntheticsCanaryVisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryVisualReference;

SyntheticsCanaryVisualReference.builder()
//  .baseCanaryRunId(java.lang.String)
//  .baseScreenshots(IResolvable|java.util.List<SyntheticsCanaryVisualReferenceBaseScreenshots>)
//  .browserType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseCanaryRunId">baseCanaryRunId</a></code> | <code>java.lang.String</code> | Canary run id to be used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseScreenshots">baseScreenshots</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>></code> | List of screenshots used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.browserType">browserType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `baseCanaryRunId`<sup>Optional</sup> <a name="baseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseCanaryRunId"></a>

```java
public java.lang.String getBaseCanaryRunId();
```

- *Type:* java.lang.String

Canary run id to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#base_canary_run_id SyntheticsCanary#base_canary_run_id}

---

##### `baseScreenshots`<sup>Optional</sup> <a name="baseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseScreenshots"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryVisualReferenceBaseScreenshots> getBaseScreenshots();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>>

List of screenshots used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#base_screenshots SyntheticsCanary#base_screenshots}

---

##### `browserType`<sup>Optional</sup> <a name="browserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.browserType"></a>

```java
public java.lang.String getBrowserType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryVisualReferenceBaseScreenshots <a name="SyntheticsCanaryVisualReferenceBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryVisualReferenceBaseScreenshots;

SyntheticsCanaryVisualReferenceBaseScreenshots.builder()
//  .ignoreCoordinates(java.util.List<java.lang.String>)
//  .screenshotName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.ignoreCoordinates">ignoreCoordinates</a></code> | <code>java.util.List<java.lang.String></code> | List of coordinates of rectangles to be ignored during visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.screenshotName">screenshotName</a></code> | <code>java.lang.String</code> | Name of the screenshot to be used as base reference for visual testing. |

---

##### `ignoreCoordinates`<sup>Optional</sup> <a name="ignoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.ignoreCoordinates"></a>

```java
public java.util.List<java.lang.String> getIgnoreCoordinates();
```

- *Type:* java.util.List<java.lang.String>

List of coordinates of rectangles to be ignored during visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#ignore_coordinates SyntheticsCanary#ignore_coordinates}

---

##### `screenshotName`<sup>Optional</sup> <a name="screenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.screenshotName"></a>

```java
public java.lang.String getScreenshotName();
```

- *Type:* java.lang.String

Name of the screenshot to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#screenshot_name SyntheticsCanary#screenshot_name}

---

### SyntheticsCanaryVisualReferences <a name="SyntheticsCanaryVisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryVisualReferences;

SyntheticsCanaryVisualReferences.builder()
//  .baseCanaryRunId(java.lang.String)
//  .baseScreenshots(IResolvable|java.util.List<SyntheticsCanaryVisualReferencesBaseScreenshots>)
//  .browserType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseCanaryRunId">baseCanaryRunId</a></code> | <code>java.lang.String</code> | Canary run id to be used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseScreenshots">baseScreenshots</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>></code> | List of screenshots used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.browserType">browserType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `baseCanaryRunId`<sup>Optional</sup> <a name="baseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseCanaryRunId"></a>

```java
public java.lang.String getBaseCanaryRunId();
```

- *Type:* java.lang.String

Canary run id to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#base_canary_run_id SyntheticsCanary#base_canary_run_id}

---

##### `baseScreenshots`<sup>Optional</sup> <a name="baseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseScreenshots"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryVisualReferencesBaseScreenshots> getBaseScreenshots();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>>

List of screenshots used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#base_screenshots SyntheticsCanary#base_screenshots}

---

##### `browserType`<sup>Optional</sup> <a name="browserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.browserType"></a>

```java
public java.lang.String getBrowserType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryVisualReferencesBaseScreenshots <a name="SyntheticsCanaryVisualReferencesBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryVisualReferencesBaseScreenshots;

SyntheticsCanaryVisualReferencesBaseScreenshots.builder()
//  .ignoreCoordinates(java.util.List<java.lang.String>)
//  .screenshotName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.ignoreCoordinates">ignoreCoordinates</a></code> | <code>java.util.List<java.lang.String></code> | List of coordinates of rectangles to be ignored during visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.screenshotName">screenshotName</a></code> | <code>java.lang.String</code> | Name of the screenshot to be used as base reference for visual testing. |

---

##### `ignoreCoordinates`<sup>Optional</sup> <a name="ignoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.ignoreCoordinates"></a>

```java
public java.util.List<java.lang.String> getIgnoreCoordinates();
```

- *Type:* java.util.List<java.lang.String>

List of coordinates of rectangles to be ignored during visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#ignore_coordinates SyntheticsCanary#ignore_coordinates}

---

##### `screenshotName`<sup>Optional</sup> <a name="screenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.screenshotName"></a>

```java
public java.lang.String getScreenshotName();
```

- *Type:* java.lang.String

Name of the screenshot to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#screenshot_name SyntheticsCanary#screenshot_name}

---

### SyntheticsCanaryVpcConfig <a name="SyntheticsCanaryVpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryVpcConfig;

SyntheticsCanaryVpcConfig.builder()
//  .ipv6AllowedForDualStack(java.lang.Boolean|IResolvable)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.ipv6AllowedForDualStack">ipv6AllowedForDualStack</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#vpc_id SyntheticsCanary#vpc_id}. |

---

##### `ipv6AllowedForDualStack`<sup>Optional</sup> <a name="ipv6AllowedForDualStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.ipv6AllowedForDualStack"></a>

```java
public java.lang.Boolean|IResolvable getIpv6AllowedForDualStack();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#ipv_6_allowed_for_dual_stack SyntheticsCanary#ipv_6_allowed_for_dual_stack}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/synthetics_canary#vpc_id SyntheticsCanary#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsCanaryArtifactConfigOutputReference <a name="SyntheticsCanaryArtifactConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryArtifactConfigOutputReference;

new SyntheticsCanaryArtifactConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption">putS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption">resetS3Encryption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Encryption` <a name="putS3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption"></a>

```java
public void putS3Encryption(SyntheticsCanaryArtifactConfigS3Encryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---

##### `resetS3Encryption` <a name="resetS3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption"></a>

```java
public void resetS3Encryption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption">s3Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput">s3EncryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Encryption`<sup>Required</sup> <a name="s3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption"></a>

```java
public SyntheticsCanaryArtifactConfigS3EncryptionOutputReference getS3Encryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a>

---

##### `s3EncryptionInput`<sup>Optional</sup> <a name="s3EncryptionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput"></a>

```java
public IResolvable|SyntheticsCanaryArtifactConfigS3Encryption getS3EncryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsCanaryArtifactConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---


### SyntheticsCanaryArtifactConfigS3EncryptionOutputReference <a name="SyntheticsCanaryArtifactConfigS3EncryptionOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference;

new SyntheticsCanaryArtifactConfigS3EncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode"></a>

```java
public void resetEncryptionMode()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput">encryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput"></a>

```java
public java.lang.String getEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsCanaryArtifactConfigS3Encryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---


### SyntheticsCanaryBrowserConfigsList <a name="SyntheticsCanaryBrowserConfigsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryBrowserConfigsList;

new SyntheticsCanaryBrowserConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get"></a>

```java
public SyntheticsCanaryBrowserConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryBrowserConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>>

---


### SyntheticsCanaryBrowserConfigsOutputReference <a name="SyntheticsCanaryBrowserConfigsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryBrowserConfigsOutputReference;

new SyntheticsCanaryBrowserConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resetBrowserType">resetBrowserType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBrowserType` <a name="resetBrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resetBrowserType"></a>

```java
public void resetBrowserType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserTypeInput">browserTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserType">browserType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `browserTypeInput`<sup>Optional</sup> <a name="browserTypeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserTypeInput"></a>

```java
public java.lang.String getBrowserTypeInput();
```

- *Type:* java.lang.String

---

##### `browserType`<sup>Required</sup> <a name="browserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserType"></a>

```java
public java.lang.String getBrowserType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsCanaryBrowserConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>

---


### SyntheticsCanaryCodeDependenciesList <a name="SyntheticsCanaryCodeDependenciesList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryCodeDependenciesList;

new SyntheticsCanaryCodeDependenciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get"></a>

```java
public SyntheticsCanaryCodeDependenciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryCodeDependencies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>>

---


### SyntheticsCanaryCodeDependenciesOutputReference <a name="SyntheticsCanaryCodeDependenciesOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryCodeDependenciesOutputReference;

new SyntheticsCanaryCodeDependenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetReference">resetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReference` <a name="resetReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetReference"></a>

```java
public void resetReference()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.referenceInput">referenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.reference">reference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `referenceInput`<sup>Optional</sup> <a name="referenceInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.referenceInput"></a>

```java
public java.lang.String getReferenceInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.reference"></a>

```java
public java.lang.String getReference();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsCanaryCodeDependencies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>

---


### SyntheticsCanaryCodeOutputReference <a name="SyntheticsCanaryCodeOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryCodeOutputReference;

new SyntheticsCanaryCodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies">putDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetBlueprintTypes">resetBlueprintTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetDependencies">resetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetHandler">resetHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3ObjectVersion">resetS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetScript">resetScript</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDependencies` <a name="putDependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies"></a>

```java
public void putDependencies(IResolvable|java.util.List<SyntheticsCanaryCodeDependencies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>>

---

##### `resetBlueprintTypes` <a name="resetBlueprintTypes" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetBlueprintTypes"></a>

```java
public void resetBlueprintTypes()
```

##### `resetDependencies` <a name="resetDependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetDependencies"></a>

```java
public void resetDependencies()
```

##### `resetHandler` <a name="resetHandler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetHandler"></a>

```java
public void resetHandler()
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Bucket"></a>

```java
public void resetS3Bucket()
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Key"></a>

```java
public void resetS3Key()
```

##### `resetS3ObjectVersion` <a name="resetS3ObjectVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3ObjectVersion"></a>

```java
public void resetS3ObjectVersion()
```

##### `resetScript` <a name="resetScript" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetScript"></a>

```java
public void resetScript()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependencies">dependencies</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList">SyntheticsCanaryCodeDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.sourceLocationArn">sourceLocationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypesInput">blueprintTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependenciesInput">dependenciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handlerInput">handlerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersionInput">s3ObjectVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.scriptInput">scriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypes">blueprintTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handler">handler</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.script">script</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependencies"></a>

```java
public SyntheticsCanaryCodeDependenciesList getDependencies();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList">SyntheticsCanaryCodeDependenciesList</a>

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.sourceLocationArn"></a>

```java
public java.lang.String getSourceLocationArn();
```

- *Type:* java.lang.String

---

##### `blueprintTypesInput`<sup>Optional</sup> <a name="blueprintTypesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypesInput"></a>

```java
public java.util.List<java.lang.String> getBlueprintTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependenciesInput"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryCodeDependencies> getDependenciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>>

---

##### `handlerInput`<sup>Optional</sup> <a name="handlerInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handlerInput"></a>

```java
public java.lang.String getHandlerInput();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `s3ObjectVersionInput`<sup>Optional</sup> <a name="s3ObjectVersionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersionInput"></a>

```java
public java.lang.String getS3ObjectVersionInput();
```

- *Type:* java.lang.String

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.scriptInput"></a>

```java
public java.lang.String getScriptInput();
```

- *Type:* java.lang.String

---

##### `blueprintTypes`<sup>Required</sup> <a name="blueprintTypes" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypes"></a>

```java
public java.util.List<java.lang.String> getBlueprintTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handler"></a>

```java
public java.lang.String getHandler();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `s3ObjectVersion`<sup>Required</sup> <a name="s3ObjectVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersion"></a>

```java
public java.lang.String getS3ObjectVersion();
```

- *Type:* java.lang.String

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsCanaryCode getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

---


### SyntheticsCanaryRunConfigOutputReference <a name="SyntheticsCanaryRunConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryRunConfigOutputReference;

new SyntheticsCanaryRunConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing">resetActiveTracing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEphemeralStorage">resetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb">resetMemoryInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveTracing` <a name="resetActiveTracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing"></a>

```java
public void resetActiveTracing()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetEphemeralStorage` <a name="resetEphemeralStorage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEphemeralStorage"></a>

```java
public void resetEphemeralStorage()
```

##### `resetMemoryInMb` <a name="resetMemoryInMb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb"></a>

```java
public void resetMemoryInMb()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput">activeTracingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorageInput">ephemeralStorageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput">memoryInMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing">activeTracing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage">ephemeralStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb">memoryInMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeTracingInput`<sup>Optional</sup> <a name="activeTracingInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput"></a>

```java
public java.lang.Boolean|IResolvable getActiveTracingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ephemeralStorageInput`<sup>Optional</sup> <a name="ephemeralStorageInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorageInput"></a>

```java
public java.lang.Number getEphemeralStorageInput();
```

- *Type:* java.lang.Number

---

##### `memoryInMbInput`<sup>Optional</sup> <a name="memoryInMbInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput"></a>

```java
public java.lang.Number getMemoryInMbInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `activeTracing`<sup>Required</sup> <a name="activeTracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing"></a>

```java
public java.lang.Boolean|IResolvable getActiveTracing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage"></a>

```java
public java.lang.Number getEphemeralStorage();
```

- *Type:* java.lang.Number

---

##### `memoryInMb`<sup>Required</sup> <a name="memoryInMb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb"></a>

```java
public java.lang.Number getMemoryInMb();
```

- *Type:* java.lang.Number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsCanaryRunConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---


### SyntheticsCanaryScheduleOutputReference <a name="SyntheticsCanaryScheduleOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryScheduleOutputReference;

new SyntheticsCanaryScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig">putRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds">resetDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetRetryConfig">resetRetryConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetryConfig` <a name="putRetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig"></a>

```java
public void putRetryConfig(SyntheticsCanaryScheduleRetryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

---

##### `resetDurationInSeconds` <a name="resetDurationInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds"></a>

```java
public void resetDurationInSeconds()
```

##### `resetRetryConfig` <a name="resetRetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetRetryConfig"></a>

```java
public void resetRetryConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference">SyntheticsCanaryScheduleRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput">durationInSecondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfigInput">retryConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds">durationInSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retryConfig`<sup>Required</sup> <a name="retryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfig"></a>

```java
public SyntheticsCanaryScheduleRetryConfigOutputReference getRetryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference">SyntheticsCanaryScheduleRetryConfigOutputReference</a>

---

##### `durationInSecondsInput`<sup>Optional</sup> <a name="durationInSecondsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput"></a>

```java
public java.lang.String getDurationInSecondsInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `retryConfigInput`<sup>Optional</sup> <a name="retryConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfigInput"></a>

```java
public IResolvable|SyntheticsCanaryScheduleRetryConfig getRetryConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

---

##### `durationInSeconds`<sup>Required</sup> <a name="durationInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds"></a>

```java
public java.lang.String getDurationInSeconds();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsCanarySchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---


### SyntheticsCanaryScheduleRetryConfigOutputReference <a name="SyntheticsCanaryScheduleRetryConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryScheduleRetryConfigOutputReference;

new SyntheticsCanaryScheduleRetryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsCanaryScheduleRetryConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

---


### SyntheticsCanaryTagsList <a name="SyntheticsCanaryTagsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryTagsList;

new SyntheticsCanaryTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get"></a>

```java
public SyntheticsCanaryTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>>

---


### SyntheticsCanaryTagsOutputReference <a name="SyntheticsCanaryTagsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryTagsOutputReference;

new SyntheticsCanaryTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsCanaryTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>

---


### SyntheticsCanaryVisualReferenceBaseScreenshotsList <a name="SyntheticsCanaryVisualReferenceBaseScreenshotsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryVisualReferenceBaseScreenshotsList;

new SyntheticsCanaryVisualReferenceBaseScreenshotsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get"></a>

```java
public SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryVisualReferenceBaseScreenshots> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>>

---


### SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference <a name="SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference;

new SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetIgnoreCoordinates">resetIgnoreCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetScreenshotName">resetScreenshotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreCoordinates` <a name="resetIgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetIgnoreCoordinates"></a>

```java
public void resetIgnoreCoordinates()
```

##### `resetScreenshotName` <a name="resetScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetScreenshotName"></a>

```java
public void resetScreenshotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinatesInput">ignoreCoordinatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotNameInput">screenshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates">ignoreCoordinates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName">screenshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ignoreCoordinatesInput`<sup>Optional</sup> <a name="ignoreCoordinatesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinatesInput"></a>

```java
public java.util.List<java.lang.String> getIgnoreCoordinatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `screenshotNameInput`<sup>Optional</sup> <a name="screenshotNameInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotNameInput"></a>

```java
public java.lang.String getScreenshotNameInput();
```

- *Type:* java.lang.String

---

##### `ignoreCoordinates`<sup>Required</sup> <a name="ignoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```java
public java.util.List<java.lang.String> getIgnoreCoordinates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `screenshotName`<sup>Required</sup> <a name="screenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName"></a>

```java
public java.lang.String getScreenshotName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsCanaryVisualReferenceBaseScreenshots getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>

---


### SyntheticsCanaryVisualReferenceOutputReference <a name="SyntheticsCanaryVisualReferenceOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryVisualReferenceOutputReference;

new SyntheticsCanaryVisualReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots">putBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseCanaryRunId">resetBaseCanaryRunId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseScreenshots">resetBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBrowserType">resetBrowserType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseScreenshots` <a name="putBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots"></a>

```java
public void putBaseScreenshots(IResolvable|java.util.List<SyntheticsCanaryVisualReferenceBaseScreenshots> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>>

---

##### `resetBaseCanaryRunId` <a name="resetBaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseCanaryRunId"></a>

```java
public void resetBaseCanaryRunId()
```

##### `resetBaseScreenshots` <a name="resetBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseScreenshots"></a>

```java
public void resetBaseScreenshots()
```

##### `resetBrowserType` <a name="resetBrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBrowserType"></a>

```java
public void resetBrowserType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots">baseScreenshots</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList">SyntheticsCanaryVisualReferenceBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunIdInput">baseCanaryRunIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshotsInput">baseScreenshotsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserTypeInput">browserTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId">baseCanaryRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserType">browserType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseScreenshots`<sup>Required</sup> <a name="baseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots"></a>

```java
public SyntheticsCanaryVisualReferenceBaseScreenshotsList getBaseScreenshots();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList">SyntheticsCanaryVisualReferenceBaseScreenshotsList</a>

---

##### `baseCanaryRunIdInput`<sup>Optional</sup> <a name="baseCanaryRunIdInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunIdInput"></a>

```java
public java.lang.String getBaseCanaryRunIdInput();
```

- *Type:* java.lang.String

---

##### `baseScreenshotsInput`<sup>Optional</sup> <a name="baseScreenshotsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshotsInput"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryVisualReferenceBaseScreenshots> getBaseScreenshotsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>>

---

##### `browserTypeInput`<sup>Optional</sup> <a name="browserTypeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserTypeInput"></a>

```java
public java.lang.String getBrowserTypeInput();
```

- *Type:* java.lang.String

---

##### `baseCanaryRunId`<sup>Required</sup> <a name="baseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId"></a>

```java
public java.lang.String getBaseCanaryRunId();
```

- *Type:* java.lang.String

---

##### `browserType`<sup>Required</sup> <a name="browserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserType"></a>

```java
public java.lang.String getBrowserType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsCanaryVisualReference getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

---


### SyntheticsCanaryVisualReferencesBaseScreenshotsList <a name="SyntheticsCanaryVisualReferencesBaseScreenshotsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryVisualReferencesBaseScreenshotsList;

new SyntheticsCanaryVisualReferencesBaseScreenshotsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get"></a>

```java
public SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryVisualReferencesBaseScreenshots> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>>

---


### SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference <a name="SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference;

new SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetIgnoreCoordinates">resetIgnoreCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetScreenshotName">resetScreenshotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreCoordinates` <a name="resetIgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetIgnoreCoordinates"></a>

```java
public void resetIgnoreCoordinates()
```

##### `resetScreenshotName` <a name="resetScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetScreenshotName"></a>

```java
public void resetScreenshotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinatesInput">ignoreCoordinatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotNameInput">screenshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates">ignoreCoordinates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName">screenshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ignoreCoordinatesInput`<sup>Optional</sup> <a name="ignoreCoordinatesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinatesInput"></a>

```java
public java.util.List<java.lang.String> getIgnoreCoordinatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `screenshotNameInput`<sup>Optional</sup> <a name="screenshotNameInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotNameInput"></a>

```java
public java.lang.String getScreenshotNameInput();
```

- *Type:* java.lang.String

---

##### `ignoreCoordinates`<sup>Required</sup> <a name="ignoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```java
public java.util.List<java.lang.String> getIgnoreCoordinates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `screenshotName`<sup>Required</sup> <a name="screenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName"></a>

```java
public java.lang.String getScreenshotName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsCanaryVisualReferencesBaseScreenshots getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>

---


### SyntheticsCanaryVisualReferencesList <a name="SyntheticsCanaryVisualReferencesList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryVisualReferencesList;

new SyntheticsCanaryVisualReferencesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get"></a>

```java
public SyntheticsCanaryVisualReferencesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryVisualReferences> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>>

---


### SyntheticsCanaryVisualReferencesOutputReference <a name="SyntheticsCanaryVisualReferencesOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryVisualReferencesOutputReference;

new SyntheticsCanaryVisualReferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots">putBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseCanaryRunId">resetBaseCanaryRunId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseScreenshots">resetBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBrowserType">resetBrowserType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseScreenshots` <a name="putBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots"></a>

```java
public void putBaseScreenshots(IResolvable|java.util.List<SyntheticsCanaryVisualReferencesBaseScreenshots> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>>

---

##### `resetBaseCanaryRunId` <a name="resetBaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseCanaryRunId"></a>

```java
public void resetBaseCanaryRunId()
```

##### `resetBaseScreenshots` <a name="resetBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseScreenshots"></a>

```java
public void resetBaseScreenshots()
```

##### `resetBrowserType` <a name="resetBrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBrowserType"></a>

```java
public void resetBrowserType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots">baseScreenshots</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList">SyntheticsCanaryVisualReferencesBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunIdInput">baseCanaryRunIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshotsInput">baseScreenshotsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserTypeInput">browserTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId">baseCanaryRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserType">browserType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseScreenshots`<sup>Required</sup> <a name="baseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots"></a>

```java
public SyntheticsCanaryVisualReferencesBaseScreenshotsList getBaseScreenshots();
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList">SyntheticsCanaryVisualReferencesBaseScreenshotsList</a>

---

##### `baseCanaryRunIdInput`<sup>Optional</sup> <a name="baseCanaryRunIdInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunIdInput"></a>

```java
public java.lang.String getBaseCanaryRunIdInput();
```

- *Type:* java.lang.String

---

##### `baseScreenshotsInput`<sup>Optional</sup> <a name="baseScreenshotsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshotsInput"></a>

```java
public IResolvable|java.util.List<SyntheticsCanaryVisualReferencesBaseScreenshots> getBaseScreenshotsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>>

---

##### `browserTypeInput`<sup>Optional</sup> <a name="browserTypeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserTypeInput"></a>

```java
public java.lang.String getBrowserTypeInput();
```

- *Type:* java.lang.String

---

##### `baseCanaryRunId`<sup>Required</sup> <a name="baseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId"></a>

```java
public java.lang.String getBaseCanaryRunId();
```

- *Type:* java.lang.String

---

##### `browserType`<sup>Required</sup> <a name="browserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserType"></a>

```java
public java.lang.String getBrowserType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsCanaryVisualReferences getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>

---


### SyntheticsCanaryVpcConfigOutputReference <a name="SyntheticsCanaryVpcConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.synthetics_canary.SyntheticsCanaryVpcConfigOutputReference;

new SyntheticsCanaryVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetIpv6AllowedForDualStack">resetIpv6AllowedForDualStack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6AllowedForDualStack` <a name="resetIpv6AllowedForDualStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetIpv6AllowedForDualStack"></a>

```java
public void resetIpv6AllowedForDualStack()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetVpcId"></a>

```java
public void resetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStackInput">ipv6AllowedForDualStackInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack">ipv6AllowedForDualStack</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6AllowedForDualStackInput`<sup>Optional</sup> <a name="ipv6AllowedForDualStackInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStackInput"></a>

```java
public java.lang.Boolean|IResolvable getIpv6AllowedForDualStackInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6AllowedForDualStack`<sup>Required</sup> <a name="ipv6AllowedForDualStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack"></a>

```java
public java.lang.Boolean|IResolvable getIpv6AllowedForDualStack();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsCanaryVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---



