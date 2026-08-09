# `awsexternalanthropicWorkspace` Submodule <a name="`awsexternalanthropicWorkspace` Submodule" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsexternalanthropicWorkspace <a name="AwsexternalanthropicWorkspace" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace awscc_awsexternalanthropic_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer"></a>

```java
import io.cdktn.providers.awscc.awsexternalanthropic_workspace.AwsexternalanthropicWorkspace;

AwsexternalanthropicWorkspace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .dataResidency(AwsexternalanthropicWorkspaceDataResidency)
//  .tags(IResolvable|java.util.List<AwsexternalanthropicWorkspaceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the workspace. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.dataResidency">dataResidency</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a></code> | Data residency configuration for the workspace. WorkspaceGeo is immutable after creation. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#name AwsexternalanthropicWorkspace#name}

---

##### `dataResidency`<sup>Optional</sup> <a name="dataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.dataResidency"></a>

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

Data residency configuration for the workspace. WorkspaceGeo is immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#data_residency AwsexternalanthropicWorkspace#data_residency}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#tags AwsexternalanthropicWorkspace#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putDataResidency">putDataResidency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetDataResidency">resetDataResidency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataResidency` <a name="putDataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putDataResidency"></a>

```java
public void putDataResidency(AwsexternalanthropicWorkspaceDataResidency value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putDataResidency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AwsexternalanthropicWorkspaceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>>

---

##### `resetDataResidency` <a name="resetDataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetDataResidency"></a>

```java
public void resetDataResidency()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AwsexternalanthropicWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isConstruct"></a>

```java
import io.cdktn.providers.awscc.awsexternalanthropic_workspace.AwsexternalanthropicWorkspace;

AwsexternalanthropicWorkspace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.awsexternalanthropic_workspace.AwsexternalanthropicWorkspace;

AwsexternalanthropicWorkspace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.awsexternalanthropic_workspace.AwsexternalanthropicWorkspace;

AwsexternalanthropicWorkspace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.awsexternalanthropic_workspace.AwsexternalanthropicWorkspace;

AwsexternalanthropicWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AwsexternalanthropicWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AwsexternalanthropicWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AwsexternalanthropicWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AwsexternalanthropicWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AwsexternalanthropicWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidency">dataResidency</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference">AwsexternalanthropicWorkspaceDataResidencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList">AwsexternalanthropicWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidencyInput">dataResidencyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dataResidency`<sup>Required</sup> <a name="dataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidency"></a>

```java
public AwsexternalanthropicWorkspaceDataResidencyOutputReference getDataResidency();
```

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference">AwsexternalanthropicWorkspaceDataResidencyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tags"></a>

```java
public AwsexternalanthropicWorkspaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList">AwsexternalanthropicWorkspaceTagsList</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `dataResidencyInput`<sup>Optional</sup> <a name="dataResidencyInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidencyInput"></a>

```java
public IResolvable|AwsexternalanthropicWorkspaceDataResidency getDataResidencyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AwsexternalanthropicWorkspaceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AwsexternalanthropicWorkspaceConfig <a name="AwsexternalanthropicWorkspaceConfig" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.awsexternalanthropic_workspace.AwsexternalanthropicWorkspaceConfig;

AwsexternalanthropicWorkspaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .dataResidency(AwsexternalanthropicWorkspaceDataResidency)
//  .tags(IResolvable|java.util.List<AwsexternalanthropicWorkspaceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the workspace. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dataResidency">dataResidency</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a></code> | Data residency configuration for the workspace. WorkspaceGeo is immutable after creation. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#name AwsexternalanthropicWorkspace#name}

---

##### `dataResidency`<sup>Optional</sup> <a name="dataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dataResidency"></a>

```java
public AwsexternalanthropicWorkspaceDataResidency getDataResidency();
```

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

Data residency configuration for the workspace. WorkspaceGeo is immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#data_residency AwsexternalanthropicWorkspace#data_residency}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AwsexternalanthropicWorkspaceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#tags AwsexternalanthropicWorkspace#tags}

---

### AwsexternalanthropicWorkspaceDataResidency <a name="AwsexternalanthropicWorkspaceDataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.Initializer"></a>

