# `iotMitigationAction` Submodule <a name="`iotMitigationAction` Submodule" id="@cdktn/provider-awscc.iotMitigationAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotMitigationAction <a name="IotMitigationAction" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action awscc_iot_mitigation_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationAction;

IotMitigationAction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actionParams(IotMitigationActionActionParams)
    .roleArn(java.lang.String)
//  .actionName(java.lang.String)
//  .tags(IResolvable|java.util.List<IotMitigationActionTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.actionParams">actionParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a></code> | The set of parameters for this mitigation action. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#role_arn IotMitigationAction#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.actionName">actionName</a></code> | <code>java.lang.String</code> | A unique identifier for the mitigation action. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionParams`<sup>Required</sup> <a name="actionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.actionParams"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

The set of parameters for this mitigation action.

You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#action_params IotMitigationAction#action_params}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#role_arn IotMitigationAction#role_arn}.

---

##### `actionName`<sup>Optional</sup> <a name="actionName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.actionName"></a>

- *Type:* java.lang.String

A unique identifier for the mitigation action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#action_name IotMitigationAction#action_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#tags IotMitigationAction#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams">putActionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetActionName">resetActionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionParams` <a name="putActionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams"></a>

```java
public void putActionParams(IotMitigationActionActionParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotMitigationActionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>>

---

##### `resetActionName` <a name="resetActionName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetActionName"></a>

```java
public void resetActionName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotMitigationAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationAction;

IotMitigationAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationAction;

IotMitigationAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationAction;

IotMitigationAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationAction;

IotMitigationAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotMitigationAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotMitigationAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotMitigationAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotMitigationAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotMitigationAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParams">actionParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference">IotMitigationActionActionParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionArn">mitigationActionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionId">mitigationActionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList">IotMitigationActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionNameInput">actionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParamsInput">actionParamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionName">actionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionParams`<sup>Required</sup> <a name="actionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParams"></a>

```java
public IotMitigationActionActionParamsOutputReference getActionParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference">IotMitigationActionActionParamsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mitigationActionArn`<sup>Required</sup> <a name="mitigationActionArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionArn"></a>

```java
public java.lang.String getMitigationActionArn();
```

- *Type:* java.lang.String

---

##### `mitigationActionId`<sup>Required</sup> <a name="mitigationActionId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionId"></a>

```java
public java.lang.String getMitigationActionId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tags"></a>

```java
public IotMitigationActionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList">IotMitigationActionTagsList</a>

---

##### `actionNameInput`<sup>Optional</sup> <a name="actionNameInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionNameInput"></a>

```java
public java.lang.String getActionNameInput();
```

- *Type:* java.lang.String

---

##### `actionParamsInput`<sup>Optional</sup> <a name="actionParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParamsInput"></a>

```java
public IResolvable|IotMitigationActionActionParams getActionParamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotMitigationActionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>>

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionName"></a>

```java
public java.lang.String getActionName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotMitigationActionActionParams <a name="IotMitigationActionActionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionActionParams;

IotMitigationActionActionParams.builder()
//  .addThingsToThingGroupParams(IotMitigationActionActionParamsAddThingsToThingGroupParams)
//  .enableIoTLoggingParams(IotMitigationActionActionParamsEnableIoTLoggingParams)
//  .publishFindingToSnsParams(IotMitigationActionActionParamsPublishFindingToSnsParams)
//  .replaceDefaultPolicyVersionParams(IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams)
//  .updateCaCertificateParams(IotMitigationActionActionParamsUpdateCaCertificateParams)
//  .updateDeviceCertificateParams(IotMitigationActionActionParamsUpdateDeviceCertificateParams)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.addThingsToThingGroupParams">addThingsToThingGroupParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a></code> | Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.enableIoTLoggingParams">enableIoTLoggingParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a></code> | Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.publishFindingToSnsParams">publishFindingToSnsParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a></code> | Parameters, to define a mitigation action that publishes findings to Amazon SNS. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.replaceDefaultPolicyVersionParams">replaceDefaultPolicyVersionParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a></code> | Parameters to define a mitigation action that adds a blank policy to restrict permissions. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateCaCertificateParams">updateCaCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a></code> | Parameters to define a mitigation action that changes the state of the CA certificate to inactive. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateDeviceCertificateParams">updateDeviceCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a></code> | Parameters to define a mitigation action that changes the state of the device certificate to inactive. |

