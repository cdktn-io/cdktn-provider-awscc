# `supportappSlackWorkspaceConfiguration` Submodule <a name="`supportappSlackWorkspaceConfiguration` Submodule" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupportappSlackWorkspaceConfiguration <a name="SupportappSlackWorkspaceConfiguration" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_workspace_configuration awscc_supportapp_slack_workspace_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportapp_slack_workspace_configuration.SupportappSlackWorkspaceConfiguration;

SupportappSlackWorkspaceConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .teamId(java.lang.String)
//  .versionId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | The team ID in Slack, which uniquely identifies a workspace. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.versionId">versionId</a></code> | <code>java.lang.String</code> | An identifier used to update an existing Slack workspace configuration in AWS CloudFormation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

The team ID in Slack, which uniquely identifies a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_workspace_configuration#team_id SupportappSlackWorkspaceConfiguration#team_id}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.versionId"></a>

- *Type:* java.lang.String

An identifier used to update an existing Slack workspace configuration in AWS CloudFormation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_workspace_configuration#version_id SupportappSlackWorkspaceConfiguration#version_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetVersionId` <a name="resetVersionId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.resetVersionId"></a>

```java
public void resetVersionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SupportappSlackWorkspaceConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.supportapp_slack_workspace_configuration.SupportappSlackWorkspaceConfiguration;

SupportappSlackWorkspaceConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.supportapp_slack_workspace_configuration.SupportappSlackWorkspaceConfiguration;

SupportappSlackWorkspaceConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.supportapp_slack_workspace_configuration.SupportappSlackWorkspaceConfiguration;

SupportappSlackWorkspaceConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.supportapp_slack_workspace_configuration.SupportappSlackWorkspaceConfiguration;

SupportappSlackWorkspaceConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SupportappSlackWorkspaceConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SupportappSlackWorkspaceConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SupportappSlackWorkspaceConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SupportappSlackWorkspaceConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_workspace_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SupportappSlackWorkspaceConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.versionIdInput">versionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.versionIdInput"></a>

```java
public java.lang.String getVersionIdInput();
```

- *Type:* java.lang.String

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SupportappSlackWorkspaceConfigurationConfig <a name="SupportappSlackWorkspaceConfigurationConfig" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportapp_slack_workspace_configuration.SupportappSlackWorkspaceConfigurationConfig;

SupportappSlackWorkspaceConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .teamId(java.lang.String)
//  .versionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | The team ID in Slack, which uniquely identifies a workspace. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.versionId">versionId</a></code> | <code>java.lang.String</code> | An identifier used to update an existing Slack workspace configuration in AWS CloudFormation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

The team ID in Slack, which uniquely identifies a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_workspace_configuration#team_id SupportappSlackWorkspaceConfiguration#team_id}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

An identifier used to update an existing Slack workspace configuration in AWS CloudFormation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_workspace_configuration#version_id SupportappSlackWorkspaceConfiguration#version_id}

---



