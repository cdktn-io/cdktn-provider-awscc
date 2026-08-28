# `entityresolutionMatchingWorkflow` Submodule <a name="`entityresolutionMatchingWorkflow` Submodule" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionMatchingWorkflow <a name="EntityresolutionMatchingWorkflow" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow awscc_entityresolution_matching_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflow;

EntityresolutionMatchingWorkflow.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .inputSourceConfig(IResolvable|java.util.List<EntityresolutionMatchingWorkflowInputSourceConfig>)
    .outputSourceConfig(IResolvable|java.util.List<EntityresolutionMatchingWorkflowOutputSourceConfig>)
    .resolutionTechniques(EntityresolutionMatchingWorkflowResolutionTechniques)
    .roleArn(java.lang.String)
    .workflowName(java.lang.String)
//  .description(java.lang.String)
//  .incrementalRunConfig(EntityresolutionMatchingWorkflowIncrementalRunConfig)
//  .tags(IResolvable|java.util.List<EntityresolutionMatchingWorkflowTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.inputSourceConfig">inputSourceConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#input_source_config EntityresolutionMatchingWorkflow#input_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.outputSourceConfig">outputSourceConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#output_source_config EntityresolutionMatchingWorkflow#output_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.resolutionTechniques">resolutionTechniques</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#resolution_techniques EntityresolutionMatchingWorkflow#resolution_techniques}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#role_arn EntityresolutionMatchingWorkflow#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.workflowName">workflowName</a></code> | <code>java.lang.String</code> | The name of the MatchingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the MatchingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.incrementalRunConfig">incrementalRunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#incremental_run_config EntityresolutionMatchingWorkflow#incremental_run_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#tags EntityresolutionMatchingWorkflow#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `inputSourceConfig`<sup>Required</sup> <a name="inputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.inputSourceConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#input_source_config EntityresolutionMatchingWorkflow#input_source_config}.

---

##### `outputSourceConfig`<sup>Required</sup> <a name="outputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.outputSourceConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#output_source_config EntityresolutionMatchingWorkflow#output_source_config}.

---

##### `resolutionTechniques`<sup>Required</sup> <a name="resolutionTechniques" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.resolutionTechniques"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#resolution_techniques EntityresolutionMatchingWorkflow#resolution_techniques}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#role_arn EntityresolutionMatchingWorkflow#role_arn}.

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.workflowName"></a>

- *Type:* java.lang.String

The name of the MatchingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#workflow_name EntityresolutionMatchingWorkflow#workflow_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the MatchingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#description EntityresolutionMatchingWorkflow#description}

---

##### `incrementalRunConfig`<sup>Optional</sup> <a name="incrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.incrementalRunConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#incremental_run_config EntityresolutionMatchingWorkflow#incremental_run_config}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#tags EntityresolutionMatchingWorkflow#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putIncrementalRunConfig">putIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putInputSourceConfig">putInputSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putOutputSourceConfig">putOutputSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putResolutionTechniques">putResolutionTechniques</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetIncrementalRunConfig">resetIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIncrementalRunConfig` <a name="putIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putIncrementalRunConfig"></a>

