# `evidentlyLaunch` Submodule <a name="`evidentlyLaunch` Submodule" id="@cdktn/provider-awscc.evidentlyLaunch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyLaunch <a name="EvidentlyLaunch" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch awscc_evidently_launch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunch;

EvidentlyLaunch.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .groups(IResolvable|java.util.List<EvidentlyLaunchGroups>)
    .name(java.lang.String)
    .project(java.lang.String)
    .scheduledSplitsConfig(IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfig>)
//  .description(java.lang.String)
//  .executionStatus(EvidentlyLaunchExecutionStatus)
//  .metricMonitors(IResolvable|java.util.List<EvidentlyLaunchMetricMonitors>)
//  .randomizationSalt(java.lang.String)
//  .tags(IResolvable|java.util.List<EvidentlyLaunchTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.groups">groups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#groups EvidentlyLaunch#groups}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#project EvidentlyLaunch#project}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scheduledSplitsConfig">scheduledSplitsConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.executionStatus">executionStatus</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a></code> | Start or Stop Launch Launch. Default is not started. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.metricMonitors">metricMonitors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.randomizationSalt">randomizationSalt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.groups"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#groups EvidentlyLaunch#groups}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#name EvidentlyLaunch#name}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#project EvidentlyLaunch#project}.

---

##### `scheduledSplitsConfig`<sup>Required</sup> <a name="scheduledSplitsConfig" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scheduledSplitsConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}.

---

##### `executionStatus`<sup>Optional</sup> <a name="executionStatus" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.executionStatus"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a>

Start or Stop Launch Launch. Default is not started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#execution_status EvidentlyLaunch#execution_status}

---

##### `metricMonitors`<sup>Optional</sup> <a name="metricMonitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.metricMonitors"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}.

---

##### `randomizationSalt`<sup>Optional</sup> <a name="randomizationSalt" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.randomizationSalt"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#tags EvidentlyLaunch#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putExecutionStatus">putExecutionStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putGroups">putGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors">putMetricMonitors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig">putScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetExecutionStatus">resetExecutionStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors">resetMetricMonitors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt">resetRandomizationSalt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExecutionStatus` <a name="putExecutionStatus" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putExecutionStatus"></a>

