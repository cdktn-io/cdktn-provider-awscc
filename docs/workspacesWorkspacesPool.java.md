# `workspacesWorkspacesPool` Submodule <a name="`workspacesWorkspacesPool` Submodule" id="@cdktn/provider-awscc.workspacesWorkspacesPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesWorkspacesPool <a name="WorkspacesWorkspacesPool" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool awscc_workspaces_workspaces_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPool;

WorkspacesWorkspacesPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bundleId(java.lang.String)
    .capacity(WorkspacesWorkspacesPoolCapacity)
    .directoryId(java.lang.String)
    .poolName(java.lang.String)
//  .applicationSettings(WorkspacesWorkspacesPoolApplicationSettings)
//  .description(java.lang.String)
//  .runningMode(java.lang.String)
//  .tags(IResolvable|java.util.List<WorkspacesWorkspacesPoolTags>)
//  .timeoutSettings(WorkspacesWorkspacesPoolTimeoutSettings)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.bundleId">bundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.poolName">poolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.runningMode">runningMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.timeoutSettings">timeoutSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.bundleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}.

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.capacity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.directoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}.

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.poolName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}.

---

##### `applicationSettings`<sup>Optional</sup> <a name="applicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.applicationSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}.

---

##### `runningMode`<sup>Optional</sup> <a name="runningMode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.runningMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}.

---

##### `timeoutSettings`<sup>Optional</sup> <a name="timeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.timeoutSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings">putApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity">putCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings">putTimeoutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetApplicationSettings">resetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetRunningMode">resetRunningMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTimeoutSettings">resetTimeoutSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationSettings` <a name="putApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings"></a>

```java
public void putApplicationSettings(WorkspacesWorkspacesPoolApplicationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

---

##### `putCapacity` <a name="putCapacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity"></a>

```java
public void putCapacity(WorkspacesWorkspacesPoolCapacity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<WorkspacesWorkspacesPoolTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>>

---

##### `putTimeoutSettings` <a name="putTimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings"></a>

```java
public void putTimeoutSettings(WorkspacesWorkspacesPoolTimeoutSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

---

##### `resetApplicationSettings` <a name="resetApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetApplicationSettings"></a>

```java
public void resetApplicationSettings()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRunningMode` <a name="resetRunningMode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetRunningMode"></a>

```java
public void resetRunningMode()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeoutSettings` <a name="resetTimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTimeoutSettings"></a>

```java
public void resetTimeoutSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPool;

WorkspacesWorkspacesPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPool;

WorkspacesWorkspacesPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPool;

WorkspacesWorkspacesPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPool;

WorkspacesWorkspacesPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkspacesWorkspacesPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkspacesWorkspacesPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkspacesWorkspacesPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesWorkspacesPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference">WorkspacesWorkspacesPoolApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference">WorkspacesWorkspacesPoolCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolArn">poolArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolId">poolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList">WorkspacesWorkspacesPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettings">timeoutSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference">WorkspacesWorkspacesPoolTimeoutSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettingsInput">applicationSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleIdInput">bundleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacityInput">capacityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolNameInput">poolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningModeInput">runningModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettingsInput">timeoutSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolName">poolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningMode">runningMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationSettings`<sup>Required</sup> <a name="applicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettings"></a>

```java
public WorkspacesWorkspacesPoolApplicationSettingsOutputReference getApplicationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference">WorkspacesWorkspacesPoolApplicationSettingsOutputReference</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacity"></a>

```java
public WorkspacesWorkspacesPoolCapacityOutputReference getCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference">WorkspacesWorkspacesPoolCapacityOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `poolArn`<sup>Required</sup> <a name="poolArn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolArn"></a>

```java
public java.lang.String getPoolArn();
```

- *Type:* java.lang.String

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tags"></a>

```java
public WorkspacesWorkspacesPoolTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList">WorkspacesWorkspacesPoolTagsList</a>

---

##### `timeoutSettings`<sup>Required</sup> <a name="timeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettings"></a>

```java
public WorkspacesWorkspacesPoolTimeoutSettingsOutputReference getTimeoutSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference">WorkspacesWorkspacesPoolTimeoutSettingsOutputReference</a>

---

##### `applicationSettingsInput`<sup>Optional</sup> <a name="applicationSettingsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettingsInput"></a>

```java
public IResolvable|WorkspacesWorkspacesPoolApplicationSettings getApplicationSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleIdInput"></a>

```java
public java.lang.String getBundleIdInput();
```

- *Type:* java.lang.String

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacityInput"></a>

```java
public IResolvable|WorkspacesWorkspacesPoolCapacity getCapacityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `poolNameInput`<sup>Optional</sup> <a name="poolNameInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolNameInput"></a>

```java
public java.lang.String getPoolNameInput();
```

- *Type:* java.lang.String

---

##### `runningModeInput`<sup>Optional</sup> <a name="runningModeInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningModeInput"></a>

```java
public java.lang.String getRunningModeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tagsInput"></a>

```java
public IResolvable|java.util.List<WorkspacesWorkspacesPoolTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>>

---

##### `timeoutSettingsInput`<sup>Optional</sup> <a name="timeoutSettingsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettingsInput"></a>

```java
public IResolvable|WorkspacesWorkspacesPoolTimeoutSettings getTimeoutSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolName"></a>

```java
public java.lang.String getPoolName();
```

- *Type:* java.lang.String

---

##### `runningMode`<sup>Required</sup> <a name="runningMode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningMode"></a>

```java
public java.lang.String getRunningMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesWorkspacesPoolApplicationSettings <a name="WorkspacesWorkspacesPoolApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPoolApplicationSettings;

WorkspacesWorkspacesPoolApplicationSettings.builder()
//  .settingsGroup(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.settingsGroup">settingsGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#settings_group WorkspacesWorkspacesPool#settings_group}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#status WorkspacesWorkspacesPool#status}. |

---

##### `settingsGroup`<sup>Optional</sup> <a name="settingsGroup" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.settingsGroup"></a>

```java
public java.lang.String getSettingsGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#settings_group WorkspacesWorkspacesPool#settings_group}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#status WorkspacesWorkspacesPool#status}.

---

### WorkspacesWorkspacesPoolCapacity <a name="WorkspacesWorkspacesPoolCapacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPoolCapacity;

WorkspacesWorkspacesPoolCapacity.builder()
    .desiredUserSessions(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.property.desiredUserSessions">desiredUserSessions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#desired_user_sessions WorkspacesWorkspacesPool#desired_user_sessions}. |

---

##### `desiredUserSessions`<sup>Required</sup> <a name="desiredUserSessions" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.property.desiredUserSessions"></a>

```java
public java.lang.Number getDesiredUserSessions();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#desired_user_sessions WorkspacesWorkspacesPool#desired_user_sessions}.

---

### WorkspacesWorkspacesPoolConfig <a name="WorkspacesWorkspacesPoolConfig" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPoolConfig;

WorkspacesWorkspacesPoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bundleId(java.lang.String)
    .capacity(WorkspacesWorkspacesPoolCapacity)
    .directoryId(java.lang.String)
    .poolName(java.lang.String)
//  .applicationSettings(WorkspacesWorkspacesPoolApplicationSettings)
//  .description(java.lang.String)
//  .runningMode(java.lang.String)
//  .tags(IResolvable|java.util.List<WorkspacesWorkspacesPoolTags>)
//  .timeoutSettings(WorkspacesWorkspacesPoolTimeoutSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.poolName">poolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.runningMode">runningMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.timeoutSettings">timeoutSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}.

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.capacity"></a>

```java
public WorkspacesWorkspacesPoolCapacity getCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}.

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.poolName"></a>

```java
public java.lang.String getPoolName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}.

