# `transferWorkflow` Submodule <a name="`transferWorkflow` Submodule" id="@cdktn/provider-awscc.transferWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferWorkflow <a name="TransferWorkflow" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow awscc_transfer_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflow;

TransferWorkflow.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .steps(IResolvable|java.util.List<TransferWorkflowSteps>)
//  .description(java.lang.String)
//  .onExceptionSteps(IResolvable|java.util.List<TransferWorkflowOnExceptionSteps>)
//  .tags(IResolvable|java.util.List<TransferWorkflowTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.steps">steps</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>></code> | Specifies the details for the steps that are in the specified workflow. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A textual description for the workflow. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.onExceptionSteps">onExceptionSteps</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>></code> | Specifies the steps (actions) to take if any errors are encountered during execution of the workflow. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>></code> | Key-value pairs that can be used to group and search for workflows. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.steps"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>>

Specifies the details for the steps that are in the specified workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#steps TransferWorkflow#steps}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A textual description for the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#description TransferWorkflow#description}

---

##### `onExceptionSteps`<sup>Optional</sup> <a name="onExceptionSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.onExceptionSteps"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>>

Specifies the steps (actions) to take if any errors are encountered during execution of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#on_exception_steps TransferWorkflow#on_exception_steps}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>>

Key-value pairs that can be used to group and search for workflows.

Tags are metadata attached to workflows for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putOnExceptionSteps">putOnExceptionSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetOnExceptionSteps">resetOnExceptionSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOnExceptionSteps` <a name="putOnExceptionSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putOnExceptionSteps"></a>

```java
public void putOnExceptionSteps(IResolvable|java.util.List<TransferWorkflowOnExceptionSteps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putOnExceptionSteps.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>>

---

##### `putSteps` <a name="putSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putSteps"></a>

```java
public void putSteps(IResolvable|java.util.List<TransferWorkflowSteps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putSteps.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<TransferWorkflowTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetOnExceptionSteps` <a name="resetOnExceptionSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetOnExceptionSteps"></a>

```java
public void resetOnExceptionSteps()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransferWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isConstruct"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflow;

TransferWorkflow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflow;

TransferWorkflow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflow;

TransferWorkflow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflow;

TransferWorkflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TransferWorkflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TransferWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TransferWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TransferWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TransferWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.onExceptionSteps">onExceptionSteps</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList">TransferWorkflowOnExceptionStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.steps">steps</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList">TransferWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList">TransferWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.workflowId">workflowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.onExceptionStepsInput">onExceptionStepsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.stepsInput">stepsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `onExceptionSteps`<sup>Required</sup> <a name="onExceptionSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.onExceptionSteps"></a>

```java
public TransferWorkflowOnExceptionStepsList getOnExceptionSteps();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList">TransferWorkflowOnExceptionStepsList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.steps"></a>

```java
public TransferWorkflowStepsList getSteps();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList">TransferWorkflowStepsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.tags"></a>

```java
public TransferWorkflowTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList">TransferWorkflowTagsList</a>

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.workflowId"></a>

```java
public java.lang.String getWorkflowId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `onExceptionStepsInput`<sup>Optional</sup> <a name="onExceptionStepsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.onExceptionStepsInput"></a>

```java
public IResolvable|java.util.List<TransferWorkflowOnExceptionSteps> getOnExceptionStepsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>>

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.stepsInput"></a>

```java
public IResolvable|java.util.List<TransferWorkflowSteps> getStepsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.tagsInput"></a>

```java
public IResolvable|java.util.List<TransferWorkflowTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransferWorkflowConfig <a name="TransferWorkflowConfig" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowConfig;

TransferWorkflowConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .steps(IResolvable|java.util.List<TransferWorkflowSteps>)
//  .description(java.lang.String)
//  .onExceptionSteps(IResolvable|java.util.List<TransferWorkflowOnExceptionSteps>)
//  .tags(IResolvable|java.util.List<TransferWorkflowTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.steps">steps</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>></code> | Specifies the details for the steps that are in the specified workflow. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.description">description</a></code> | <code>java.lang.String</code> | A textual description for the workflow. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.onExceptionSteps">onExceptionSteps</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>></code> | Specifies the steps (actions) to take if any errors are encountered during execution of the workflow. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>></code> | Key-value pairs that can be used to group and search for workflows. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.steps"></a>

```java
public IResolvable|java.util.List<TransferWorkflowSteps> getSteps();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>>

Specifies the details for the steps that are in the specified workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#steps TransferWorkflow#steps}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A textual description for the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#description TransferWorkflow#description}

---

##### `onExceptionSteps`<sup>Optional</sup> <a name="onExceptionSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.onExceptionSteps"></a>

```java
public IResolvable|java.util.List<TransferWorkflowOnExceptionSteps> getOnExceptionSteps();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>>

Specifies the steps (actions) to take if any errors are encountered during execution of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#on_exception_steps TransferWorkflow#on_exception_steps}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowConfig.property.tags"></a>

```java
public IResolvable|java.util.List<TransferWorkflowTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>>

Key-value pairs that can be used to group and search for workflows.

Tags are metadata attached to workflows for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

### TransferWorkflowOnExceptionSteps <a name="TransferWorkflowOnExceptionSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionSteps;

TransferWorkflowOnExceptionSteps.builder()
//  .copyStepDetails(TransferWorkflowOnExceptionStepsCopyStepDetails)
//  .customStepDetails(TransferWorkflowOnExceptionStepsCustomStepDetails)
//  .decryptStepDetails(TransferWorkflowOnExceptionStepsDecryptStepDetails)
//  .deleteStepDetails(TransferWorkflowOnExceptionStepsDeleteStepDetails)
//  .tagStepDetails(TransferWorkflowOnExceptionStepsTagStepDetails)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.copyStepDetails">copyStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | Details for a step that performs a file copy. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.customStepDetails">customStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | Details for a step that invokes a lambda function. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.decryptStepDetails">decryptStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | Details for a step that performs a file decryption. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.deleteStepDetails">deleteStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | Details for a step that deletes the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.tagStepDetails">tagStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | Details for a step that creates one or more tags. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |

---

##### `copyStepDetails`<sup>Optional</sup> <a name="copyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.copyStepDetails"></a>

```java
public TransferWorkflowOnExceptionStepsCopyStepDetails getCopyStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

Details for a step that performs a file copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}

