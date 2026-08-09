# `stepfunctionsStateMachineVersion` Submodule <a name="`stepfunctionsStateMachineVersion` Submodule" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StepfunctionsStateMachineVersion <a name="StepfunctionsStateMachineVersion" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_version awscc_stepfunctions_state_machine_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_version.StepfunctionsStateMachineVersion;

StepfunctionsStateMachineVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .stateMachineArn(java.lang.String)
//  .description(java.lang.String)
//  .stateMachineRevisionId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.stateMachineArn">stateMachineArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_version#state_machine_arn StepfunctionsStateMachineVersion#state_machine_arn}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_version#description StepfunctionsStateMachineVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.stateMachineRevisionId">stateMachineRevisionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_version#state_machine_revision_id StepfunctionsStateMachineVersion#state_machine_revision_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.stateMachineArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_version#state_machine_arn StepfunctionsStateMachineVersion#state_machine_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_version#description StepfunctionsStateMachineVersion#description}.

---

##### `stateMachineRevisionId`<sup>Optional</sup> <a name="stateMachineRevisionId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.stateMachineRevisionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_version#state_machine_revision_id StepfunctionsStateMachineVersion#state_machine_revision_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.resetStateMachineRevisionId">resetStateMachineRevisionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetStateMachineRevisionId` <a name="resetStateMachineRevisionId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.resetStateMachineRevisionId"></a>

```java
public void resetStateMachineRevisionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StepfunctionsStateMachineVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isConstruct"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_version.StepfunctionsStateMachineVersion;

StepfunctionsStateMachineVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_version.StepfunctionsStateMachineVersion;

StepfunctionsStateMachineVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_version.StepfunctionsStateMachineVersion;

StepfunctionsStateMachineVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_version.StepfunctionsStateMachineVersion;

StepfunctionsStateMachineVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StepfunctionsStateMachineVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StepfunctionsStateMachineVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StepfunctionsStateMachineVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StepfunctionsStateMachineVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StepfunctionsStateMachineVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineArnInput">stateMachineArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineRevisionIdInput">stateMachineRevisionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineArn">stateMachineArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineRevisionId">stateMachineRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `stateMachineArnInput`<sup>Optional</sup> <a name="stateMachineArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineArnInput"></a>

```java
public java.lang.String getStateMachineArnInput();
```

- *Type:* java.lang.String

---

##### `stateMachineRevisionIdInput`<sup>Optional</sup> <a name="stateMachineRevisionIdInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineRevisionIdInput"></a>

```java
public java.lang.String getStateMachineRevisionIdInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineArn"></a>

```java
public java.lang.String getStateMachineArn();
```

- *Type:* java.lang.String

---

##### `stateMachineRevisionId`<sup>Required</sup> <a name="stateMachineRevisionId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineRevisionId"></a>

```java
public java.lang.String getStateMachineRevisionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StepfunctionsStateMachineVersionConfig <a name="StepfunctionsStateMachineVersionConfig" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_version.StepfunctionsStateMachineVersionConfig;

StepfunctionsStateMachineVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .stateMachineArn(java.lang.String)
//  .description(java.lang.String)
//  .stateMachineRevisionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.stateMachineArn">stateMachineArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_version#state_machine_arn StepfunctionsStateMachineVersion#state_machine_arn}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_version#description StepfunctionsStateMachineVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.stateMachineRevisionId">stateMachineRevisionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_version#state_machine_revision_id StepfunctionsStateMachineVersion#state_machine_revision_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.stateMachineArn"></a>

```java
public java.lang.String getStateMachineArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_version#state_machine_arn StepfunctionsStateMachineVersion#state_machine_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_version#description StepfunctionsStateMachineVersion#description}.

---

##### `stateMachineRevisionId`<sup>Optional</sup> <a name="stateMachineRevisionId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.stateMachineRevisionId"></a>

```java
public java.lang.String getStateMachineRevisionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_version#state_machine_revision_id StepfunctionsStateMachineVersion#state_machine_revision_id}.

---