---

##### `applicationSettings`<sup>Optional</sup> <a name="applicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.applicationSettings"></a>

```java
public WorkspacesWorkspacesPoolApplicationSettings getApplicationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}.

---

##### `runningMode`<sup>Optional</sup> <a name="runningMode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.runningMode"></a>

```java
public java.lang.String getRunningMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.tags"></a>

```java
public IResolvable|java.util.List<WorkspacesWorkspacesPoolTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}.

---

##### `timeoutSettings`<sup>Optional</sup> <a name="timeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.timeoutSettings"></a>

```java
public WorkspacesWorkspacesPoolTimeoutSettings getTimeoutSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}.

---

### WorkspacesWorkspacesPoolTags <a name="WorkspacesWorkspacesPoolTags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPoolTags;

WorkspacesWorkspacesPoolTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#key WorkspacesWorkspacesPool#key}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#value WorkspacesWorkspacesPool#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#key WorkspacesWorkspacesPool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#value WorkspacesWorkspacesPool#value}.

---

### WorkspacesWorkspacesPoolTimeoutSettings <a name="WorkspacesWorkspacesPoolTimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPoolTimeoutSettings;

WorkspacesWorkspacesPoolTimeoutSettings.builder()
//  .disconnectTimeoutInSeconds(java.lang.Number)
//  .idleDisconnectTimeoutInSeconds(java.lang.Number)
//  .maxUserDurationInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.disconnectTimeoutInSeconds">disconnectTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#disconnect_timeout_in_seconds WorkspacesWorkspacesPool#disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.idleDisconnectTimeoutInSeconds">idleDisconnectTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesWorkspacesPool#idle_disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.maxUserDurationInSeconds">maxUserDurationInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#max_user_duration_in_seconds WorkspacesWorkspacesPool#max_user_duration_in_seconds}. |

---

##### `disconnectTimeoutInSeconds`<sup>Optional</sup> <a name="disconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.disconnectTimeoutInSeconds"></a>