```java
public void putIncrementalRunConfig(EntityresolutionMatchingWorkflowIncrementalRunConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putIncrementalRunConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a>

---

##### `putInputSourceConfig` <a name="putInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putInputSourceConfig"></a>

```java
public void putInputSourceConfig(IResolvable|java.util.List<EntityresolutionMatchingWorkflowInputSourceConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putInputSourceConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>>

---

##### `putOutputSourceConfig` <a name="putOutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putOutputSourceConfig"></a>

```java
public void putOutputSourceConfig(IResolvable|java.util.List<EntityresolutionMatchingWorkflowOutputSourceConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putOutputSourceConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>>

---

##### `putResolutionTechniques` <a name="putResolutionTechniques" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putResolutionTechniques"></a>

```java
public void putResolutionTechniques(EntityresolutionMatchingWorkflowResolutionTechniques value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putResolutionTechniques.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<EntityresolutionMatchingWorkflowTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIncrementalRunConfig` <a name="resetIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetIncrementalRunConfig"></a>

```java
public void resetIncrementalRunConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EntityresolutionMatchingWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isConstruct"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflow;

EntityresolutionMatchingWorkflow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflow;

EntityresolutionMatchingWorkflow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflow;

EntityresolutionMatchingWorkflow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflow;

EntityresolutionMatchingWorkflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EntityresolutionMatchingWorkflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EntityresolutionMatchingWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EntityresolutionMatchingWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EntityresolutionMatchingWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionMatchingWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.incrementalRunConfig">incrementalRunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference">EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.inputSourceConfig">inputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList">EntityresolutionMatchingWorkflowInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.outputSourceConfig">outputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList">EntityresolutionMatchingWorkflowOutputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.resolutionTechniques">resolutionTechniques</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList">EntityresolutionMatchingWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowArn">workflowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.incrementalRunConfigInput">incrementalRunConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.inputSourceConfigInput">inputSourceConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.outputSourceConfigInput">outputSourceConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.resolutionTechniquesInput">resolutionTechniquesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowNameInput">workflowNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowName">workflowName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `incrementalRunConfig`<sup>Required</sup> <a name="incrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.incrementalRunConfig"></a>

```java
public EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference getIncrementalRunConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference">EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference</a>

---

##### `inputSourceConfig`<sup>Required</sup> <a name="inputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.inputSourceConfig"></a>

```java
public EntityresolutionMatchingWorkflowInputSourceConfigList getInputSourceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList">EntityresolutionMatchingWorkflowInputSourceConfigList</a>

---

##### `outputSourceConfig`<sup>Required</sup> <a name="outputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.outputSourceConfig"></a>

```java
public EntityresolutionMatchingWorkflowOutputSourceConfigList getOutputSourceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList">EntityresolutionMatchingWorkflowOutputSourceConfigList</a>

---

##### `resolutionTechniques`<sup>Required</sup> <a name="resolutionTechniques" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.resolutionTechniques"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference getResolutionTechniques();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tags"></a>

```java
public EntityresolutionMatchingWorkflowTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList">EntityresolutionMatchingWorkflowTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `workflowArn`<sup>Required</sup> <a name="workflowArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowArn"></a>

```java
public java.lang.String getWorkflowArn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `incrementalRunConfigInput`<sup>Optional</sup> <a name="incrementalRunConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.incrementalRunConfigInput"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowIncrementalRunConfig getIncrementalRunConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a>

---

##### `inputSourceConfigInput`<sup>Optional</sup> <a name="inputSourceConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.inputSourceConfigInput"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowInputSourceConfig> getInputSourceConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>>

---

##### `outputSourceConfigInput`<sup>Optional</sup> <a name="outputSourceConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.outputSourceConfigInput"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowOutputSourceConfig> getOutputSourceConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>>

---

##### `resolutionTechniquesInput`<sup>Optional</sup> <a name="resolutionTechniquesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.resolutionTechniquesInput"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowResolutionTechniques getResolutionTechniquesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tagsInput"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>>

---

##### `workflowNameInput`<sup>Optional</sup> <a name="workflowNameInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowNameInput"></a>

```java
public java.lang.String getWorkflowNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.workflowName"></a>

```java
public java.lang.String getWorkflowName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionMatchingWorkflowConfig <a name="EntityresolutionMatchingWorkflowConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowConfig;

EntityresolutionMatchingWorkflowConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .inputSourceConfig(IResolvable|java.util.List<EntityresolutionMatchingWorkflowInputSourceConfig>)
    .outputSourceConfig(IResolvable|java.util.List<EntityresolutionMatchingWorkflowOutputSourceConfig>)
    .resolutionTechniques(EntityresolutionMatchingWorkflowResolutionTechniques)
    .roleArn(java.lang.String)
    .workflowName(java.lang.String)
//  .description(java.lang.String)
//  .incrementalRunConfig(EntityresolutionMatchingWorkflowIncrementalRunConfig)
//  .tags(IResolvable|java.util.List<EntityresolutionMatchingWorkflowTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.inputSourceConfig">inputSourceConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#input_source_config EntityresolutionMatchingWorkflow#input_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.outputSourceConfig">outputSourceConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#output_source_config EntityresolutionMatchingWorkflow#output_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.resolutionTechniques">resolutionTechniques</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#resolution_techniques EntityresolutionMatchingWorkflow#resolution_techniques}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#role_arn EntityresolutionMatchingWorkflow#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.workflowName">workflowName</a></code> | <code>java.lang.String</code> | The name of the MatchingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the MatchingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.incrementalRunConfig">incrementalRunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#incremental_run_config EntityresolutionMatchingWorkflow#incremental_run_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#tags EntityresolutionMatchingWorkflow#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `inputSourceConfig`<sup>Required</sup> <a name="inputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.inputSourceConfig"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowInputSourceConfig> getInputSourceConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#input_source_config EntityresolutionMatchingWorkflow#input_source_config}.

---

##### `outputSourceConfig`<sup>Required</sup> <a name="outputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.outputSourceConfig"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowOutputSourceConfig> getOutputSourceConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#output_source_config EntityresolutionMatchingWorkflow#output_source_config}.

---

##### `resolutionTechniques`<sup>Required</sup> <a name="resolutionTechniques" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.resolutionTechniques"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniques getResolutionTechniques();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#resolution_techniques EntityresolutionMatchingWorkflow#resolution_techniques}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#role_arn EntityresolutionMatchingWorkflow#role_arn}.

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.workflowName"></a>

```java
public java.lang.String getWorkflowName();
```

- *Type:* java.lang.String

The name of the MatchingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#workflow_name EntityresolutionMatchingWorkflow#workflow_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the MatchingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#description EntityresolutionMatchingWorkflow#description}

---

##### `incrementalRunConfig`<sup>Optional</sup> <a name="incrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.incrementalRunConfig"></a>

```java
public EntityresolutionMatchingWorkflowIncrementalRunConfig getIncrementalRunConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#incremental_run_config EntityresolutionMatchingWorkflow#incremental_run_config}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowConfig.property.tags"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#tags EntityresolutionMatchingWorkflow#tags}.

---

### EntityresolutionMatchingWorkflowIncrementalRunConfig <a name="EntityresolutionMatchingWorkflowIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowIncrementalRunConfig;

EntityresolutionMatchingWorkflowIncrementalRunConfig.builder()
//  .incrementalRunType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig.property.incrementalRunType">incrementalRunType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#incremental_run_type EntityresolutionMatchingWorkflow#incremental_run_type}. |

---

##### `incrementalRunType`<sup>Optional</sup> <a name="incrementalRunType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig.property.incrementalRunType"></a>

```java
public java.lang.String getIncrementalRunType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#incremental_run_type EntityresolutionMatchingWorkflow#incremental_run_type}.

---

### EntityresolutionMatchingWorkflowInputSourceConfig <a name="EntityresolutionMatchingWorkflowInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowInputSourceConfig;

EntityresolutionMatchingWorkflowInputSourceConfig.builder()
    .inputSourceArn(java.lang.String)
    .schemaArn(java.lang.String)
//  .applyNormalization(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.inputSourceArn">inputSourceArn</a></code> | <code>java.lang.String</code> | An Glue table ARN for the input source table. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.schemaArn">schemaArn</a></code> | <code>java.lang.String</code> | The SchemaMapping arn associated with the Schema. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.applyNormalization">applyNormalization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#apply_normalization EntityresolutionMatchingWorkflow#apply_normalization}. |

---

##### `inputSourceArn`<sup>Required</sup> <a name="inputSourceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.inputSourceArn"></a>

```java
public java.lang.String getInputSourceArn();
```

- *Type:* java.lang.String

An Glue table ARN for the input source table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#input_source_arn EntityresolutionMatchingWorkflow#input_source_arn}

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.schemaArn"></a>

```java
public java.lang.String getSchemaArn();
```

- *Type:* java.lang.String

The SchemaMapping arn associated with the Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#schema_arn EntityresolutionMatchingWorkflow#schema_arn}

---

##### `applyNormalization`<sup>Optional</sup> <a name="applyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig.property.applyNormalization"></a>

```java
public java.lang.Boolean|IResolvable getApplyNormalization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#apply_normalization EntityresolutionMatchingWorkflow#apply_normalization}.

---

### EntityresolutionMatchingWorkflowOutputSourceConfig <a name="EntityresolutionMatchingWorkflowOutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowOutputSourceConfig;

EntityresolutionMatchingWorkflowOutputSourceConfig.builder()
    .output(IResolvable|java.util.List<EntityresolutionMatchingWorkflowOutputSourceConfigOutput>)
//  .applyNormalization(java.lang.Boolean|IResolvable)
//  .customerProfilesIntegrationConfig(EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig)
//  .kmsArn(java.lang.String)
//  .outputS3Path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.output">output</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#output EntityresolutionMatchingWorkflow#output}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.applyNormalization">applyNormalization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#apply_normalization EntityresolutionMatchingWorkflow#apply_normalization}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.customerProfilesIntegrationConfig">customerProfilesIntegrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a></code> | The Customer Profiles integration configuration for the output source. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.kmsArn">kmsArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#kms_arn EntityresolutionMatchingWorkflow#kms_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.outputS3Path">outputS3Path</a></code> | <code>java.lang.String</code> | The S3 path to which Entity Resolution will write the output table. |

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.output"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowOutputSourceConfigOutput> getOutput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#output EntityresolutionMatchingWorkflow#output}.

---

##### `applyNormalization`<sup>Optional</sup> <a name="applyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.applyNormalization"></a>

```java
public java.lang.Boolean|IResolvable getApplyNormalization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#apply_normalization EntityresolutionMatchingWorkflow#apply_normalization}.

---

##### `customerProfilesIntegrationConfig`<sup>Optional</sup> <a name="customerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.customerProfilesIntegrationConfig"></a>

```java
public EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig getCustomerProfilesIntegrationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a>

The Customer Profiles integration configuration for the output source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#customer_profiles_integration_config EntityresolutionMatchingWorkflow#customer_profiles_integration_config}

---

##### `kmsArn`<sup>Optional</sup> <a name="kmsArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.kmsArn"></a>

```java
public java.lang.String getKmsArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#kms_arn EntityresolutionMatchingWorkflow#kms_arn}.

---

##### `outputS3Path`<sup>Optional</sup> <a name="outputS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig.property.outputS3Path"></a>

```java
public java.lang.String getOutputS3Path();
```

- *Type:* java.lang.String

The S3 path to which Entity Resolution will write the output table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#output_s3_path EntityresolutionMatchingWorkflow#output_s3_path}

---

### EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig <a name="EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig;

EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.builder()
//  .domainArn(java.lang.String)
//  .objectTypeArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.property.domainArn">domainArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Customer Profiles domain. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.property.objectTypeArn">objectTypeArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Customer Profiles object type. |

---

##### `domainArn`<sup>Optional</sup> <a name="domainArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.property.domainArn"></a>

```java
public java.lang.String getDomainArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Customer Profiles domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#domain_arn EntityresolutionMatchingWorkflow#domain_arn}

---

##### `objectTypeArn`<sup>Optional</sup> <a name="objectTypeArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.property.objectTypeArn"></a>

```java
public java.lang.String getObjectTypeArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Customer Profiles object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#object_type_arn EntityresolutionMatchingWorkflow#object_type_arn}

---

### EntityresolutionMatchingWorkflowOutputSourceConfigOutput <a name="EntityresolutionMatchingWorkflowOutputSourceConfigOutput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput;

EntityresolutionMatchingWorkflowOutputSourceConfigOutput.builder()
    .name(java.lang.String)
//  .hashed(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#name EntityresolutionMatchingWorkflow#name}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.property.hashed">hashed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#hashed EntityresolutionMatchingWorkflow#hashed}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#name EntityresolutionMatchingWorkflow#name}.

---

##### `hashed`<sup>Optional</sup> <a name="hashed" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput.property.hashed"></a>

```java
public java.lang.Boolean|IResolvable getHashed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#hashed EntityresolutionMatchingWorkflow#hashed}.

---

### EntityresolutionMatchingWorkflowResolutionTechniques <a name="EntityresolutionMatchingWorkflowResolutionTechniques" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniques;

EntityresolutionMatchingWorkflowResolutionTechniques.builder()
//  .enableRealTimeMatching(java.lang.Boolean|IResolvable)
//  .providerProperties(EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties)
//  .resolutionType(java.lang.String)
//  .ruleBasedProperties(EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties)
//  .ruleConditionProperties(EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.enableRealTimeMatching">enableRealTimeMatching</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables the workflow to use real-time matching. Can only be set on creation for RULE_MATCHING workflows that define RuleConditionProperties. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.providerProperties">providerProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#provider_properties EntityresolutionMatchingWorkflow#provider_properties}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.resolutionType">resolutionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#resolution_type EntityresolutionMatchingWorkflow#resolution_type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.ruleBasedProperties">ruleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_based_properties EntityresolutionMatchingWorkflow#rule_based_properties}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.ruleConditionProperties">ruleConditionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_condition_properties EntityresolutionMatchingWorkflow#rule_condition_properties}. |

---

##### `enableRealTimeMatching`<sup>Optional</sup> <a name="enableRealTimeMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.enableRealTimeMatching"></a>

```java
public java.lang.Boolean|IResolvable getEnableRealTimeMatching();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables the workflow to use real-time matching. Can only be set on creation for RULE_MATCHING workflows that define RuleConditionProperties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#enable_real_time_matching EntityresolutionMatchingWorkflow#enable_real_time_matching}

---

##### `providerProperties`<sup>Optional</sup> <a name="providerProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.providerProperties"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties getProviderProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#provider_properties EntityresolutionMatchingWorkflow#provider_properties}.

---

##### `resolutionType`<sup>Optional</sup> <a name="resolutionType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.resolutionType"></a>

```java
public java.lang.String getResolutionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#resolution_type EntityresolutionMatchingWorkflow#resolution_type}.

---

##### `ruleBasedProperties`<sup>Optional</sup> <a name="ruleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.ruleBasedProperties"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties getRuleBasedProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_based_properties EntityresolutionMatchingWorkflow#rule_based_properties}.

---

##### `ruleConditionProperties`<sup>Optional</sup> <a name="ruleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques.property.ruleConditionProperties"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties getRuleConditionProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_condition_properties EntityresolutionMatchingWorkflow#rule_condition_properties}.

---

### EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties <a name="EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties;

EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.builder()
//  .intermediateSourceConfiguration(EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration)
//  .providerConfiguration(java.util.Map<java.lang.String, java.lang.String>)
//  .providerServiceArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.intermediateSourceConfiguration">intermediateSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#intermediate_source_configuration EntityresolutionMatchingWorkflow#intermediate_source_configuration}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.providerConfiguration">providerConfiguration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.providerServiceArn">providerServiceArn</a></code> | <code>java.lang.String</code> | Arn of the Provider service being used. |

---

##### `intermediateSourceConfiguration`<sup>Optional</sup> <a name="intermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.intermediateSourceConfiguration"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration getIntermediateSourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#intermediate_source_configuration EntityresolutionMatchingWorkflow#intermediate_source_configuration}.

---

##### `providerConfiguration`<sup>Optional</sup> <a name="providerConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.providerConfiguration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProviderConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#provider_configuration EntityresolutionMatchingWorkflow#provider_configuration}

---

##### `providerServiceArn`<sup>Optional</sup> <a name="providerServiceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.property.providerServiceArn"></a>

```java
public java.lang.String getProviderServiceArn();
```

- *Type:* java.lang.String

Arn of the Provider service being used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#provider_service_arn EntityresolutionMatchingWorkflow#provider_service_arn}

---

### EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration <a name="EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration;

EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration.builder()
//  .intermediateS3Path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration.property.intermediateS3Path">intermediateS3Path</a></code> | <code>java.lang.String</code> | The s3 path that would be used to stage the intermediate data being generated during workflow execution. |

---

##### `intermediateS3Path`<sup>Optional</sup> <a name="intermediateS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration.property.intermediateS3Path"></a>

```java
public java.lang.String getIntermediateS3Path();
```

- *Type:* java.lang.String

The s3 path that would be used to stage the intermediate data being generated during workflow execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#intermediate_s3_path EntityresolutionMatchingWorkflow#intermediate_s3_path}

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties;

EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.builder()
//  .attributeMatchingModel(java.lang.String)
//  .matchPurpose(java.lang.String)
//  .rules(IResolvable|java.util.List<EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.attributeMatchingModel">attributeMatchingModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#attribute_matching_model EntityresolutionMatchingWorkflow#attribute_matching_model}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.matchPurpose">matchPurpose</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#match_purpose EntityresolutionMatchingWorkflow#match_purpose}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rules EntityresolutionMatchingWorkflow#rules}. |

---

##### `attributeMatchingModel`<sup>Optional</sup> <a name="attributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.attributeMatchingModel"></a>

```java
public java.lang.String getAttributeMatchingModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#attribute_matching_model EntityresolutionMatchingWorkflow#attribute_matching_model}.

---

##### `matchPurpose`<sup>Optional</sup> <a name="matchPurpose" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.matchPurpose"></a>

```java
public java.lang.String getMatchPurpose();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#match_purpose EntityresolutionMatchingWorkflow#match_purpose}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.property.rules"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rules EntityresolutionMatchingWorkflow#rules}.

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules;

EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.builder()
//  .matchingKeys(java.util.List<java.lang.String>)
//  .ruleName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.property.matchingKeys">matchingKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#matching_keys EntityresolutionMatchingWorkflow#matching_keys}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_name EntityresolutionMatchingWorkflow#rule_name}. |

---

##### `matchingKeys`<sup>Optional</sup> <a name="matchingKeys" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.property.matchingKeys"></a>

```java
public java.util.List<java.lang.String> getMatchingKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#matching_keys EntityresolutionMatchingWorkflow#matching_keys}.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_name EntityresolutionMatchingWorkflow#rule_name}.

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties;

EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.builder()
//  .matchingConfig(EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig)
//  .rules(IResolvable|java.util.List<EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.property.matchingConfig">matchingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a></code> | Configuration for matching behavior within rule condition properties. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rules EntityresolutionMatchingWorkflow#rules}. |

---

##### `matchingConfig`<sup>Optional</sup> <a name="matchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.property.matchingConfig"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig getMatchingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a>

Configuration for matching behavior within rule condition properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#matching_config EntityresolutionMatchingWorkflow#matching_config}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.property.rules"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rules EntityresolutionMatchingWorkflow#rules}.

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig;

EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig.builder()
//  .enableTransitiveMatching(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig.property.enableTransitiveMatching">enableTransitiveMatching</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables transitive matching to process records across all rule levels and connect unmatched records to existing match groups. |

---

##### `enableTransitiveMatching`<sup>Optional</sup> <a name="enableTransitiveMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig.property.enableTransitiveMatching"></a>

```java
public java.lang.Boolean|IResolvable getEnableTransitiveMatching();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables transitive matching to process records across all rule levels and connect unmatched records to existing match groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#enable_transitive_matching EntityresolutionMatchingWorkflow#enable_transitive_matching}

---

### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules;

EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.builder()
//  .condition(java.lang.String)
//  .ruleName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.property.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#condition EntityresolutionMatchingWorkflow#condition}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_name EntityresolutionMatchingWorkflow#rule_name}. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#condition EntityresolutionMatchingWorkflow#condition}.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#rule_name EntityresolutionMatchingWorkflow#rule_name}.

---

### EntityresolutionMatchingWorkflowTags <a name="EntityresolutionMatchingWorkflowTags" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowTags;

EntityresolutionMatchingWorkflowTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#key EntityresolutionMatchingWorkflow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_matching_workflow#value EntityresolutionMatchingWorkflow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference <a name="EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference;

new EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resetIncrementalRunType">resetIncrementalRunType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncrementalRunType` <a name="resetIncrementalRunType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resetIncrementalRunType"></a>

```java
public void resetIncrementalRunType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunTypeInput">incrementalRunTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunType">incrementalRunType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `incrementalRunTypeInput`<sup>Optional</sup> <a name="incrementalRunTypeInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunTypeInput"></a>

```java
public java.lang.String getIncrementalRunTypeInput();
```

- *Type:* java.lang.String

---

##### `incrementalRunType`<sup>Required</sup> <a name="incrementalRunType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunType"></a>

```java
public java.lang.String getIncrementalRunType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowIncrementalRunConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowIncrementalRunConfig">EntityresolutionMatchingWorkflowIncrementalRunConfig</a>

---


### EntityresolutionMatchingWorkflowInputSourceConfigList <a name="EntityresolutionMatchingWorkflowInputSourceConfigList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowInputSourceConfigList;

new EntityresolutionMatchingWorkflowInputSourceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.get"></a>

```java
public EntityresolutionMatchingWorkflowInputSourceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowInputSourceConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>>

---


### EntityresolutionMatchingWorkflowInputSourceConfigOutputReference <a name="EntityresolutionMatchingWorkflowInputSourceConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference;

new EntityresolutionMatchingWorkflowInputSourceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resetApplyNormalization">resetApplyNormalization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplyNormalization` <a name="resetApplyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resetApplyNormalization"></a>

```java
public void resetApplyNormalization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalizationInput">applyNormalizationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArnInput">inputSourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArnInput">schemaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalization">applyNormalization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArn">inputSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArn">schemaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyNormalizationInput`<sup>Optional</sup> <a name="applyNormalizationInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalizationInput"></a>

```java
public java.lang.Boolean|IResolvable getApplyNormalizationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputSourceArnInput`<sup>Optional</sup> <a name="inputSourceArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArnInput"></a>

```java
public java.lang.String getInputSourceArnInput();
```

- *Type:* java.lang.String

---

##### `schemaArnInput`<sup>Optional</sup> <a name="schemaArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArnInput"></a>

```java
public java.lang.String getSchemaArnInput();
```

- *Type:* java.lang.String

---

##### `applyNormalization`<sup>Required</sup> <a name="applyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalization"></a>

```java
public java.lang.Boolean|IResolvable getApplyNormalization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputSourceArn`<sup>Required</sup> <a name="inputSourceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArn"></a>

```java
public java.lang.String getInputSourceArn();
```

- *Type:* java.lang.String

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArn"></a>

```java
public java.lang.String getSchemaArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowInputSourceConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowInputSourceConfig">EntityresolutionMatchingWorkflowInputSourceConfig</a>

---


### EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference <a name="EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference;

new EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resetDomainArn">resetDomainArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resetObjectTypeArn">resetObjectTypeArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainArn` <a name="resetDomainArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resetDomainArn"></a>

```java
public void resetDomainArn()
```

##### `resetObjectTypeArn` <a name="resetObjectTypeArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resetObjectTypeArn"></a>

```java
public void resetObjectTypeArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArnInput">domainArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArnInput">objectTypeArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArn">domainArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArn">objectTypeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainArnInput`<sup>Optional</sup> <a name="domainArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArnInput"></a>

```java
public java.lang.String getDomainArnInput();
```

- *Type:* java.lang.String

---

##### `objectTypeArnInput`<sup>Optional</sup> <a name="objectTypeArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArnInput"></a>

```java
public java.lang.String getObjectTypeArnInput();
```

- *Type:* java.lang.String

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArn"></a>

```java
public java.lang.String getDomainArn();
```

- *Type:* java.lang.String

---

##### `objectTypeArn`<sup>Required</sup> <a name="objectTypeArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArn"></a>

```java
public java.lang.String getObjectTypeArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a>

---


### EntityresolutionMatchingWorkflowOutputSourceConfigList <a name="EntityresolutionMatchingWorkflowOutputSourceConfigList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowOutputSourceConfigList;

new EntityresolutionMatchingWorkflowOutputSourceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.get"></a>

```java
public EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowOutputSourceConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>>

---


### EntityresolutionMatchingWorkflowOutputSourceConfigOutputList <a name="EntityresolutionMatchingWorkflowOutputSourceConfigOutputList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList;

new EntityresolutionMatchingWorkflowOutputSourceConfigOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get"></a>

```java
public EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowOutputSourceConfigOutput> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>>

---


### EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference <a name="EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference;

new EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resetHashed">resetHashed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHashed` <a name="resetHashed" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resetHashed"></a>

```java
public void resetHashed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashedInput">hashedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashed">hashed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hashedInput`<sup>Optional</sup> <a name="hashedInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashedInput"></a>

```java
public java.lang.Boolean|IResolvable getHashedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `hashed`<sup>Required</sup> <a name="hashed" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashed"></a>

```java
public java.lang.Boolean|IResolvable getHashed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowOutputSourceConfigOutput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>

---


### EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference <a name="EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference;

new EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putCustomerProfilesIntegrationConfig">putCustomerProfilesIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetApplyNormalization">resetApplyNormalization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetCustomerProfilesIntegrationConfig">resetCustomerProfilesIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetKmsArn">resetKmsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetOutputS3Path">resetOutputS3Path</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerProfilesIntegrationConfig` <a name="putCustomerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putCustomerProfilesIntegrationConfig"></a>

```java
public void putCustomerProfilesIntegrationConfig(EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putCustomerProfilesIntegrationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a>

---

##### `putOutput` <a name="putOutput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putOutput"></a>

```java
public void putOutput(IResolvable|java.util.List<EntityresolutionMatchingWorkflowOutputSourceConfigOutput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.putOutput.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>>

---

##### `resetApplyNormalization` <a name="resetApplyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetApplyNormalization"></a>

```java
public void resetApplyNormalization()
```

##### `resetCustomerProfilesIntegrationConfig` <a name="resetCustomerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetCustomerProfilesIntegrationConfig"></a>

```java
public void resetCustomerProfilesIntegrationConfig()
```

##### `resetKmsArn` <a name="resetKmsArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetKmsArn"></a>

```java
public void resetKmsArn()
```

##### `resetOutputS3Path` <a name="resetOutputS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resetOutputS3Path"></a>

```java
public void resetOutputS3Path()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfig">customerProfilesIntegrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.output">output</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList">EntityresolutionMatchingWorkflowOutputSourceConfigOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalizationInput">applyNormalizationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfigInput">customerProfilesIntegrationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArnInput">kmsArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputInput">outputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3PathInput">outputS3PathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalization">applyNormalization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArn">kmsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3Path">outputS3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customerProfilesIntegrationConfig`<sup>Required</sup> <a name="customerProfilesIntegrationConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfig"></a>

```java
public EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference getCustomerProfilesIntegrationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.output"></a>

```java
public EntityresolutionMatchingWorkflowOutputSourceConfigOutputList getOutput();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputList">EntityresolutionMatchingWorkflowOutputSourceConfigOutputList</a>

---

##### `applyNormalizationInput`<sup>Optional</sup> <a name="applyNormalizationInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalizationInput"></a>

```java
public java.lang.Boolean|IResolvable getApplyNormalizationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `customerProfilesIntegrationConfigInput`<sup>Optional</sup> <a name="customerProfilesIntegrationConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfigInput"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig getCustomerProfilesIntegrationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">EntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a>

---

##### `kmsArnInput`<sup>Optional</sup> <a name="kmsArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArnInput"></a>

```java
public java.lang.String getKmsArnInput();
```

- *Type:* java.lang.String

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputInput"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowOutputSourceConfigOutput> getOutputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutput">EntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>>

---

##### `outputS3PathInput`<sup>Optional</sup> <a name="outputS3PathInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3PathInput"></a>

```java
public java.lang.String getOutputS3PathInput();
```

- *Type:* java.lang.String

---

##### `applyNormalization`<sup>Required</sup> <a name="applyNormalization" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalization"></a>

```java
public java.lang.Boolean|IResolvable getApplyNormalization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsArn`<sup>Required</sup> <a name="kmsArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArn"></a>

```java
public java.lang.String getKmsArn();
```

- *Type:* java.lang.String

---

##### `outputS3Path`<sup>Required</sup> <a name="outputS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3Path"></a>

```java
public java.lang.String getOutputS3Path();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowOutputSourceConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowOutputSourceConfig">EntityresolutionMatchingWorkflowOutputSourceConfig</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference;

new EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putProviderProperties">putProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleBasedProperties">putRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleConditionProperties">putRuleConditionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetEnableRealTimeMatching">resetEnableRealTimeMatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetProviderProperties">resetProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetResolutionType">resetResolutionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetRuleBasedProperties">resetRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetRuleConditionProperties">resetRuleConditionProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderProperties` <a name="putProviderProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putProviderProperties"></a>

```java
public void putProviderProperties(EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putProviderProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a>

---

##### `putRuleBasedProperties` <a name="putRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleBasedProperties"></a>

```java
public void putRuleBasedProperties(EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleBasedProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a>

---

##### `putRuleConditionProperties` <a name="putRuleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleConditionProperties"></a>

```java
public void putRuleConditionProperties(EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.putRuleConditionProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a>

---

##### `resetEnableRealTimeMatching` <a name="resetEnableRealTimeMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetEnableRealTimeMatching"></a>

```java
public void resetEnableRealTimeMatching()
```

##### `resetProviderProperties` <a name="resetProviderProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetProviderProperties"></a>

```java
public void resetProviderProperties()
```

##### `resetResolutionType` <a name="resetResolutionType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetResolutionType"></a>

```java
public void resetResolutionType()
```

##### `resetRuleBasedProperties` <a name="resetRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetRuleBasedProperties"></a>

```java
public void resetRuleBasedProperties()
```

##### `resetRuleConditionProperties` <a name="resetRuleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resetRuleConditionProperties"></a>

```java
public void resetRuleConditionProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerProperties">providerProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedProperties">ruleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionProperties">ruleConditionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatchingInput">enableRealTimeMatchingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerPropertiesInput">providerPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionTypeInput">resolutionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedPropertiesInput">ruleBasedPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionPropertiesInput">ruleConditionPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatching">enableRealTimeMatching</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionType">resolutionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `providerProperties`<sup>Required</sup> <a name="providerProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerProperties"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference getProviderProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference</a>

---

##### `ruleBasedProperties`<sup>Required</sup> <a name="ruleBasedProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedProperties"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference getRuleBasedProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference</a>

---

##### `ruleConditionProperties`<sup>Required</sup> <a name="ruleConditionProperties" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionProperties"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference getRuleConditionProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference</a>

---

##### `enableRealTimeMatchingInput`<sup>Optional</sup> <a name="enableRealTimeMatchingInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatchingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableRealTimeMatchingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `providerPropertiesInput`<sup>Optional</sup> <a name="providerPropertiesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerPropertiesInput"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties getProviderPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a>

---

##### `resolutionTypeInput`<sup>Optional</sup> <a name="resolutionTypeInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionTypeInput"></a>

```java
public java.lang.String getResolutionTypeInput();
```

- *Type:* java.lang.String

---

##### `ruleBasedPropertiesInput`<sup>Optional</sup> <a name="ruleBasedPropertiesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedPropertiesInput"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties getRuleBasedPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a>

---

##### `ruleConditionPropertiesInput`<sup>Optional</sup> <a name="ruleConditionPropertiesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionPropertiesInput"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties getRuleConditionPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a>

---

##### `enableRealTimeMatching`<sup>Required</sup> <a name="enableRealTimeMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatching"></a>

```java
public java.lang.Boolean|IResolvable getEnableRealTimeMatching();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resolutionType`<sup>Required</sup> <a name="resolutionType" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionType"></a>

```java
public java.lang.String getResolutionType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowResolutionTechniques getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniques">EntityresolutionMatchingWorkflowResolutionTechniques</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference;

new EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resetIntermediateS3Path">resetIntermediateS3Path</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntermediateS3Path` <a name="resetIntermediateS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resetIntermediateS3Path"></a>

```java
public void resetIntermediateS3Path()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3PathInput">intermediateS3PathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path">intermediateS3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intermediateS3PathInput`<sup>Optional</sup> <a name="intermediateS3PathInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3PathInput"></a>

```java
public java.lang.String getIntermediateS3PathInput();
```

- *Type:* java.lang.String

---

##### `intermediateS3Path`<sup>Required</sup> <a name="intermediateS3Path" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path"></a>

```java
public java.lang.String getIntermediateS3Path();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference;

new EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration">putIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetIntermediateSourceConfiguration">resetIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetProviderConfiguration">resetProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetProviderServiceArn">resetProviderServiceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntermediateSourceConfiguration` <a name="putIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration"></a>

```java
public void putIntermediateSourceConfiguration(EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---

##### `resetIntermediateSourceConfiguration` <a name="resetIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetIntermediateSourceConfiguration"></a>

```java
public void resetIntermediateSourceConfiguration()
```

##### `resetProviderConfiguration` <a name="resetProviderConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetProviderConfiguration"></a>

```java
public void resetProviderConfiguration()
```

##### `resetProviderServiceArn` <a name="resetProviderServiceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resetProviderServiceArn"></a>

```java
public void resetProviderServiceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration">intermediateSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfigurationInput">intermediateSourceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfigurationInput">providerConfigurationInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArnInput">providerServiceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfiguration">providerConfiguration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArn">providerServiceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intermediateSourceConfiguration`<sup>Required</sup> <a name="intermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference getIntermediateSourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a>

---

##### `intermediateSourceConfigurationInput`<sup>Optional</sup> <a name="intermediateSourceConfigurationInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfigurationInput"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration getIntermediateSourceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---

##### `providerConfigurationInput`<sup>Optional</sup> <a name="providerConfigurationInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfigurationInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProviderConfigurationInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `providerServiceArnInput`<sup>Optional</sup> <a name="providerServiceArnInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArnInput"></a>

```java
public java.lang.String getProviderServiceArnInput();
```

- *Type:* java.lang.String

---

##### `providerConfiguration`<sup>Required</sup> <a name="providerConfiguration" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProviderConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `providerServiceArn`<sup>Required</sup> <a name="providerServiceArn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```java
public java.lang.String getProviderServiceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">EntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference;

new EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel">resetAttributeMatchingModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetMatchPurpose">resetMatchPurpose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>>

---

##### `resetAttributeMatchingModel` <a name="resetAttributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel"></a>

```java
public void resetAttributeMatchingModel()
```

##### `resetMatchPurpose` <a name="resetMatchPurpose" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetMatchPurpose"></a>

```java
public void resetMatchPurpose()
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput">attributeMatchingModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurposeInput">matchPurposeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">attributeMatchingModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurpose">matchPurpose</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rules"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList</a>

---

##### `attributeMatchingModelInput`<sup>Optional</sup> <a name="attributeMatchingModelInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput"></a>

```java
public java.lang.String getAttributeMatchingModelInput();
```

- *Type:* java.lang.String

---

##### `matchPurposeInput`<sup>Optional</sup> <a name="matchPurposeInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurposeInput"></a>

```java
public java.lang.String getMatchPurposeInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rulesInput"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>>

---

##### `attributeMatchingModel`<sup>Required</sup> <a name="attributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```java
public java.lang.String getAttributeMatchingModel();
```

- *Type:* java.lang.String

---

##### `matchPurpose`<sup>Required</sup> <a name="matchPurpose" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurpose"></a>

```java
public java.lang.String getMatchPurpose();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList;

new EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference;

new EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys">resetMatchingKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchingKeys` <a name="resetMatchingKeys" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys"></a>

```java
public void resetMatchingKeys()
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resetRuleName"></a>

```java
public void resetRuleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput">matchingKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">matchingKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchingKeysInput`<sup>Optional</sup> <a name="matchingKeysInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput"></a>

```java
public java.util.List<java.lang.String> getMatchingKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `matchingKeys`<sup>Required</sup> <a name="matchingKeys" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```java
public java.util.List<java.lang.String> getMatchingKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference;

new EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resetEnableTransitiveMatching">resetEnableTransitiveMatching</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableTransitiveMatching` <a name="resetEnableTransitiveMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resetEnableTransitiveMatching"></a>

```java
public void resetEnableTransitiveMatching()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatchingInput">enableTransitiveMatchingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatching">enableTransitiveMatching</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableTransitiveMatchingInput`<sup>Optional</sup> <a name="enableTransitiveMatchingInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatchingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableTransitiveMatchingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableTransitiveMatching`<sup>Required</sup> <a name="enableTransitiveMatching" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatching"></a>

```java
public java.lang.Boolean|IResolvable getEnableTransitiveMatching();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference;

new EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putMatchingConfig">putMatchingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resetMatchingConfig">resetMatchingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchingConfig` <a name="putMatchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putMatchingConfig"></a>

```java
public void putMatchingConfig(EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putMatchingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a>

---

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>>

---

##### `resetMatchingConfig` <a name="resetMatchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resetMatchingConfig"></a>

```java
public void resetMatchingConfig()
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfig">matchingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfigInput">matchingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchingConfig`<sup>Required</sup> <a name="matchingConfig" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfig"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference getMatchingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rules"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList</a>

---

##### `matchingConfigInput`<sup>Optional</sup> <a name="matchingConfigInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfigInput"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig getMatchingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rulesInput"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList;

new EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get"></a>

```java
public EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>>

---


### EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference <a name="EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference;

new EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resetRuleName"></a>

```java
public void resetRuleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">EntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>

---


### EntityresolutionMatchingWorkflowTagsList <a name="EntityresolutionMatchingWorkflowTagsList" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowTagsList;

new EntityresolutionMatchingWorkflowTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.get"></a>

```java
public EntityresolutionMatchingWorkflowTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EntityresolutionMatchingWorkflowTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>>

---


### EntityresolutionMatchingWorkflowTagsOutputReference <a name="EntityresolutionMatchingWorkflowTagsOutputReference" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.entityresolution_matching_workflow.EntityresolutionMatchingWorkflowTagsOutputReference;

new EntityresolutionMatchingWorkflowTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityresolutionMatchingWorkflowTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionMatchingWorkflow.EntityresolutionMatchingWorkflowTags">EntityresolutionMatchingWorkflowTags</a>

---



