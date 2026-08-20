# `osisPipeline` Submodule <a name="`osisPipeline` Submodule" id="@cdktn/provider-awscc.osisPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsisPipeline <a name="OsisPipeline" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline awscc_osis_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipeline;

OsisPipeline.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .maxUnits(java.lang.Number)
    .minUnits(java.lang.Number)
    .pipelineConfigurationBody(java.lang.String)
    .pipelineName(java.lang.String)
//  .bufferOptions(OsisPipelineBufferOptions)
//  .encryptionAtRestOptions(OsisPipelineEncryptionAtRestOptions)
//  .logPublishingOptions(OsisPipelineLogPublishingOptions)
//  .pipelineRoleArn(java.lang.String)
//  .resourcePolicy(OsisPipelineResourcePolicy)
//  .tags(IResolvable|java.util.List<OsisPipelineTags>)
//  .vpcOptions(OsisPipelineVpcOptions)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.maxUnits">maxUnits</a></code> | <code>java.lang.Number</code> | The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs). |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.minUnits">minUnits</a></code> | <code>java.lang.Number</code> | The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs). |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.pipelineConfigurationBody">pipelineConfigurationBody</a></code> | <code>java.lang.String</code> | The Data Prepper pipeline configuration. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.pipelineName">pipelineName</a></code> | <code>java.lang.String</code> | Name of the OpenSearch Ingestion Service pipeline to create. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.bufferOptions">bufferOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a></code> | Key-value pairs to configure buffering. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.encryptionAtRestOptions">encryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a></code> | Key-value pairs to configure encryption at rest. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.logPublishingOptions">logPublishingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a></code> | Key-value pairs to configure log publishing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.pipelineRoleArn">pipelineRoleArn</a></code> | <code>java.lang.String</code> | The Pipeline Role (ARN) for the pipeline. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#resource_policy OsisPipeline#resource_policy}. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a></code> | Container for the values required to configure VPC access for the pipeline. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `maxUnits`<sup>Required</sup> <a name="maxUnits" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.maxUnits"></a>

- *Type:* java.lang.Number

The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#max_units OsisPipeline#max_units}

---

##### `minUnits`<sup>Required</sup> <a name="minUnits" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.minUnits"></a>

- *Type:* java.lang.Number

The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#min_units OsisPipeline#min_units}

---

##### `pipelineConfigurationBody`<sup>Required</sup> <a name="pipelineConfigurationBody" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.pipelineConfigurationBody"></a>

- *Type:* java.lang.String

The Data Prepper pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#pipeline_configuration_body OsisPipeline#pipeline_configuration_body}

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.pipelineName"></a>

- *Type:* java.lang.String

Name of the OpenSearch Ingestion Service pipeline to create.

Pipeline names are unique across the pipelines owned by an account within an AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#pipeline_name OsisPipeline#pipeline_name}

---

##### `bufferOptions`<sup>Optional</sup> <a name="bufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.bufferOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

Key-value pairs to configure buffering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#buffer_options OsisPipeline#buffer_options}

---

##### `encryptionAtRestOptions`<sup>Optional</sup> <a name="encryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.encryptionAtRestOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

Key-value pairs to configure encryption at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#encryption_at_rest_options OsisPipeline#encryption_at_rest_options}

---

##### `logPublishingOptions`<sup>Optional</sup> <a name="logPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.logPublishingOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

Key-value pairs to configure log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#log_publishing_options OsisPipeline#log_publishing_options}

---

##### `pipelineRoleArn`<sup>Optional</sup> <a name="pipelineRoleArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.pipelineRoleArn"></a>

- *Type:* java.lang.String

The Pipeline Role (ARN) for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#pipeline_role_arn OsisPipeline#pipeline_role_arn}

---

##### `resourcePolicy`<sup>Optional</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.resourcePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#resource_policy OsisPipeline#resource_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#tags OsisPipeline#tags}

---

##### `vpcOptions`<sup>Optional</sup> <a name="vpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.vpcOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

Container for the values required to configure VPC access for the pipeline.

If you don't specify these values, OpenSearch Ingestion Service creates the pipeline with a public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#vpc_options OsisPipeline#vpc_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putBufferOptions">putBufferOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putEncryptionAtRestOptions">putEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putLogPublishingOptions">putLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putResourcePolicy">putResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions">putVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetBufferOptions">resetBufferOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetEncryptionAtRestOptions">resetEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetLogPublishingOptions">resetLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetPipelineRoleArn">resetPipelineRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetResourcePolicy">resetResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetVpcOptions">resetVpcOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBufferOptions` <a name="putBufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putBufferOptions"></a>