---

##### `customStepDetails`<sup>Optional</sup> <a name="customStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.customStepDetails"></a>

```java
public TransferWorkflowOnExceptionStepsCustomStepDetails getCustomStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

Details for a step that invokes a lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}

---

##### `decryptStepDetails`<sup>Optional</sup> <a name="decryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.decryptStepDetails"></a>

```java
public TransferWorkflowOnExceptionStepsDecryptStepDetails getDecryptStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

Details for a step that performs a file decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}

---

##### `deleteStepDetails`<sup>Optional</sup> <a name="deleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.deleteStepDetails"></a>

```java
public TransferWorkflowOnExceptionStepsDeleteStepDetails getDeleteStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

Details for a step that deletes the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}

---

##### `tagStepDetails`<sup>Optional</sup> <a name="tagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.tagStepDetails"></a>

```java
public TransferWorkflowOnExceptionStepsTagStepDetails getTagStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

Details for a step that creates one or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

### TransferWorkflowOnExceptionStepsCopyStepDetails <a name="TransferWorkflowOnExceptionStepsCopyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsCopyStepDetails;

TransferWorkflowOnExceptionStepsCopyStepDetails.builder()
//  .destinationFileLocation(TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation)
//  .name(java.lang.String)
//  .overwriteExisting(java.lang.String)
//  .sourceFileLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.name">name</a></code> | <code>java.lang.String</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.overwriteExisting">overwriteExisting</a></code> | <code>java.lang.String</code> | A flag that indicates whether or not to overwrite an existing file of the same name. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | Specifies which file to use as input to the workflow step. |

---

##### `destinationFileLocation`<sup>Optional</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.destinationFileLocation"></a>

```java
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation getDestinationFileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `overwriteExisting`<sup>Optional</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.overwriteExisting"></a>

```java
public java.lang.String getOverwriteExisting();
```

- *Type:* java.lang.String

A flag that indicates whether or not to overwrite an existing file of the same name.

The default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation;

TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.builder()
//  .s3FileLocation(TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | Specifies the details for a S3 file. |

---

##### `s3FileLocation`<sup>Optional</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```java
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation getS3FileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

Specifies the details for a S3 file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation;

TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.builder()
//  .bucket(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Specifies the S3 bucket that contains the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>java.lang.String</code> | The name assigned to the file when it was created in S3. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Specifies the S3 bucket that contains the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name assigned to the file when it was created in S3.

You use the object key to retrieve the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#key TransferWorkflow#key}

---

### TransferWorkflowOnExceptionStepsCustomStepDetails <a name="TransferWorkflowOnExceptionStepsCustomStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsCustomStepDetails;

TransferWorkflowOnExceptionStepsCustomStepDetails.builder()
//  .name(java.lang.String)
//  .sourceFileLocation(java.lang.String)
//  .target(java.lang.String)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.name">name</a></code> | <code>java.lang.String</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | Specifies which file to use as input to the workflow step. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.target">target</a></code> | <code>java.lang.String</code> | The ARN for the lambda function that is being called. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Timeout, in seconds, for the step. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

The ARN for the lambda function that is being called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#target TransferWorkflow#target}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Timeout, in seconds, for the step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}

---

### TransferWorkflowOnExceptionStepsDecryptStepDetails <a name="TransferWorkflowOnExceptionStepsDecryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsDecryptStepDetails;

TransferWorkflowOnExceptionStepsDecryptStepDetails.builder()
//  .destinationFileLocation(TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation)
//  .name(java.lang.String)
//  .overwriteExisting(java.lang.String)
//  .sourceFileLocation(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.name">name</a></code> | <code>java.lang.String</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.overwriteExisting">overwriteExisting</a></code> | <code>java.lang.String</code> | A flag that indicates whether or not to overwrite an existing file of the same name. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | Specifies which file to use as input to the workflow step. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.type">type</a></code> | <code>java.lang.String</code> | Specifies which encryption method to use. |

---

##### `destinationFileLocation`<sup>Optional</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.destinationFileLocation"></a>

```java
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation getDestinationFileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `overwriteExisting`<sup>Optional</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.overwriteExisting"></a>

```java
public java.lang.String getOverwriteExisting();
```

- *Type:* java.lang.String

A flag that indicates whether or not to overwrite an existing file of the same name.

The default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies which encryption method to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#type TransferWorkflow#type}

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation;

TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.builder()
//  .efsFileLocation(TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation)
//  .s3FileLocation(TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | Specifies the details for an EFS file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | Specifies the details for a S3 file. |

---

##### `efsFileLocation`<sup>Optional</sup> <a name="efsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```java
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation getEfsFileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

