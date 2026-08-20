# `sagemakerHumanTaskUi` Submodule <a name="`sagemakerHumanTaskUi` Submodule" id="@cdktn/provider-awscc.sagemakerHumanTaskUi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerHumanTaskUi <a name="SagemakerHumanTaskUi" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_human_task_ui awscc_sagemaker_human_task_ui}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_human_task_ui.SagemakerHumanTaskUi;

SagemakerHumanTaskUi.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .humanTaskUiName(java.lang.String)
//  .tags(IResolvable|java.util.List<SagemakerHumanTaskUiTags>)
//  .uiTemplate(SagemakerHumanTaskUiUiTemplate)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.humanTaskUiName">humanTaskUiName</a></code> | <code>java.lang.String</code> | The name of the human task user interface. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>></code> | An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.uiTemplate">uiTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | The Liquid template for the worker user interface. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `humanTaskUiName`<sup>Required</sup> <a name="humanTaskUiName" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.humanTaskUiName"></a>

- *Type:* java.lang.String

The name of the human task user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_human_task_ui#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>>

An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_human_task_ui#tags SagemakerHumanTaskUi#tags}

---

##### `uiTemplate`<sup>Optional</sup> <a name="uiTemplate" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.uiTemplate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

The Liquid template for the worker user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_human_task_ui#ui_template SagemakerHumanTaskUi#ui_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putUiTemplate">putUiTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetUiTemplate">resetUiTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerHumanTaskUiTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>>

---

##### `putUiTemplate` <a name="putUiTemplate" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putUiTemplate"></a>

```java
public void putUiTemplate(SagemakerHumanTaskUiUiTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putUiTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetTags"></a>

```java
public void resetTags()
```

##### `resetUiTemplate` <a name="resetUiTemplate" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetUiTemplate"></a>

```java
public void resetUiTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerHumanTaskUi resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_human_task_ui.SagemakerHumanTaskUi;

SagemakerHumanTaskUi.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_human_task_ui.SagemakerHumanTaskUi;

SagemakerHumanTaskUi.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_human_task_ui.SagemakerHumanTaskUi;

SagemakerHumanTaskUi.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_human_task_ui.SagemakerHumanTaskUi;

SagemakerHumanTaskUi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerHumanTaskUi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerHumanTaskUi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerHumanTaskUi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerHumanTaskUi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_human_task_ui#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerHumanTaskUi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiArn">humanTaskUiArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList">SagemakerHumanTaskUiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplate">uiTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference">SagemakerHumanTaskUiUiTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiNameInput">humanTaskUiNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplateInput">uiTemplateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiName">humanTaskUiName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `humanTaskUiArn`<sup>Required</sup> <a name="humanTaskUiArn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiArn"></a>

```java
public java.lang.String getHumanTaskUiArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tags"></a>

```java
public SagemakerHumanTaskUiTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList">SagemakerHumanTaskUiTagsList</a>

---

##### `uiTemplate`<sup>Required</sup> <a name="uiTemplate" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplate"></a>

```java
public SagemakerHumanTaskUiUiTemplateOutputReference getUiTemplate();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference">SagemakerHumanTaskUiUiTemplateOutputReference</a>

---

##### `humanTaskUiNameInput`<sup>Optional</sup> <a name="humanTaskUiNameInput" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiNameInput"></a>

```java
public java.lang.String getHumanTaskUiNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerHumanTaskUiTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>>

---

##### `uiTemplateInput`<sup>Optional</sup> <a name="uiTemplateInput" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplateInput"></a>

```java
public IResolvable|SagemakerHumanTaskUiUiTemplate getUiTemplateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

---

##### `humanTaskUiName`<sup>Required</sup> <a name="humanTaskUiName" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiName"></a>

```java
public java.lang.String getHumanTaskUiName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerHumanTaskUiConfig <a name="SagemakerHumanTaskUiConfig" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_human_task_ui.SagemakerHumanTaskUiConfig;

SagemakerHumanTaskUiConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .humanTaskUiName(java.lang.String)
//  .tags(IResolvable|java.util.List<SagemakerHumanTaskUiTags>)
//  .uiTemplate(SagemakerHumanTaskUiUiTemplate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.humanTaskUiName">humanTaskUiName</a></code> | <code>java.lang.String</code> | The name of the human task user interface. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>></code> | An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.uiTemplate">uiTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | The Liquid template for the worker user interface. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `humanTaskUiName`<sup>Required</sup> <a name="humanTaskUiName" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.humanTaskUiName"></a>

```java
public java.lang.String getHumanTaskUiName();
```

- *Type:* java.lang.String

The name of the human task user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_human_task_ui#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerHumanTaskUiTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>>

An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_human_task_ui#tags SagemakerHumanTaskUi#tags}

---

##### `uiTemplate`<sup>Optional</sup> <a name="uiTemplate" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.uiTemplate"></a>

```java
public SagemakerHumanTaskUiUiTemplate getUiTemplate();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

The Liquid template for the worker user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_human_task_ui#ui_template SagemakerHumanTaskUi#ui_template}

---

### SagemakerHumanTaskUiTags <a name="SagemakerHumanTaskUiTags" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_human_task_ui.SagemakerHumanTaskUiTags;

SagemakerHumanTaskUiTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_human_task_ui#key SagemakerHumanTaskUi#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_human_task_ui#value SagemakerHumanTaskUi#value}

---

### SagemakerHumanTaskUiUiTemplate <a name="SagemakerHumanTaskUiUiTemplate" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_human_task_ui.SagemakerHumanTaskUiUiTemplate;

SagemakerHumanTaskUiUiTemplate.builder()
//  .content(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate.property.content">content</a></code> | <code>java.lang.String</code> | The content of the Liquid template for the worker user interface. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The content of the Liquid template for the worker user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_human_task_ui#content SagemakerHumanTaskUi#content}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerHumanTaskUiTagsList <a name="SagemakerHumanTaskUiTagsList" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_human_task_ui.SagemakerHumanTaskUiTagsList;

new SagemakerHumanTaskUiTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.get"></a>

```java
public SagemakerHumanTaskUiTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerHumanTaskUiTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>>

---


### SagemakerHumanTaskUiTagsOutputReference <a name="SagemakerHumanTaskUiTagsOutputReference" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_human_task_ui.SagemakerHumanTaskUiTagsOutputReference;

new SagemakerHumanTaskUiTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerHumanTaskUiTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>

---


### SagemakerHumanTaskUiUiTemplateOutputReference <a name="SagemakerHumanTaskUiUiTemplateOutputReference" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_human_task_ui.SagemakerHumanTaskUiUiTemplateOutputReference;

new SagemakerHumanTaskUiUiTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resetContent">resetContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resetContent"></a>

```java
public void resetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerHumanTaskUiUiTemplate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

---