```java
public void putBufferOptions(OsisPipelineBufferOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putBufferOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

---

##### `putEncryptionAtRestOptions` <a name="putEncryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putEncryptionAtRestOptions"></a>

```java
public void putEncryptionAtRestOptions(OsisPipelineEncryptionAtRestOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putEncryptionAtRestOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

---

##### `putLogPublishingOptions` <a name="putLogPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putLogPublishingOptions"></a>

```java
public void putLogPublishingOptions(OsisPipelineLogPublishingOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putLogPublishingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

---

##### `putResourcePolicy` <a name="putResourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putResourcePolicy"></a>

```java
public void putResourcePolicy(OsisPipelineResourcePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putResourcePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<OsisPipelineTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>>

---

##### `putVpcOptions` <a name="putVpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions"></a>

```java
public void putVpcOptions(OsisPipelineVpcOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

---

##### `resetBufferOptions` <a name="resetBufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetBufferOptions"></a>

```java
public void resetBufferOptions()
```

##### `resetEncryptionAtRestOptions` <a name="resetEncryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetEncryptionAtRestOptions"></a>

```java
public void resetEncryptionAtRestOptions()
```

##### `resetLogPublishingOptions` <a name="resetLogPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetLogPublishingOptions"></a>

```java
public void resetLogPublishingOptions()
```

##### `resetPipelineRoleArn` <a name="resetPipelineRoleArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetPipelineRoleArn"></a>

```java
public void resetPipelineRoleArn()
```

##### `resetResourcePolicy` <a name="resetResourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetResourcePolicy"></a>

```java
public void resetResourcePolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetTags"></a>

```java
public void resetTags()
```

##### `resetVpcOptions` <a name="resetVpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetVpcOptions"></a>

```java
public void resetVpcOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OsisPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isConstruct"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipeline;

OsisPipeline.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipeline;

OsisPipeline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipeline;

OsisPipeline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipeline;

OsisPipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OsisPipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OsisPipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OsisPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OsisPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OsisPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptions">bufferOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference">OsisPipelineBufferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptions">encryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference">OsisPipelineEncryptionAtRestOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.ingestEndpointUrls">ingestEndpointUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptions">logPublishingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference">OsisPipelineLogPublishingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineArn">pipelineArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference">OsisPipelineResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList">OsisPipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpoints">vpcEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList">OsisPipelineVpcEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpointService">vpcEndpointService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference">OsisPipelineVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptionsInput">bufferOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptionsInput">encryptionAtRestOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptionsInput">logPublishingOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnitsInput">maxUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnitsInput">minUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBodyInput">pipelineConfigurationBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineNameInput">pipelineNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArnInput">pipelineRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicyInput">resourcePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptionsInput">vpcOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnits">maxUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnits">minUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBody">pipelineConfigurationBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineName">pipelineName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArn">pipelineRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bufferOptions`<sup>Required</sup> <a name="bufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptions"></a>

```java
public OsisPipelineBufferOptionsOutputReference getBufferOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference">OsisPipelineBufferOptionsOutputReference</a>

---

##### `encryptionAtRestOptions`<sup>Required</sup> <a name="encryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptions"></a>

```java
public OsisPipelineEncryptionAtRestOptionsOutputReference getEncryptionAtRestOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference">OsisPipelineEncryptionAtRestOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingestEndpointUrls`<sup>Required</sup> <a name="ingestEndpointUrls" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.ingestEndpointUrls"></a>

```java
public java.util.List<java.lang.String> getIngestEndpointUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logPublishingOptions`<sup>Required</sup> <a name="logPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptions"></a>

```java
public OsisPipelineLogPublishingOptionsOutputReference getLogPublishingOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference">OsisPipelineLogPublishingOptionsOutputReference</a>

---

##### `pipelineArn`<sup>Required</sup> <a name="pipelineArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineArn"></a>

```java
public java.lang.String getPipelineArn();
```

- *Type:* java.lang.String

---

##### `resourcePolicy`<sup>Required</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicy"></a>

```java
public OsisPipelineResourcePolicyOutputReference getResourcePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference">OsisPipelineResourcePolicyOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tags"></a>

```java
public OsisPipelineTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList">OsisPipelineTagsList</a>

---

##### `vpcEndpoints`<sup>Required</sup> <a name="vpcEndpoints" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpoints"></a>

```java
public OsisPipelineVpcEndpointsList getVpcEndpoints();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList">OsisPipelineVpcEndpointsList</a>

---

##### `vpcEndpointService`<sup>Required</sup> <a name="vpcEndpointService" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpointService"></a>

```java
public java.lang.String getVpcEndpointService();
```

- *Type:* java.lang.String

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptions"></a>

```java
public OsisPipelineVpcOptionsOutputReference getVpcOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference">OsisPipelineVpcOptionsOutputReference</a>

---

##### `bufferOptionsInput`<sup>Optional</sup> <a name="bufferOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptionsInput"></a>

```java
public IResolvable|OsisPipelineBufferOptions getBufferOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

---

##### `encryptionAtRestOptionsInput`<sup>Optional</sup> <a name="encryptionAtRestOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptionsInput"></a>

```java
public IResolvable|OsisPipelineEncryptionAtRestOptions getEncryptionAtRestOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

---

##### `logPublishingOptionsInput`<sup>Optional</sup> <a name="logPublishingOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptionsInput"></a>

```java
public IResolvable|OsisPipelineLogPublishingOptions getLogPublishingOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

---

##### `maxUnitsInput`<sup>Optional</sup> <a name="maxUnitsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnitsInput"></a>

```java
public java.lang.Number getMaxUnitsInput();
```

- *Type:* java.lang.Number

---

##### `minUnitsInput`<sup>Optional</sup> <a name="minUnitsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnitsInput"></a>

```java
public java.lang.Number getMinUnitsInput();
```

- *Type:* java.lang.Number

---

##### `pipelineConfigurationBodyInput`<sup>Optional</sup> <a name="pipelineConfigurationBodyInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBodyInput"></a>

```java
public java.lang.String getPipelineConfigurationBodyInput();
```

- *Type:* java.lang.String

---

##### `pipelineNameInput`<sup>Optional</sup> <a name="pipelineNameInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineNameInput"></a>

```java
public java.lang.String getPipelineNameInput();
```

- *Type:* java.lang.String

---

##### `pipelineRoleArnInput`<sup>Optional</sup> <a name="pipelineRoleArnInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArnInput"></a>

```java
public java.lang.String getPipelineRoleArnInput();
```

- *Type:* java.lang.String

---

##### `resourcePolicyInput`<sup>Optional</sup> <a name="resourcePolicyInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicyInput"></a>

```java
public IResolvable|OsisPipelineResourcePolicy getResourcePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tagsInput"></a>

```java
public IResolvable|java.util.List<OsisPipelineTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>>

---

##### `vpcOptionsInput`<sup>Optional</sup> <a name="vpcOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptionsInput"></a>

```java
public IResolvable|OsisPipelineVpcOptions getVpcOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

---

##### `maxUnits`<sup>Required</sup> <a name="maxUnits" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnits"></a>

```java
public java.lang.Number getMaxUnits();
```

- *Type:* java.lang.Number

---

##### `minUnits`<sup>Required</sup> <a name="minUnits" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnits"></a>

```java
public java.lang.Number getMinUnits();
```

- *Type:* java.lang.Number

---

##### `pipelineConfigurationBody`<sup>Required</sup> <a name="pipelineConfigurationBody" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBody"></a>

```java
public java.lang.String getPipelineConfigurationBody();
```

- *Type:* java.lang.String

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineName"></a>

```java
public java.lang.String getPipelineName();
```

- *Type:* java.lang.String

---

##### `pipelineRoleArn`<sup>Required</sup> <a name="pipelineRoleArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArn"></a>

```java
public java.lang.String getPipelineRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OsisPipelineBufferOptions <a name="OsisPipelineBufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineBufferOptions;

OsisPipelineBufferOptions.builder()
//  .persistentBufferEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions.property.persistentBufferEnabled">persistentBufferEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether persistent buffering should be enabled. |

---

##### `persistentBufferEnabled`<sup>Optional</sup> <a name="persistentBufferEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions.property.persistentBufferEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPersistentBufferEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether persistent buffering should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#persistent_buffer_enabled OsisPipeline#persistent_buffer_enabled}

---

### OsisPipelineConfig <a name="OsisPipelineConfig" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineConfig;

OsisPipelineConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .maxUnits(java.lang.Number)
    .minUnits(java.lang.Number)
    .pipelineConfigurationBody(java.lang.String)
    .pipelineName(java.lang.String)
//  .bufferOptions(OsisPipelineBufferOptions)
//  .encryptionAtRestOptions(OsisPipelineEncryptionAtRestOptions)
//  .logPublishingOptions(OsisPipelineLogPublishingOptions)
//  .pipelineRoleArn(java.lang.String)
//  .resourcePolicy(OsisPipelineResourcePolicy)
//  .tags(IResolvable|java.util.List<OsisPipelineTags>)
//  .vpcOptions(OsisPipelineVpcOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.maxUnits">maxUnits</a></code> | <code>java.lang.Number</code> | The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs). |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.minUnits">minUnits</a></code> | <code>java.lang.Number</code> | The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs). |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineConfigurationBody">pipelineConfigurationBody</a></code> | <code>java.lang.String</code> | The Data Prepper pipeline configuration. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineName">pipelineName</a></code> | <code>java.lang.String</code> | Name of the OpenSearch Ingestion Service pipeline to create. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.bufferOptions">bufferOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a></code> | Key-value pairs to configure buffering. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.encryptionAtRestOptions">encryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a></code> | Key-value pairs to configure encryption at rest. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.logPublishingOptions">logPublishingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a></code> | Key-value pairs to configure log publishing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineRoleArn">pipelineRoleArn</a></code> | <code>java.lang.String</code> | The Pipeline Role (ARN) for the pipeline. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#resource_policy OsisPipeline#resource_policy}. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a></code> | Container for the values required to configure VPC access for the pipeline. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `maxUnits`<sup>Required</sup> <a name="maxUnits" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.maxUnits"></a>

```java
public java.lang.Number getMaxUnits();
```

- *Type:* java.lang.Number

The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#max_units OsisPipeline#max_units}

---

##### `minUnits`<sup>Required</sup> <a name="minUnits" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.minUnits"></a>

```java
public java.lang.Number getMinUnits();
```

- *Type:* java.lang.Number

The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#min_units OsisPipeline#min_units}

---

##### `pipelineConfigurationBody`<sup>Required</sup> <a name="pipelineConfigurationBody" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineConfigurationBody"></a>

```java
public java.lang.String getPipelineConfigurationBody();
```

- *Type:* java.lang.String

The Data Prepper pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#pipeline_configuration_body OsisPipeline#pipeline_configuration_body}

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineName"></a>

```java
public java.lang.String getPipelineName();
```

- *Type:* java.lang.String

Name of the OpenSearch Ingestion Service pipeline to create.

Pipeline names are unique across the pipelines owned by an account within an AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#pipeline_name OsisPipeline#pipeline_name}

---

##### `bufferOptions`<sup>Optional</sup> <a name="bufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.bufferOptions"></a>

```java
public OsisPipelineBufferOptions getBufferOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

Key-value pairs to configure buffering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#buffer_options OsisPipeline#buffer_options}

---

##### `encryptionAtRestOptions`<sup>Optional</sup> <a name="encryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.encryptionAtRestOptions"></a>

```java
public OsisPipelineEncryptionAtRestOptions getEncryptionAtRestOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

Key-value pairs to configure encryption at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#encryption_at_rest_options OsisPipeline#encryption_at_rest_options}

---

##### `logPublishingOptions`<sup>Optional</sup> <a name="logPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.logPublishingOptions"></a>

```java
public OsisPipelineLogPublishingOptions getLogPublishingOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

Key-value pairs to configure log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#log_publishing_options OsisPipeline#log_publishing_options}

---

##### `pipelineRoleArn`<sup>Optional</sup> <a name="pipelineRoleArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineRoleArn"></a>

```java
public java.lang.String getPipelineRoleArn();
```

- *Type:* java.lang.String

The Pipeline Role (ARN) for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#pipeline_role_arn OsisPipeline#pipeline_role_arn}

---

##### `resourcePolicy`<sup>Optional</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.resourcePolicy"></a>

```java
public OsisPipelineResourcePolicy getResourcePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#resource_policy OsisPipeline#resource_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.tags"></a>

```java
public IResolvable|java.util.List<OsisPipelineTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#tags OsisPipeline#tags}

---

##### `vpcOptions`<sup>Optional</sup> <a name="vpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.vpcOptions"></a>

```java
public OsisPipelineVpcOptions getVpcOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

Container for the values required to configure VPC access for the pipeline.

If you don't specify these values, OpenSearch Ingestion Service creates the pipeline with a public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#vpc_options OsisPipeline#vpc_options}

---

### OsisPipelineEncryptionAtRestOptions <a name="OsisPipelineEncryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineEncryptionAtRestOptions;

OsisPipelineEncryptionAtRestOptions.builder()
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The KMS key to use for encrypting data. By default an AWS owned key is used. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

The KMS key to use for encrypting data. By default an AWS owned key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#kms_key_arn OsisPipeline#kms_key_arn}

---

### OsisPipelineLogPublishingOptions <a name="OsisPipelineLogPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineLogPublishingOptions;

OsisPipelineLogPublishingOptions.builder()
//  .cloudwatchLogDestination(OsisPipelineLogPublishingOptionsCloudwatchLogDestination)
//  .isLoggingEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.cloudwatchLogDestination">cloudwatchLogDestination</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a></code> | The destination for OpenSearch Ingestion Service logs sent to Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.isLoggingEnabled">isLoggingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether logs should be published. |

---

##### `cloudwatchLogDestination`<sup>Optional</sup> <a name="cloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.cloudwatchLogDestination"></a>

```java
public OsisPipelineLogPublishingOptionsCloudwatchLogDestination getCloudwatchLogDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

The destination for OpenSearch Ingestion Service logs sent to Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#cloudwatch_log_destination OsisPipeline#cloudwatch_log_destination}

---

##### `isLoggingEnabled`<sup>Optional</sup> <a name="isLoggingEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.isLoggingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsLoggingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether logs should be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#is_logging_enabled OsisPipeline#is_logging_enabled}

---

### OsisPipelineLogPublishingOptionsCloudwatchLogDestination <a name="OsisPipelineLogPublishingOptionsCloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination;

OsisPipelineLogPublishingOptionsCloudwatchLogDestination.builder()
//  .logGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#log_group OsisPipeline#log_group}. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#log_group OsisPipeline#log_group}.

---

### OsisPipelineResourcePolicy <a name="OsisPipelineResourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineResourcePolicy;

OsisPipelineResourcePolicy.builder()
//  .policy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy.property.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#policy OsisPipeline#policy}. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#policy OsisPipeline#policy}.

---

### OsisPipelineTags <a name="OsisPipelineTags" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineTags;

OsisPipelineTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#key OsisPipeline#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#value OsisPipeline#value}

---

### OsisPipelineVpcEndpoints <a name="OsisPipelineVpcEndpoints" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineVpcEndpoints;

OsisPipelineVpcEndpoints.builder()
    .build();
```


### OsisPipelineVpcEndpointsVpcOptions <a name="OsisPipelineVpcEndpointsVpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineVpcEndpointsVpcOptions;

OsisPipelineVpcEndpointsVpcOptions.builder()
    .build();
```


### OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions <a name="OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions;

OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions.builder()
    .build();
```


### OsisPipelineVpcOptions <a name="OsisPipelineVpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineVpcOptions;

OsisPipelineVpcOptions.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .vpcAttachmentOptions(OsisPipelineVpcOptionsVpcAttachmentOptions)
//  .vpcEndpointManagement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of security groups associated with the VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of subnet IDs associated with the VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcAttachmentOptions">vpcAttachmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a></code> | Options for attaching a VPC to the pipeline. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcEndpointManagement">vpcEndpointManagement</a></code> | <code>java.lang.String</code> | Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

A list of security groups associated with the VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#security_group_ids OsisPipeline#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

A list of subnet IDs associated with the VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#subnet_ids OsisPipeline#subnet_ids}

---

##### `vpcAttachmentOptions`<sup>Optional</sup> <a name="vpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcAttachmentOptions"></a>

```java
public OsisPipelineVpcOptionsVpcAttachmentOptions getVpcAttachmentOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

Options for attaching a VPC to the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#vpc_attachment_options OsisPipeline#vpc_attachment_options}

---

##### `vpcEndpointManagement`<sup>Optional</sup> <a name="vpcEndpointManagement" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcEndpointManagement"></a>

```java
public java.lang.String getVpcEndpointManagement();
```

- *Type:* java.lang.String

Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#vpc_endpoint_management OsisPipeline#vpc_endpoint_management}

---

### OsisPipelineVpcOptionsVpcAttachmentOptions <a name="OsisPipelineVpcOptionsVpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineVpcOptionsVpcAttachmentOptions;

OsisPipelineVpcOptionsVpcAttachmentOptions.builder()
//  .attachToVpc(java.lang.Boolean|IResolvable)
//  .cidrBlock(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.attachToVpc">attachToVpc</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the pipeline should be attached to the provided VPC. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs). |

---

##### `attachToVpc`<sup>Optional</sup> <a name="attachToVpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.attachToVpc"></a>

```java
public java.lang.Boolean|IResolvable getAttachToVpc();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the pipeline should be attached to the provided VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#attach_to_vpc OsisPipeline#attach_to_vpc}

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/osis_pipeline#cidr_block OsisPipeline#cidr_block}

---

## Classes <a name="Classes" id="Classes"></a>

### OsisPipelineBufferOptionsOutputReference <a name="OsisPipelineBufferOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineBufferOptionsOutputReference;

new OsisPipelineBufferOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resetPersistentBufferEnabled">resetPersistentBufferEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPersistentBufferEnabled` <a name="resetPersistentBufferEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resetPersistentBufferEnabled"></a>

```java
public void resetPersistentBufferEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabledInput">persistentBufferEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabled">persistentBufferEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `persistentBufferEnabledInput`<sup>Optional</sup> <a name="persistentBufferEnabledInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPersistentBufferEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `persistentBufferEnabled`<sup>Required</sup> <a name="persistentBufferEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPersistentBufferEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OsisPipelineBufferOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

---


### OsisPipelineEncryptionAtRestOptionsOutputReference <a name="OsisPipelineEncryptionAtRestOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineEncryptionAtRestOptionsOutputReference;

new OsisPipelineEncryptionAtRestOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OsisPipelineEncryptionAtRestOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

---


### OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference <a name="OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference;

new OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|OsisPipelineLogPublishingOptionsCloudwatchLogDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

---


### OsisPipelineLogPublishingOptionsOutputReference <a name="OsisPipelineLogPublishingOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineLogPublishingOptionsOutputReference;

new OsisPipelineLogPublishingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination">putCloudwatchLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetCloudwatchLogDestination">resetCloudwatchLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetIsLoggingEnabled">resetIsLoggingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogDestination` <a name="putCloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination"></a>

```java
public void putCloudwatchLogDestination(OsisPipelineLogPublishingOptionsCloudwatchLogDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

---

##### `resetCloudwatchLogDestination` <a name="resetCloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetCloudwatchLogDestination"></a>

```java
public void resetCloudwatchLogDestination()
```

##### `resetIsLoggingEnabled` <a name="resetIsLoggingEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetIsLoggingEnabled"></a>

```java
public void resetIsLoggingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestination">cloudwatchLogDestination</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference">OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestinationInput">cloudwatchLogDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabledInput">isLoggingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabled">isLoggingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogDestination`<sup>Required</sup> <a name="cloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestination"></a>

```java
public OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference getCloudwatchLogDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference">OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference</a>

---

##### `cloudwatchLogDestinationInput`<sup>Optional</sup> <a name="cloudwatchLogDestinationInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestinationInput"></a>

```java
public IResolvable|OsisPipelineLogPublishingOptionsCloudwatchLogDestination getCloudwatchLogDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

---

##### `isLoggingEnabledInput`<sup>Optional</sup> <a name="isLoggingEnabledInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsLoggingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isLoggingEnabled`<sup>Required</sup> <a name="isLoggingEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsLoggingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OsisPipelineLogPublishingOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

---


### OsisPipelineResourcePolicyOutputReference <a name="OsisPipelineResourcePolicyOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineResourcePolicyOutputReference;

new OsisPipelineResourcePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resetPolicy"></a>

```java
public void resetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|OsisPipelineResourcePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

---


### OsisPipelineTagsList <a name="OsisPipelineTagsList" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineTagsList;

new OsisPipelineTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.get"></a>

```java
public OsisPipelineTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OsisPipelineTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>>

---


### OsisPipelineTagsOutputReference <a name="OsisPipelineTagsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineTagsOutputReference;

new OsisPipelineTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|OsisPipelineTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>

---


### OsisPipelineVpcEndpointsList <a name="OsisPipelineVpcEndpointsList" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineVpcEndpointsList;

new OsisPipelineVpcEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.get"></a>

```java
public OsisPipelineVpcEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OsisPipelineVpcEndpointsOutputReference <a name="OsisPipelineVpcEndpointsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineVpcEndpointsOutputReference;

new OsisPipelineVpcEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints">OsisPipelineVpcEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcOptions"></a>

```java
public OsisPipelineVpcEndpointsVpcOptionsOutputReference getVpcOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.internalValue"></a>

```java
public OsisPipelineVpcEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints">OsisPipelineVpcEndpoints</a>

---


### OsisPipelineVpcEndpointsVpcOptionsOutputReference <a name="OsisPipelineVpcEndpointsVpcOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference;

new OsisPipelineVpcEndpointsVpcOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcAttachmentOptions">vpcAttachmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcEndpointManagement">vpcEndpointManagement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions">OsisPipelineVpcEndpointsVpcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcAttachmentOptions`<sup>Required</sup> <a name="vpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcAttachmentOptions"></a>

```java
public OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference getVpcAttachmentOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference</a>

---

##### `vpcEndpointManagement`<sup>Required</sup> <a name="vpcEndpointManagement" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcEndpointManagement"></a>

```java
public java.lang.String getVpcEndpointManagement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.internalValue"></a>

```java
public OsisPipelineVpcEndpointsVpcOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions">OsisPipelineVpcEndpointsVpcOptions</a>

---


### OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference <a name="OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference;

new OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc">attachToVpc</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attachToVpc`<sup>Required</sup> <a name="attachToVpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc"></a>

```java
public IResolvable getAttachToVpc();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```java
public OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions</a>

---


### OsisPipelineVpcOptionsOutputReference <a name="OsisPipelineVpcOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineVpcOptionsOutputReference;

new OsisPipelineVpcOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.putVpcAttachmentOptions">putVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcAttachmentOptions">resetVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcEndpointManagement">resetVpcEndpointManagement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcAttachmentOptions` <a name="putVpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.putVpcAttachmentOptions"></a>

```java
public void putVpcAttachmentOptions(OsisPipelineVpcOptionsVpcAttachmentOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.putVpcAttachmentOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

---

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetVpcAttachmentOptions` <a name="resetVpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcAttachmentOptions"></a>

```java
public void resetVpcAttachmentOptions()
```

##### `resetVpcEndpointManagement` <a name="resetVpcEndpointManagement" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcEndpointManagement"></a>

```java
public void resetVpcEndpointManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptions">vpcAttachmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptionsInput">vpcAttachmentOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagementInput">vpcEndpointManagementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagement">vpcEndpointManagement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcAttachmentOptions`<sup>Required</sup> <a name="vpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptions"></a>

```java
public OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference getVpcAttachmentOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference</a>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcAttachmentOptionsInput`<sup>Optional</sup> <a name="vpcAttachmentOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptionsInput"></a>

```java
public IResolvable|OsisPipelineVpcOptionsVpcAttachmentOptions getVpcAttachmentOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

---

##### `vpcEndpointManagementInput`<sup>Optional</sup> <a name="vpcEndpointManagementInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagementInput"></a>

```java
public java.lang.String getVpcEndpointManagementInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcEndpointManagement`<sup>Required</sup> <a name="vpcEndpointManagement" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagement"></a>

```java
public java.lang.String getVpcEndpointManagement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OsisPipelineVpcOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

---


### OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference <a name="OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.osis_pipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference;

new OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetAttachToVpc">resetAttachToVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttachToVpc` <a name="resetAttachToVpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetAttachToVpc"></a>

```java
public void resetAttachToVpc()
```

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetCidrBlock"></a>

```java
public void resetCidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpcInput">attachToVpcInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc">attachToVpc</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attachToVpcInput`<sup>Optional</sup> <a name="attachToVpcInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpcInput"></a>

```java
public java.lang.Boolean|IResolvable getAttachToVpcInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlockInput"></a>

```java
public java.lang.String getCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `attachToVpc`<sup>Required</sup> <a name="attachToVpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc"></a>

```java
public java.lang.Boolean|IResolvable getAttachToVpc();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OsisPipelineVpcOptionsVpcAttachmentOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

---