```java
public void putExecutionStatus(EvidentlyLaunchExecutionStatus value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putExecutionStatus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a>

---

##### `putGroups` <a name="putGroups" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putGroups"></a>

```java
public void putGroups(IResolvable|java.util.List<EvidentlyLaunchGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putGroups.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>>

---

##### `putMetricMonitors` <a name="putMetricMonitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors"></a>

```java
public void putMetricMonitors(IResolvable|java.util.List<EvidentlyLaunchMetricMonitors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>>

---

##### `putScheduledSplitsConfig` <a name="putScheduledSplitsConfig" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig"></a>

```java
public void putScheduledSplitsConfig(IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<EvidentlyLaunchTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExecutionStatus` <a name="resetExecutionStatus" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetExecutionStatus"></a>

```java
public void resetExecutionStatus()
```

##### `resetMetricMonitors` <a name="resetMetricMonitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors"></a>

```java
public void resetMetricMonitors()
```

##### `resetRandomizationSalt` <a name="resetRandomizationSalt" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt"></a>

```java
public void resetRandomizationSalt()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EvidentlyLaunch resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isConstruct"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunch;

EvidentlyLaunch.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunch;

EvidentlyLaunch.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunch;

EvidentlyLaunch.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunch;

EvidentlyLaunch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EvidentlyLaunch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EvidentlyLaunch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EvidentlyLaunch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EvidentlyLaunch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EvidentlyLaunch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.executionStatus">executionStatus</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference">EvidentlyLaunchExecutionStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.groups">groups</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors">metricMonitors</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig">scheduledSplitsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList">EvidentlyLaunchScheduledSplitsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList">EvidentlyLaunchTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.executionStatusInput">executionStatusInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.groupsInput">groupsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput">metricMonitorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput">randomizationSaltInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput">scheduledSplitsConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt">randomizationSalt</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `executionStatus`<sup>Required</sup> <a name="executionStatus" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.executionStatus"></a>

```java
public EvidentlyLaunchExecutionStatusOutputReference getExecutionStatus();
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference">EvidentlyLaunchExecutionStatusOutputReference</a>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.groups"></a>

```java
public EvidentlyLaunchGroupsList getGroups();
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricMonitors`<sup>Required</sup> <a name="metricMonitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors"></a>

```java
public EvidentlyLaunchMetricMonitorsList getMetricMonitors();
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a>

---

##### `scheduledSplitsConfig`<sup>Required</sup> <a name="scheduledSplitsConfig" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig"></a>

```java
public EvidentlyLaunchScheduledSplitsConfigList getScheduledSplitsConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList">EvidentlyLaunchScheduledSplitsConfigList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tags"></a>

```java
public EvidentlyLaunchTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList">EvidentlyLaunchTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `executionStatusInput`<sup>Optional</sup> <a name="executionStatusInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.executionStatusInput"></a>

```java
public IResolvable|EvidentlyLaunchExecutionStatus getExecutionStatusInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a>

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.groupsInput"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchGroups> getGroupsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>>

---

##### `metricMonitorsInput`<sup>Optional</sup> <a name="metricMonitorsInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchMetricMonitors> getMetricMonitorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `randomizationSaltInput`<sup>Optional</sup> <a name="randomizationSaltInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput"></a>

```java
public java.lang.String getRandomizationSaltInput();
```

- *Type:* java.lang.String

---

##### `scheduledSplitsConfigInput`<sup>Optional</sup> <a name="scheduledSplitsConfigInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfig> getScheduledSplitsConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tagsInput"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `randomizationSalt`<sup>Required</sup> <a name="randomizationSalt" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt"></a>

```java
public java.lang.String getRandomizationSalt();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyLaunchConfig <a name="EvidentlyLaunchConfig" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchConfig;

EvidentlyLaunchConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .groups(IResolvable|java.util.List<EvidentlyLaunchGroups>)
    .name(java.lang.String)
    .project(java.lang.String)
    .scheduledSplitsConfig(IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfig>)
//  .description(java.lang.String)
//  .executionStatus(EvidentlyLaunchExecutionStatus)
//  .metricMonitors(IResolvable|java.util.List<EvidentlyLaunchMetricMonitors>)
//  .randomizationSalt(java.lang.String)
//  .tags(IResolvable|java.util.List<EvidentlyLaunchTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.groups">groups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#groups EvidentlyLaunch#groups}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#project EvidentlyLaunch#project}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig">scheduledSplitsConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.executionStatus">executionStatus</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a></code> | Start or Stop Launch Launch. Default is not started. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors">metricMonitors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt">randomizationSalt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.groups"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchGroups> getGroups();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#groups EvidentlyLaunch#groups}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#name EvidentlyLaunch#name}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#project EvidentlyLaunch#project}.

---

##### `scheduledSplitsConfig`<sup>Required</sup> <a name="scheduledSplitsConfig" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfig> getScheduledSplitsConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}.

---

##### `executionStatus`<sup>Optional</sup> <a name="executionStatus" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.executionStatus"></a>

```java
public EvidentlyLaunchExecutionStatus getExecutionStatus();
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a>

Start or Stop Launch Launch. Default is not started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#execution_status EvidentlyLaunch#execution_status}

---

##### `metricMonitors`<sup>Optional</sup> <a name="metricMonitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchMetricMonitors> getMetricMonitors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}.

---

##### `randomizationSalt`<sup>Optional</sup> <a name="randomizationSalt" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt"></a>

```java
public java.lang.String getRandomizationSalt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.tags"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#tags EvidentlyLaunch#tags}

---

### EvidentlyLaunchExecutionStatus <a name="EvidentlyLaunchExecutionStatus" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchExecutionStatus;

EvidentlyLaunchExecutionStatus.builder()
//  .desiredState(java.lang.String)
//  .reason(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Provide CANCELLED or COMPLETED as the launch desired state. Defaults to Completed if not provided. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.reason">reason</a></code> | <code>java.lang.String</code> | Provide a reason for stopping the launch. Defaults to empty if not provided. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.status">status</a></code> | <code>java.lang.String</code> | Provide START or STOP action to apply on a launch. |

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

Provide CANCELLED or COMPLETED as the launch desired state. Defaults to Completed if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#desired_state EvidentlyLaunch#desired_state}

---

##### `reason`<sup>Optional</sup> <a name="reason" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

Provide a reason for stopping the launch. Defaults to empty if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#reason EvidentlyLaunch#reason}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Provide START or STOP action to apply on a launch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#status EvidentlyLaunch#status}

---

### EvidentlyLaunchGroups <a name="EvidentlyLaunchGroups" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchGroups;

EvidentlyLaunchGroups.builder()
    .feature(java.lang.String)
    .groupName(java.lang.String)
    .variation(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.feature">feature</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#feature EvidentlyLaunch#feature}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.groupName">groupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.variation">variation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#variation EvidentlyLaunch#variation}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.feature"></a>

```java
public java.lang.String getFeature();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#feature EvidentlyLaunch#feature}.

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}.

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.variation"></a>

```java
public java.lang.String getVariation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#variation EvidentlyLaunch#variation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}.

---

### EvidentlyLaunchMetricMonitors <a name="EvidentlyLaunchMetricMonitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchMetricMonitors;

EvidentlyLaunchMetricMonitors.builder()
//  .entityIdKey(java.lang.String)
//  .eventPattern(java.lang.String)
//  .metricName(java.lang.String)
//  .unitLabel(java.lang.String)
//  .valueKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.entityIdKey">entityIdKey</a></code> | <code>java.lang.String</code> | The JSON path to reference the entity id in the event. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.eventPattern">eventPattern</a></code> | <code>java.lang.String</code> | Event patterns have the same structure as the events they match. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#metric_name EvidentlyLaunch#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.unitLabel">unitLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#unit_label EvidentlyLaunch#unit_label}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.valueKey">valueKey</a></code> | <code>java.lang.String</code> | The JSON path to reference the numerical metric value in the event. |

---

##### `entityIdKey`<sup>Optional</sup> <a name="entityIdKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.entityIdKey"></a>

```java
public java.lang.String getEntityIdKey();
```

- *Type:* java.lang.String

The JSON path to reference the entity id in the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.eventPattern"></a>

```java
public java.lang.String getEventPattern();
```

- *Type:* java.lang.String

Event patterns have the same structure as the events they match.

Rules use event patterns to select events. An event pattern either matches an event or it doesn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#metric_name EvidentlyLaunch#metric_name}.

---

##### `unitLabel`<sup>Optional</sup> <a name="unitLabel" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.unitLabel"></a>

```java
public java.lang.String getUnitLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#unit_label EvidentlyLaunch#unit_label}.

---

##### `valueKey`<sup>Optional</sup> <a name="valueKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.valueKey"></a>

```java
public java.lang.String getValueKey();
```

- *Type:* java.lang.String

The JSON path to reference the numerical metric value in the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#value_key EvidentlyLaunch#value_key}

---

### EvidentlyLaunchScheduledSplitsConfig <a name="EvidentlyLaunchScheduledSplitsConfig" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchScheduledSplitsConfig;

EvidentlyLaunchScheduledSplitsConfig.builder()
    .groupWeights(IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigGroupWeights>)
    .startTime(java.lang.String)
//  .segmentOverrides(IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigSegmentOverrides>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.groupWeights">groupWeights</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_weights EvidentlyLaunch#group_weights}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#start_time EvidentlyLaunch#start_time}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.segmentOverrides">segmentOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#segment_overrides EvidentlyLaunch#segment_overrides}. |

---

##### `groupWeights`<sup>Required</sup> <a name="groupWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.groupWeights"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigGroupWeights> getGroupWeights();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_weights EvidentlyLaunch#group_weights}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#start_time EvidentlyLaunch#start_time}.

---

##### `segmentOverrides`<sup>Optional</sup> <a name="segmentOverrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.segmentOverrides"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigSegmentOverrides> getSegmentOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#segment_overrides EvidentlyLaunch#segment_overrides}.

---

### EvidentlyLaunchScheduledSplitsConfigGroupWeights <a name="EvidentlyLaunchScheduledSplitsConfigGroupWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchScheduledSplitsConfigGroupWeights;

EvidentlyLaunchScheduledSplitsConfigGroupWeights.builder()
    .groupName(java.lang.String)
    .splitWeight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.property.groupName">groupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.property.splitWeight">splitWeight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#split_weight EvidentlyLaunch#split_weight}. |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}.

---

##### `splitWeight`<sup>Required</sup> <a name="splitWeight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.property.splitWeight"></a>

```java
public java.lang.Number getSplitWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#split_weight EvidentlyLaunch#split_weight}.

---

### EvidentlyLaunchScheduledSplitsConfigSegmentOverrides <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides;

EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.builder()
//  .evaluationOrder(java.lang.Number)
//  .segment(java.lang.String)
//  .weights(IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.evaluationOrder">evaluationOrder</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.segment">segment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#segment EvidentlyLaunch#segment}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.weights">weights</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#weights EvidentlyLaunch#weights}. |

---

##### `evaluationOrder`<sup>Optional</sup> <a name="evaluationOrder" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.evaluationOrder"></a>

```java
public java.lang.Number getEvaluationOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}.

---

##### `segment`<sup>Optional</sup> <a name="segment" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.segment"></a>

```java
public java.lang.String getSegment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#segment EvidentlyLaunch#segment}.

---

##### `weights`<sup>Optional</sup> <a name="weights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.weights"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights> getWeights();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#weights EvidentlyLaunch#weights}.

---

### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights;

EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.builder()
//  .groupName(java.lang.String)
//  .splitWeight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.property.groupName">groupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.property.splitWeight">splitWeight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#split_weight EvidentlyLaunch#split_weight}. |

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}.

---

##### `splitWeight`<sup>Optional</sup> <a name="splitWeight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.property.splitWeight"></a>

```java
public java.lang.Number getSplitWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#split_weight EvidentlyLaunch#split_weight}.

---

### EvidentlyLaunchTags <a name="EvidentlyLaunchTags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchTags;

EvidentlyLaunchTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#key EvidentlyLaunch#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#value EvidentlyLaunch#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyLaunchExecutionStatusOutputReference <a name="EvidentlyLaunchExecutionStatusOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchExecutionStatusOutputReference;

new EvidentlyLaunchExecutionStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetReason">resetReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetDesiredState"></a>

```java
public void resetDesiredState()
```

##### `resetReason` <a name="resetReason" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetReason"></a>

```java
public void resetReason()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.desiredStateInput">desiredStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.reasonInput">reasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.desiredStateInput"></a>

```java
public java.lang.String getDesiredStateInput();
```

- *Type:* java.lang.String

---

##### `reasonInput`<sup>Optional</sup> <a name="reasonInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.reasonInput"></a>

```java
public java.lang.String getReasonInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.internalValue"></a>

```java
public IResolvable|EvidentlyLaunchExecutionStatus getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a>

---


### EvidentlyLaunchGroupsList <a name="EvidentlyLaunchGroupsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchGroupsList;

new EvidentlyLaunchGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.get"></a>

```java
public EvidentlyLaunchGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchGroups> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>>

---


### EvidentlyLaunchGroupsOutputReference <a name="EvidentlyLaunchGroupsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchGroupsOutputReference;

new EvidentlyLaunchGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput">featureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput">variationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature">feature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation">variation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `featureInput`<sup>Optional</sup> <a name="featureInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput"></a>

```java
public java.lang.String getFeatureInput();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput"></a>

```java
public java.lang.String getVariationInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature"></a>

```java
public java.lang.String getFeature();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation"></a>

```java
public java.lang.String getVariation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue"></a>

```java
public IResolvable|EvidentlyLaunchGroups getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>

---


### EvidentlyLaunchMetricMonitorsList <a name="EvidentlyLaunchMetricMonitorsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchMetricMonitorsList;

new EvidentlyLaunchMetricMonitorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get"></a>

```java
public EvidentlyLaunchMetricMonitorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchMetricMonitors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>>

---


### EvidentlyLaunchMetricMonitorsOutputReference <a name="EvidentlyLaunchMetricMonitorsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchMetricMonitorsOutputReference;

new EvidentlyLaunchMetricMonitorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetEntityIdKey">resetEntityIdKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetEventPattern">resetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetUnitLabel">resetUnitLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetValueKey">resetValueKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntityIdKey` <a name="resetEntityIdKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetEntityIdKey"></a>

```java
public void resetEntityIdKey()
```

##### `resetEventPattern` <a name="resetEventPattern" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetEventPattern"></a>

```java
public void resetEventPattern()
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetMetricName"></a>

```java
public void resetMetricName()
```

##### `resetUnitLabel` <a name="resetUnitLabel" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetUnitLabel"></a>

```java
public void resetUnitLabel()
```

##### `resetValueKey` <a name="resetValueKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetValueKey"></a>

```java
public void resetValueKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKeyInput">entityIdKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.eventPatternInput">eventPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.unitLabelInput">unitLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.valueKeyInput">valueKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKey">entityIdKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.eventPattern">eventPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.unitLabel">unitLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.valueKey">valueKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityIdKeyInput`<sup>Optional</sup> <a name="entityIdKeyInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKeyInput"></a>

```java
public java.lang.String getEntityIdKeyInput();
```

- *Type:* java.lang.String

---

##### `eventPatternInput`<sup>Optional</sup> <a name="eventPatternInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.eventPatternInput"></a>

```java
public java.lang.String getEventPatternInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `unitLabelInput`<sup>Optional</sup> <a name="unitLabelInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.unitLabelInput"></a>

```java
public java.lang.String getUnitLabelInput();
```

- *Type:* java.lang.String

---

##### `valueKeyInput`<sup>Optional</sup> <a name="valueKeyInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.valueKeyInput"></a>

```java
public java.lang.String getValueKeyInput();
```

- *Type:* java.lang.String

---

##### `entityIdKey`<sup>Required</sup> <a name="entityIdKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKey"></a>

```java
public java.lang.String getEntityIdKey();
```

- *Type:* java.lang.String

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.eventPattern"></a>

```java
public java.lang.String getEventPattern();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `unitLabel`<sup>Required</sup> <a name="unitLabel" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.unitLabel"></a>

```java
public java.lang.String getUnitLabel();
```

- *Type:* java.lang.String

---

##### `valueKey`<sup>Required</sup> <a name="valueKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.valueKey"></a>

```java
public java.lang.String getValueKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue"></a>

```java
public IResolvable|EvidentlyLaunchMetricMonitors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>

---


### EvidentlyLaunchScheduledSplitsConfigGroupWeightsList <a name="EvidentlyLaunchScheduledSplitsConfigGroupWeightsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList;

new EvidentlyLaunchScheduledSplitsConfigGroupWeightsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get"></a>

```java
public EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigGroupWeights> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>>

---


### EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference;

new EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeightInput">splitWeightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeight">splitWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `splitWeightInput`<sup>Optional</sup> <a name="splitWeightInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeightInput"></a>

```java
public java.lang.Number getSplitWeightInput();
```

- *Type:* java.lang.Number

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `splitWeight`<sup>Required</sup> <a name="splitWeight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeight"></a>

```java
public java.lang.Number getSplitWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.internalValue"></a>

```java
public IResolvable|EvidentlyLaunchScheduledSplitsConfigGroupWeights getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>

---


### EvidentlyLaunchScheduledSplitsConfigList <a name="EvidentlyLaunchScheduledSplitsConfigList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchScheduledSplitsConfigList;

new EvidentlyLaunchScheduledSplitsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.get"></a>

```java
public EvidentlyLaunchScheduledSplitsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>>

---


### EvidentlyLaunchScheduledSplitsConfigOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchScheduledSplitsConfigOutputReference;

new EvidentlyLaunchScheduledSplitsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putGroupWeights">putGroupWeights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSegmentOverrides">putSegmentOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resetSegmentOverrides">resetSegmentOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroupWeights` <a name="putGroupWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putGroupWeights"></a>

```java
public void putGroupWeights(IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigGroupWeights> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putGroupWeights.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>>

---

##### `putSegmentOverrides` <a name="putSegmentOverrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSegmentOverrides"></a>

```java
public void putSegmentOverrides(IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigSegmentOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSegmentOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>>

---

##### `resetSegmentOverrides` <a name="resetSegmentOverrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resetSegmentOverrides"></a>

```java
public void resetSegmentOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeights">groupWeights</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList">EvidentlyLaunchScheduledSplitsConfigGroupWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverrides">segmentOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeightsInput">groupWeightsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverridesInput">segmentOverridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupWeights`<sup>Required</sup> <a name="groupWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeights"></a>

```java
public EvidentlyLaunchScheduledSplitsConfigGroupWeightsList getGroupWeights();
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList">EvidentlyLaunchScheduledSplitsConfigGroupWeightsList</a>

---

##### `segmentOverrides`<sup>Required</sup> <a name="segmentOverrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverrides"></a>

```java
public EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList getSegmentOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList</a>

---

##### `groupWeightsInput`<sup>Optional</sup> <a name="groupWeightsInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeightsInput"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigGroupWeights> getGroupWeightsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>>

---

##### `segmentOverridesInput`<sup>Optional</sup> <a name="segmentOverridesInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverridesInput"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigSegmentOverrides> getSegmentOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EvidentlyLaunchScheduledSplitsConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---


### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList;

new EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get"></a>

```java
public EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigSegmentOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>>

---


### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference;

new EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.putWeights">putWeights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetEvaluationOrder">resetEvaluationOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetSegment">resetSegment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetWeights">resetWeights</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeights` <a name="putWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.putWeights"></a>

```java
public void putWeights(IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.putWeights.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>>

---

##### `resetEvaluationOrder` <a name="resetEvaluationOrder" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetEvaluationOrder"></a>

```java
public void resetEvaluationOrder()
```

##### `resetSegment` <a name="resetSegment" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetSegment"></a>

```java
public void resetSegment()
```

##### `resetWeights` <a name="resetWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetWeights"></a>

```java
public void resetWeights()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weights">weights</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrderInput">evaluationOrderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segmentInput">segmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weightsInput">weightsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrder">evaluationOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segment">segment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `weights`<sup>Required</sup> <a name="weights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weights"></a>

```java
public EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList getWeights();
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList</a>

---

##### `evaluationOrderInput`<sup>Optional</sup> <a name="evaluationOrderInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrderInput"></a>

```java
public java.lang.Number getEvaluationOrderInput();
```

- *Type:* java.lang.Number

---

##### `segmentInput`<sup>Optional</sup> <a name="segmentInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segmentInput"></a>

```java
public java.lang.String getSegmentInput();
```

- *Type:* java.lang.String

---

##### `weightsInput`<sup>Optional</sup> <a name="weightsInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weightsInput"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights> getWeightsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>>

---

##### `evaluationOrder`<sup>Required</sup> <a name="evaluationOrder" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrder"></a>

```java
public java.lang.Number getEvaluationOrder();
```

- *Type:* java.lang.Number

---

##### `segment`<sup>Required</sup> <a name="segment" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segment"></a>

```java
public java.lang.String getSegment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|EvidentlyLaunchScheduledSplitsConfigSegmentOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>

---


### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList;

new EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get"></a>

```java
public EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>>

---


### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference;

new EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resetSplitWeight">resetSplitWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupName` <a name="resetGroupName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resetGroupName"></a>

```java
public void resetGroupName()
```

##### `resetSplitWeight` <a name="resetSplitWeight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resetSplitWeight"></a>

```java
public void resetSplitWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeightInput">splitWeightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeight">splitWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `splitWeightInput`<sup>Optional</sup> <a name="splitWeightInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeightInput"></a>

```java
public java.lang.Number getSplitWeightInput();
```

- *Type:* java.lang.Number

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `splitWeight`<sup>Required</sup> <a name="splitWeight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeight"></a>

```java
public java.lang.Number getSplitWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.internalValue"></a>

```java
public IResolvable|EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>

---


### EvidentlyLaunchTagsList <a name="EvidentlyLaunchTagsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchTagsList;

new EvidentlyLaunchTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.get"></a>

```java
public EvidentlyLaunchTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EvidentlyLaunchTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>>

---


### EvidentlyLaunchTagsOutputReference <a name="EvidentlyLaunchTagsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evidently_launch.EvidentlyLaunchTagsOutputReference;

new EvidentlyLaunchTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|EvidentlyLaunchTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>

---