---

##### `addThingsToThingGroupParams`<sup>Optional</sup> <a name="addThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.addThingsToThingGroupParams"></a>

```java
public IotMitigationActionActionParamsAddThingsToThingGroupParams getAddThingsToThingGroupParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a>

Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#add_things_to_thing_group_params IotMitigationAction#add_things_to_thing_group_params}

---

##### `enableIoTLoggingParams`<sup>Optional</sup> <a name="enableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.enableIoTLoggingParams"></a>

```java
public IotMitigationActionActionParamsEnableIoTLoggingParams getEnableIoTLoggingParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a>

Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#enable_io_t_logging_params IotMitigationAction#enable_io_t_logging_params}

---

##### `publishFindingToSnsParams`<sup>Optional</sup> <a name="publishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.publishFindingToSnsParams"></a>

```java
public IotMitigationActionActionParamsPublishFindingToSnsParams getPublishFindingToSnsParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a>

Parameters, to define a mitigation action that publishes findings to Amazon SNS.

You can implement your own custom actions in response to the Amazon SNS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#publish_finding_to_sns_params IotMitigationAction#publish_finding_to_sns_params}

---

##### `replaceDefaultPolicyVersionParams`<sup>Optional</sup> <a name="replaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.replaceDefaultPolicyVersionParams"></a>

```java
public IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams getReplaceDefaultPolicyVersionParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

Parameters to define a mitigation action that adds a blank policy to restrict permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#replace_default_policy_version_params IotMitigationAction#replace_default_policy_version_params}

---

##### `updateCaCertificateParams`<sup>Optional</sup> <a name="updateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateCaCertificateParams"></a>

```java
public IotMitigationActionActionParamsUpdateCaCertificateParams getUpdateCaCertificateParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a>

Parameters to define a mitigation action that changes the state of the CA certificate to inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#update_ca_certificate_params IotMitigationAction#update_ca_certificate_params}

---

##### `updateDeviceCertificateParams`<sup>Optional</sup> <a name="updateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateDeviceCertificateParams"></a>

```java
public IotMitigationActionActionParamsUpdateDeviceCertificateParams getUpdateDeviceCertificateParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

Parameters to define a mitigation action that changes the state of the device certificate to inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#update_device_certificate_params IotMitigationAction#update_device_certificate_params}

---

### IotMitigationActionActionParamsAddThingsToThingGroupParams <a name="IotMitigationActionActionParamsAddThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionActionParamsAddThingsToThingGroupParams;

IotMitigationActionActionParamsAddThingsToThingGroupParams.builder()
//  .overrideDynamicGroups(java.lang.Boolean|IResolvable)
//  .thingGroupNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.overrideDynamicGroups">overrideDynamicGroups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.thingGroupNames">thingGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | The list of groups to which you want to add the things that triggered the mitigation action. |

---

##### `overrideDynamicGroups`<sup>Optional</sup> <a name="overrideDynamicGroups" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.overrideDynamicGroups"></a>