```java
public java.lang.Number getDisconnectTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#disconnect_timeout_in_seconds WorkspacesWorkspacesPool#disconnect_timeout_in_seconds}.

---

##### `idleDisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="idleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.idleDisconnectTimeoutInSeconds"></a>

```java
public java.lang.Number getIdleDisconnectTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesWorkspacesPool#idle_disconnect_timeout_in_seconds}.

---

##### `maxUserDurationInSeconds`<sup>Optional</sup> <a name="maxUserDurationInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.maxUserDurationInSeconds"></a>

```java
public java.lang.Number getMaxUserDurationInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspaces_workspaces_pool#max_user_duration_in_seconds WorkspacesWorkspacesPool#max_user_duration_in_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesWorkspacesPoolApplicationSettingsOutputReference <a name="WorkspacesWorkspacesPoolApplicationSettingsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference;

new WorkspacesWorkspacesPoolApplicationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetSettingsGroup">resetSettingsGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSettingsGroup` <a name="resetSettingsGroup" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetSettingsGroup"></a>

```java
public void resetSettingsGroup()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroupInput">settingsGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup">settingsGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `settingsGroupInput`<sup>Optional</sup> <a name="settingsGroupInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroupInput"></a>

```java
public java.lang.String getSettingsGroupInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `settingsGroup`<sup>Required</sup> <a name="settingsGroup" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup"></a>

```java
public java.lang.String getSettingsGroup();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesWorkspacesPoolApplicationSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

---


### WorkspacesWorkspacesPoolCapacityOutputReference <a name="WorkspacesWorkspacesPoolCapacityOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPoolCapacityOutputReference;

new WorkspacesWorkspacesPoolCapacityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessionsInput">desiredUserSessionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessions">desiredUserSessions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `desiredUserSessionsInput`<sup>Optional</sup> <a name="desiredUserSessionsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessionsInput"></a>

```java
public java.lang.Number getDesiredUserSessionsInput();
```

- *Type:* java.lang.Number

---

##### `desiredUserSessions`<sup>Required</sup> <a name="desiredUserSessions" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessions"></a>

```java
public java.lang.Number getDesiredUserSessions();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesWorkspacesPoolCapacity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

---


### WorkspacesWorkspacesPoolTagsList <a name="WorkspacesWorkspacesPoolTagsList" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPoolTagsList;

new WorkspacesWorkspacesPoolTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get"></a>

```java
public WorkspacesWorkspacesPoolTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspacesWorkspacesPoolTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>>

---


### WorkspacesWorkspacesPoolTagsOutputReference <a name="WorkspacesWorkspacesPoolTagsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPoolTagsOutputReference;

new WorkspacesWorkspacesPoolTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesWorkspacesPoolTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>

---


### WorkspacesWorkspacesPoolTimeoutSettingsOutputReference <a name="WorkspacesWorkspacesPoolTimeoutSettingsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspaces_pool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference;

new WorkspacesWorkspacesPoolTimeoutSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetDisconnectTimeoutInSeconds">resetDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetIdleDisconnectTimeoutInSeconds">resetIdleDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetMaxUserDurationInSeconds">resetMaxUserDurationInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisconnectTimeoutInSeconds` <a name="resetDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetDisconnectTimeoutInSeconds"></a>

```java
public void resetDisconnectTimeoutInSeconds()
```

##### `resetIdleDisconnectTimeoutInSeconds` <a name="resetIdleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetIdleDisconnectTimeoutInSeconds"></a>

```java
public void resetIdleDisconnectTimeoutInSeconds()
```

##### `resetMaxUserDurationInSeconds` <a name="resetMaxUserDurationInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetMaxUserDurationInSeconds"></a>

```java
public void resetMaxUserDurationInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSecondsInput">disconnectTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSecondsInput">idleDisconnectTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSecondsInput">maxUserDurationInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds">disconnectTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds">idleDisconnectTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds">maxUserDurationInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="disconnectTimeoutInSecondsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSecondsInput"></a>

```java
public java.lang.Number getDisconnectTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `idleDisconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="idleDisconnectTimeoutInSecondsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSecondsInput"></a>

```java
public java.lang.Number getIdleDisconnectTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxUserDurationInSecondsInput`<sup>Optional</sup> <a name="maxUserDurationInSecondsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSecondsInput"></a>

```java
public java.lang.Number getMaxUserDurationInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `disconnectTimeoutInSeconds`<sup>Required</sup> <a name="disconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds"></a>

```java
public java.lang.Number getDisconnectTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `idleDisconnectTimeoutInSeconds`<sup>Required</sup> <a name="idleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds"></a>

```java
public java.lang.Number getIdleDisconnectTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `maxUserDurationInSeconds`<sup>Required</sup> <a name="maxUserDurationInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds"></a>

```java
public java.lang.Number getMaxUserDurationInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesWorkspacesPoolTimeoutSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

---