Specifies the details for an EFS file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `s3FileLocation`<sup>Optional</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```java
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation getS3FileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

Specifies the details for a S3 file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;

TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.builder()
//  .fileSystemId(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | Specifies the EFS filesystem that contains the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path">path</a></code> | <code>java.lang.String</code> | The name assigned to the file when it was created in EFS. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

Specifies the EFS filesystem that contains the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The name assigned to the file when it was created in EFS.

You use the object path to retrieve the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#path TransferWorkflow#path}

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;

TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.builder()
//  .bucket(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Specifies the S3 bucket that contains the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>java.lang.String</code> | The name assigned to the file when it was created in S3. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Specifies the S3 bucket that contains the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name assigned to the file when it was created in S3.

You use the object key to retrieve the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#key TransferWorkflow#key}

---

### TransferWorkflowOnExceptionStepsDeleteStepDetails <a name="TransferWorkflowOnExceptionStepsDeleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsDeleteStepDetails;

TransferWorkflowOnExceptionStepsDeleteStepDetails.builder()
//  .name(java.lang.String)
//  .sourceFileLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.name">name</a></code> | <code>java.lang.String</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | Specifies which file to use as input to the workflow step. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

### TransferWorkflowOnExceptionStepsTagStepDetails <a name="TransferWorkflowOnExceptionStepsTagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsTagStepDetails;

TransferWorkflowOnExceptionStepsTagStepDetails.builder()
//  .name(java.lang.String)
//  .sourceFileLocation(java.lang.String)
//  .tags(IResolvable|java.util.List<TransferWorkflowOnExceptionStepsTagStepDetailsTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.name">name</a></code> | <code>java.lang.String</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | Specifies which file to use as input to the workflow step. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>></code> | Array that contains from 1 to 10 key/value pairs. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.tags"></a>

```java
public IResolvable|java.util.List<TransferWorkflowOnExceptionStepsTagStepDetailsTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>>

Array that contains from 1 to 10 key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

### TransferWorkflowOnExceptionStepsTagStepDetailsTags <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags;

TransferWorkflowOnExceptionStepsTagStepDetailsTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.key">key</a></code> | <code>java.lang.String</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.value">value</a></code> | <code>java.lang.String</code> | The value that corresponds to the key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#key TransferWorkflow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value that corresponds to the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#value TransferWorkflow#value}

---

### TransferWorkflowSteps <a name="TransferWorkflowSteps" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowSteps;

TransferWorkflowSteps.builder()
//  .copyStepDetails(TransferWorkflowStepsCopyStepDetails)
//  .customStepDetails(TransferWorkflowStepsCustomStepDetails)
//  .decryptStepDetails(TransferWorkflowStepsDecryptStepDetails)
//  .deleteStepDetails(TransferWorkflowStepsDeleteStepDetails)
//  .tagStepDetails(TransferWorkflowStepsTagStepDetails)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.copyStepDetails">copyStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | Details for a step that performs a file copy. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.customStepDetails">customStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | Details for a step that invokes a lambda function. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.decryptStepDetails">decryptStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | Details for a step that performs a file decryption. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.deleteStepDetails">deleteStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | Details for a step that deletes the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.tagStepDetails">tagStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | Details for a step that creates one or more tags. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |

---

##### `copyStepDetails`<sup>Optional</sup> <a name="copyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.copyStepDetails"></a>

```java
public TransferWorkflowStepsCopyStepDetails getCopyStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

Details for a step that performs a file copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}

---

##### `customStepDetails`<sup>Optional</sup> <a name="customStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.customStepDetails"></a>

```java
public TransferWorkflowStepsCustomStepDetails getCustomStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

Details for a step that invokes a lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}

---

##### `decryptStepDetails`<sup>Optional</sup> <a name="decryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.decryptStepDetails"></a>

```java
public TransferWorkflowStepsDecryptStepDetails getDecryptStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

Details for a step that performs a file decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}

---

##### `deleteStepDetails`<sup>Optional</sup> <a name="deleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.deleteStepDetails"></a>

```java
public TransferWorkflowStepsDeleteStepDetails getDeleteStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

Details for a step that deletes the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}

---

##### `tagStepDetails`<sup>Optional</sup> <a name="tagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.tagStepDetails"></a>

```java
public TransferWorkflowStepsTagStepDetails getTagStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

Details for a step that creates one or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

### TransferWorkflowStepsCopyStepDetails <a name="TransferWorkflowStepsCopyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsCopyStepDetails;

TransferWorkflowStepsCopyStepDetails.builder()
//  .destinationFileLocation(TransferWorkflowStepsCopyStepDetailsDestinationFileLocation)
//  .name(java.lang.String)
//  .overwriteExisting(java.lang.String)
//  .sourceFileLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.name">name</a></code> | <code>java.lang.String</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.overwriteExisting">overwriteExisting</a></code> | <code>java.lang.String</code> | A flag that indicates whether or not to overwrite an existing file of the same name. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | Specifies which file to use as input to the workflow step. |

---

##### `destinationFileLocation`<sup>Optional</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.destinationFileLocation"></a>

```java
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocation getDestinationFileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `overwriteExisting`<sup>Optional</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.overwriteExisting"></a>

```java
public java.lang.String getOverwriteExisting();
```

- *Type:* java.lang.String