```java
public java.lang.Boolean|IResolvable getOverrideDynamicGroups();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#override_dynamic_groups IotMitigationAction#override_dynamic_groups}

---

##### `thingGroupNames`<sup>Optional</sup> <a name="thingGroupNames" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.thingGroupNames"></a>

```java
public java.util.List<java.lang.String> getThingGroupNames();
```

- *Type:* java.util.List<java.lang.String>

The list of groups to which you want to add the things that triggered the mitigation action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#thing_group_names IotMitigationAction#thing_group_names}

---

### IotMitigationActionActionParamsEnableIoTLoggingParams <a name="IotMitigationActionActionParamsEnableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionActionParamsEnableIoTLoggingParams;

IotMitigationActionActionParamsEnableIoTLoggingParams.builder()
//  .logLevel(java.lang.String)
//  .roleArnForLogging(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Specifies which types of information are logged. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.roleArnForLogging">roleArnForLogging</a></code> | <code>java.lang.String</code> | The ARN of the IAM role used for logging. |

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Specifies which types of information are logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#log_level IotMitigationAction#log_level}

---

##### `roleArnForLogging`<sup>Optional</sup> <a name="roleArnForLogging" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.roleArnForLogging"></a>

```java
public java.lang.String getRoleArnForLogging();
```

- *Type:* java.lang.String

The ARN of the IAM role used for logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#role_arn_for_logging IotMitigationAction#role_arn_for_logging}

---

### IotMitigationActionActionParamsPublishFindingToSnsParams <a name="IotMitigationActionActionParamsPublishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionActionParamsPublishFindingToSnsParams;

IotMitigationActionActionParamsPublishFindingToSnsParams.builder()
//  .topicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | The ARN of the topic to which you want to publish the findings. |

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

The ARN of the topic to which you want to publish the findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#topic_arn IotMitigationAction#topic_arn}

---

### IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams <a name="IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams;

IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.builder()
//  .templateName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.property.templateName">templateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#template_name IotMitigationAction#template_name}. |

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#template_name IotMitigationAction#template_name}.

---

### IotMitigationActionActionParamsUpdateCaCertificateParams <a name="IotMitigationActionActionParamsUpdateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionActionParamsUpdateCaCertificateParams;

IotMitigationActionActionParamsUpdateCaCertificateParams.builder()
//  .action(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}.

---

### IotMitigationActionActionParamsUpdateDeviceCertificateParams <a name="IotMitigationActionActionParamsUpdateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionActionParamsUpdateDeviceCertificateParams;

IotMitigationActionActionParamsUpdateDeviceCertificateParams.builder()
//  .action(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}.

---

### IotMitigationActionConfig <a name="IotMitigationActionConfig" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionConfig;

IotMitigationActionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actionParams(IotMitigationActionActionParams)
    .roleArn(java.lang.String)
//  .actionName(java.lang.String)
//  .tags(IResolvable|java.util.List<IotMitigationActionTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionParams">actionParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a></code> | The set of parameters for this mitigation action. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#role_arn IotMitigationAction#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionName">actionName</a></code> | <code>java.lang.String</code> | A unique identifier for the mitigation action. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionParams`<sup>Required</sup> <a name="actionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionParams"></a>

```java
public IotMitigationActionActionParams getActionParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

The set of parameters for this mitigation action.

You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#action_params IotMitigationAction#action_params}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#role_arn IotMitigationAction#role_arn}.

---

##### `actionName`<sup>Optional</sup> <a name="actionName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionName"></a>

```java
public java.lang.String getActionName();
```

- *Type:* java.lang.String

A unique identifier for the mitigation action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#action_name IotMitigationAction#action_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotMitigationActionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#tags IotMitigationAction#tags}

---

### IotMitigationActionTags <a name="IotMitigationActionTags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionTags;

IotMitigationActionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#key IotMitigationAction#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_mitigation_action#value IotMitigationAction#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference <a name="IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference;

new IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetOverrideDynamicGroups">resetOverrideDynamicGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetThingGroupNames">resetThingGroupNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOverrideDynamicGroups` <a name="resetOverrideDynamicGroups" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetOverrideDynamicGroups"></a>

```java
public void resetOverrideDynamicGroups()
```

##### `resetThingGroupNames` <a name="resetThingGroupNames" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetThingGroupNames"></a>

```java
public void resetThingGroupNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroupsInput">overrideDynamicGroupsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNamesInput">thingGroupNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroups">overrideDynamicGroups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNames">thingGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `overrideDynamicGroupsInput`<sup>Optional</sup> <a name="overrideDynamicGroupsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroupsInput"></a>

```java
public java.lang.Boolean|IResolvable getOverrideDynamicGroupsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `thingGroupNamesInput`<sup>Optional</sup> <a name="thingGroupNamesInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNamesInput"></a>

```java
public java.util.List<java.lang.String> getThingGroupNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `overrideDynamicGroups`<sup>Required</sup> <a name="overrideDynamicGroups" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroups"></a>

```java
public java.lang.Boolean|IResolvable getOverrideDynamicGroups();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `thingGroupNames`<sup>Required</sup> <a name="thingGroupNames" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNames"></a>

```java
public java.util.List<java.lang.String> getThingGroupNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotMitigationActionActionParamsAddThingsToThingGroupParams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a>

---


### IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference <a name="IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference;

new IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetRoleArnForLogging">resetRoleArnForLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetRoleArnForLogging` <a name="resetRoleArnForLogging" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetRoleArnForLogging"></a>

