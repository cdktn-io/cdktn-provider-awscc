# `deadlineQueueEnvironment` Submodule <a name="`deadlineQueueEnvironment` Submodule" id="@cdktn/provider-awscc.deadlineQueueEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeadlineQueueEnvironment <a name="DeadlineQueueEnvironment" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment awscc_deadline_queue_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue_environment.DeadlineQueueEnvironment;

DeadlineQueueEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .farmId(java.lang.String)
    .priority(java.lang.Number)
    .queueId(java.lang.String)
    .template(java.lang.String)
    .templateType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.farmId">farmId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#farm_id DeadlineQueueEnvironment#farm_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#priority DeadlineQueueEnvironment#priority}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.queueId">queueId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#queue_id DeadlineQueueEnvironment#queue_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.template">template</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#template DeadlineQueueEnvironment#template}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.templateType">templateType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#template_type DeadlineQueueEnvironment#template_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.farmId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#farm_id DeadlineQueueEnvironment#farm_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#priority DeadlineQueueEnvironment#priority}.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.queueId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#queue_id DeadlineQueueEnvironment#queue_id}.

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.template"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#template DeadlineQueueEnvironment#template}.

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.Initializer.parameter.templateType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#template_type DeadlineQueueEnvironment#template_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DeadlineQueueEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.deadline_queue_environment.DeadlineQueueEnvironment;

DeadlineQueueEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.deadline_queue_environment.DeadlineQueueEnvironment;

DeadlineQueueEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.deadline_queue_environment.DeadlineQueueEnvironment;

DeadlineQueueEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.deadline_queue_environment.DeadlineQueueEnvironment;

DeadlineQueueEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DeadlineQueueEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DeadlineQueueEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DeadlineQueueEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DeadlineQueueEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DeadlineQueueEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.queueEnvironmentId">queueEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.farmIdInput">farmIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.queueIdInput">queueIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.templateInput">templateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.templateTypeInput">templateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.farmId">farmId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.queueId">queueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.templateType">templateType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `queueEnvironmentId`<sup>Required</sup> <a name="queueEnvironmentId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.queueEnvironmentId"></a>

```java
public java.lang.String getQueueEnvironmentId();
```

- *Type:* java.lang.String

---

##### `farmIdInput`<sup>Optional</sup> <a name="farmIdInput" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.farmIdInput"></a>

```java
public java.lang.String getFarmIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `queueIdInput`<sup>Optional</sup> <a name="queueIdInput" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.queueIdInput"></a>

```java
public java.lang.String getQueueIdInput();
```

- *Type:* java.lang.String

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.templateInput"></a>

```java
public java.lang.String getTemplateInput();
```

- *Type:* java.lang.String

---

##### `templateTypeInput`<sup>Optional</sup> <a name="templateTypeInput" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.templateTypeInput"></a>

```java
public java.lang.String getTemplateTypeInput();
```

- *Type:* java.lang.String

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.farmId"></a>

```java
public java.lang.String getFarmId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.queueId"></a>

```java
public java.lang.String getQueueId();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.templateType"></a>

```java
public java.lang.String getTemplateType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DeadlineQueueEnvironmentConfig <a name="DeadlineQueueEnvironmentConfig" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.deadline_queue_environment.DeadlineQueueEnvironmentConfig;

DeadlineQueueEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .farmId(java.lang.String)
    .priority(java.lang.Number)
    .queueId(java.lang.String)
    .template(java.lang.String)
    .templateType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.farmId">farmId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#farm_id DeadlineQueueEnvironment#farm_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#priority DeadlineQueueEnvironment#priority}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.queueId">queueId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#queue_id DeadlineQueueEnvironment#queue_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.template">template</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#template DeadlineQueueEnvironment#template}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.templateType">templateType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#template_type DeadlineQueueEnvironment#template_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.farmId"></a>

```java
public java.lang.String getFarmId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#farm_id DeadlineQueueEnvironment#farm_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#priority DeadlineQueueEnvironment#priority}.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.queueId"></a>

```java
public java.lang.String getQueueId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#queue_id DeadlineQueueEnvironment#queue_id}.

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#template DeadlineQueueEnvironment#template}.

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="@cdktn/provider-awscc.deadlineQueueEnvironment.DeadlineQueueEnvironmentConfig.property.templateType"></a>

```java
public java.lang.String getTemplateType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/deadline_queue_environment#template_type DeadlineQueueEnvironment#template_type}.

---