A flag that indicates whether or not to overwrite an existing file of the same name.

The default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

### TransferWorkflowStepsCopyStepDetailsDestinationFileLocation <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation;

TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.builder()
//  .s3FileLocation(TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | Specifies the details for a S3 file. |

---

##### `s3FileLocation`<sup>Optional</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```java
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation getS3FileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

Specifies the details for a S3 file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation;

TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.builder()
//  .bucket(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Specifies the S3 bucket that contains the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>java.lang.String</code> | The name assigned to the file when it was created in S3. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Specifies the S3 bucket that contains the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name assigned to the file when it was created in S3.

You use the object key to retrieve the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#key TransferWorkflow#key}

---

### TransferWorkflowStepsCustomStepDetails <a name="TransferWorkflowStepsCustomStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsCustomStepDetails;

TransferWorkflowStepsCustomStepDetails.builder()
//  .name(java.lang.String)
//  .sourceFileLocation(java.lang.String)
//  .target(java.lang.String)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.name">name</a></code> | <code>java.lang.String</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | Specifies which file to use as input to the workflow step. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.target">target</a></code> | <code>java.lang.String</code> | The ARN for the lambda function that is being called. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Timeout, in seconds, for the step. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

The ARN for the lambda function that is being called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#target TransferWorkflow#target}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Timeout, in seconds, for the step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}

---

### TransferWorkflowStepsDecryptStepDetails <a name="TransferWorkflowStepsDecryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsDecryptStepDetails;

TransferWorkflowStepsDecryptStepDetails.builder()
//  .destinationFileLocation(TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation)
//  .name(java.lang.String)
//  .overwriteExisting(java.lang.String)
//  .sourceFileLocation(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.name">name</a></code> | <code>java.lang.String</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.overwriteExisting">overwriteExisting</a></code> | <code>java.lang.String</code> | A flag that indicates whether or not to overwrite an existing file of the same name. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | Specifies which file to use as input to the workflow step. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.type">type</a></code> | <code>java.lang.String</code> | Specifies which encryption method to use. |

---

##### `destinationFileLocation`<sup>Optional</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.destinationFileLocation"></a>

```java
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation getDestinationFileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `overwriteExisting`<sup>Optional</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.overwriteExisting"></a>

```java
public java.lang.String getOverwriteExisting();
```

- *Type:* java.lang.String

A flag that indicates whether or not to overwrite an existing file of the same name.

The default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies which encryption method to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#type TransferWorkflow#type}

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation;

TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.builder()
//  .efsFileLocation(TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation)
//  .s3FileLocation(TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | Specifies the details for an EFS file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | Specifies the details for a S3 file. |

---

##### `efsFileLocation`<sup>Optional</sup> <a name="efsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```java
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation getEfsFileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

Specifies the details for an EFS file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `s3FileLocation`<sup>Optional</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```java
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation getS3FileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

Specifies the details for a S3 file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;

TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.builder()
//  .fileSystemId(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | Specifies the EFS filesystem that contains the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path">path</a></code> | <code>java.lang.String</code> | The name assigned to the file when it was created in EFS. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

Specifies the EFS filesystem that contains the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The name assigned to the file when it was created in EFS.

You use the object path to retrieve the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#path TransferWorkflow#path}

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;

TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.builder()
//  .bucket(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Specifies the S3 bucket that contains the file. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>java.lang.String</code> | The name assigned to the file when it was created in S3. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Specifies the S3 bucket that contains the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name assigned to the file when it was created in S3.

You use the object key to retrieve the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#key TransferWorkflow#key}

---

### TransferWorkflowStepsDeleteStepDetails <a name="TransferWorkflowStepsDeleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsDeleteStepDetails;

TransferWorkflowStepsDeleteStepDetails.builder()
//  .name(java.lang.String)
//  .sourceFileLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.name">name</a></code> | <code>java.lang.String</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | Specifies which file to use as input to the workflow step. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

### TransferWorkflowStepsTagStepDetails <a name="TransferWorkflowStepsTagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsTagStepDetails;

TransferWorkflowStepsTagStepDetails.builder()
//  .name(java.lang.String)
//  .sourceFileLocation(java.lang.String)
//  .tags(IResolvable|java.util.List<TransferWorkflowStepsTagStepDetailsTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.name">name</a></code> | <code>java.lang.String</code> | The name of the step, used as an identifier. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | Specifies which file to use as input to the workflow step. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>></code> | Array that contains from 1 to 10 key/value pairs. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the step, used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#name TransferWorkflow#name}

---

##### `sourceFileLocation`<sup>Optional</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

Specifies which file to use as input to the workflow step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.tags"></a>

```java
public IResolvable|java.util.List<TransferWorkflowStepsTagStepDetailsTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>>

Array that contains from 1 to 10 key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

### TransferWorkflowStepsTagStepDetailsTags <a name="TransferWorkflowStepsTagStepDetailsTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsTagStepDetailsTags;

TransferWorkflowStepsTagStepDetailsTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.key">key</a></code> | <code>java.lang.String</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.value">value</a></code> | <code>java.lang.String</code> | The value that corresponds to the key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#key TransferWorkflow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value that corresponds to the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#value TransferWorkflow#value}

---

### TransferWorkflowTags <a name="TransferWorkflowTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowTags;

TransferWorkflowTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags.property.key">key</a></code> | <code>java.lang.String</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags.property.value">value</a></code> | <code>java.lang.String</code> | Contains one or more values that you assigned to the key name you create. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#key TransferWorkflow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Contains one or more values that you assigned to the key name you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_workflow#value TransferWorkflow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference;

new TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">putS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">resetS3FileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3FileLocation` <a name="putS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```java
public void putS3FileLocation(TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `resetS3FileLocation` <a name="resetS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```java
public void resetS3FileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3FileLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3FileLocation`<sup>Required</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```java
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference getS3FileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `s3FileLocationInput`<sup>Optional</sup> <a name="s3FileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation getS3FileLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference;

new TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference;

new TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation">putDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetDestinationFileLocation">resetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetOverwriteExisting">resetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationFileLocation` <a name="putDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation"></a>

```java
public void putDestinationFileLocation(TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `resetDestinationFileLocation` <a name="resetDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetDestinationFileLocation"></a>

```java
public void resetDestinationFileLocation()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOverwriteExisting` <a name="resetOverwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetOverwriteExisting"></a>

```java
public void resetOverwriteExisting()
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetSourceFileLocation"></a>

```java
public void resetSourceFileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput">destinationFileLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExistingInput">overwriteExistingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExisting">overwriteExisting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationFileLocation`<sup>Required</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocation"></a>

```java
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference getDestinationFileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destinationFileLocationInput`<sup>Optional</sup> <a name="destinationFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation getDestinationFileLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `overwriteExistingInput`<sup>Optional</sup> <a name="overwriteExistingInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExistingInput"></a>

```java
public java.lang.String getOverwriteExistingInput();
```

- *Type:* java.lang.String

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```java
public java.lang.String getSourceFileLocationInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `overwriteExisting`<sup>Required</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExisting"></a>

```java
public java.lang.String getOverwriteExisting();
```

- *Type:* java.lang.String

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsCopyStepDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

---


### TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference;

new TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetSourceFileLocation"></a>

```java
public void resetSourceFileLocation()
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```java
public java.lang.String getSourceFileLocationInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsCustomStepDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference;

new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```java
public void resetFileSystemId()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference;

new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">putEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">putS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">resetEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">resetS3FileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEfsFileLocation` <a name="putEfsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```java
public void putEfsFileLocation(TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `putS3FileLocation` <a name="putS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```java
public void putS3FileLocation(TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `resetEfsFileLocation` <a name="resetEfsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```java
public void resetEfsFileLocation()
```

##### `resetS3FileLocation` <a name="resetS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```java
public void resetS3FileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">efsFileLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3FileLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `efsFileLocation`<sup>Required</sup> <a name="efsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```java
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference getEfsFileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `s3FileLocation`<sup>Required</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```java
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference getS3FileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `efsFileLocationInput`<sup>Optional</sup> <a name="efsFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation getEfsFileLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `s3FileLocationInput`<sup>Optional</sup> <a name="s3FileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation getS3FileLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference;

new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference;

new TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation">putDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation">resetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetOverwriteExisting">resetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationFileLocation` <a name="putDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation"></a>

```java
public void putDestinationFileLocation(TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `resetDestinationFileLocation` <a name="resetDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation"></a>

```java
public void resetDestinationFileLocation()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOverwriteExisting` <a name="resetOverwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetOverwriteExisting"></a>

```java
public void resetOverwriteExisting()
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetSourceFileLocation"></a>

```java
public void resetSourceFileLocation()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput">destinationFileLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput">overwriteExistingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExisting">overwriteExisting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationFileLocation`<sup>Required</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocation"></a>

```java
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference getDestinationFileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destinationFileLocationInput`<sup>Optional</sup> <a name="destinationFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation getDestinationFileLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `overwriteExistingInput`<sup>Optional</sup> <a name="overwriteExistingInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput"></a>

```java
public java.lang.String getOverwriteExistingInput();
```

- *Type:* java.lang.String

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```java
public java.lang.String getSourceFileLocationInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `overwriteExisting`<sup>Required</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExisting"></a>

```java
public java.lang.String getOverwriteExisting();
```

- *Type:* java.lang.String

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsDecryptStepDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

---


### TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference;

new TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetSourceFileLocation"></a>

```java
public void resetSourceFileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```java
public java.lang.String getSourceFileLocationInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsDeleteStepDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

---


### TransferWorkflowOnExceptionStepsList <a name="TransferWorkflowOnExceptionStepsList" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsList;

new TransferWorkflowOnExceptionStepsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.get"></a>

```java
public TransferWorkflowOnExceptionStepsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TransferWorkflowOnExceptionSteps> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>>

---


### TransferWorkflowOnExceptionStepsOutputReference <a name="TransferWorkflowOnExceptionStepsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsOutputReference;

new TransferWorkflowOnExceptionStepsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails">putCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails">putCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails">putDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails">putDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails">putTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCopyStepDetails">resetCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCustomStepDetails">resetCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDecryptStepDetails">resetDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDeleteStepDetails">resetDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetTagStepDetails">resetTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCopyStepDetails` <a name="putCopyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails"></a>

```java
public void putCopyStepDetails(TransferWorkflowOnExceptionStepsCopyStepDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

---

##### `putCustomStepDetails` <a name="putCustomStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails"></a>

```java
public void putCustomStepDetails(TransferWorkflowOnExceptionStepsCustomStepDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

---

##### `putDecryptStepDetails` <a name="putDecryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails"></a>

```java
public void putDecryptStepDetails(TransferWorkflowOnExceptionStepsDecryptStepDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

---

##### `putDeleteStepDetails` <a name="putDeleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails"></a>

```java
public void putDeleteStepDetails(TransferWorkflowOnExceptionStepsDeleteStepDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

---

##### `putTagStepDetails` <a name="putTagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails"></a>

```java
public void putTagStepDetails(TransferWorkflowOnExceptionStepsTagStepDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

---

##### `resetCopyStepDetails` <a name="resetCopyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCopyStepDetails"></a>

```java
public void resetCopyStepDetails()
```

##### `resetCustomStepDetails` <a name="resetCustomStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCustomStepDetails"></a>

```java
public void resetCustomStepDetails()
```

##### `resetDecryptStepDetails` <a name="resetDecryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDecryptStepDetails"></a>

```java
public void resetDecryptStepDetails()
```

##### `resetDeleteStepDetails` <a name="resetDeleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDeleteStepDetails"></a>

```java
public void resetDeleteStepDetails()
```

##### `resetTagStepDetails` <a name="resetTagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetTagStepDetails"></a>

```java
public void resetTagStepDetails()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetails">copyStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetails">customStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetails">decryptStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetails">deleteStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetails">tagStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference">TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetailsInput">copyStepDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetailsInput">customStepDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetailsInput">decryptStepDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetailsInput">deleteStepDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetailsInput">tagStepDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `copyStepDetails`<sup>Required</sup> <a name="copyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetails"></a>

```java
public TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference getCopyStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference</a>

---

##### `customStepDetails`<sup>Required</sup> <a name="customStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetails"></a>

```java
public TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference getCustomStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference</a>

---

##### `decryptStepDetails`<sup>Required</sup> <a name="decryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetails"></a>

```java
public TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference getDecryptStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference</a>

---

##### `deleteStepDetails`<sup>Required</sup> <a name="deleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetails"></a>

```java
public TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference getDeleteStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference</a>

---

##### `tagStepDetails`<sup>Required</sup> <a name="tagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetails"></a>

```java
public TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference getTagStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference">TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference</a>

---

##### `copyStepDetailsInput`<sup>Optional</sup> <a name="copyStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetailsInput"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsCopyStepDetails getCopyStepDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

---

##### `customStepDetailsInput`<sup>Optional</sup> <a name="customStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetailsInput"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsCustomStepDetails getCustomStepDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

---

##### `decryptStepDetailsInput`<sup>Optional</sup> <a name="decryptStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetailsInput"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsDecryptStepDetails getDecryptStepDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

---

##### `deleteStepDetailsInput`<sup>Optional</sup> <a name="deleteStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetailsInput"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsDeleteStepDetails getDeleteStepDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

---

##### `tagStepDetailsInput`<sup>Optional</sup> <a name="tagStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetailsInput"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsTagStepDetails getTagStepDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowOnExceptionSteps getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>

---


### TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference;

new TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<TransferWorkflowOnExceptionStepsTagStepDetailsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetSourceFileLocation"></a>

```java
public void resetSourceFileLocation()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList">TransferWorkflowOnExceptionStepsTagStepDetailsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tags"></a>

```java
public TransferWorkflowOnExceptionStepsTagStepDetailsTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList">TransferWorkflowOnExceptionStepsTagStepDetailsTagsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```java
public java.lang.String getSourceFileLocationInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<TransferWorkflowOnExceptionStepsTagStepDetailsTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsTagStepDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

---


### TransferWorkflowOnExceptionStepsTagStepDetailsTagsList <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTagsList" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList;

new TransferWorkflowOnExceptionStepsTagStepDetailsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get"></a>

```java
public TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TransferWorkflowOnExceptionStepsTagStepDetailsTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>>

---


### TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference;

new TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowOnExceptionStepsTagStepDetailsTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>

---


### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference;

new TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">putS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">resetS3FileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3FileLocation` <a name="putS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```java
public void putS3FileLocation(TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `resetS3FileLocation` <a name="resetS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```java
public void resetS3FileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3FileLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3FileLocation`<sup>Required</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```java
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference getS3FileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `s3FileLocationInput`<sup>Optional</sup> <a name="s3FileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```java
public IResolvable|TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation getS3FileLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowStepsCopyStepDetailsDestinationFileLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference;

new TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowStepsCopyStepDetailsOutputReference <a name="TransferWorkflowStepsCopyStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsCopyStepDetailsOutputReference;

new TransferWorkflowStepsCopyStepDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation">putDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetDestinationFileLocation">resetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetOverwriteExisting">resetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationFileLocation` <a name="putDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation"></a>

```java
public void putDestinationFileLocation(TransferWorkflowStepsCopyStepDetailsDestinationFileLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `resetDestinationFileLocation` <a name="resetDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetDestinationFileLocation"></a>

```java
public void resetDestinationFileLocation()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOverwriteExisting` <a name="resetOverwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetOverwriteExisting"></a>

```java
public void resetOverwriteExisting()
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetSourceFileLocation"></a>

```java
public void resetSourceFileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput">destinationFileLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExistingInput">overwriteExistingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExisting">overwriteExisting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationFileLocation`<sup>Required</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocation"></a>

```java
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference getDestinationFileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destinationFileLocationInput`<sup>Optional</sup> <a name="destinationFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```java
public IResolvable|TransferWorkflowStepsCopyStepDetailsDestinationFileLocation getDestinationFileLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `overwriteExistingInput`<sup>Optional</sup> <a name="overwriteExistingInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExistingInput"></a>

```java
public java.lang.String getOverwriteExistingInput();
```

- *Type:* java.lang.String

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```java
public java.lang.String getSourceFileLocationInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `overwriteExisting`<sup>Required</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExisting"></a>

```java
public java.lang.String getOverwriteExisting();
```

- *Type:* java.lang.String

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowStepsCopyStepDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

---


### TransferWorkflowStepsCustomStepDetailsOutputReference <a name="TransferWorkflowStepsCustomStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsCustomStepDetailsOutputReference;

new TransferWorkflowStepsCustomStepDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetSourceFileLocation"></a>

```java
public void resetSourceFileLocation()
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```java
public java.lang.String getSourceFileLocationInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowStepsCustomStepDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference;

new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```java
public void resetFileSystemId()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference;

new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">putEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">putS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">resetEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">resetS3FileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEfsFileLocation` <a name="putEfsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```java
public void putEfsFileLocation(TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `putS3FileLocation` <a name="putS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```java
public void putS3FileLocation(TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `resetEfsFileLocation` <a name="resetEfsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```java
public void resetEfsFileLocation()
```

##### `resetS3FileLocation` <a name="resetS3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```java
public void resetS3FileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">efsFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">efsFileLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3FileLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `efsFileLocation`<sup>Required</sup> <a name="efsFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```java
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference getEfsFileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `s3FileLocation`<sup>Required</sup> <a name="s3FileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```java
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference getS3FileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `efsFileLocationInput`<sup>Optional</sup> <a name="efsFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```java
public IResolvable|TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation getEfsFileLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `s3FileLocationInput`<sup>Optional</sup> <a name="s3FileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```java
public IResolvable|TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation getS3FileLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference;

new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsDecryptStepDetailsOutputReference;

new TransferWorkflowStepsDecryptStepDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation">putDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation">resetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetOverwriteExisting">resetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationFileLocation` <a name="putDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation"></a>

```java
public void putDestinationFileLocation(TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `resetDestinationFileLocation` <a name="resetDestinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation"></a>

```java
public void resetDestinationFileLocation()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOverwriteExisting` <a name="resetOverwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetOverwriteExisting"></a>

```java
public void resetOverwriteExisting()
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetSourceFileLocation"></a>

```java
public void resetSourceFileLocation()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocation">destinationFileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput">destinationFileLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput">overwriteExistingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExisting">overwriteExisting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationFileLocation`<sup>Required</sup> <a name="destinationFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocation"></a>

```java
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference getDestinationFileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destinationFileLocationInput`<sup>Optional</sup> <a name="destinationFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```java
public IResolvable|TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation getDestinationFileLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `overwriteExistingInput`<sup>Optional</sup> <a name="overwriteExistingInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput"></a>

```java
public java.lang.String getOverwriteExistingInput();
```

- *Type:* java.lang.String

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```java
public java.lang.String getSourceFileLocationInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `overwriteExisting`<sup>Required</sup> <a name="overwriteExisting" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExisting"></a>

```java
public java.lang.String getOverwriteExisting();
```

- *Type:* java.lang.String

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowStepsDecryptStepDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

---


### TransferWorkflowStepsDeleteStepDetailsOutputReference <a name="TransferWorkflowStepsDeleteStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsDeleteStepDetailsOutputReference;

new TransferWorkflowStepsDeleteStepDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetSourceFileLocation"></a>

```java
public void resetSourceFileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```java
public java.lang.String getSourceFileLocationInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowStepsDeleteStepDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

---


### TransferWorkflowStepsList <a name="TransferWorkflowStepsList" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsList;

new TransferWorkflowStepsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.get"></a>

```java
public TransferWorkflowStepsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TransferWorkflowSteps> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>>

---


### TransferWorkflowStepsOutputReference <a name="TransferWorkflowStepsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsOutputReference;

new TransferWorkflowStepsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails">putCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails">putCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails">putDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails">putDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails">putTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetCopyStepDetails">resetCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetCustomStepDetails">resetCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetDecryptStepDetails">resetDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetDeleteStepDetails">resetDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetTagStepDetails">resetTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCopyStepDetails` <a name="putCopyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails"></a>

```java
public void putCopyStepDetails(TransferWorkflowStepsCopyStepDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

---

##### `putCustomStepDetails` <a name="putCustomStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails"></a>

```java
public void putCustomStepDetails(TransferWorkflowStepsCustomStepDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

---

##### `putDecryptStepDetails` <a name="putDecryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails"></a>

```java
public void putDecryptStepDetails(TransferWorkflowStepsDecryptStepDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

---

##### `putDeleteStepDetails` <a name="putDeleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails"></a>

```java
public void putDeleteStepDetails(TransferWorkflowStepsDeleteStepDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

---

##### `putTagStepDetails` <a name="putTagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails"></a>

```java
public void putTagStepDetails(TransferWorkflowStepsTagStepDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

---

##### `resetCopyStepDetails` <a name="resetCopyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetCopyStepDetails"></a>

```java
public void resetCopyStepDetails()
```

##### `resetCustomStepDetails` <a name="resetCustomStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetCustomStepDetails"></a>

```java
public void resetCustomStepDetails()
```

##### `resetDecryptStepDetails` <a name="resetDecryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetDecryptStepDetails"></a>

```java
public void resetDecryptStepDetails()
```

##### `resetDeleteStepDetails` <a name="resetDeleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetDeleteStepDetails"></a>

```java
public void resetDeleteStepDetails()
```

##### `resetTagStepDetails` <a name="resetTagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetTagStepDetails"></a>

```java
public void resetTagStepDetails()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetails">copyStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference">TransferWorkflowStepsCopyStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetails">customStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference">TransferWorkflowStepsCustomStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetails">decryptStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference">TransferWorkflowStepsDecryptStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetails">deleteStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference">TransferWorkflowStepsDeleteStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetails">tagStepDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference">TransferWorkflowStepsTagStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetailsInput">copyStepDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetailsInput">customStepDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetailsInput">decryptStepDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetailsInput">deleteStepDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetailsInput">tagStepDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `copyStepDetails`<sup>Required</sup> <a name="copyStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetails"></a>

```java
public TransferWorkflowStepsCopyStepDetailsOutputReference getCopyStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference">TransferWorkflowStepsCopyStepDetailsOutputReference</a>

---

##### `customStepDetails`<sup>Required</sup> <a name="customStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetails"></a>

```java
public TransferWorkflowStepsCustomStepDetailsOutputReference getCustomStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference">TransferWorkflowStepsCustomStepDetailsOutputReference</a>

---

##### `decryptStepDetails`<sup>Required</sup> <a name="decryptStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetails"></a>

```java
public TransferWorkflowStepsDecryptStepDetailsOutputReference getDecryptStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference">TransferWorkflowStepsDecryptStepDetailsOutputReference</a>

---

##### `deleteStepDetails`<sup>Required</sup> <a name="deleteStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetails"></a>

```java
public TransferWorkflowStepsDeleteStepDetailsOutputReference getDeleteStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference">TransferWorkflowStepsDeleteStepDetailsOutputReference</a>

---

##### `tagStepDetails`<sup>Required</sup> <a name="tagStepDetails" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetails"></a>

```java
public TransferWorkflowStepsTagStepDetailsOutputReference getTagStepDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference">TransferWorkflowStepsTagStepDetailsOutputReference</a>

---

##### `copyStepDetailsInput`<sup>Optional</sup> <a name="copyStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetailsInput"></a>

```java
public IResolvable|TransferWorkflowStepsCopyStepDetails getCopyStepDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

---

##### `customStepDetailsInput`<sup>Optional</sup> <a name="customStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetailsInput"></a>

```java
public IResolvable|TransferWorkflowStepsCustomStepDetails getCustomStepDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

---

##### `decryptStepDetailsInput`<sup>Optional</sup> <a name="decryptStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetailsInput"></a>

```java
public IResolvable|TransferWorkflowStepsDecryptStepDetails getDecryptStepDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

---

##### `deleteStepDetailsInput`<sup>Optional</sup> <a name="deleteStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetailsInput"></a>

```java
public IResolvable|TransferWorkflowStepsDeleteStepDetails getDeleteStepDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

---

##### `tagStepDetailsInput`<sup>Optional</sup> <a name="tagStepDetailsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetailsInput"></a>

```java
public IResolvable|TransferWorkflowStepsTagStepDetails getTagStepDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowSteps getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>

---


### TransferWorkflowStepsTagStepDetailsOutputReference <a name="TransferWorkflowStepsTagStepDetailsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsTagStepDetailsOutputReference;

new TransferWorkflowStepsTagStepDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetSourceFileLocation">resetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<TransferWorkflowStepsTagStepDetailsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSourceFileLocation` <a name="resetSourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetSourceFileLocation"></a>

```java
public void resetSourceFileLocation()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList">TransferWorkflowStepsTagStepDetailsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocationInput">sourceFileLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocation">sourceFileLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tags"></a>

```java
public TransferWorkflowStepsTagStepDetailsTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList">TransferWorkflowStepsTagStepDetailsTagsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceFileLocationInput`<sup>Optional</sup> <a name="sourceFileLocationInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```java
public java.lang.String getSourceFileLocationInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<TransferWorkflowStepsTagStepDetailsTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceFileLocation`<sup>Required</sup> <a name="sourceFileLocation" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocation"></a>

```java
public java.lang.String getSourceFileLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowStepsTagStepDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

---


### TransferWorkflowStepsTagStepDetailsTagsList <a name="TransferWorkflowStepsTagStepDetailsTagsList" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsTagStepDetailsTagsList;

new TransferWorkflowStepsTagStepDetailsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get"></a>

```java
public TransferWorkflowStepsTagStepDetailsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TransferWorkflowStepsTagStepDetailsTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>>

---


### TransferWorkflowStepsTagStepDetailsTagsOutputReference <a name="TransferWorkflowStepsTagStepDetailsTagsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference;

new TransferWorkflowStepsTagStepDetailsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowStepsTagStepDetailsTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>

---


### TransferWorkflowTagsList <a name="TransferWorkflowTagsList" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowTagsList;

new TransferWorkflowTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.get"></a>

```java
public TransferWorkflowTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TransferWorkflowTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>>

---


### TransferWorkflowTagsOutputReference <a name="TransferWorkflowTagsOutputReference" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_workflow.TransferWorkflowTagsOutputReference;

new TransferWorkflowTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferWorkflowTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferWorkflow.TransferWorkflowTags">TransferWorkflowTags</a>

---