```java
public void resetRoleArnForLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLoggingInput">roleArnForLoggingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLogging">roleArnForLogging</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `roleArnForLoggingInput`<sup>Optional</sup> <a name="roleArnForLoggingInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLoggingInput"></a>

```java
public java.lang.String getRoleArnForLoggingInput();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `roleArnForLogging`<sup>Required</sup> <a name="roleArnForLogging" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLogging"></a>

```java
public java.lang.String getRoleArnForLogging();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotMitigationActionActionParamsEnableIoTLoggingParams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a>

---


### IotMitigationActionActionParamsOutputReference <a name="IotMitigationActionActionParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionActionParamsOutputReference;

new IotMitigationActionActionParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putAddThingsToThingGroupParams">putAddThingsToThingGroupParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putEnableIoTLoggingParams">putEnableIoTLoggingParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putPublishFindingToSnsParams">putPublishFindingToSnsParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putReplaceDefaultPolicyVersionParams">putReplaceDefaultPolicyVersionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateCaCertificateParams">putUpdateCaCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateDeviceCertificateParams">putUpdateDeviceCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetAddThingsToThingGroupParams">resetAddThingsToThingGroupParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetEnableIoTLoggingParams">resetEnableIoTLoggingParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetPublishFindingToSnsParams">resetPublishFindingToSnsParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetReplaceDefaultPolicyVersionParams">resetReplaceDefaultPolicyVersionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateCaCertificateParams">resetUpdateCaCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateDeviceCertificateParams">resetUpdateDeviceCertificateParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddThingsToThingGroupParams` <a name="putAddThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putAddThingsToThingGroupParams"></a>