```java
import io.cdktn.providers.awscc.awsexternalanthropic_workspace.AwsexternalanthropicWorkspaceDataResidency;

AwsexternalanthropicWorkspaceDataResidency.builder()
//  .allowedInferenceGeos(java.util.List<java.lang.String>)
//  .defaultInferenceGeo(java.lang.String)
//  .workspaceGeo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.allowedInferenceGeos">allowedInferenceGeos</a></code> | <code>java.util.List<java.lang.String></code> | Permitted inference geo values. Omit to allow all geos (the service default of 'unrestricted'); otherwise list specific geos. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.defaultInferenceGeo">defaultInferenceGeo</a></code> | <code>java.lang.String</code> | Default inference geo applied when requests omit the parameter. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.workspaceGeo">workspaceGeo</a></code> | <code>java.lang.String</code> | Geographic region for workspace data storage. Immutable after creation. Defaults to 'us' if omitted. |

---

##### `allowedInferenceGeos`<sup>Optional</sup> <a name="allowedInferenceGeos" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.allowedInferenceGeos"></a>

```java
public java.util.List<java.lang.String> getAllowedInferenceGeos();
```

- *Type:* java.util.List<java.lang.String>

Permitted inference geo values. Omit to allow all geos (the service default of 'unrestricted'); otherwise list specific geos.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#allowed_inference_geos AwsexternalanthropicWorkspace#allowed_inference_geos}

---

##### `defaultInferenceGeo`<sup>Optional</sup> <a name="defaultInferenceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.defaultInferenceGeo"></a>

```java
public java.lang.String getDefaultInferenceGeo();
```

- *Type:* java.lang.String

Default inference geo applied when requests omit the parameter.

Defaults to 'global' if omitted. Must be a member of AllowedInferenceGeos unless AllowedInferenceGeos is omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#default_inference_geo AwsexternalanthropicWorkspace#default_inference_geo}

---

##### `workspaceGeo`<sup>Optional</sup> <a name="workspaceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.workspaceGeo"></a>

```java
public java.lang.String getWorkspaceGeo();
```

- *Type:* java.lang.String

Geographic region for workspace data storage. Immutable after creation. Defaults to 'us' if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#workspace_geo AwsexternalanthropicWorkspace#workspace_geo}

---

### AwsexternalanthropicWorkspaceTags <a name="AwsexternalanthropicWorkspaceTags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.awsexternalanthropic_workspace.AwsexternalanthropicWorkspaceTags;

AwsexternalanthropicWorkspaceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#key AwsexternalanthropicWorkspace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#value AwsexternalanthropicWorkspace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AwsexternalanthropicWorkspaceDataResidencyOutputReference <a name="AwsexternalanthropicWorkspaceDataResidencyOutputReference" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.awsexternalanthropic_workspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference;

new AwsexternalanthropicWorkspaceDataResidencyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetAllowedInferenceGeos">resetAllowedInferenceGeos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetDefaultInferenceGeo">resetDefaultInferenceGeo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetWorkspaceGeo">resetWorkspaceGeo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedInferenceGeos` <a name="resetAllowedInferenceGeos" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetAllowedInferenceGeos"></a>

```java
public void resetAllowedInferenceGeos()
```

##### `resetDefaultInferenceGeo` <a name="resetDefaultInferenceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetDefaultInferenceGeo"></a>

```java
public void resetDefaultInferenceGeo()
```

##### `resetWorkspaceGeo` <a name="resetWorkspaceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetWorkspaceGeo"></a>

```java
public void resetWorkspaceGeo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeosInput">allowedInferenceGeosInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeoInput">defaultInferenceGeoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeoInput">workspaceGeoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeos">allowedInferenceGeos</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeo">defaultInferenceGeo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeo">workspaceGeo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedInferenceGeosInput`<sup>Optional</sup> <a name="allowedInferenceGeosInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeosInput"></a>

```java
public java.util.List<java.lang.String> getAllowedInferenceGeosInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultInferenceGeoInput`<sup>Optional</sup> <a name="defaultInferenceGeoInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeoInput"></a>

```java
public java.lang.String getDefaultInferenceGeoInput();
```

- *Type:* java.lang.String

---

##### `workspaceGeoInput`<sup>Optional</sup> <a name="workspaceGeoInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeoInput"></a>

```java
public java.lang.String getWorkspaceGeoInput();
```

- *Type:* java.lang.String

---

##### `allowedInferenceGeos`<sup>Required</sup> <a name="allowedInferenceGeos" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeos"></a>

```java
public java.util.List<java.lang.String> getAllowedInferenceGeos();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultInferenceGeo`<sup>Required</sup> <a name="defaultInferenceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeo"></a>

```java
public java.lang.String getDefaultInferenceGeo();
```

- *Type:* java.lang.String

---

##### `workspaceGeo`<sup>Required</sup> <a name="workspaceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeo"></a>

```java
public java.lang.String getWorkspaceGeo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.internalValue"></a>

```java
public IResolvable|AwsexternalanthropicWorkspaceDataResidency getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

---


### AwsexternalanthropicWorkspaceTagsList <a name="AwsexternalanthropicWorkspaceTagsList" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.awsexternalanthropic_workspace.AwsexternalanthropicWorkspaceTagsList;

new AwsexternalanthropicWorkspaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.get"></a>

```java
public AwsexternalanthropicWorkspaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AwsexternalanthropicWorkspaceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>>

---


### AwsexternalanthropicWorkspaceTagsOutputReference <a name="AwsexternalanthropicWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.awsexternalanthropic_workspace.AwsexternalanthropicWorkspaceTagsOutputReference;

new AwsexternalanthropicWorkspaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AwsexternalanthropicWorkspaceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>

---