```java
public void putAddThingsToThingGroupParams(IotMitigationActionActionParamsAddThingsToThingGroupParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putAddThingsToThingGroupParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a>

---

##### `putEnableIoTLoggingParams` <a name="putEnableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putEnableIoTLoggingParams"></a>

```java
public void putEnableIoTLoggingParams(IotMitigationActionActionParamsEnableIoTLoggingParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putEnableIoTLoggingParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a>

---

##### `putPublishFindingToSnsParams` <a name="putPublishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putPublishFindingToSnsParams"></a>

```java
public void putPublishFindingToSnsParams(IotMitigationActionActionParamsPublishFindingToSnsParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putPublishFindingToSnsParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a>

---

##### `putReplaceDefaultPolicyVersionParams` <a name="putReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putReplaceDefaultPolicyVersionParams"></a>

```java
public void putReplaceDefaultPolicyVersionParams(IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putReplaceDefaultPolicyVersionParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

---

##### `putUpdateCaCertificateParams` <a name="putUpdateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateCaCertificateParams"></a>

```java
public void putUpdateCaCertificateParams(IotMitigationActionActionParamsUpdateCaCertificateParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateCaCertificateParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a>

---

##### `putUpdateDeviceCertificateParams` <a name="putUpdateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateDeviceCertificateParams"></a>

```java
public void putUpdateDeviceCertificateParams(IotMitigationActionActionParamsUpdateDeviceCertificateParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateDeviceCertificateParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

---

##### `resetAddThingsToThingGroupParams` <a name="resetAddThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetAddThingsToThingGroupParams"></a>

```java
public void resetAddThingsToThingGroupParams()
```

##### `resetEnableIoTLoggingParams` <a name="resetEnableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetEnableIoTLoggingParams"></a>

```java
public void resetEnableIoTLoggingParams()
```

##### `resetPublishFindingToSnsParams` <a name="resetPublishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetPublishFindingToSnsParams"></a>

```java
public void resetPublishFindingToSnsParams()
```

##### `resetReplaceDefaultPolicyVersionParams` <a name="resetReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetReplaceDefaultPolicyVersionParams"></a>

```java
public void resetReplaceDefaultPolicyVersionParams()
```

##### `resetUpdateCaCertificateParams` <a name="resetUpdateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateCaCertificateParams"></a>

```java
public void resetUpdateCaCertificateParams()
```

##### `resetUpdateDeviceCertificateParams` <a name="resetUpdateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateDeviceCertificateParams"></a>

```java
public void resetUpdateDeviceCertificateParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParams">addThingsToThingGroupParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference">IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParams">enableIoTLoggingParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference">IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParams">publishFindingToSnsParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference">IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParams">replaceDefaultPolicyVersionParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParams">updateCaCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParams">updateDeviceCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParamsInput">addThingsToThingGroupParamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParamsInput">enableIoTLoggingParamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParamsInput">publishFindingToSnsParamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParamsInput">replaceDefaultPolicyVersionParamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParamsInput">updateCaCertificateParamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParamsInput">updateDeviceCertificateParamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addThingsToThingGroupParams`<sup>Required</sup> <a name="addThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParams"></a>

```java
public IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference getAddThingsToThingGroupParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference">IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference</a>

---

##### `enableIoTLoggingParams`<sup>Required</sup> <a name="enableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParams"></a>

```java
public IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference getEnableIoTLoggingParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference">IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference</a>

---

##### `publishFindingToSnsParams`<sup>Required</sup> <a name="publishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParams"></a>

```java
public IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference getPublishFindingToSnsParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference">IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference</a>

---

##### `replaceDefaultPolicyVersionParams`<sup>Required</sup> <a name="replaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParams"></a>

```java
public IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference getReplaceDefaultPolicyVersionParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference</a>

---

##### `updateCaCertificateParams`<sup>Required</sup> <a name="updateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParams"></a>

```java
public IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference getUpdateCaCertificateParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference</a>

---

##### `updateDeviceCertificateParams`<sup>Required</sup> <a name="updateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParams"></a>

```java
public IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference getUpdateDeviceCertificateParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference</a>

---

##### `addThingsToThingGroupParamsInput`<sup>Optional</sup> <a name="addThingsToThingGroupParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParamsInput"></a>

```java
public IResolvable|IotMitigationActionActionParamsAddThingsToThingGroupParams getAddThingsToThingGroupParamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a>

---

##### `enableIoTLoggingParamsInput`<sup>Optional</sup> <a name="enableIoTLoggingParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParamsInput"></a>

```java
public IResolvable|IotMitigationActionActionParamsEnableIoTLoggingParams getEnableIoTLoggingParamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a>

---

##### `publishFindingToSnsParamsInput`<sup>Optional</sup> <a name="publishFindingToSnsParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParamsInput"></a>

```java
public IResolvable|IotMitigationActionActionParamsPublishFindingToSnsParams getPublishFindingToSnsParamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a>

---

##### `replaceDefaultPolicyVersionParamsInput`<sup>Optional</sup> <a name="replaceDefaultPolicyVersionParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParamsInput"></a>

```java
public IResolvable|IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams getReplaceDefaultPolicyVersionParamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

---

##### `updateCaCertificateParamsInput`<sup>Optional</sup> <a name="updateCaCertificateParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParamsInput"></a>

```java
public IResolvable|IotMitigationActionActionParamsUpdateCaCertificateParams getUpdateCaCertificateParamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a>

---

##### `updateDeviceCertificateParamsInput`<sup>Optional</sup> <a name="updateDeviceCertificateParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParamsInput"></a>

```java
public IResolvable|IotMitigationActionActionParamsUpdateDeviceCertificateParams getUpdateDeviceCertificateParamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotMitigationActionActionParams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

---


### IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference <a name="IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference;

new IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resetTopicArn"></a>

```java
public void resetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotMitigationActionActionParamsPublishFindingToSnsParams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a>

---


### IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference <a name="IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference;

new IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resetTemplateName">resetTemplateName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resetTemplateName"></a>

```java
public void resetTemplateName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateNameInput">templateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateNameInput"></a>

```java
public java.lang.String getTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

---


### IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference <a name="IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference;

new IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resetAction">resetAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resetAction"></a>

```java
public void resetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotMitigationActionActionParamsUpdateCaCertificateParams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a>

---


### IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference <a name="IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference;

new IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resetAction">resetAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resetAction"></a>

```java
public void resetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotMitigationActionActionParamsUpdateDeviceCertificateParams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

---


### IotMitigationActionTagsList <a name="IotMitigationActionTagsList" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionTagsList;

new IotMitigationActionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.get"></a>

```java
public IotMitigationActionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotMitigationActionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>>

---


### IotMitigationActionTagsOutputReference <a name="IotMitigationActionTagsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_mitigation_action.IotMitigationActionTagsOutputReference;

new IotMitigationActionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotMitigationActionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>

---



